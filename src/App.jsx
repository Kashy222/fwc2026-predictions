import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RotateCcw, Share2, Copy, X, Menu, ChevronDown, ChevronUp } from 'lucide-react';
import './App.css';
import CircularBracket, { getTeamName } from './components/CircularBracket';
import QRCode from 'react-qr-code';

const isMobile = /iPhone|Android|Mobile/i.test(navigator.userAgent);
const isSmallScreen = window.innerWidth < 1024;
const showFullBracket = !isMobile && !isSmallScreen;
const hasShareParam = new URLSearchParams(window.location.search).has('share');

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


function MobileVisitorScreen() {
    const [copied, setCopied] = useState(false);
    const url = "https://fwc2026-predictions.vercel.app";
    const mailto = `mailto:?subject=FWC 2026 Predictions Bracket&body=Open this on your desktop or tablet: ${url}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#121316', minHeight: '100vh', padding: '32px 16px', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '360px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <img src="/og-image.png" alt="Bracket Preview" style={{ width: '280px', borderRadius: '12px', objectFit: 'cover' }} />
                <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'white', margin: 0, textAlign: 'center' }}>Best experienced on a bigger screen</h1>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', margin: 0, maxWidth: '300px', textAlign: 'center', lineHeight: '1.5' }}>
                    The full interactive bracket needs space to shine. Scan the code or send the link to your laptop or tablet.
                </p>
                <div style={{ width: '165px', background: 'white', borderRadius: '16px', padding: '16px', boxSizing: 'border-box' }}>
                    <QRCode value={url} size={133} style={{ width: '100%', height: 'auto' }} />
                </div>
                <button 
                    onClick={handleCopy}
                    style={{ width: '100%', maxWidth: '280px', height: '44px', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '10px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {copied ? 'Copied!' : 'Copy Link'}
                </button>
                <a href={mailto} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                    or email it to yourself →
                </a>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
                    Your email ID is never stored or shared — this opens your own mail app directly.
                </p>
            </div>
        </div>
    );
}

function MobileSharedScreen() {
    const [copied, setCopied] = useState(false);
    const url = window.location.href;
    const isComplete = initialSharedWinners && initialSharedWinners.length === 31 && initialSharedWinners[30];
    const winnerCode = isComplete ? initialSharedWinners[30] : null;
    const winnerTeamName = winnerCode ? getTeamName(winnerCode) : null;
    const username = initialSharedUsername || "A Fan";
    const mailto = `mailto:?subject=${username}'s WC 2026 Bracket&body=See ${username}'s World Cup 2026 predictions — open on desktop or tablet: ${url}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleMakeOwnPrediction = () => {
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.reload();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#121316', minHeight: '100vh', padding: '32px 16px', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '360px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                {winnerCode ? (
                    <img 
                       src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/flags/1x1/${winnerCode}.svg`} 
                       alt="Winner Flag" 
                       style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} 
                    />
                ) : (
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
                        🏆
                    </div>
                )}
                
                {winnerTeamName ? (
                    <p style={{ fontSize: '15px', color: '#F5A623', margin: 0, textAlign: 'center' }}>
                        Predicts {winnerTeamName} to win Football WC 2026
                    </p>
                ) : (
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', margin: 0, textAlign: 'center' }}>
                        Bracket in progress...
                    </p>
                )}

                <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'white', margin: 0, textAlign: 'center' }}>
                    {username}'s Prediction
                </h1>

                <button 
                    onClick={handleMakeOwnPrediction}
                    style={{ width: '100%', maxWidth: '280px', height: '48px', background: 'white', color: '#0a0a0c', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
                >
                    Make Your Own Prediction
                </button>

                <hr style={{ width: '100%', maxWidth: '280px', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: 0 }} />
                
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0, textAlign: 'center' }}>
                    See the full bracket on desktop or tablet
                </p>

                <div style={{ width: '165px', background: 'white', borderRadius: '16px', padding: '16px', boxSizing: 'border-box' }}>
                    <QRCode value={url} size={133} style={{ width: '100%', height: 'auto' }} />
                </div>

                <button 
                    onClick={handleCopy}
                    style={{ width: '100%', maxWidth: '280px', height: '44px', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '10px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {copied ? 'Copied!' : 'Copy Link'}
                </button>

                <a href={mailto} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                    or email it to yourself →
                </a>
                
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
                    Your email ID is never stored or shared — this opens your own mail app directly.
                </p>
            </div>
        </div>
    );
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
  const [isAutoPredictOpen, setIsAutoPredictOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      await bracketRef.current.autoPredict(predictMode || 'Mid');
      generateShareLink();
  };

  const isExperimentalMobile = !showFullBracket;

  if (!showFullBracket && !isExperimentalMobile) {
      if (hasShareParam) {
          return <MobileSharedScreen />;
      }
      return <MobileVisitorScreen />;
  }

  return (
    <>
      <div className="app-container">
      <div className="header-info" style={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', 
          position: isExperimentalMobile ? 'fixed' : 'absolute', 
          zIndex: isExperimentalMobile ? 50 : 10,
          background: isExperimentalMobile ? 'rgba(18, 19, 22, 0.15)' : 'transparent',
          backdropFilter: isExperimentalMobile ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isExperimentalMobile ? 'blur(8px)' : 'none',
          padding: isExperimentalMobile ? '12px' : '0',
          borderRadius: isExperimentalMobile ? '12px' : '0',
          top: isExperimentalMobile ? '12px' : '24px',
          left: isExperimentalMobile ? '12px' : '24px',
          border: isExperimentalMobile ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}>
        <a href="https://fwc2026-predictions.vercel.app/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/trophy-header.png" alt="FIFA World Cup Trophy" style={{ height: isExperimentalMobile ? '60px' : '140px', width: 'auto', objectFit: 'contain', marginBottom: isExperimentalMobile ? '6px' : '12px' }} />
          <h1 style={{ fontSize: isExperimentalMobile ? '16px' : '22px', fontWeight: 700, margin: 0, marginBottom: isExperimentalMobile ? '10px' : '20px', lineHeight: 1.2 }}>Predictions<br/>Bracket</h1>
        </a>
        
        {!isSharedView && (
          <hr style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: 0, marginBottom: isExperimentalMobile ? '12px' : '24px' }} />
        )}

        {!isSharedView && (
            <div className="predict-controls-wrapper" style={{ width: '100%' }}>
              <div style={{ fontSize: isExperimentalMobile ? '12px' : '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0px', lineHeight: 1.3 }}>
                Pick winners yourself,
              </div>
              <div style={{ fontSize: isExperimentalMobile ? '12px' : '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0px', lineHeight: 1.3 }}>
                OR
              </div>
              <div 
                  className="predict-header" 
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', marginTop: '2px', cursor: isExperimentalMobile ? 'pointer' : 'default' }}
                  onClick={() => isExperimentalMobile && setIsAutoPredictOpen(!isAutoPredictOpen)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="predict-title" style={{ fontSize: isExperimentalMobile ? '12px' : '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)' }}>
                      ✨ Auto-Predict
                    </span>
                    {isExperimentalMobile && (
                        isAutoPredictOpen ? <ChevronUp size={14} color="rgba(255,255,255,0.8)" /> : <ChevronDown size={14} color="rgba(255,255,255,0.8)" />
                    )}
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleReset(); }} className="reset-btn" aria-label="Reset Bracket" style={{ padding: isExperimentalMobile ? '6px' : '4px' }}>
                  <RotateCcw size={isExperimentalMobile ? 12 : 14} />
                </button>
              </div>

              {(!isExperimentalMobile || isAutoPredictOpen) && (
                  <div className="predict-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: isExperimentalMobile ? '4px' : '20px' }}>
                      {['Safe', 'Mid', 'Wild'].map((mode) => (
                          <button 
                              key={mode} 
                              className={`mode-btn mode-btn--${mode.toLowerCase()} ${predictMode === mode ? 'active' : ''}`}
                              onClick={() => handlePredict(mode)}
                              style={{ padding: isExperimentalMobile ? '4px 8px' : '', fontSize: isExperimentalMobile ? '12px' : '' }}
                          >
                              {mode}
                          </button>
                      ))}
                  </div>
              )}
            </div>
        )}
      </div>

      <div className="share-controls-wrapper" style={{ 
          position: isExperimentalMobile ? 'fixed' : 'absolute', 
          top: isExperimentalMobile ? '12px' : '24px', 
          right: isExperimentalMobile ? '12px' : '24px', 
          zIndex: isExperimentalMobile ? 50 : 10, 
          display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' 
      }}>
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
              isExperimentalMobile ? (
                  <div style={{ position: 'relative' }}>
                      <button 
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                          style={{ background: 'rgba(18, 19, 22, 0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000, position: 'relative' }}
                      >
                          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                      </button>
                      
                      {isMobileMenuOpen && (
                          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100dvh', zIndex: 9999 }}>
                              {/* Backdrop */}
                              <div 
                                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                                  onClick={() => setIsMobileMenuOpen(false)}
                              />
                              
                              {/* Top Sheet Modal */}
                              <div style={{ 
                                  position: 'absolute', top: 0, left: 0, width: '100%', 
                                  background: 'var(--bg)', borderBottom: '1px solid rgba(255,255,255,0.1)', 
                                  padding: '80px 24px 24px 24px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', 
                                  display: 'flex', flexDirection: 'column', gap: '20px', 
                                  boxSizing: 'border-box', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' 
                              }}>
                                  
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', height: '34px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '6px', padding: '8px 12px', boxSizing: 'border-box' }}>
                                          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', whiteSpace: 'nowrap' }}>Name</span>
                                          <input 
                                              className="username-input"
                                              type="text" 
                                              value={username}
                                              maxLength={20}
                                              onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))}
                                              style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '13px', textAlign: 'right', outline: 'none', flex: 1, minWidth: 0, fontWeight: '500' }}
                                          />
                                      </div>
                                      
                                      <button 
                                          onClick={() => { setIsMobileMenuOpen(false); handleShareClick(); }} 
                                          style={{ width: '100%', height: '34px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.15)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', cursor: 'pointer', transition: 'background 150ms', fontWeight: '500' }}
                                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'} 
                                          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
                                      >
                                          <Share2 size={14} /> Share
                                      </button>
                                  </div>
                                  
                                  <hr style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '4px 0' }} />
                                  
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.4', textAlign: 'center' }}>
                                      <span>Based on design by <a href="https://x.com/EmilioSansolini" target="_blank" rel="noreferrer" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'underline'}}>Emilio Sansolini</a></span>
                                      <span>Made by <a href="https://x.com/dondon0don" target="_blank" rel="noreferrer" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'underline'}}>Kaustubh</a></span>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
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
              )
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
        isMobilePanzoomActive={isExperimentalMobile}
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

      {!isExperimentalMobile && (
          <div className="footer-info" style={{ position: 'absolute', zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <p>Based on design by <a href="https://x.com/EmilioSansolini" target="_blank" rel="noreferrer">Emilio Sansolini</a></p>
              <p>Made by <a href="https://x.com/dondon0don" target="_blank" rel="noreferrer">Kaustubh</a></p>
            </div>
          </div>
      )}
    </div>
    </>
  );
}

export default App;
