import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RotateCcw, Share2, Copy, X } from 'lucide-react';
import './App.css';
import CircularBracket from './components/CircularBracket';
import QRCode from 'react-qr-code';

let initialSharedUsername = '';
let initialSharedWinners = null;
let initialIsSharedView = false;
try {
  const queryParams = new URLSearchParams(window.location.search);
  const shareParam = queryParams.get('share');
  if (shareParam) {
      const decoded = atob(shareParam);
      const [u, wStr] = decoded.split(':');
      initialSharedUsername = u;
      initialSharedWinners = wStr.split(',').map(s => s === '' ? null : s);
      if (initialSharedWinners.length === 31) {
          initialIsSharedView = true;
      }
  }
} catch (e) {
  console.error("Invalid share link");
}

const ADJECTIVES = ["Swift", "Golden", "Bold", "Lucky", "Mighty", "Brave", "Super", "Cosmic", "Epic", "Magic"];
const NOUNS = ["Falcon", "Striker", "Eagle", "Lion", "Comet", "Tiger", "Panther", "Ninja", "Wizard", "Champion"];
const generateUsername = () => {
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const num = Math.floor(Math.random() * 90 + 10);
    return `${adj}${noun}${num}`;
};

function App() {
  const [resetKey, setResetKey] = useState(0);
  const [predictMode, setPredictMode] = useState(null);
  const [autoStartMode, setAutoStartMode] = useState(null);
  const [lastUpdatedMatch, setLastUpdatedMatch] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const bracketRef = useRef(null);

  const [isSharedView, setIsSharedView] = useState(initialIsSharedView);
  const [sharedUsername, setSharedUsername] = useState(initialSharedUsername);
  const [sharedWinners, setSharedWinners] = useState(initialSharedWinners);

  const [username, setUsername] = useState(() => localStorage.getItem('username') || generateUsername());
  const [modalState, setModalState] = useState({ type: null }); // 'incomplete', 'loading', 'share_url'
  const [showCredits, setShowCredits] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
      localStorage.setItem('username', username);
  }, [username]);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
    setPredictMode(null);
    setAutoStartMode(null);
  };

  const handlePredict = (mode) => {
    setPredictMode(mode);
    setAutoStartMode(mode);
    setResetKey(prev => prev + 1);
  };

  const handleShareClick = () => {
      const matchesList = bracketRef.current.getMatchesList();
      const isComplete = matchesList.every(m => m.winner);
      if (!isComplete) {
          setModalState({ type: 'incomplete' });
      } else {
          generateShareLink();
      }
  };

  const generateShareLink = () => {
      const matchesList = bracketRef.current.getMatchesList();
      const winnersStr = matchesList.map(m => m.winner || "").join(",");
      const payload = btoa(`${username}:${winnersStr}`);
      const url = `${window.location.origin}${window.location.pathname}?share=${payload}`;
      setModalState({ type: 'share_url', url });
  };

  const handleCompleteAndShare = async () => {
      setModalState({ type: 'loading' });
      await bracketRef.current.autoPredict(predictMode || 'Average');
      generateShareLink();
  };

  return (
    <>
      <div className="mobile-warning">
        <h2>Desktop & Tablet Only</h2>
        <p>Please open this link on a larger screen to explore the interactive bracket.</p>
        <div style={{ marginTop: '32px', background: 'white', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <QRCode value="https://fwc2026-predictions.vercel.app/" size={160} />
        </div>
        <p style={{ marginTop: '16px', fontWeight: '600', fontSize: '18px', textAlign: 'center' }}>Scan this to open on tablet or desktop</p>
      </div>
      <div className="app-container">
      <div className="header-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <img src="/trophy-header.png" alt="FIFA World Cup Trophy" style={{ height: '180px', marginBottom: '16px' }} />
        <h1>Predictions<br/>Bracket</h1>
        
        {!isSharedView && (
            <div className="last-updated-row" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Last Updated:
                    {isFetching && <span className="fetching-dot"></span>}
                </div>
                {lastUpdatedMatch && (
                    <div>
                        {lastUpdatedMatch.teamA} vs {lastUpdatedMatch.teamB} ({lastUpdatedMatch.date})
                    </div>
                )}
            </div>
        )}

        {!isSharedView && (
            <div className="predict-controls-wrapper">
              <div className="predict-header">
                <span className="predict-title">
                  ✨ Auto-Predict
                </span>
                <button onClick={handleReset} className="reset-btn" aria-label="Reset Bracket">
                  <RotateCcw size={14} />
                </button>
              </div>

              <div className="predict-buttons">
                  {['Safe', 'Average', 'Differential'].map((mode, idx) => (
                      <button 
                          key={mode} 
                          className={`mode-btn mode-btn--${mode.toLowerCase()} ${predictMode === mode ? 'active' : ''}`}
                          onClick={() => handlePredict(mode)}
                      >
                          <span className="mode-dots">
                              {Array.from({ length: idx + 1 }).map((_, i) => (
                                  <span key={i} className="dot"></span>
                              ))}
                          </span>
                          <span className="mode-text">{mode}</span>
                      </button>
                  ))}
              </div>
            </div>
        )}
      </div>

      <div className="share-controls-wrapper" style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
          {isSharedView ? (
              <>
                  <div className="shared-name-label" style={{ color: 'white', fontWeight: 600, fontSize: '15px', padding: '6px 0', width: '200px', textAlign: 'center' }}>
                      {sharedUsername}'s Bracket
                  </div>
                  <button 
                      style={{ padding: '8px 12px', width: '200px', height: '34px', background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', cursor: 'pointer', transition: 'background 150ms', fontWeight: '500' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                      onClick={() => {
                          window.history.replaceState({}, document.title, window.location.pathname);
                          setIsSharedView(false);
                          setSharedWinners(null);
                          setResetKey(k => k + 1);
                      }}
                  >
                      Make Your Own Prediction
                  </button>
              </>
          ) : (
              <>
                  <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      width: '200px',
                      transition: 'border-color 150ms ease-out',
                      boxSizing: 'border-box'
                  }}
                  onFocusCapture={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                  onBlurCapture={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', whiteSpace: 'nowrap' }}>Your Name</span>
                      <input 
                          className="username-input"
                          value={username}
                          maxLength={20}
                          onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))}
                          style={{
                              flex: 1,
                              background: 'transparent',
                              border: 'none',
                              color: 'white',
                              fontSize: '13px',
                              textAlign: 'right',
                              outline: 'none',
                              fontFamily: 'inherit',
                              minWidth: 0
                          }}
                      />
                  </div>
                  <button style={{ width: '200px', height: '34px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', cursor: 'pointer', transition: 'background 150ms', fontWeight: '500' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'} onClick={handleShareClick}>
                      <Share2 size={14} />
                      Share
                  </button>
              </>
          )}
      </div>

      <CircularBracket 
        key={resetKey} 
        ref={bracketRef} 
        initialAutoPredict={autoStartMode}
        onLastUpdated={setLastUpdatedMatch}
        onFetchStateChange={setIsFetching}
        readOnly={isSharedView}
        sharedWinners={sharedWinners}
      />
      
      {modalState.type && (
        <div className="modal-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100, animation: 'tooltipFadeIn 150ms ease-out' }}>
          <div className="modal-content" style={{ position: 'relative', background: '#1a1a1a', padding: '24px', borderRadius: '12px', width: '400px', maxWidth: '90%', border: '1px solid rgba(255,255,255,0.1)', color: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <button style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 150ms, color 150ms' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = 'white'; }} onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.5)'; }} onClick={() => setModalState({ type: null })}>
              <X size={18} style={{ pointerEvents: 'none' }} />
            </button>
            {modalState.type === 'incomplete' && (
              <>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Incomplete Bracket</h3>
                <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>Your bracket isn't complete yet. You can finish it automatically or share it as-is.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: 'background 150ms' }} onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.15)'} onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'} onClick={generateShareLink}>Proceed Anyway</button>
                  <button style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: 'background 150ms' }} onMouseEnter={e => e.target.style.background = '#2563eb'} onMouseLeave={e => e.target.style.background = '#3b82f6'} onClick={handleCompleteAndShare}>Auto-Predict</button>
                </div>
              </>
            )}
            {modalState.type === 'loading' && (
              <div style={{ textAlign: 'center', padding: '32px 20px' }}>
                  <span className="fetching-dot" style={{ display: 'inline-block' }}></span>
                  <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: '16px 0 0 0' }}>Predicting remaining matches...</p>
              </div>
            )}
            {modalState.type === 'share_url' && (
              <>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Share your predictions</h3>
                <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>Copy the link below to share your predictions</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                   <input readOnly value={modalState.url} style={{ flex: 1, padding: '8px 12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '6px', fontSize: '13px', outline: 'none' }} onClick={e => e.target.select()} />
                   <button style={{ padding: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 150ms' }} onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'} onClick={() => {
                       navigator.clipboard.writeText(modalState.url);
                       setShowToast(true);
                       setTimeout(() => setShowToast(false), 2000);
                   }}>
                       <Copy size={16} />
                   </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {showToast && (
        <div style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '24px', fontSize: '14px', fontWeight: '500', zIndex: 200, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', animation: 'tooltipFadeIn 150ms ease-out' }}>
          Link copied to clipboard!
        </div>
      )}

      <div className="footer-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
            onClick={() => setShowCredits(!showCredits)}
            style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                color: 'rgba(255,255,255,0.7)', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                cursor: 'pointer',
                transition: 'background 150ms',
                flexShrink: 0
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
            {showCredits ? <X size={18} /> : <span style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontStyle: 'italic', fontWeight: '500' }}>i</span>}
        </button>
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2px',
            overflow: 'hidden',
            maxWidth: showCredits ? '400px' : '0px',
            opacity: showCredits ? 1 : 0,
            transition: 'max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out',
            whiteSpace: 'nowrap'
        }}>
          <p>Based on design shared by <a href="https://x.com/mkobach/status/2071353471295430705" target="_blank" rel="noreferrer">Matthew Kobach</a></p>
          <p>Made by <a href="https://x.com/dondon0don" target="_blank" rel="noreferrer">Kaustubh</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
