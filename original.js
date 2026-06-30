var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return e && (t = e((e = 0))), t;
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
  ),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return n || t(r, Symbol.toStringTag, { value: `Module` }), r;
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var d = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function te(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return te(e.type, t, e.props);
    }
    function T(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function re(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ie = /\/+/g;
    function ae(e, t) {
      return typeof e == `object` && e && e.key != null
        ? re(`` + e.key)
        : t.toString(36);
    }
    function oe(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function se(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), se(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ae(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ie, `$&/`) + `/`),
              se(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (T(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ie, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          (a = e[u]), (s = l + ae(a, u)), (c += se(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + ae(a, u++)), (c += se(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return se(oe(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          ))
        );
      }
      return c;
    }
    function ce(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        se(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function le(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var E =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      D = {
        map: ce,
        forEach: function (e, t, n) {
          ce(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ce(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ce(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = D),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return te(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return te(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = T),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: le,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, E);
        } catch (e) {
          E(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.7`);
  }),
  f = s((e, t) => {
    t.exports = d();
  }),
  p = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) (e[r] = u), (e[l] = n), (r = l);
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          r(l), (i.sortIndex = i.expirationTime), t(c, i);
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) (m = !0), S || ((S = !0), T());
        else {
          var t = n(l);
          t !== null && ae(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function ne() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());

                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    (d.callback = null), (f = d.priorityLevel);
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      (d.callback = s), b(t), (i = !0);
                      break b;
                    }
                    d === n(c) && r(c), b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  u !== null && ae(x, u.startTime - t), (i = !1);
                }
              }
              break a;
            } finally {
              (d = null), (f = a), (p = !1);
            }
            i = void 0;
          }
        } finally {
          i ? T() : (S = !1);
        }
      }
    }
    var T;
    if (typeof y == `function`)
      T = function () {
        y(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var re = new MessageChannel(),
        ie = re.port2;
      (re.port1.onmessage = ne),
        (T = function () {
          ie.postMessage(null);
        });
    } else
      T = function () {
        _(ne, 0);
      };
    function ae(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ae(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), T()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  }),
  m = s((e, t) => {
    t.exports = p();
  }),
  h = s((e) => {
    var t = f();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          (s.T = t), (i.p = n), i.d.f();
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.7`);
  }),
  g = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = h());
  }),
  _ = s((e) => {
    var t = m(),
      n = f(),
      r = g();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return l(a), e;
            if (s === r) return l(a), t;
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) (n = a), (r = s);
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              (c = !0), (n = a), (r = s);
              break;
            }
            if (u === r) {
              (c = !0), (r = a), (n = s);
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                (c = !0), (n = s), (r = a);
                break;
              }
              if (u === r) {
                (c = !0), (r = s), (n = a);
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = d(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var p = Object.assign,
      h = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      ne = Symbol.for(`react.memo`),
      T = Symbol.for(`react.lazy`),
      re = Symbol.for(`react.activity`),
      ie = Symbol.for(`react.memo_cache_sentinel`),
      ae = Symbol.iterator;
    function oe(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ae && e[ae]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var se = Symbol.for(`react.client.reference`);
    function ce(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case re:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ne:
            return (
              (t = e.displayName || null), t === null ? ce(e.type) || `Memo` : t
            );
          case T:
            (t = e._payload), (e = e._init);
            try {
              return ce(e(t));
            } catch {}
        }
      return null;
    }
    var le = Array.isArray,
      E = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ue = { pending: !1, data: null, method: null, action: null },
      de = [],
      fe = -1;
    function pe(e) {
      return { current: e };
    }
    function me(e) {
      0 > fe || ((e.current = de[fe]), (de[fe] = null), fe--);
    }
    function O(e, t) {
      fe++, (de[fe] = e.current), (e.current = t);
    }
    var he = pe(null),
      k = pe(null),
      ge = pe(null),
      _e = pe(null);
    function ve(e, t) {
      switch ((O(ge, t), O(k, e), O(he, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = Vd(t)), (e = Hd(t, e));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      me(he), O(he, e);
    }
    function ye() {
      me(he), me(k), me(ge);
    }
    function be(e) {
      e.memoizedState !== null && O(_e, e);
      var t = he.current,
        n = Hd(t, e.type);
      t !== n && (O(k, e), O(he, n));
    }
    function xe(e) {
      k.current === e && (me(he), me(k)),
        _e.current === e && (me(_e), (Qf._currentValue = ue));
    }
    var Se, Ce;
    function we(e) {
      if (Se === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (Se = (t && t[1]) || ``),
            (Ce =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``);
        }
      return (
        `
` +
        Se +
        e +
        Ce
      );
    }
    var Te = !1;
    function Ee(e, t) {
      if (!e || Te) return ``;
      Te = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);

          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);

          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];

            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (Te = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : ``) ? we(n) : ``;
    }
    function De(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return we(e.type);
        case 16:
          return we(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? we(`Suspense Fallback`)
            : we(`Suspense`);
        case 19:
          return we(`SuspenseList`);
        case 0:
        case 15:
          return Ee(e.type, !1);
        case 11:
          return Ee(e.type.render, !1);
        case 1:
          return Ee(e.type, !0);
        case 31:
          return we(`Activity`);
        default:
          return ``;
      }
    }
    function Oe(e) {
      try {
        var t = ``,
          n = null;
        do (t += De(e, n)), (n = e), (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ke = Object.prototype.hasOwnProperty,
      Ae = t.unstable_scheduleCallback,
      je = t.unstable_cancelCallback,
      Me = t.unstable_shouldYield,
      Ne = t.unstable_requestPaint,
      Pe = t.unstable_now,
      Fe = t.unstable_getCurrentPriorityLevel,
      Ie = t.unstable_ImmediatePriority,
      Le = t.unstable_UserBlockingPriority,
      Re = t.unstable_NormalPriority,
      ze = t.unstable_LowPriority,
      A = t.unstable_IdlePriority,
      Be = t.log,
      Ve = t.unstable_setDisableYieldValue,
      He = null,
      Ue = null;
    function We(e) {
      if (
        (typeof Be == `function` && Ve(e),
        Ue && typeof Ue.setStrictMode == `function`)
      )
        try {
          Ue.setStrictMode(He, e);
        } catch {}
    }
    var Ge = Math.clz32 ? Math.clz32 : Je,
      Ke = Math.log,
      qe = Math.LN2;
    function Je(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((Ke(e) / qe) | 0)) | 0;
    }
    var Ye = 256,
      Xe = 262144,
      j = 4194304;
    function Ze(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Qe(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ze(n)))
                : (i = Ze(o))
              : (i = Ze(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ze(n)))
                  : (i = Ze(o)))
              : (i = Ze(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function $e(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function et(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function tt() {
      var e = j;
      return (j <<= 1), !(j & 62914560) && (j = 4194304), e;
    }
    function nt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function M(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function rt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ge(n),
          d = 1 << u;
        (s[u] = 0), (c[u] = -1);
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      r !== 0 && it(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t));
    }
    function it(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Ge(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930));
    }
    function at(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }
    function ot(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : st(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function st(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ct(e) {
      return (
        (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function N() {
      var e = D.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function lt(e, t) {
      var n = D.p;
      try {
        return (D.p = e), t();
      } finally {
        D.p = n;
      }
    }
    var P = Math.random().toString(36).slice(2),
      F = `__reactFiber$` + P,
      I = `__reactProps$` + P,
      ut = `__reactContainer$` + P,
      dt = `__reactEvents$` + P,
      ft = `__reactListeners$` + P,
      pt = `__reactHandles$` + P,
      mt = `__reactResources$` + P,
      ht = `__reactMarker$` + P;
    function L(e) {
      delete e[F], delete e[I], delete e[dt], delete e[ft], delete e[pt];
    }
    function gt(e) {
      var t = e[F];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[ut] || n[F])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[F])) return n;
              e = df(e);
            }
          return t;
        }
        (e = n), (n = e.parentNode);
      }
      return null;
    }
    function _t(e) {
      if ((e = e[F] || e[ut])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function vt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function yt(e) {
      var t = e[mt];
      return (
        (t ||= e[mt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function bt(e) {
      e[ht] = !0;
    }
    var xt = new Set(),
      St = {};
    function Ct(e, t) {
      wt(e, t), wt(e + `Capture`, t);
    }
    function wt(e, t) {
      for (St[e] = t, e = 0; e < t.length; e++) xt.add(t[e]);
    }
    var Tt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Et = {},
      Dt = {};
    function Ot(e) {
      return ke.call(Dt, e)
        ? !0
        : ke.call(Et, e)
          ? !1
          : Tt.test(e)
            ? (Dt[e] = !0)
            : ((Et[e] = !0), !1);
    }
    function kt(e, t, n) {
      if (Ot(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function At(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function jt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Mt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Nt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Pt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              (n = `` + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Ft(e) {
      if (!e._valueTracker) {
        var t = Nt(e) ? `checked` : `value`;
        e._valueTracker = Pt(e, t, `` + e[t]);
      }
    }
    function It(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Nt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Lt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Rt = /[\n"\\]/g;
    function zt(e) {
      return e.replace(Rt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Bt(e, t, n, r, i, a, o, s) {
      (e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + Mt(t))
            : e.value !== `` + Mt(t) && (e.value = `` + Mt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Ht(e, o, Mt(n))
          : Ht(e, o, Mt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Mt(s))
          : e.removeAttribute(`name`);
    }
    function Vt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ft(e);
          return;
        }
        (n = n == null ? `` : `` + Mt(n)),
          (t = t == null ? n : `` + Mt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ft(e);
    }
    function Ht(e, t, n) {
      (t === `number` && Lt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Ut(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `` + Mt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Wt(e, t, n) {
      if (
        t != null &&
        ((t = `` + Mt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Mt(n);
    }
    function Gt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (le(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        (n ??= ``), (t = n);
      }
      (n = Mt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ft(e);
    }
    function Kt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var qt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Jt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || qt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Yt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Jt(e, a, r);
      } else for (var o in t) t.hasOwnProperty(o) && Jt(e, o, t[o]);
    }
    function Xt(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Zt = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Qt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function $t(e) {
      return Qt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function en() {}
    var tn = null;
    function nn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var rn = null,
      an = null;
    function on(e) {
      var t = _t(e);
      if (t && (e = t.stateNode)) {
        var n = e[I] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Bt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + zt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[I] || null;
                  if (!a) throw Error(i(90));
                  Bt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (r = n[t]), r.form === e.form && It(r);
            }
            break a;
          case `textarea`:
            Wt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            (t = n.value), t != null && Ut(e, !!n.multiple, t, !1);
        }
      }
    }
    var sn = !1;
    function cn(e, t, n) {
      if (sn) return e(t, n);
      sn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((sn = !1),
          (rn !== null || an !== null) &&
            (bu(), rn && ((t = rn), (e = an), (an = rn = null), on(t), e)))
        )
          for (t = 0; t < e.length; t++) on(e[t]);
      }
    }
    function ln(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[I] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r);
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var un = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      dn = !1;
    if (un)
      try {
        var fn = {};
        Object.defineProperty(fn, "passive", {
          get: function () {
            dn = !0;
          },
        }),
          window.addEventListener(`test`, fn, fn),
          window.removeEventListener(`test`, fn, fn);
      } catch {
        dn = !1;
      }
    var pn = null,
      mn = null,
      hn = null;
    function gn() {
      if (hn) return hn;
      var e,
        t = mn,
        n = t.length,
        r,
        i = `value` in pn ? pn.value : pn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (hn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function _n(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function vn() {
      return !0;
    }
    function yn() {
      return !1;
    }
    function bn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? vn
            : yn),
          (this.isPropagationStopped = yn),
          this
        );
      }
      return (
        p(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = vn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = vn));
          },
          persist: function () {},
          isPersistent: vn,
        }),
        t
      );
    }
    var xn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Sn = bn(xn),
      Cn = p({}, xn, { view: 0, detail: 0 }),
      wn = bn(Cn),
      Tn,
      En,
      Dn,
      On = p({}, Cn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: zn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Dn &&
                (Dn && e.type === `mousemove`
                  ? ((Tn = e.screenX - Dn.screenX),
                    (En = e.screenY - Dn.screenY))
                  : (En = Tn = 0),
                (Dn = e)),
              Tn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : En;
        },
      }),
      kn = bn(On),
      An = bn(p({}, On, { dataTransfer: 0 })),
      jn = bn(p({}, Cn, { relatedTarget: 0 })),
      Mn = bn(
        p({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Nn = bn(
        p({}, xn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Pn = bn(p({}, xn, { data: 0 })),
      Fn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      In = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Ln = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Rn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ln[e])
          ? !!t[e]
          : !1;
    }
    function zn() {
      return Rn;
    }
    var Bn = bn(
        p({}, Cn, {
          key: function (e) {
            if (e.key) {
              var t = Fn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = _n(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? In[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: zn,
          charCode: function (e) {
            return e.type === `keypress` ? _n(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? _n(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Vn = bn(
        p({}, On, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Hn = bn(
        p({}, Cn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: zn,
        }),
      ),
      Un = bn(p({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Wn = bn(
        p({}, On, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Gn = bn(p({}, xn, { newState: 0, oldState: 0 })),
      Kn = [9, 13, 27, 32],
      qn = un && `CompositionEvent` in window,
      Jn = null;
    un && `documentMode` in document && (Jn = document.documentMode);
    var Yn = un && `TextEvent` in window && !Jn,
      Xn = un && (!qn || (Jn && 8 < Jn && 11 >= Jn)),
      Zn = ` `,
      Qn = !1;
    function $n(e, t) {
      switch (e) {
        case `keyup`:
          return Kn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function er(e) {
      return (
        (e = e.detail), typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var tr = !1;
    function nr(e, t) {
      switch (e) {
        case `compositionend`:
          return er(t);
        case `keypress`:
          return t.which === 32 ? ((Qn = !0), Zn) : null;
        case `textInput`:
          return (e = t.data), e === Zn && Qn ? null : e;
        default:
          return null;
      }
    }
    function rr(e, t) {
      if (tr)
        return e === `compositionend` || (!qn && $n(e, t))
          ? ((e = gn()), (hn = mn = pn = null), (tr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Xn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var ir = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function ar(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!ir[e.type] : t === `textarea`;
    }
    function or(e, t, n, r) {
      rn ? (an ? an.push(r) : (an = [r])) : (rn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new Sn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var sr = null,
      cr = null;
    function lr(e) {
      yd(e, 0);
    }
    function ur(e) {
      if (It(vt(e))) return e;
    }
    function dr(e, t) {
      if (e === `change`) return t;
    }
    var fr = !1;
    if (un) {
      var pr;
      if (un) {
        var mr = `oninput` in document;
        if (!mr) {
          var hr = document.createElement(`div`);
          hr.setAttribute(`oninput`, `return;`),
            (mr = typeof hr.oninput == `function`);
        }
        pr = mr;
      } else pr = !1;
      fr = pr && (!document.documentMode || 9 < document.documentMode);
    }
    function gr() {
      sr && (sr.detachEvent(`onpropertychange`, _r), (cr = sr = null));
    }
    function _r(e) {
      if (e.propertyName === `value` && ur(cr)) {
        var t = [];
        or(t, cr, e, nn(e)), cn(lr, t);
      }
    }
    function vr(e, t, n) {
      e === `focusin`
        ? (gr(), (sr = t), (cr = n), sr.attachEvent(`onpropertychange`, _r))
        : e === `focusout` && gr();
    }
    function yr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return ur(cr);
    }
    function br(e, t) {
      if (e === `click`) return ur(t);
    }
    function xr(e, t) {
      if (e === `input` || e === `change`) return ur(t);
    }
    function Sr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Cr = typeof Object.is == `function` ? Object.is : Sr;
    function wr(e, t) {
      if (Cr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ke.call(t, i) || !Cr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Tr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Er(e, t) {
      var n = Tr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Tr(n);
      }
    }
    function Dr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Dr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Or(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Lt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Lt(e.document);
      }
      return t;
    }
    function kr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Ar = un && `documentMode` in document && 11 >= document.documentMode,
      jr = null,
      Mr = null,
      Nr = null,
      Pr = !1;
    function Fr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Pr ||
        jr == null ||
        jr !== Lt(r) ||
        ((r = jr),
        `selectionStart` in r && kr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Nr && wr(Nr, r)) ||
          ((Nr = r),
          (r = Ed(Mr, `onSelect`)),
          0 < r.length &&
            ((t = new Sn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = jr))));
    }
    function Ir(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Lr = {
        animationend: Ir(`Animation`, `AnimationEnd`),
        animationiteration: Ir(`Animation`, `AnimationIteration`),
        animationstart: Ir(`Animation`, `AnimationStart`),
        transitionrun: Ir(`Transition`, `TransitionRun`),
        transitionstart: Ir(`Transition`, `TransitionStart`),
        transitioncancel: Ir(`Transition`, `TransitionCancel`),
        transitionend: Ir(`Transition`, `TransitionEnd`),
      },
      Rr = {},
      zr = {};
    un &&
      ((zr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Lr.animationend.animation,
        delete Lr.animationiteration.animation,
        delete Lr.animationstart.animation),
      `TransitionEvent` in window || delete Lr.transitionend.transition);
    function Br(e) {
      if (Rr[e]) return Rr[e];
      if (!Lr[e]) return e;
      var t = Lr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in zr) return (Rr[e] = t[n]);
      return e;
    }
    var Vr = Br(`animationend`),
      Hr = Br(`animationiteration`),
      Ur = Br(`animationstart`),
      Wr = Br(`transitionrun`),
      Gr = Br(`transitionstart`),
      Kr = Br(`transitioncancel`),
      qr = Br(`transitionend`),
      Jr = new Map(),
      Yr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Yr.push(`scrollEnd`);
    function Xr(e, t) {
      Jr.set(e, t), Ct(t, [e]);
    }
    var Zr =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Qr = [],
      $r = 0,
      ei = 0;
    function ti() {
      for (var e = $r, t = (ei = $r = 0); t < e; ) {
        var n = Qr[t];
        Qr[t++] = null;
        var r = Qr[t];
        Qr[t++] = null;
        var i = Qr[t];
        Qr[t++] = null;
        var a = Qr[t];
        if (((Qr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i);
        }
        a !== 0 && ai(n, i, a);
      }
    }
    function ni(e, t, n, r) {
      (Qr[$r++] = e),
        (Qr[$r++] = t),
        (Qr[$r++] = n),
        (Qr[$r++] = r),
        (ei |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }
    function ri(e, t, n, r) {
      return ni(e, t, n, r), oi(e);
    }
    function ii(e, t) {
      return ni(e, null, null, t), oi(e);
    }
    function ai(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        (a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return);
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ge(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function oi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var si = {};
    function ci(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function li(e, t, n, r) {
      return new ci(e, t, n, r);
    }
    function ui(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function di(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = li(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function fi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function pi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) ui(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, he.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case re:
            return (
              (e = li(31, n, t, a)), (e.elementType = re), (e.lanes = o), e
            );
          case y:
            return mi(n.children, a, o, t);
          case b:
            (s = 8), (a |= 24);
            break;
          case x:
            return (
              (e = li(12, n, t, a | 2)), (e.elementType = x), (e.lanes = o), e
            );
          case ee:
            return (
              (e = li(13, n, t, a)), (e.elementType = ee), (e.lanes = o), e
            );
          case te:
            return (
              (e = li(19, n, t, a)), (e.elementType = te), (e.lanes = o), e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case ne:
                  s = 14;
                  break a;
                case T:
                  (s = 16), (r = null);
                  break a;
              }
            (s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null);
        }
      return (
        (t = li(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function mi(e, t, n, r) {
      return (e = li(7, e, r, t)), (e.lanes = n), e;
    }
    function hi(e, t, n) {
      return (e = li(6, e, null, t)), (e.lanes = n), e;
    }
    function gi(e) {
      var t = li(18, null, null, 0);
      return (t.stateNode = e), t;
    }
    function _i(e, t, n) {
      return (
        (t = li(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var vi = new WeakMap();
    function yi(e, t) {
      if (typeof e == `object` && e) {
        var n = vi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Oe(t) }), vi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Oe(t) };
    }
    var bi = [],
      xi = 0,
      Si = null,
      Ci = 0,
      wi = [],
      Ti = 0,
      Ei = null,
      Di = 1,
      Oi = ``;
    function ki(e, t) {
      (bi[xi++] = Ci), (bi[xi++] = Si), (Si = e), (Ci = t);
    }
    function Ai(e, t, n) {
      (wi[Ti++] = Di), (wi[Ti++] = Oi), (wi[Ti++] = Ei), (Ei = e);
      var r = Di;
      e = Oi;
      var i = 32 - Ge(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - Ge(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Di = (1 << (32 - Ge(t) + i)) | (n << i) | r),
          (Oi = a + e);
      } else (Di = (1 << a) | (n << i) | r), (Oi = e);
    }
    function ji(e) {
      e.return !== null && (ki(e, 1), Ai(e, 1, 0));
    }
    function Mi(e) {
      for (; e === Si; )
        (Si = bi[--xi]), (bi[xi] = null), (Ci = bi[--xi]), (bi[xi] = null);
      for (; e === Ei; )
        (Ei = wi[--Ti]),
          (wi[Ti] = null),
          (Oi = wi[--Ti]),
          (wi[Ti] = null),
          (Di = wi[--Ti]),
          (wi[Ti] = null);
    }
    function Ni(e, t) {
      (wi[Ti++] = Di),
        (wi[Ti++] = Oi),
        (wi[Ti++] = Ei),
        (Di = t.id),
        (Oi = t.overflow),
        (Ei = e);
    }
    var Pi = null,
      R = null,
      z = !1,
      Fi = null,
      Ii = !1,
      Li = Error(i(519));
    function Ri(e) {
      throw (
        (Wi(
          yi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Li)
      );
    }
    function zi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[F] = e), (t[I] = r), n)) {
        case `dialog`:
          Q(`cancel`, t), Q(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          Q(`error`, t), Q(`load`, t);
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          Q(`invalid`, t),
            Vt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            );
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          Q(`invalid`, t), Gt(t, r.value, r.defaultValue, r.children);
      }
      (n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = en),
            (t = !0))
          : (t = !1),
        t || Ri(e, !0);
    }
    function Bi(e) {
      for (Pi = e.return; Pi; )
        switch (Pi.tag) {
          case 5:
          case 31:
          case 13:
            Ii = !1;
            return;
          case 27:
          case 3:
            Ii = !0;
            return;
          default:
            Pi = Pi.return;
        }
    }
    function Vi(e) {
      if (e !== Pi) return !1;
      if (!z) return Bi(e), (z = !0), !1;
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && R && Ri(e),
        Bi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        R = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        R = uf(e);
      } else
        t === 27
          ? ((t = R), Zd(e.type) ? ((e = lf), (lf = null), (R = e)) : (R = t))
          : (R = Pi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Hi() {
      (R = Pi = null), (z = !1);
    }
    function Ui() {
      var e = Fi;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Fi = null)),
        e
      );
    }
    function Wi(e) {
      Fi === null ? (Fi = [e]) : Fi.push(e);
    }
    var Gi = pe(null),
      Ki = null,
      qi = null;
    function Ji(e, t, n) {
      O(Gi, t._currentValue), (t._currentValue = n);
    }
    function Yi(e) {
      (e._currentValue = Gi.current), me(Gi);
    }
    function Xi(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Zi(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Xi(o.return, n, e),
                  r || (s = null);
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          (s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Xi(s, n, e),
            (s = null);
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              (a.return = s.return), (s = a);
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function Qi(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Cr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === _e.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      e !== null && Zi(t, e, n, r), (t.flags |= 262144);
    }
    function $i(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Cr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ea(e) {
      (Ki = e),
        (qi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }
    function ta(e) {
      return ra(Ki, e);
    }
    function na(e, t) {
      return Ki === null && ea(e), ra(e, t);
    }
    function ra(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), qi === null)) {
        if (e === null) throw Error(i(308));
        (qi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else qi = qi.next = t;
      return n;
    }
    var ia =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      aa = t.unstable_scheduleCallback,
      oa = t.unstable_NormalPriority,
      sa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ca() {
      return { controller: new ia(), data: new Map(), refCount: 0 };
    }
    function la(e) {
      e.refCount--,
        e.refCount === 0 &&
          aa(oa, function () {
            e.controller.abort();
          });
    }
    var ua = null,
      da = 0,
      fa = 0,
      pa = null;
    function ma(e, t) {
      if (ua === null) {
        var n = (ua = []);
        (da = 0),
          (fa = dd()),
          (pa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          });
      }
      return da++, t.then(ha, ha), t;
    }
    function ha() {
      if (--da === 0 && ua !== null) {
        pa !== null && (pa.status = `fulfilled`);
        var e = ua;
        (ua = null), (fa = 0), (pa = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ga(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            (r.status = `fulfilled`), (r.value = t);
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var _a = E.S;
    E.S = function (e, t) {
      (eu = Pe()),
        typeof t == `object` && t && typeof t.then == `function` && ma(e, t),
        _a !== null && _a(e, t);
    };
    var va = pe(null);
    function ya() {
      var e = va.current;
      return e === null ? q.pooledCache : e;
    }
    function ba(e, t) {
      t === null ? O(va, va.current) : O(va, t.pool);
    }
    function xa() {
      var e = ya();
      return e === null ? null : { parent: sa._currentValue, pool: e };
    }
    var Sa = Error(i(460)),
      Ca = Error(i(474)),
      wa = Error(i(542)),
      Ta = { then: function () {} };
    function Ea(e) {
      return (e = e.status), e === `fulfilled` || e === `rejected`;
    }
    function Da(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(en, en), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), ja(e), e);
        default:
          if (typeof t.status == `string`) t.then(en, en);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            (e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `fulfilled`), (n.value = e);
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `rejected`), (n.reason = e);
                  }
                },
              );
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), ja(e), e);
          }
          throw ((ka = t), Sa);
      }
    }
    function Oa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((ka = e), Sa)
          : e;
      }
    }
    var ka = null;
    function Aa() {
      if (ka === null) throw Error(i(459));
      var e = ka;
      return (ka = null), e;
    }
    function ja(e) {
      if (e === Sa || e === wa) throw Error(i(483));
    }
    var Ma = null,
      Na = 0;
    function Pa(e) {
      var t = Na;
      return (Na += 1), Ma === null && (Ma = []), Da(Ma, e, t);
    }
    function Fa(e, t) {
      (t = t.props.ref), (e.ref = t === void 0 ? null : t);
    }
    function Ia(e, t) {
      throw t.$$typeof === h
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function La(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling);
        return t;
      }
      function a(e, t) {
        return (e = di(e, t)), (e.index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return e && t.alternate === null && (t.flags |= 67108866), t;
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = hi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === T &&
                  Oa(i) === t.type))
            ? ((t = a(t, n.props)), Fa(t, n), (t.return = e), t)
            : ((t = pi(n.type, n.key, n.props, null, e.mode, r)),
              Fa(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = _i(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = mi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return (t = hi(`` + t, e.mode, n)), (t.return = e), t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = pi(t.type, t.key, t.props, null, e.mode, n)),
                Fa(n, t),
                (n.return = e),
                n
              );
            case v:
              return (t = _i(t, e.mode, n)), (t.return = e), t;
            case T:
              return (t = Oa(t)), f(e, t, n);
          }
          if (le(t) || oe(t))
            return (t = mi(t, e.mode, n, null)), (t.return = e), t;
          if (typeof t.then == `function`) return f(e, Pa(t), n);
          if (t.$$typeof === C) return f(e, na(e, t), n);
          Ia(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case T:
              return (n = Oa(n)), p(e, t, n, r);
          }
          if (le(n) || oe(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Pa(n), r);
          if (n.$$typeof === C) return p(e, t, na(e, n), r);
          Ia(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return (e = e.get(n) || null), c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i)
              );
            case T:
              return (r = Oa(r)), m(e, t, n, r, i);
          }
          if (le(r) || oe(r))
            return (e = e.get(n) || null), d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, Pa(r), i);
          if (r.$$typeof === C) return m(e, t, n, na(t, r), i);
          Ia(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g);
        }
        if (h === s.length) return n(i, d), z && ki(i, h), l;
        if (d === null) {
          for (; h < s.length; h++)
            (d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d));
          return z && ki(i, h), l;
        }
        for (d = r(d); h < s.length; h++)
          (g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          z && ki(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _);
        }
        if (v.done) return n(a, h), z && ki(a, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            (v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v));
          return z && ki(a, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next())
          (v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          z && ki(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c);
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === T &&
                        Oa(l) === r.type)
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.props)),
                        Fa(c, o),
                        (c.return = e),
                        (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = mi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = pi(o.type, o.key, o.props, null, e.mode, c)),
                    Fa(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c);
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                (c = _i(o, e.mode, c)), (c.return = e), (e = c);
              }
              return s(e);
            case T:
              return (o = Oa(o)), b(e, r, o, c);
          }
          if (le(o)) return h(e, r, o, c);
          if (oe(o)) {
            if (((l = oe(o)), typeof l != `function`)) throw Error(i(150));
            return (o = l.call(o)), g(e, r, o, c);
          }
          if (typeof o.then == `function`) return b(e, r, Pa(o), c);
          if (o.$$typeof === C) return b(e, r, na(e, o), c);
          Ia(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = hi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Na = 0;
          var i = b(e, t, n, r);
          return (Ma = null), i;
        } catch (t) {
          if (t === Sa || t === wa) throw t;
          var a = li(29, t, null, e.mode);
          return (a.lanes = r), (a.return = e), a;
        }
      };
    }
    var Ra = La(!0),
      za = La(!1),
      Ba = !1;
    function Va(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ha(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function Ua(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Wa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = oi(e)),
          ai(e, null, n),
          t
        );
      }
      return ni(e, r, t, n), oi(e);
    }
    function Ga(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n);
      }
    }
    function Ka(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var qa = !1;
    function Ja() {
      if (qa) {
        var e = pa;
        if (e !== null) throw e;
      }
    }
    function Ya(e, t, n, r) {
      qa = !1;
      var i = e.updateQueue;
      Ba = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        (c.next = null), o === null ? (a = l) : (o.next = l), (o = c);
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        (o = 0), (u = l = c = null), (s = a);
        do {
          var f = s.lane & -536870913,
            m = f !== s.lane;
          if (m ? (Y & f) === f : (r & f) === f) {
            f !== 0 && f === fa && (qa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  });
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a;
                  d = p({}, d, f);
                  break a;
                case 2:
                  Ba = !0;
              }
            }
            (f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [f]) : m.push(f));
          } else
            (m = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= f);
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            (m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null);
          }
        } while (1);
        u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }
    function Xa(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Za(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Xa(n[e], t);
    }
    var Qa = pe(null),
      $a = pe(0);
    function eo(e, t) {
      (e = Ul), O($a, e), O(Qa, t), (Ul = e | t.baseLanes);
    }
    function to() {
      O($a, Ul), O(Qa, Qa.current);
    }
    function no() {
      (Ul = $a.current), me(Qa), me($a);
    }
    var B = pe(null),
      ro = null;
    function io(e) {
      var t = e.alternate;
      O(lo, lo.current & 1),
        O(B, e),
        ro === null &&
          (t === null || Qa.current !== null || t.memoizedState !== null) &&
          (ro = e);
    }
    function ao(e) {
      O(lo, lo.current), O(B, e), ro === null && (ro = e);
    }
    function oo(e) {
      e.tag === 22
        ? (O(lo, lo.current), O(B, e), ro === null && (ro = e))
        : so(e);
    }
    function so() {
      O(lo, lo.current), O(B, B.current);
    }
    function co(e) {
      me(B), ro === e && (ro = null), me(lo);
    }
    var lo = pe(0);
    function V(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var uo = 0,
      H = null,
      U = null,
      fo = null,
      po = !1,
      mo = !1,
      ho = !1,
      go = 0,
      _o = 0,
      vo = null,
      yo = 0;
    function W() {
      throw Error(i(321));
    }
    function bo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Cr(e[n], t[n])) return !1;
      return !0;
    }
    function xo(e, t, n, r, i, a) {
      return (
        (uo = a),
        (H = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (E.H = e === null || e.memoizedState === null ? Rs : zs),
        (ho = !1),
        (a = n(r, i)),
        (ho = !1),
        mo && (a = Co(t, n, r, i)),
        So(e),
        a
      );
    }
    function So(e) {
      E.H = Ls;
      var t = U !== null && U.next !== null;
      if (((uo = 0), (fo = U = H = null), (po = !1), (_o = 0), (vo = null), t))
        throw Error(i(300));
      e === null ||
        nc ||
        ((e = e.dependencies), e !== null && $i(e) && (nc = !0));
    }
    function Co(e, t, n, r) {
      H = e;
      var a = 0;
      do {
        if ((mo && (vo = null), (_o = 0), (mo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (fo = U = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          (o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0);
        }
        (E.H = Bs), (o = t(n, r));
      } while (mo);
      return o;
    }
    function wo() {
      var e = E.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? jo(t) : t),
        (e = e.useState()[0]),
        (U === null ? null : U.memoizedState) !== e && (H.flags |= 1024),
        t
      );
    }
    function To() {
      var e = go !== 0;
      return (go = 0), e;
    }
    function Eo(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function Do(e) {
      if (po) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        po = !1;
      }
      (uo = 0), (fo = U = H = null), (mo = !1), (_o = go = 0), (vo = null);
    }
    function Oo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return fo === null ? (H.memoizedState = fo = e) : (fo = fo.next = e), fo;
    }
    function ko() {
      if (U === null) {
        var e = H.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = U.next;
      var t = fo === null ? H.memoizedState : fo.next;
      if (t !== null) (fo = t), (U = e);
      else {
        if (e === null)
          throw H.alternate === null ? Error(i(467)) : Error(i(310));
        (U = e),
          (e = {
            memoizedState: U.memoizedState,
            baseState: U.baseState,
            baseQueue: U.baseQueue,
            queue: U.queue,
            next: null,
          }),
          fo === null ? (H.memoizedState = fo = e) : (fo = fo.next = e);
      }
      return fo;
    }
    function Ao() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function jo(e) {
      var t = _o;
      return (
        (_o += 1),
        vo === null && (vo = []),
        (e = Da(vo, e, t)),
        (t = H),
        (fo === null ? t.memoizedState : fo.next) === null &&
          ((t = t.alternate),
          (E.H = t === null || t.memoizedState === null ? Rs : zs)),
        e
      );
    }
    function Mo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return jo(e);
        if (e.$$typeof === C) return ta(e);
      }
      throw Error(i(438, String(e)));
    }
    function No(e) {
      var t = null,
        n = H.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = H.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Ao()), (H.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
      return t.index++, n;
    }
    function Po(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Fo(e) {
      return Io(ko(), U, e);
    }
    function Io(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          (a.next = o.next), (o.next = s);
        }
        (t.baseQueue = a = o), (r.pending = null);
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (uo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === fa && (d = !0);
            else if ((uo & p) === p) {
              (u = u.next), p === fa && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (H.lanes |= p),
                (Gl |= p);
            (f = u.action),
              ho && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f));
          } else
            (p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (H.lanes |= f),
              (Gl |= f);
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Cr(o, e.memoizedState) && ((nc = !0), d && ((n = pa), n !== null)))
        )
          throw n;
        (e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o);
      }
      return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function Lo(e) {
      var t = ko(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== a);
        Cr(o, t.memoizedState) || (nc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function Ro(e, t, n) {
      var r = H,
        a = ko(),
        o = z;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Cr((U || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (nc = !0)),
        (a = a.queue),
        ls(Vo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (fo !== null && fo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          is(9, { destroy: void 0 }, Bo.bind(null, r, a, n, t), null),
          q === null)
        )
          throw Error(i(349));
        o || uo & 127 || zo(r, t, n);
      }
      return n;
    }
    function zo(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = H.updateQueue),
        t === null
          ? ((t = Ao()), (H.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Bo(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Ho(t) && Uo(e);
    }
    function Vo(e, t, n) {
      return n(function () {
        Ho(t) && Uo(e);
      });
    }
    function Ho(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Cr(e, n);
      } catch {
        return !0;
      }
    }
    function Uo(e) {
      var t = ii(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Wo(e) {
      var t = Oo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), ho)) {
          We(!0);
          try {
            n();
          } finally {
            We(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Po,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Go(e, t, n, r) {
      return (e.baseState = n), Io(e, U, typeof r == `function` ? r : Po);
    }
    function Ko(e, t, n, r, a) {
      if (Ps(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        E.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o));
      }
    }
    function qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = E.T,
          o = {};
        E.T = o;
        try {
          var s = n(i, r),
            c = E.S;
          c !== null && c(o, s), Jo(e, t, s);
        } catch (n) {
          Xo(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types), (E.T = a);
        }
      } else
        try {
          (a = n(i, r)), Jo(e, t, a);
        } catch (n) {
          Xo(e, t, n);
        }
    }
    function Jo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Yo(e, t, n);
            },
            function (n) {
              return Xo(e, t, n);
            },
          )
        : Yo(e, t, n);
    }
    function Yo(e, t, n) {
      (t.status = `fulfilled`),
        (t.value = n),
        Zo(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), qo(e, n)));
    }
    function Xo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = `rejected`), (t.reason = n), Zo(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function Zo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Qo(e, t) {
      return t;
    }
    function $o(e, t) {
      if (z) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = H;
            if (z) {
              if (R) {
                b: {
                  for (var i = R, a = Ii; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  (a = i.data), (i = a === `F!` || a === `F` ? i : null);
                }
                if (i) {
                  (R = cf(i.nextSibling)), (r = i.data === `F!`);
                  break a;
                }
              }
              Ri(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Oo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qo,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = js.bind(null, H, r)),
        (r.dispatch = n),
        (r = Wo(!1)),
        (a = Ns.bind(null, H, !1, r.queue)),
        (r = Oo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Ko.bind(null, H, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function es(e) {
      return ts(ko(), U, e);
    }
    function ts(e, t, n) {
      if (
        ((t = Io(e, t, Qo)[0]),
        (e = Fo(Po)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = jo(t);
        } catch (e) {
          throw e === Sa ? wa : e;
        }
      else r = t;
      t = ko();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((H.flags |= 2048),
          is(9, { destroy: void 0 }, ns.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ns(e, t) {
      e.action = t;
    }
    function rs(e) {
      var t = ko(),
        n = U;
      if (n !== null) return ts(t, n, e);
      ko(), (t = t.memoizedState), (n = ko());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function is(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = H.updateQueue),
        t === null && ((t = Ao()), (H.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function as() {
      return ko().memoizedState;
    }
    function os(e, t, n, r) {
      var i = Oo();
      (H.flags |= e),
        (i.memoizedState = is(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        ));
    }
    function ss(e, t, n, r) {
      var i = ko();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      U !== null && r !== null && bo(r, U.memoizedState.deps)
        ? (i.memoizedState = is(t, a, n, r))
        : ((H.flags |= e), (i.memoizedState = is(1 | t, a, n, r)));
    }
    function cs(e, t) {
      os(8390656, 8, e, t);
    }
    function ls(e, t) {
      ss(2048, 8, e, t);
    }
    function us(e) {
      H.flags |= 4;
      var t = H.updateQueue;
      if (t === null) (t = Ao()), (H.updateQueue = t), (t.events = [e]);
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function ds(e) {
      var t = ko().memoizedState;
      return (
        us({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function fs(e, t) {
      return ss(4, 2, e, t);
    }
    function ps(e, t) {
      return ss(4, 4, e, t);
    }
    function ms(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function hs(e, t, n) {
      (n = n == null ? null : n.concat([e])), ss(4, 4, ms.bind(null, t, e), n);
    }
    function gs() {}
    function _s(e, t) {
      var n = ko();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && bo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function vs(e, t) {
      var n = ko();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && bo(t, r[1])) return r[0];
      if (((r = e()), ho)) {
        We(!0);
        try {
          e();
        } finally {
          We(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function ys(e, t, n) {
      return n === void 0 || (uo & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (H.lanes |= e), (Gl |= e), n);
    }
    function bs(e, t, n, r) {
      return Cr(n, t)
        ? n
        : Qa.current === null
          ? !(uo & 42) || (uo & 1073741824 && !(Y & 261930))
            ? ((nc = !0), (e.memoizedState = n))
            : ((e = mu()), (H.lanes |= e), (Gl |= e), t)
          : ((e = ys(e, n, r)), Cr(e, t) || (nc = !0), e);
    }
    function xs(e, t, n, r, i) {
      var a = D.p;
      D.p = a !== 0 && 8 > a ? a : 8;
      var o = E.T,
        s = {};
      (E.T = s), Ns(e, !1, t, n);
      try {
        var c = i(),
          l = E.S;
        l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ms(e, t, ga(c, r), pu(e))
            : Ms(e, t, r, pu(e));
      } catch (n) {
        Ms(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        (D.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (E.T = o);
      }
    }
    function Ss() {}
    function Cs(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ws(e).queue;
      xs(
        e,
        a,
        t,
        ue,
        n === null
          ? Ss
          : function () {
              return Ts(e), n(r);
            },
      );
    }
    function ws(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ue,
        baseState: ue,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Po,
          lastRenderedState: ue,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Po,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ts(e) {
      var t = ws(e);
      t.next === null && (t = e.alternate.memoizedState),
        Ms(e, t.next.queue, {}, pu());
    }
    function Es() {
      return ta(Qf);
    }
    function Ds() {
      return ko().memoizedState;
    }
    function Os() {
      return ko().memoizedState;
    }
    function ks(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Ua(n);
            var r = Wa(t, e, n);
            r !== null && (hu(r, t, n), Ga(r, t, n)),
              (t = { cache: ca() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function As(e, t, n) {
      var r = pu();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ps(e)
          ? Fs(t, n)
          : ((n = ri(e, t, n, r)), n !== null && (hu(n, e, r), Is(n, t, r)));
    }
    function js(e, t, n) {
      Ms(e, t, n, pu());
    }
    function Ms(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Ps(e)) Fs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Cr(s, o)))
              return ni(e, t, i, 0), q === null && ti(), !1;
          } catch {}
        if (((n = ri(e, t, i, r)), n !== null))
          return hu(n, e, r), Is(n, t, r), !0;
      }
      return !1;
    }
    function Ns(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Ps(e))
      ) {
        if (t) throw Error(i(479));
      } else (t = ri(e, n, r, 2)), t !== null && hu(t, e, 2);
    }
    function Ps(e) {
      var t = e.alternate;
      return e === H || (t !== null && t === H);
    }
    function Fs(e, t) {
      mo = po = !0;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function Is(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n);
      }
    }
    var Ls = {
      readContext: ta,
      use: Mo,
      useCallback: W,
      useContext: W,
      useEffect: W,
      useImperativeHandle: W,
      useLayoutEffect: W,
      useInsertionEffect: W,
      useMemo: W,
      useReducer: W,
      useRef: W,
      useState: W,
      useDebugValue: W,
      useDeferredValue: W,
      useTransition: W,
      useSyncExternalStore: W,
      useId: W,
      useHostTransitionStatus: W,
      useFormState: W,
      useActionState: W,
      useOptimistic: W,
      useMemoCache: W,
      useCacheRefresh: W,
    };
    Ls.useEffectEvent = W;
    var Rs = {
        readContext: ta,
        use: Mo,
        useCallback: function (e, t) {
          return (Oo().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: ta,
        useEffect: cs,
        useImperativeHandle: function (e, t, n) {
          (n = n == null ? null : n.concat([e])),
            os(4194308, 4, ms.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return os(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          os(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Oo();
          t = t === void 0 ? null : t;
          var r = e();
          if (ho) {
            We(!0);
            try {
              e();
            } finally {
              We(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = Oo();
          if (n !== void 0) {
            var i = n(t);
            if (ho) {
              We(!0);
              try {
                n(t);
              } finally {
                We(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = As.bind(null, H, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Oo();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: function (e) {
          e = Wo(e);
          var t = e.queue,
            n = js.bind(null, H, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: gs,
        useDeferredValue: function (e, t) {
          return ys(Oo(), e, t);
        },
        useTransition: function () {
          var e = Wo(!1);
          return (
            (e = xs.bind(null, H, e.queue, !0, !1)),
            (Oo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = H,
            a = Oo();
          if (z) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(i(349));
            Y & 127 || zo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            cs(Vo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            is(9, { destroy: void 0 }, Bo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Oo(),
            t = q.identifierPrefix;
          if (z) {
            var n = Oi,
              r = Di;
            (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = go++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`);
          } else (n = yo++), (t = `_` + t + `r_` + n.toString(32) + `_`);
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Es,
        useFormState: $o,
        useActionState: $o,
        useOptimistic: function (e) {
          var t = Oo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ns.bind(null, H, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: No,
        useCacheRefresh: function () {
          return (Oo().memoizedState = ks.bind(null, H));
        },
        useEffectEvent: function (e) {
          var t = Oo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      zs = {
        readContext: ta,
        use: Mo,
        useCallback: _s,
        useContext: ta,
        useEffect: ls,
        useImperativeHandle: hs,
        useInsertionEffect: fs,
        useLayoutEffect: ps,
        useMemo: vs,
        useReducer: Fo,
        useRef: as,
        useState: function () {
          return Fo(Po);
        },
        useDebugValue: gs,
        useDeferredValue: function (e, t) {
          return bs(ko(), U.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Fo(Po)[0],
            t = ko().memoizedState;
          return [typeof e == `boolean` ? e : jo(e), t];
        },
        useSyncExternalStore: Ro,
        useId: Ds,
        useHostTransitionStatus: Es,
        useFormState: es,
        useActionState: es,
        useOptimistic: function (e, t) {
          return Go(ko(), U, e, t);
        },
        useMemoCache: No,
        useCacheRefresh: Os,
      };
    zs.useEffectEvent = ds;
    var Bs = {
      readContext: ta,
      use: Mo,
      useCallback: _s,
      useContext: ta,
      useEffect: ls,
      useImperativeHandle: hs,
      useInsertionEffect: fs,
      useLayoutEffect: ps,
      useMemo: vs,
      useReducer: Lo,
      useRef: as,
      useState: function () {
        return Lo(Po);
      },
      useDebugValue: gs,
      useDeferredValue: function (e, t) {
        var n = ko();
        return U === null ? ys(n, e, t) : bs(n, U.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Lo(Po)[0],
          t = ko().memoizedState;
        return [typeof e == `boolean` ? e : jo(e), t];
      },
      useSyncExternalStore: Ro,
      useId: Ds,
      useHostTransitionStatus: Es,
      useFormState: rs,
      useActionState: rs,
      useOptimistic: function (e, t) {
        var n = ko();
        return U === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Go(n, U, e, t);
      },
      useMemoCache: No,
      useCacheRefresh: Os,
    };
    Bs.useEffectEvent = ds;
    function Vs(e, t, n, r) {
      (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : p({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Hs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ua(r);
        (i.payload = t),
          n != null && (i.callback = n),
          (t = Wa(e, i, r)),
          t !== null && (hu(t, e, r), Ga(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ua(r);
        (i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Wa(e, i, r)),
          t !== null && (hu(t, e, r), Ga(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Ua(n);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Wa(e, r, n)),
          t !== null && (hu(t, e, n), Ga(t, e, n));
      },
    };
    function Us(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !wr(n, r) || !wr(i, a)
            : !0
      );
    }
    function Ws(e, t, n, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
    }
    function Gs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = p({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ks(e) {
      Zr(e);
    }
    function qs(e) {
      console.error(e);
    }
    function Js(e) {
      Zr(e);
    }
    function Ys(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Xs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Zs(e, t, n) {
      return (
        (n = Ua(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Ys(e, t);
        }),
        n
      );
    }
    function Qs(e) {
      return (e = Ua(e)), (e.tag = 3), e;
    }
    function $s(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        (e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Xs(t, n, r);
          });
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          Xs(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ec(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Qi(t, n, a, !0),
          (n = B.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                ro === null
                  ? Du()
                  : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Ta
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ta
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return Gu(e, r, a), Du(), !1;
      }
      if (z)
        return (
          (t = B.current),
          t === null
            ? (r !== Li && ((t = Error(i(423), { cause: r })), Wi(yi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = yi(r, n)),
              (a = Zs(e.stateNode, r, a)),
              Ka(e, a),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Li && ((e = Error(i(422), { cause: r })), Wi(yi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = yi(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
      )
        return !0;
      (r = yi(r, n)), (n = t);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = Zs(n.stateNode, r, e)),
              Ka(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Qs(a)),
                $s(a, e, n, r),
                Ka(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var tc = Error(i(461)),
      nc = !1;
    function rc(e, t, n, r) {
      t.child = e === null ? za(t, null, n, r) : Ra(t, e.child, n, r);
    }
    function ic(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ea(t),
        (r = xo(e, t, n, o, a, i)),
        (s = To()),
        e !== null && !nc
          ? (Eo(e, t, i), Oc(e, t, i))
          : (z && s && ji(t), (t.flags |= 1), rc(e, t, r, i), t.child)
      );
    }
    function ac(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !ui(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), oc(e, t, a, r, i))
          : ((e = pi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !kc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? wr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Oc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = di(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function oc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (wr(a, r) && e.ref === t.ref)
          if (((nc = !1), (t.pendingProps = r = a), kc(e, i)))
            e.flags & 131072 && (nc = !0);
          else return (t.lanes = e.lanes), Oc(e, t, i);
      }
      return mc(e, t, n, r, i);
    }
    function sc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return lc(e, t, a, n, r);
        }
        if (n & 536870912)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ba(t, a === null ? null : a.cachePool),
            a === null ? to() : eo(t, a),
            oo(t);
        else
          return (
            (r = t.lanes = 536870912),
            lc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && ba(t, null), to(), so(t))
          : (ba(t, a.cachePool), eo(t, a), so(t), (t.memoizedState = null));
      return rc(e, t, i, n), t.child;
    }
    function cc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function lc(e, t, n, r, i) {
      var a = ya();
      return (
        (a = a === null ? null : { parent: sa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && ba(t, null),
        to(),
        oo(t),
        e !== null && Qi(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function uc(e, t) {
      return (
        (t = Cc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function dc(e, t, n) {
      return (
        Ra(t, e.child, null, n),
        (e = uc(t, t.pendingProps)),
        (e.flags |= 2),
        co(t),
        (t.memoizedState = null),
        e
      );
    }
    function fc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (z) {
          if (r.mode === `hidden`)
            return (e = uc(t, r)), (t.lanes = 536870912), cc(null, e);
          if (
            (ao(t),
            (e = R)
              ? ((e = rf(e, Ii)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ei === null ? null : { id: Di, overflow: Oi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = gi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Pi = t),
                  (R = null)))
              : (e = null),
            e === null)
          )
            throw Ri(t);
          return (t.lanes = 536870912), null;
        }
        return uc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((ao(t), a))
          if (t.flags & 256) (t.flags &= -257), (t = dc(e, t, n));
          else if (t.memoizedState !== null)
            (t.child = e.child), (t.flags |= 128), (t = null);
          else throw Error(i(558));
        else if (
          (nc || Qi(e, t, n, !1), (a = (n & e.childLanes) !== 0), nc || a)
        ) {
          if (
            ((r = q),
            r !== null && ((s = ot(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ii(e, s), hu(r, e, s), tc);
          Du(), (t = dc(e, t, n));
        } else
          (e = o.treeContext),
            (R = cf(s.nextSibling)),
            (Pi = t),
            (z = !0),
            (Fi = null),
            (Ii = !1),
            e !== null && Ni(t, e),
            (t = uc(t, r)),
            (t.flags |= 4096);
        return t;
      }
      return (
        (e = di(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function pc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function mc(e, t, n, r, i) {
      return (
        ea(t),
        (n = xo(e, t, n, r, void 0, i)),
        (r = To()),
        e !== null && !nc
          ? (Eo(e, t, i), Oc(e, t, i))
          : (z && r && ji(t), (t.flags |= 1), rc(e, t, n, i), t.child)
      );
    }
    function hc(e, t, n, r, i, a) {
      return (
        ea(t),
        (t.updateQueue = null),
        (n = Co(t, r, n, i)),
        So(e),
        (r = To()),
        e !== null && !nc
          ? (Eo(e, t, a), Oc(e, t, a))
          : (z && r && ji(t), (t.flags |= 1), rc(e, t, n, a), t.child)
      );
    }
    function gc(e, t, n, r, i) {
      if ((ea(t), t.stateNode === null)) {
        var a = si,
          o = n.contextType;
        typeof o == `object` && o && (a = ta(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Hs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Va(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ta(o) : si),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Vs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Hs.enqueueReplaceState(a, a.state, null),
            Ya(t, r, a, i),
            Ja(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Gs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        (o = si), typeof u == `object` && u && (o = ta(u));
        var d = n.getDerivedStateFromProps;
        (u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ws(t, a, r, o)),
          (Ba = !1);
        var f = t.memoizedState;
        (a.state = f),
          Ya(t, r, a, i),
          Ja(),
          (l = t.memoizedState),
          s || f !== l || Ba
            ? (typeof d == `function` &&
                (Vs(t, n, d, r), (l = t.memoizedState)),
              (c = Ba || Us(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1));
      } else {
        (a = t.stateNode),
          Ha(e, t),
          (o = t.memoizedProps),
          (u = Gs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = si),
          typeof l == `object` && l && (c = ta(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ws(t, a, r, c)),
          (Ba = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ya(t, r, a, i),
          Ja();
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ba ||
        (e !== null && e.dependencies !== null && $i(e.dependencies))
          ? (typeof s == `function` && (Vs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ba ||
              Us(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && $i(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        pc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ra(t, e.child, null, i)),
                (t.child = Ra(t, null, n, i)))
              : rc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Oc(e, t, i)),
        e
      );
    }
    function _c(e, t, n, r) {
      return Hi(), (t.flags |= 256), rc(e, t, n, r), t.child;
    }
    var vc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function yc(e) {
      return { baseLanes: e, cachePool: xa() };
    }
    function bc(e, t, n) {
      return (e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e;
    }
    function xc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (lo.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (z) {
          if (
            (a ? io(t) : so(t),
            (e = R)
              ? ((e = rf(e, Ii)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ei === null ? null : { id: Di, overflow: Oi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = gi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Pi = t),
                  (R = null)))
              : (e = null),
            e === null)
          )
            throw Ri(t);
          return of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (so(t),
              (a = t.mode),
              (c = Cc({ mode: `hidden`, children: c }, a)),
              (r = mi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = yc(n)),
              (r.childLanes = bc(e, s, n)),
              (t.memoizedState = vc),
              cc(null, r))
            : (io(t), Sc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (io(t), (t.flags &= -257), (t = wc(e, t, n)))
            : t.memoizedState === null
              ? (so(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Cc({ mode: `visible`, children: r.children }, a)),
                (c = mi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ra(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = yc(n)),
                (r.childLanes = bc(e, s, n)),
                (t.memoizedState = vc),
                (t = cc(null, r)))
              : (so(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((io(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          (s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Wi({ value: r, source: null, stack: null }),
            (t = wc(e, t, n));
        } else if (
          (nc || Qi(e, t, n, !1), (s = (n & e.childLanes) !== 0), nc || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = ot(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ii(e, r), hu(s, e, r), tc);
          af(c) || Du(), (t = wc(e, t, n));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (R = cf(c.nextSibling)),
              (Pi = t),
              (z = !0),
              (Fi = null),
              (Ii = !1),
              e !== null && Ni(t, e),
              (t = Sc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (so(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = di(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = mi(c, a, n, null)), (c.flags |= 2))
            : (c = di(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          cc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = yc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = xa())
                : ((l = sa._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = bc(e, s, n)),
          (t.memoizedState = vc),
          cc(e.child, r))
        : (io(t),
          (n = e.child),
          (e = n.sibling),
          (n = di(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Sc(e, t) {
      return (
        (t = Cc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Cc(e, t) {
      return (e = li(22, e, null, t)), (e.lanes = 0), e;
    }
    function wc(e, t, n) {
      return (
        Ra(t, e.child, null, n),
        (e = Sc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Tc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), Xi(e.return, t, n);
    }
    function Ec(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Dc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = lo.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        O(lo, o),
        rc(e, t, r, n),
        (r = z ? Ci : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
          else if (e.tag === 19) Tc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && V(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ec(t, !1, i, n, a, r);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && V(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Ec(t, !0, n, null, a, r);
          break;
        case `together`:
          Ec(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Oc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((Qi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = di(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (n = n.sibling = di(e, e.pendingProps)),
            (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function kc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && $i(e)))
        : !0;
    }
    function Ac(e, t, n) {
      switch (t.tag) {
        case 3:
          ve(t, t.stateNode.containerInfo),
            Ji(t, sa, e.memoizedState.cache),
            Hi();
          break;
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          ve(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ji(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), ao(t), null;
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (io(t), (e = Oc(e, t, n)), e === null ? null : e.sibling)
                : xc(e, t, n)
              : (io(t), (t.flags |= 128), null);
          io(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (Qi(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Dc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            O(lo, lo.current),
            r)
          )
            break;
          return null;
        case 22:
          return (t.lanes = 0), sc(e, t, n, t.pendingProps);
        case 24:
          Ji(t, sa, e.memoizedState.cache);
      }
      return Oc(e, t, n);
    }
    function jc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) nc = !0;
        else {
          if (!kc(e, n) && !(t.flags & 128)) return (nc = !1), Ac(e, t, n);
          nc = !!(e.flags & 131072);
        }
      else (nc = !1), z && t.flags & 1048576 && Ai(t, Ci, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Oa(t.elementType)), (t.type = e), typeof e == `function`))
              ui(e)
                ? ((r = Gs(e, r)), (t.tag = 1), (t = gc(null, t, e, r, n)))
                : ((t.tag = 0), (t = mc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  (t.tag = 11), (t = ic(null, t, e, r, n));
                  break a;
                } else if (a === ne) {
                  (t.tag = 14), (t = ac(null, t, e, r, n));
                  break a;
                }
              }
              throw ((t = ce(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return mc(e, t, t.type, t.pendingProps, n);
        case 1:
          return (r = t.type), (a = Gs(r, t.pendingProps)), gc(e, t, r, a, n);
        case 3:
          a: {
            if ((ve(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            (a = o.element), Ha(e, t), Ya(t, r, null, n);
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ji(t, sa, r),
              r !== o.cache && Zi(t, [sa], n, !0),
              Ja(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = _c(e, t, r, n);
                break a;
              } else if (r !== a) {
                (a = yi(Error(i(424)), t)), Wi(a), (t = _c(e, t, r, n));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  R = cf(e.firstChild),
                    Pi = t,
                    z = !0,
                    Fi = null,
                    Ii = !0,
                    n = za(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
              }
            else {
              if ((Hi(), r === a)) {
                t = Oc(e, t, n);
                break a;
              }
              rc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            pc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : z ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ge.current).createElement(n)),
                  (r[F] = t),
                  (r[I] = e),
                  Pd(r, n, e),
                  bt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            be(t),
            e === null &&
              z &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ge.current)),
              (Pi = t),
              (Ii = !0),
              (a = R),
              Zd(t.type) ? ((lf = a), (R = cf(r.firstChild))) : (R = a)),
            rc(e, t, t.pendingProps.children, n),
            pc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              z &&
              ((a = r = R) &&
                ((r = tf(r, t.type, t.pendingProps, Ii)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Pi = t),
                    (R = cf(r.firstChild)),
                    (Ii = !1),
                    (a = !0))),
              a || Ri(t)),
            be(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = xo(e, t, wo, null, null, n)), (Qf._currentValue = a)),
            pc(e, t),
            rc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              z &&
              ((e = n = R) &&
                ((n = nf(n, t.pendingProps, Ii)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Pi = t), (R = null), (e = !0))),
              e || Ri(t)),
            null
          );
        case 13:
          return xc(e, t, n);
        case 4:
          return (
            ve(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ra(t, null, r, n)) : rc(e, t, r, n),
            t.child
          );
        case 11:
          return ic(e, t, t.type, t.pendingProps, n);
        case 7:
          return rc(e, t, t.pendingProps, n), t.child;
        case 8:
          return rc(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return rc(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            Ji(t, t.type, r.value),
            rc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ea(t),
            (a = ta(a)),
            (r = r(a)),
            (t.flags |= 1),
            rc(e, t, r, n),
            t.child
          );
        case 14:
          return ac(e, t, t.type, t.pendingProps, n);
        case 15:
          return oc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Dc(e, t, n);
        case 31:
          return fc(e, t, n);
        case 22:
          return sc(e, t, n, t.pendingProps);
        case 24:
          return (
            ea(t),
            (r = ta(sa)),
            e === null
              ? ((a = ya()),
                a === null &&
                  ((a = q),
                  (o = ca()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Va(t),
                Ji(t, sa, a))
              : ((e.lanes & n) !== 0 && (Ha(e, t), Ya(t, null, null, n), Ja()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ji(t, sa, r),
                    r !== a.cache && Zi(t, [sa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ji(t, sa, r))),
            rc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Mc(e) {
      e.flags |= 4;
    }
    function Nc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((ka = Ta), Ca);
      } else e.flags &= -16777217;
    }
    function Pc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((ka = Ta), Ca);
    }
    function Fc(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : tt()), (e.lanes |= t), (Yl |= t));
    }
    function Ic(e, t) {
      if (!z)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              n.alternate !== null && (r = n), (n = n.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function G(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Lc(e, t, n) {
      var r = t.pendingProps;
      switch ((Mi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return G(t), null;
        case 1:
          return G(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Yi(sa),
            ye(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Vi(t)
                ? Mc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ui())),
            G(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Mc(t),
                o === null ? (G(t), Nc(t, a, null, r, n)) : (G(t), Pc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (G(t), (t.flags &= -16777217))
                  : (Mc(t), G(t), Pc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Mc(t),
                  G(t),
                  Nc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (xe(t),
            (n = ge.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return G(t), null;
            }
            (e = he.current),
              Vi(t) ? zi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Mc(t));
          }
          return G(t), null;
        case 5:
          if ((xe(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return G(t), null;
            }
            if (((o = he.current), Vi(t))) zi(t, o);
            else {
              var s = Bd(ge.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      (o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild));
                      break;
                    case `select`:
                      (o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size);
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              (o[F] = t), (o[I] = r);
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Mc(t);
            }
          }
          return (
            G(t),
            Nc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Mc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = ge.current), Vi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Pi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              (e[F] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Ri(t, !0);
            } else (e = Bd(e).createTextNode(r)), (e[F] = t), (t.stateNode = e);
          }
          return G(t), null;
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Vi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[F] = t;
              } else
                Hi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              G(t), (e = !1);
            } else
              (n = Ui()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0);
            if (!e) return t.flags & 256 ? (co(t), t) : (co(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return G(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Vi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[F] = t;
              } else
                Hi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              G(t), (a = !1);
            } else
              (a = Ui()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0);
            if (!a) return t.flags & 256 ? (co(t), t) : (co(t), null);
          }
          return (
            co(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Fc(t, t.updateQueue),
                G(t),
                null)
          );
        case 4:
          return ye(), e === null && Sd(t.stateNode.containerInfo), G(t), null;
        case 10:
          return Yi(t.type), G(t), null;
        case 19:
          if ((me(lo), (r = t.memoizedState), r === null)) return G(t), null;
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Ic(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = V(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Ic(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Fc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;

                    )
                      fi(n, e), (n = n.sibling);
                    return (
                      O(lo, (lo.current & 1) | 2),
                      z && ki(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Pe() > tu &&
                ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = V(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Fc(t, e),
                  Ic(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !z)
                )
                  return G(t), null;
              } else
                2 * Pe() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (G(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Pe()),
              (e.sibling = null),
              (n = lo.current),
              O(lo, a ? (n & 1) | 2 : n & 1),
              z && ki(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            co(t),
            no(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (G(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : G(t),
            (n = t.updateQueue),
            n !== null && Fc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && me(va),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Yi(sa),
            G(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Rc(e, t) {
      switch ((Mi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Yi(sa),
            ye(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return xe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((co(t), t.alternate === null)) throw Error(i(340));
            Hi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (co(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Hi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return me(lo), null;
        case 4:
          return ye(), null;
        case 10:
          return Yi(t.type), null;
        case 22:
        case 23:
          return (
            co(t),
            no(),
            e !== null && me(va),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return Yi(sa), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function zc(e, t) {
      switch ((Mi(t), t.tag)) {
        case 3:
          Yi(sa), ye();
          break;
        case 26:
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye();
          break;
        case 31:
          t.memoizedState !== null && co(t);
          break;
        case 13:
          co(t);
          break;
        case 19:
          me(lo);
          break;
        case 10:
          Yi(t.type);
          break;
        case 22:
        case 23:
          co(t), no(), e !== null && me(va);
          break;
        case 24:
          Yi(sa);
      }
    }
    function Bc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              (r = a()), (o.destroy = r);
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Vc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                (o.destroy = void 0), (i = t);
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Hc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Za(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Uc(e, t, n) {
      (n.props = Gs(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Wc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Gc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Kc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function qc(e, t, n) {
      try {
        var r = e.stateNode;
        Fd(r, e.type, n, t), (r[I] = t);
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Jc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Yc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Jc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = en));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Xc(e, t, n), e = e.sibling; e !== null; )
          Xc(e, t, n), (e = e.sibling);
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Zc(e, t, n), e = e.sibling; e !== null; )
          Zc(e, t, n), (e = e.sibling);
    }
    function Qc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        Pd(t, r, n), (t[F] = e), (t[I] = n);
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var $c = !1,
      el = !1,
      tl = !1,
      nl = typeof WeakSet == `function` ? WeakSet : Set,
      rl = null;
    function il(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Or(e)), kr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, o.nodeType;
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;

                )
                  (p = f), (f = m);
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  (f = p), (p = f.parentNode);
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, rl = t;
        rl !== null;

      )
        if (((t = rl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          (e.return = t), (rl = e);
        else
          for (; rl !== null; ) {
            switch (((t = rl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    (a = e[n]), (a.ref.impl = a.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  (e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode);
                  try {
                    var h = Gs(n.type, a);
                    (e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (rl = e);
              break;
            }
            rl = t.return;
          }
    }
    function al(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          bl(e, n), r & 4 && Bc(5, n);
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Gs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          r & 64 && Hc(n), r & 512 && Wc(n, n.return);
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Za(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Qc(n);
        case 26:
        case 5:
          bl(e, n), t === null && r & 4 && Kc(n), r & 512 && Wc(n, n.return);
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          bl(e, n), r & 4 && dl(e, n);
          break;
        case 13:
          bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || $c), !r)) {
            (t = (t !== null && t.memoizedState !== null) || el), (i = $c);
            var a = el;
            ($c = r),
              (el = t) && !a
                ? Sl(e, n, (n.subtreeFlags & 8772) != 0)
                : bl(e, n),
              ($c = i),
              (el = a);
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function ol(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), ol(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && L(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var sl = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null; ) ul(e, t, n), (n = n.sibling);
    }
    function ul(e, t, n) {
      if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
        try {
          Ue.onCommitFiberUnmount(He, n);
        } catch {}
      switch (n.tag) {
        case 26:
          el || Gc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27:
          el || Gc(n, t);
          var r = sl,
            i = cl;
          Zd(n.type) && ((sl = n.stateNode), (cl = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (sl = r),
            (cl = i);
          break;
        case 5:
          el || Gc(n, t);
        case 6:
          if (
            ((r = sl),
            (i = cl),
            (sl = null),
            ll(e, t, n),
            (sl = r),
            (cl = i),
            sl !== null)
          )
            if (cl)
              try {
                (sl.nodeType === 9
                  ? sl.body
                  : sl.nodeName === `HTML`
                    ? sl.ownerDocument.body
                    : sl
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                sl.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          sl !== null &&
            (cl
              ? ((e = sl),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(sl, n.stateNode));
          break;
        case 4:
          (r = sl),
            (i = cl),
            (sl = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (sl = r),
            (cl = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Vc(2, n, t), el || Vc(4, n, t), ll(e, t, n);
          break;
        case 1:
          el ||
            (Gc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Uc(n, t, r)),
            ll(e, t, n);
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          (el = (r = el) || n.memoizedState !== null), ll(e, t, n), (el = r);
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new nl()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new nl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  (sl = c.stateNode), (cl = !1);
                  break a;
                }
                break;
              case 5:
                (sl = c.stateNode), (cl = !1);
                break a;
              case 3:
              case 4:
                (sl = c.stateNode.containerInfo), (cl = !0);
                break a;
            }
            c = c.return;
          }
          if (sl === null) throw Error(i(160));
          ul(o, s, a),
            (sl = null),
            (cl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null);
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) _l(t, e), (t = t.sibling);
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          hl(t, e),
            vl(e),
            r & 4 && (Vc(3, e, e.return), Bc(3, e), Vc(5, e, e.return));
          break;
        case 1:
          hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 64 &&
              $c &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
          break;
        case 26:
          var a = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    (r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a);
                    b: switch (r) {
                      case `title`:
                        (o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[ht] ||
                            o[F] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[F] = e),
                          bt(o),
                          (r = o);
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o);
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    (o[F] = e), bt(o), (r = o);
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  qc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            n !== null && r & 4 && qc(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Kt(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), qc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (tl = !0);
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = a),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          tl && ((tl = !1), yl(e));
          break;
        case 4:
          (r = gl),
            (gl = gf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r);
          break;
        case 12:
          hl(t, e), vl(e);
          break;
        case 31:
          hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r)));
          break;
        case 13:
          hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = Pe()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r)));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = $c,
            d = el;
          if (
            (($c = u || a),
            (el = d || l),
            hl(t, e),
            (el = d),
            ($c = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || $c || el || xl(e)),
                n = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      (s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`);
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          hl(t, e), vl(e);
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Jc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Zc(e, Yc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              n.flags & 32 && (Kt(o, ``), (n.flags &= -33)), Zc(e, Yc(e), o);
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Xc(e, Yc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) al(e, t.alternate, t), (t = t.sibling);
    }
    function xl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Vc(4, t, t.return), xl(t);
            break;
          case 1:
            Gc(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == `function` && Uc(t, t.return, n),
              xl(t);
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            Gc(t, t.return), xl(t);
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Sl(i, a, n), Bc(4, a);
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Xa(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            n && o & 64 && Hc(a), Wc(a, a.return);
            break;
          case 27:
            Qc(a);
          case 26:
          case 5:
            Sl(i, a, n), n && r === null && o & 4 && Kc(a), Wc(a, a.return);
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            Sl(i, a, n), n && o & 4 && dl(i, a);
            break;
          case 13:
            Sl(i, a, n), n && o & 4 && fl(i, a);
            break;
          case 22:
            a.memoizedState === null && Sl(i, a, n), Wc(a, a.return);
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && la(n));
    }
    function wl(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && la(e));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) El(e, t, n, r), (t = t.sibling);
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Tl(e, t, n, r), i & 2048 && Bc(9, t);
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && la(e)));
          break;
        case 12:
          if (i & 2048) {
            Tl(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t);
          break;
        case 24:
          Tl(e, t, n, r), i & 2048 && wl(t.alternate, t);
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;

      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Dl(a, o, s, c, i), Bc(8, o);
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o);
            break;
          case 24:
            Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o);
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              Ol(n, r), i & 2048 && Cl(r.alternate, r);
              break;
            case 24:
              Ol(n, r), i & 2048 && wl(r.alternate, r);
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null; ) jl(e, t, n), (e = e.sibling);
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          (gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r);
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (rl = r), Il(r, e);
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) Pl(e), (e = e.sibling);
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Nl(e), e.flags & 2048 && Vc(9, e, e.return);
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (rl = r), Il(r, e);
          }
        Ml(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Vc(8, t, t.return), Fl(t);
            break;
          case 22:
            (n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Fl(t));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; rl !== null; ) {
        var n = rl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Vc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            la(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) (r.return = n), (rl = r);
        else
          a: for (n = e; rl !== null; ) {
            r = rl;
            var i = r.sibling,
              a = r.return;
            if ((ol(r), r === n)) {
              rl = null;
              break a;
            }
            if (i !== null) {
              (i.return = a), (rl = i);
              break a;
            }
            rl = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = ta(sa),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return ta(sa).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : E.T === null ? N() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(Y & 536870912) || z) {
          var e = Xe;
          (Xe <<= 1), !(Xe & 3932160) && (Xe = 262144), (Jl = e);
        } else Jl = 536870912;
      return (e = B.current), e !== null && (e.flags |= 32), Jl;
    }
    function hu(e, t, n) {
      ((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        M(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)),
          rd(e));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || $e(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            (a = Ou(e, t, !1)), (o = !1);
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              (s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s);
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = Xl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Hl && !l) {
                    (c.errorRecoveryDisabledLanes |= o), (Kl |= o), (a = 4);
                    break a;
                  }
                  (o = Zl),
                    (Zl = a),
                    o !== null &&
                      (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            Su(e, 0), yu(e, t, 0, !0);
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                yu(r, t, Jl, !Bl);
                break a;
              case 2:
                Zl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = $l + 300 - Pe()), 10 < a)) {
              if ((yu(r, t, Jl, !Bl), Qe(r, 0, !0) !== 0)) break a;
              (su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Zl,
                    nu,
                    Ql,
                    t,
                    Jl,
                    Kl,
                    Yl,
                    Bl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                ));
              break a;
            }
            _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        (d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: en,
        }),
          jl(t, a, d);
        var m =
          (a & 62914560) === a
            ? $l - Pe()
            : (a & 4194048) === a
              ? eu - Pe()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          (su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l);
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Cr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      (t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - Ge(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      n !== 0 && it(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else (e = J), (qi = Ki = null), Do(e), (Ma = null), (Na = 0), (e = J);
        for (; e !== null; ) zc(e.alternate, e), (e = e.return);
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = di(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = $e(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ge(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (Ul = t), ti(), n;
    }
    function Cu(e, t) {
      (H = null),
        (E.H = Ls),
        t === Sa || t === wa
          ? ((t = Aa()), (X = 3))
          : t === Ca
            ? ((t = Aa()), (X = 4))
            : (X =
                t === tc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (zl = t),
        J === null && ((Wl = 1), Ys(e, yi(t, e.current)));
    }
    function wu() {
      var e = B.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? ro === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === ro
            : !1;
    }
    function Tu() {
      var e = E.H;
      return (E.H = Ls), e === null ? Ls : e;
    }
    function Eu() {
      var e = E.A;
      return (E.A = Ll), e;
    }
    function Du() {
      (Wl = 4),
        Bl || ((Y & 4194048) !== Y && B.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          q === null ||
          yu(q, Y, Jl, !1);
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      (q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1);
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                xu(), (o = 6);
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                B.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                (l = X), (X = 0), (zl = null), Pu(e, s, c, l);
            }
          }
          ku(), (o = Wl);
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (qi = Ki = null),
        (K = r),
        (E.H = i),
        (E.A = a),
        J === null && ((q = null), (Y = 0), ti()),
        o
      );
    }
    function ku() {
      for (; J !== null; ) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        a = Eu();
      q !== e || Y !== t
        ? ((nu = null), (tu = Pe() + 500), Su(e, t))
        : (Vl = $e(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = zl;
            b: switch (X) {
              case 1:
                (X = 0), (zl = null), Pu(e, t, o, 1);
                break;
              case 2:
              case 9:
                if (Ea(o)) {
                  (X = 0), (zl = null), Nu(t);
                  break;
                }
                (t = function () {
                  (X !== 2 && X !== 9) || q !== e || (X = 7), rd(e);
                }),
                  o.then(t, t);
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                Ea(o)
                  ? ((X = 0), (zl = null), Nu(t))
                  : ((X = 0), (zl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      (X = 0), (zl = null);
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                (X = 0), (zl = null), Pu(e, t, o, 5);
                break;
              case 6:
                (X = 0), (zl = null), Pu(e, t, o, 6);
                break;
              case 8:
                xu(), (Wl = 6);
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (qi = Ki = null),
        (E.H = r),
        (E.A = a),
        (K = n),
        J === null ? ((q = null), (Y = 0), ti(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Me(); ) Mu(J);
    }
    function Mu(e) {
      var t = jc(e.alternate, e, Ul);
      (e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t);
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = hc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = hc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          Do(t);
        default:
          zc(n, t), (t = J = fi(t, Ul)), (t = jc(n, t, Ul));
      }
      (e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t);
    }
    function Pu(e, t, n, r) {
      (qi = Ki = null), Do(t), (Ma = null), (Na = 0);
      var i = t.return;
      try {
        if (ec(e, i, t, n, Y)) {
          (Wl = 1), Ys(e, yi(n, e.current)), (J = null);
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        (Wl = 1), Ys(e, yi(n, e.current)), (J = null);
        return;
      }
      t.flags & 32768
        ? (z || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = B.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = Lc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = Rc(e.alternate, e);
        if (n !== null) {
          (n.flags &= 32767), (J = n);
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      (Wl = 6), (J = null);
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ei),
          rt(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Re, function () {
                return Uu(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          (r = E.T), (E.T = null), (a = D.p), (D.p = 2), (s = K), (K |= 4);
          try {
            il(e, t, n);
          } finally {
            (K = s), (D.p = a), (E.T = r);
          }
        }
        (iu = 1), Ru(), zu(), Bu();
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          (n = E.T), (E.T = null);
          var r = D.p;
          D.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Or(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Dr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && kr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  (s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Er(s, h),
                      v = Er(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (sp = !!Rd), (zd = Rd = null);
          } finally {
            (K = i), (D.p = r), (E.T = n);
          }
        }
        (e.current = t), (iu = 2);
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          (n = E.T), (E.T = null);
          var r = D.p;
          D.p = 2;
          var i = K;
          K |= 4;
          try {
            al(e, t.alternate, t);
          } finally {
            (K = i), (D.p = r), (E.T = n);
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        (iu = 0), Ne();
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          ct(n),
          (t = t.stateNode),
          Ue && typeof Ue.onCommitFiberRoot == `function`)
        )
          try {
            Ue.onCommitFiberRoot(He, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          (t = E.T), (i = D.p), (D.p = 2), (E.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            (E.T = t), (D.p = i);
          }
        }
        su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1);
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), la(t)));
    }
    function Hu() {
      return Ru(), zu(), Bu(), Uu();
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = ct(su),
        r = E.T,
        a = D.p;
      try {
        (D.p = 32 > n ? 32 : n), (E.T = null), (n = lu), (lu = null);
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          id(0, !1),
          Ue && typeof Ue.onPostCommitFiberRoot == `function`)
        )
          try {
            Ue.onPostCommitFiberRoot(He, o);
          } catch {}
        return !0;
      } finally {
        (D.p = a), (E.T = r), Vu(e, t);
      }
    }
    function Wu(e, t, n) {
      (t = yi(n, t)),
        (t = Zs(e.stateNode, t, 2)),
        (e = Wa(e, t, 2)),
        e !== null && (M(e, 2), rd(e));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              (e = yi(n, e)),
                (n = Qs(2)),
                (r = Wa(t, n, 2)),
                r !== null && ($s(n, r, t, e), M(r, 2), rd(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
      i.has(n) ||
        ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > Pe() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e);
    }
    function qu(e, t) {
      t === 0 && (t = tt()), (e = ii(e, t)), e !== null && (M(e, t), rd(e));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), qu(e, n);
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      r !== null && r.delete(t), qu(e, n);
    }
    function Xu(e, t) {
      return Ae(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud());
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  (a = (1 << (31 - Ge(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                (a = Y),
                  (a = Qe(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || $e(r, a) || ((n = !0), ld(r, a));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Pe(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i);
      }
      (iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0);
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;

      ) {
        var o = 31 - Ge(a),
          s = 1 << o,
          c = i[o];
        c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = et(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s);
      }
      if (
        ((t = q),
        (n = Y),
        (n = Qe(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && je(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || $e(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && je(r), ct(n))) {
          case 2:
          case 8:
            n = Le;
            break;
          case 32:
            n = Re;
            break;
          case 268435456:
            n = A;
            break;
          default:
            n = Re;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Ae(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && je(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = Qe(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Pe()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? Ae(Ie, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = fa;
        e === 0 && ((e = Ye), (Ye <<= 1), !(Ye & 261888) && (Ye = 256)),
          (nd = e);
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : $t(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[I] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[I] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Sn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Cs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Cs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < Yr.length; hd++) {
      var gd = Yr[hd];
      Xr(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    Xr(Vr, `onAnimationEnd`),
      Xr(Hr, `onAnimationIteration`),
      Xr(Ur, `onAnimationStart`),
      Xr(`dblclick`, `onDoubleClick`),
      Xr(`focusin`, `onFocus`),
      Xr(`focusout`, `onBlur`),
      Xr(Wr, `onTransitionRun`),
      Xr(Gr, `onTransitionStart`),
      Xr(Kr, `onTransitionCancel`),
      Xr(qr, `onTransitionEnd`),
      wt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      wt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      wt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      wt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Ct(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Ct(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Ct(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Ct(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ct(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ct(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      );
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                Zr(e);
              }
              (i.currentTarget = null), (a = c);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                Zr(e);
              }
              (i.currentTarget = null), (a = c);
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[dt];
      n === void 0 && (n = t[dt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      t && (r |= 4), Cd(n, e, r, t);
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        (e[xd] = !0),
          xt.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        !dn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i });
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = gt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      cn(function () {
        var r = a,
          i = nn(n),
          s = [];
        a: {
          var c = Jr.get(e);
          if (c !== void 0) {
            var l = Sn,
              u = e;
            switch (e) {
              case `keypress`:
                if (_n(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Bn;
                break;
              case `focusin`:
                (u = `focus`), (l = jn);
                break;
              case `focusout`:
                (u = `blur`), (l = jn);
                break;
              case `beforeblur`:
              case `afterblur`:
                l = jn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = kn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = An;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Hn;
                break;
              case Vr:
              case Hr:
              case Ur:
                l = Mn;
                break;
              case qr:
                l = Un;
                break;
              case `scroll`:
              case `scrollend`:
                l = wn;
                break;
              case `wheel`:
                l = Wn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Nn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Vn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Gn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = ln(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== tn &&
                (u = n.relatedTarget || n.fromElement) &&
                (gt(u) || u[ut]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? gt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = kn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Vn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : vt(l)),
                (h = u == null ? c : vt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                gt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) (p = d(p)), h--;
                  for (; 0 < g - h; ) (m = d(m)), g--;
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    (p = d(p)), (m = d(m));
                  }
                  d = null;
                }
              else d = null;
              l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0);
            }
          }
          a: {
            if (
              ((c = r ? vt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = dr;
            else if (ar(c))
              if (fr) v = xr;
              else {
                v = yr;
                var y = vr;
              }
            else
              (l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Xt(r.elementType) && (v = dr)
                  : (v = br);
            if ((v &&= v(e, r))) {
              or(s, v, n, i);
              break a;
            }
            y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Ht(c, `number`, c.value);
          }
          switch (((y = r ? vt(r) : window), e)) {
            case `focusin`:
              (ar(y) || y.contentEditable === `true`) &&
                ((jr = y), (Mr = r), (Nr = null));
              break;
            case `focusout`:
              Nr = Mr = jr = null;
              break;
            case `mousedown`:
              Pr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              (Pr = !1), Fr(s, n, i);
              break;
            case `selectionchange`:
              if (Ar) break;
            case `keydown`:
            case `keyup`:
              Fr(s, n, i);
          }
          var b;
          if (qn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            tr
              ? $n(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          x &&
            (Xn &&
              n.locale !== `ko` &&
              (tr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && tr && (b = gn())
                : ((pn = i),
                  (mn = `value` in pn ? pn.value : pn.textContent),
                  (tr = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Pn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = er(n)), b !== null && (x.data = b)))),
            (b = Yn ? nr(e, n) : rr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Pn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i);
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = ln(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = ln(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        (s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = ln(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = ln(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return);
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return (t = jd(t)), jd(e) === t;
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Kt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Kt(e, `` + r);
          break;
        case `className`:
          At(e, `class`, r);
          break;
        case `tabIndex`:
          At(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          At(e, n, r);
          break;
        case `style`:
          Yt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            At(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = $t(`` + r)), e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          (r = $t(`` + r)), e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = en);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          (n = $t(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          Q(`beforetoggle`, e), Q(`toggle`, e), kt(e, `popover`, r);
          break;
        case `xlinkActuate`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          jt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          jt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          kt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Zt.get(n) || n), kt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Yt(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Kt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Kt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = en);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!St.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[I] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a);
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : kt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          Q(`error`, e), Q(`load`, e);
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null);
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Vt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          (t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Ut(e, !!r, n, !0) : Ut(e, !!r, t, !1);
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          Gt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e);
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          Q(`error`, e), Q(`load`, e);
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          Q(`error`, e), Q(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (Xt(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Bt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          (t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Ut(e, !!n, n ? [] : ``, !1) : Ut(e, !!n, t, !0))
              : Ut(e, !!n, p, !1);
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Wt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            (p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p);
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (Xt(t)) {
            for (var _ in n)
              (p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p);
            for (d in r)
              (p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m);
            return;
          }
      }
      for (var v in n)
        (p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p);
      for (f in r)
        (p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m);
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              e.removeChild(i), Np(t);
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            (n = e.ownerDocument.head), pf(n);
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[ht] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o);
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ef(n), L(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[ht])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          t(), n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r);
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      L(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = D.d;
    D.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = _t(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ts(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = zt(t);
        (i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              bt(t),
              r.head.appendChild(t)));
      }
    }
    function Sf(e) {
      _f.D(e), xf(`dns-prefetch`, e, null);
    }
    function Cf(e, t) {
      _f.C(e, t), xf(`preconnect`, e, t);
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + zt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + zt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + zt(n.imageSizes) + `"]`))
          : (i += `[href="` + zt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = p(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            bt(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            zt(r) +
            `"][href="` +
            zt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = p({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          (r = n.createElement(`link`)),
            Pd(r, `link`, e),
            bt(r),
            n.head.appendChild(r);
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = yt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            (e = p({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n);
            var c = (o = r.createElement(`link`));
            bt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                (c.onload = e), (c.onerror = t);
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r);
          }
          (o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o);
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = yt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = p({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            bt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = yt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = p({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            bt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = ge.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = yt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = yt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = yt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + zt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return p({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          bt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + zt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + zt(n.href) + `"]`);
            if (r) return (t.instance = r), bt(r), r;
            var a = p({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              bt(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return (t.state.loading |= 4), (t.instance = o), bt(o), o;
            (r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              bt(o);
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                (s.onload = e), (s.onerror = t);
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), bt(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = p({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  bt(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title);
    }
    function zf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity);
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else (i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[ht] ||
            a[F] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        );
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled), typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            (t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              bt(a);
            return;
          }
          (a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            bt(a);
          var o = a;
          (o._p = new Promise(function (e, t) {
            (o.onload = e), (o.onerror = t);
          })),
            Pd(a, `link`, r),
            (n.instance = a);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    (e.unsuspend = null), t();
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  (e.unsuspend = null), clearTimeout(r), clearTimeout(i);
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), Yf.set(e, n);
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: ue,
      _currentValue2: ue,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = nt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = nt(0)),
        (this.hiddenUpdates = nt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map());
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = li(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ca()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Va(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = si), e) : si;
    }
    function np(e, t, n, r, i, a) {
      (i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ua(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Wa(e, r, t)),
        n !== null && (hu(n, e, t), Ga(n, e, t));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      rp(e, t), (e = e.alternate) && rp(e, t);
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ii(e, 67108864);
        t !== null && hu(t, e, 67108864), ip(e, 67108864);
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = st(t);
        var n = ii(e, t);
        n !== null && hu(n, e, t), ip(e, t);
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        (D.p = 2), up(e, t, n, r);
      } finally {
        (D.p = a), (E.T = i);
      }
    }
    function lp(e, t, n, r) {
      var i = E.T;
      E.T = null;
      var a = D.p;
      try {
        (D.p = 8), up(e, t, n, r);
      } finally {
        (D.p = a), (E.T = i);
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) wd(e, t, r, fp, n), Cp(e, r);
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = _t(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ze(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ge(o));
                        (s.entanglements[1] |= c), (o &= ~c);
                      }
                      rd(a), !(K & 6) && ((tu = Pe() + 500), id(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (s = ii(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2);
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return (e = nn(e)), pp(e);
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = gt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (fp = e), null;
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Fe()) {
            case Ie:
              return 2;
            case Le:
              return 8;
            case Re:
            case ze:
              return 32;
            case A:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = _t(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return (gp = wp(gp, e, t, n, r, i)), !0;
        case `dragenter`:
          return (_p = wp(_p, e, t, n, r, i)), !0;
        case `mouseover`:
          return (vp = wp(vp, e, t, n, r, i)), !0;
        case `pointerover`:
          var a = i.pointerId;
          return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = gt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              (e.blockedOn = t),
                lt(e.priority, function () {
                  op(n);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              (e.blockedOn = t),
                lt(e.priority, function () {
                  op(n);
                });
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (tn = r), n.target.dispatchEvent(r), (tn = null);
        } else return (t = _t(n)), t !== null && ap(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      (hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op);
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = _t(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Cs(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t);
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        Ep(n), n.blockedOn === null && xp.shift();
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[I] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[I] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n);
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        i !== null && (i(), (i = null)), r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            (r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    (Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            np(e.current, 2, null, e, null, null), bu(), (t[ut] = null);
          }
        });
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = N();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        xp.splice(n, 0, e), n === 0 && Ep(e);
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.7`) throw Error(i(527, Lp, `19.2.7`));
    D.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = u(t)),
        (e = e === null ? null : d(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.7`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: E,
      reconcilerVersion: `19.2.7`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          (He = zp.inject(Rp)), (Ue = zp);
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Ks,
        s = qs,
        c = Js;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[ut] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  v = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = _());
  }),
  y = f(),
  b = v(),
  x = g(),
  S = [32, 32, 16, 8, 4, 2],
  C = [0, 2, 3, 4, 5],
  w = { 0: 2, 2: 3, 3: 4, 4: 5, 5: null };
function ee(e, t) {
  return `${e}-${t}`;
}
function te(e, t) {
  return `${e}-pair-${t}`;
}
function ne(e, t) {
  return [t * 2, t * 2 + 1];
}
function T(e) {
  return S[e] / 2;
}
function re(e) {
  return Math.floor(e / 2);
}
function ie(e) {
  return C.includes(e);
}
function ae(e) {
  return { isoCode: e.isoCode, name: e.team ?? e.isoCode };
}
function oe(e) {
  let t = {};
  return (
    e.forEach((e, n) => {
      t[ee(0, n)] = ae(e);
    }),
    t
  );
}
function se(e, t) {
  let n = oe(e);
  for (let e of C) {
    let r = T(e);
    for (let i = 0; i < r; i += 1) {
      let r = t[te(e, i)];
      if (!r) continue;
      let [a, o] = ne(e, i),
        s = n[ee(e, a)],
        c = n[ee(e, o)];
      if (!s || !c || !(r.isoCode === s.isoCode || r.isoCode === c.isoCode))
        continue;
      let l = w[e];
      l !== null && (n[ee(l, i)] = r);
    }
  }
  return n;
}
function ce(e, t) {
  let n = oe(e),
    r = {};
  for (let e of C) {
    let i = T(e);
    for (let a = 0; a < i; a += 1) {
      let i = t[te(e, a)];
      if (!i) continue;
      let [o, s] = ne(e, a),
        c = n[ee(e, o)],
        l = n[ee(e, s)];
      if (!c || !l || !(i.isoCode === c.isoCode || i.isoCode === l.isoCode))
        continue;
      r[te(e, a)] = i;
      let u = w[e];
      u !== null && (n[ee(u, a)] = i);
    }
  }
  return r;
}
function le(e, t, n, r, i) {
  return ce(e, { ...t, [te(n, r)]: i });
}
function E(e, t, n, r = new Set()) {
  let [i, a] = ne(e, t),
    o = ee(e, i),
    s = ee(e, a);
  return !!(n[o] && n[s] && !r.has(o) && !r.has(s));
}
function D(e, t, n) {
  return n[te(e, t)] ?? null;
}
function ue(e, t, n, r) {
  let i = D(e, re(t), r);
  if (!i) return `idle`;
  let a = n[ee(e, t)];
  return a ? (a.isoCode === i.isoCode ? `winner` : `eliminated`) : `idle`;
}
function de({
  ringIndex: e,
  winnerSlotIndex: t,
  ringPoints: n,
  getRingRadius: r,
  getPairArcMidpoint: i,
}) {
  let a = re(t),
    o = w[e];
  if (o === null) return null;
  let s = n[e][t],
    c = n[o][a],
    l = t % 2 == 1 ? 0 : 1;
  if (e === 0) {
    let e = n[1][t],
      o = i(a, 1),
      u = r(1);
    return [
      `M ${s.x} ${s.y}`,
      `L ${e.x} ${e.y}`,
      `A ${u} ${u} 0 0 ${l} ${o.x} ${o.y}`,
      `L ${c.x} ${c.y}`,
    ].join(` `);
  }
  let u = i(a, e),
    d = r(e);
  return [
    `M ${s.x} ${s.y}`,
    `A ${d} ${d} 0 0 ${l} ${u.x} ${u.y}`,
    `L ${c.x} ${c.y}`,
  ].join(` `);
}
function fe(e, t) {
  let n = e.getTotalLength(),
    r = e.getPointAtLength(n * t);
  return { x: r.x, y: r.y };
}
function pe(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2;
}
function me({ showDelay: e = 400, hideDelay: t = 120 } = {}) {
  let [n, r] = (0, y.useState)(!1),
    i = (0, y.useRef)(void 0),
    a = (0, y.useRef)(void 0),
    o = (0, y.useCallback)(() => {
      window.clearTimeout(i.current), window.clearTimeout(a.current);
    }, []),
    s = (0, y.useCallback)(() => {
      window.clearTimeout(a.current),
        (i.current = window.setTimeout(() => r(!0), e));
    }, [e]),
    c = (0, y.useCallback)(() => {
      window.clearTimeout(i.current),
        (a.current = window.setTimeout(() => r(!1), t));
    }, [t]);
  return (
    (0, y.useEffect)(() => () => o(), [o]),
    {
      active: n,
      onMouseEnter: s,
      onMouseLeave: c,
      showImmediately: (0, y.useCallback)(() => {
        o(), r(!0);
      }, [o]),
      hideImmediately: (0, y.useCallback)(() => {
        o(), r(!1);
      }, [o]),
    }
  );
}
function O(e) {
  return `/img/flags/${e.includes(`-`) ? e.split(`-`).pop().toLowerCase() : e.toLowerCase()}.svg`;
}
var he = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    (e.Fragment = n), (e.jsx = r), (e.jsxs = r);
  }),
  k = s((e, t) => {
    t.exports = he();
  })(),
  ge = (0, y.memo)(function ({ team: e, className: t }) {
    return (0, k.jsx)(`img`, {
      src: O(e.isoCode),
      alt: e.name,
      className: t,
      draggable: !1,
    });
  }),
  _e = 900;
function ve({
  sourceSlotKey: e,
  pathD: t,
  startPosition: n,
  onPositionChange: r,
  onComplete: i,
}) {
  let a = (0, y.useRef)(null),
    o = (0, y.useRef)(i),
    s = (0, y.useRef)(r);
  return (
    (o.current = i),
    (s.current = r),
    (0, y.useLayoutEffect)(() => {
      let t = a.current;
      if (!t) return;
      s.current(e, fe(t, 0));
      let n = 0,
        r = performance.now();
      function i(t) {
        let c = a.current;
        if (!c) return;
        let l = t - r,
          u = Math.min(l / _e, 1),
          d = pe(u);
        if ((s.current(e, fe(c, d)), u < 1)) {
          n = requestAnimationFrame(i);
          return;
        }
        s.current(e, null), o.current();
      }
      return (
        (n = requestAnimationFrame(i)),
        () => {
          cancelAnimationFrame(n), s.current(e, null);
        }
      );
    }, [t, e, n.x, n.y]),
    (0, k.jsx)(`svg`, {
      className: `circle-points__path-measure`,
      viewBox: `0 0 100 100`,
      "aria-hidden": `true`,
      children: (0, k.jsx)(`path`, { ref: a, d: t }),
    })
  );
}
var ye = [50, 40.5, 31, 22, 13.5, 5.5],
  be = 8;
function xe() {
  let e = [];
  for (let t = 0; t < S.length; t++) {
    let n = S[t],
      r = (2 * Math.PI) / n;
    if (t === 0) {
      e.push(r / 2);
      continue;
    }
    let i = S[t - 1],
      a = e[t - 1],
      o = (2 * Math.PI) / i;
    if (n === i) {
      e.push(a);
      continue;
    }
    e.push(a + o / 2);
  }
  return e;
}
var Se = xe();
function Ce(e, t = 0) {
  return (ye[e] ?? ye[ye.length - 1]) + t;
}
function we(e, t, n = 0) {
  let r = Ce(t, n),
    i = Se[t];
  return Array.from({ length: e }, (n, a) => {
    let o = (2 * Math.PI * a) / e + i;
    return {
      id: `${t}-${a}`,
      x: 50 + r * Math.sin(o),
      y: 50 - r * Math.cos(o),
    };
  });
}
function Te(e = 0) {
  return S.map((t, n) => ({ count: t, ringIndex: n, points: we(t, n, e) }));
}
function Ee(e, t, n) {
  return `M ${e.x} ${e.y} A ${n} ${n} 0 0 1 ${t.x} ${t.y}`;
}
function De(e) {
  return e === 0
    ? `circle-points__ring circle-points__ring--first`
    : e === 1
      ? `circle-points__ring circle-points__ring--second`
      : e === 2
        ? `circle-points__ring circle-points__ring--playable`
        : e === 3
          ? `circle-points__ring circle-points__ring--playable-inner`
          : e === 4
            ? `circle-points__ring circle-points__ring--playable-final`
            : e === 5
              ? `circle-points__ring circle-points__ring--playable-championship`
              : `circle-points__ring`;
}
var Oe = 72;
function ke(e) {
  return e >= 50
    ? e > Oe
      ? `right`
      : `left`
    : e < 100 - Oe
      ? `left`
      : `right`;
}
function Ae({ team: e, side: t, inactive: n = !1, beatBy: r }) {
  let i = (0, y.useRef)(null),
    [a, o] = (0, y.useState)(!1),
    [s, c] = (0, y.useState)(!1),
    [l, u] = (0, y.useState)({}),
    {
      active: d,
      onMouseEnter: f,
      onMouseLeave: p,
      showImmediately: m,
      hideImmediately: h,
    } = me(),
    g = r ? `${e.name} — lost to ${r.name}` : e.name,
    _ = d || a,
    v = (0, y.useCallback)(() => {
      let e = i.current;
      if (!e) return;
      let n = e.getBoundingClientRect();
      if (t === `right`) {
        u({
          top: n.top + n.height / 2,
          left: n.right + 8,
          transform: `translateY(-50%)`,
        });
        return;
      }
      u({
        top: n.top + n.height / 2,
        left: n.left - 8,
        transform: `translate(-100%, -50%)`,
      });
    }, [t]);
  return (
    (0, y.useLayoutEffect)(() => {
      if (!_) {
        c(!1);
        return;
      }
      return (
        v(),
        c(!0),
        window.addEventListener(`scroll`, v, !0),
        window.addEventListener(`resize`, v),
        () => {
          window.removeEventListener(`scroll`, v, !0),
            window.removeEventListener(`resize`, v);
        }
      );
    }, [_, v]),
    (0, y.useEffect)(() => {
      let e = i.current?.closest(`button`);
      if (!e) return;
      let t = () => {
          e.matches(`:focus-visible`) && (m(), o(!0));
        },
        n = () => {
          h(), o(!1);
        };
      return (
        e.addEventListener(`focusin`, t),
        e.addEventListener(`focusout`, n),
        () => {
          e.removeEventListener(`focusin`, t),
            e.removeEventListener(`focusout`, n);
        }
      );
    }, [h, m]),
    (0, k.jsxs)(k.Fragment, {
      children: [
        (0, k.jsx)(`span`, {
          ref: i,
          className: `circle-points__flag-tooltip circle-points__flag-tooltip--${t}`,
          onMouseEnter: f,
          onMouseLeave: p,
          children: (0, k.jsxs)(`span`, {
            className: `circle-points__flag-stack${n ? ` circle-points__flag-stack--inactive` : ``}`,
            children: [
              (0, k.jsx)(ge, {
                team: e,
                className: `circle-points__flag circle-points__flag--active`,
              }),
              (0, k.jsx)(ge, {
                team: e,
                className: `circle-points__flag circle-points__flag--inactive`,
              }),
            ],
          }),
        }),
        _
          ? (0, x.createPortal)(
              (0, k.jsx)(`span`, {
                className: `circle-points__tooltip${s ? ` circle-points__tooltip--visible` : ``} circle-points__tooltip--${t}`,
                style: l,
                role: `tooltip`,
                children: g,
              }),
              document.body,
            )
          : null,
      ],
    })
  );
}
function je(e, t, n = 0) {
  let r = S[t],
    i = Ce(t, n),
    a = Se[t],
    o = (2 * Math.PI) / r,
    s = (e * 2 + 0.5) * o + a;
  return { x: 50 + i * Math.sin(s), y: 50 - i * Math.cos(s) };
}
function Me({ positions: e, pairWinners: t, onPairWinnersChange: n }) {
  let r = (0, y.useRef)(null),
    [i, a] = (0, y.useState)(0),
    [o, s] = (0, y.useState)([]),
    [c, l] = (0, y.useState)({}),
    u = (0, y.useMemo)(() => se(e, t), [e, t]),
    d = (0, y.useMemo)(() => new Set(o.map((e) => e.targetSlotKey)), [o]),
    f = (0, y.useMemo)(() => new Set(o.map((e) => e.sourceSlotKey)), [o]),
    p = (0, y.useMemo)(() => {
      let e = new Set();
      for (let t of d) e.add(t);
      for (let t of f) e.add(t);
      return e;
    }, [d, f]);
  (0, y.useLayoutEffect)(() => {
    let e = r.current;
    if (!e) return;
    let t = () => {
      let t = e.getBoundingClientRect().width;
      t <= 0 || a((be / 2 / t) * 100);
    };
    t();
    let n = new ResizeObserver(t);
    return n.observe(e), () => n.disconnect();
  }, []);
  let m = (0, y.useMemo)(() => Te(i), [i]),
    h = (0, y.useMemo)(() => Te(i).map((e) => e.points), [i]),
    g = (0, y.useMemo)(
      () =>
        o.flatMap((e) => {
          let t = e.targetSlotKey.match(/^(\d+)-(\d+)$/);
          if (!t) return [];
          let n = Number(t[1]),
            r = Number(t[2]),
            i = h[n]?.[r];
          return i ? [{ key: e.targetSlotKey, point: i }] : [];
        }),
      [o, h],
    );
  (0, y.useEffect)(() => {
    s((e) => e.filter((e) => u[e.targetSlotKey]?.isoCode === e.team.isoCode));
  }, [u]);
  let _ = m[0].points,
    v = m[1].points,
    b = m[2].points,
    x = m[3].points,
    C = m[4].points,
    ne = m[5].points,
    T = Ce(1, i),
    ae = Ce(2, i),
    oe = Ce(3, i),
    ce = Ce(4, i),
    fe = v.length / 2,
    pe = b.length / 2,
    me = x.length / 2,
    O = C.length / 2,
    { passedPairs: he, advancingPairs: _e } = (0, y.useMemo)(() => {
      let e = new Set(),
        n = new Set();
      for (let t of o) {
        let n = t.sourceSlotKey.match(/^(\d+)-(\d+)$/);
        if (!n) continue;
        let r = Number(n[1]),
          i = Number(n[2]);
        ie(r) && e.add(te(r, re(i)));
      }
      for (let r of [0, 2, 3, 4, 5]) {
        let i = S[r] / 2;
        for (let a = 0; a < i; a += 1) {
          let i = te(r, a);
          t[i] && !e.has(i) && n.add(i);
        }
      }
      return { passedPairs: n, advancingPairs: e };
    }, [t, o]),
    ye = (0, y.useCallback)((e) => {
      s((t) => t.filter((t) => t.id !== e));
    }, []),
    xe = (0, y.useCallback)((e, t) => {
      l((n) => {
        if (t === null) {
          if (!(e in n)) return n;
          let t = { ...n };
          return delete t[e], t;
        }
        let r = n[e];
        return r && r.x === t.x && r.y === t.y ? n : { ...n, [e]: t };
      });
    }, []);
  function Se(r, a) {
    let o = re(a),
      c = u[`${r}-${a}`];
    if (!c || !E(r, o, u, p)) return;
    n(le(e, t, r, o, c));
    let l = w[r];
    if (l === null) return;
    let d = ee(l, o),
      f = ee(r, a),
      m = de({
        ringIndex: r,
        winnerSlotIndex: a,
        ringPoints: h,
        getRingRadius: (e) => Ce(e, i),
        getPairArcMidpoint: (e, t) => je(e, t, i),
      });
    if (!m) return;
    let g = h[r][a];
    s((e) => [
      ...e.filter((e) => e.targetSlotKey !== d),
      {
        id: `${d}-${c.isoCode}-${Date.now()}`,
        team: c,
        pathD: m,
        startPosition: g,
        sourceSlotKey: f,
        targetSlotKey: d,
      },
    ]);
  }
  function we(e, n, r) {
    let i = e === 0,
      a = ie(e),
      o = ee(e, r);
    if (d.has(o)) return null;
    let s = u[o],
      l = re(r),
      m = a && s ? ue(e, r, u, t) : `idle`,
      h = f.has(o),
      g = m === `winner`,
      _ = e === 5,
      v = !!(_ && D(5, l, t)),
      y = _ && g && v,
      b = c[o],
      x = h && !!b,
      S = !!(s && (i || a) && (!g || y) && !h),
      C = !S && !i,
      w = !!(s && (i || a) && (!g || h || y) && !x),
      ne = a && !!s && m !== `winner` && !p.has(o) && E(e, l, u, p),
      T = (he.has(te(e, l)) || _e.has(te(e, l))) && (i || (a && C)),
      ae = [
        `circle-points__point`,
        i ? `circle-points__point--first-slot` : ``,
        !i && S ? `circle-points__point--team` : ``,
        ne ? `circle-points__point--selectable` : ``,
        T ? `circle-points__point--passed` : ``,
      ]
        .filter(Boolean)
        .join(` `),
      oe = ke(n.x),
      se = { left: `${n.x}%`, top: `${n.y}%` },
      ce = m === `eliminated` ? D(e, l, t) : null,
      le = w
        ? (0, k.jsx)(Ae, {
            team: s,
            side: oe,
            inactive: m === `eliminated`,
            beatBy: ce,
          })
        : null,
      de = `Select ${s?.name ?? s?.isoCode}`,
      fe = () => Se(e, r);
    return i
      ? (0, k.jsxs)(
          `span`,
          {
            className: ae,
            style: se,
            children: [
              (0, k.jsx)(`span`, {
                className: `circle-points__dot-marker`,
                "aria-hidden": `true`,
              }),
              le
                ? (0, k.jsx)(`button`, {
                    type: `button`,
                    className: `circle-points__flag-button`,
                    disabled: !ne,
                    "aria-pressed": !1,
                    "aria-label": de,
                    onClick: ne ? fe : void 0,
                    children: le,
                  })
                : null,
            ],
          },
          n.id,
        )
      : S
        ? (0, k.jsx)(
            `button`,
            {
              type: `button`,
              className: ae,
              style: se,
              disabled: !ne,
              "aria-pressed": !1,
              "aria-label": de,
              onClick: ne ? fe : void 0,
              children: le,
            },
            n.id,
          )
        : (0, k.jsx)(`span`, { className: ae, style: se }, n.id);
  }
  return (0, k.jsxs)(`div`, {
    className: `circle-points`,
    ref: r,
    children: [
      (0, k.jsxs)(`svg`, {
        className: `circle-points__connector`,
        viewBox: `0 0 100 100`,
        "aria-hidden": `true`,
        children: [
          _.map((e, t) => {
            let n = v[t];
            return (0, k.jsx)(
              `line`,
              { x1: e.x, y1: e.y, x2: n.x, y2: n.y },
              `connector-${t}`,
            );
          }),
          Array.from({ length: fe }, (e, t) => {
            let n = v[t * 2],
              r = v[t * 2 + 1];
            return (0, k.jsx)(`path`, { d: Ee(n, r, T) }, `pair-arc-${t}`);
          }),
          Array.from({ length: fe }, (e, t) => {
            let n = je(t, 1, i),
              r = b[t];
            return (0, k.jsx)(
              `line`,
              { x1: n.x, y1: n.y, x2: r.x, y2: r.y },
              `pair-third-${t}`,
            );
          }),
          Array.from({ length: pe }, (e, t) => {
            let n = b[t * 2],
              r = b[t * 2 + 1];
            return (0, k.jsx)(
              `path`,
              { d: Ee(n, r, ae) },
              `third-pair-arc-${t}`,
            );
          }),
          Array.from({ length: pe }, (e, t) => {
            let n = je(t, 2, i),
              r = x[t];
            return (0, k.jsx)(
              `line`,
              { x1: n.x, y1: n.y, x2: r.x, y2: r.y },
              `third-fourth-${t}`,
            );
          }),
          Array.from({ length: me }, (e, t) => {
            let n = x[t * 2],
              r = x[t * 2 + 1];
            return (0, k.jsx)(
              `path`,
              { d: Ee(n, r, oe) },
              `fourth-pair-arc-${t}`,
            );
          }),
          Array.from({ length: me }, (e, t) => {
            let n = je(t, 3, i),
              r = C[t];
            return (0, k.jsx)(
              `line`,
              { x1: n.x, y1: n.y, x2: r.x, y2: r.y },
              `fourth-fifth-${t}`,
            );
          }),
          Array.from({ length: O }, (e, t) => {
            let n = C[t * 2],
              r = C[t * 2 + 1];
            return (0, k.jsx)(
              `path`,
              { d: Ee(n, r, ce) },
              `fifth-pair-arc-${t}`,
            );
          }),
          Array.from({ length: O }, (e, t) => {
            let n = je(t, 4, i),
              r = ne[t];
            return (0, k.jsx)(
              `line`,
              { x1: n.x, y1: n.y, x2: r.x, y2: r.y },
              `fifth-sixth-${t}`,
            );
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `circle-points__trophy`,
        "aria-hidden": `true`,
        children: (0, k.jsxs)(`picture`, {
          children: [
            (0, k.jsx)(`source`, {
              srcSet: `/img/trophy-dm.png`,
              media: `(prefers-color-scheme: dark)`,
            }),
            (0, k.jsx)(`img`, { src: `/img/trophy-lm.png`, alt: `` }),
          ],
        }),
      }),
      m.map((e) =>
        (0, k.jsx)(
          `div`,
          {
            className: De(e.ringIndex),
            children: e.points.map((t, n) =>
              e.ringIndex === 1 ? null : we(e.ringIndex, t, n),
            ),
          },
          e.ringIndex,
        ),
      ),
      (0, k.jsx)(`div`, {
        className: `circle-points__pending-target-layer`,
        "aria-hidden": `true`,
        children: g.map(({ key: e, point: t }) =>
          (0, k.jsx)(
            `span`,
            {
              className: `circle-points__point circle-points__point--pending-target`,
              style: { left: `${t.x}%`, top: `${t.y}%` },
            },
            e,
          ),
        ),
      }),
      (0, k.jsxs)(`div`, {
        className: `circle-points__traveling-layer`,
        "aria-hidden": `true`,
        children: [
          o.map((e) => {
            let t = c[e.sourceSlotKey];
            return t
              ? (0, k.jsx)(
                  `span`,
                  {
                    className: `circle-points__traveling-flag`,
                    style: { left: `${t.x}%`, top: `${t.y}%` },
                    children: (0, k.jsx)(ge, {
                      team: e.team,
                      className: `circle-points__flag`,
                    }),
                  },
                  `traveling-flag-${e.id}`,
                )
              : null;
          }),
          o.map((e) =>
            (0, k.jsx)(
              ve,
              {
                sourceSlotKey: e.sourceSlotKey,
                pathD: e.pathD,
                startPosition: e.startPosition,
                onPositionChange: xe,
                onComplete: () => ye(e.id),
              },
              e.id,
            ),
          ),
        ],
      }),
    ],
  });
}
function Ne(e, t) {
  let n = e.find((e) => e.isoCode === t);
  return n ? { isoCode: n.isoCode, name: n.team ?? n.isoCode } : null;
}
function Pe(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = r.isoCode;
  return JSON.stringify({ v: 1, winners: t }, null, 2);
}
function Fe(e, t) {
  let n;
  try {
    n = JSON.parse(e.trim());
  } catch {
    return { error: `Invalid JSON.` };
  }
  if (!n || typeof n != `object`)
    return { error: `State must be a JSON object.` };
  let r = n;
  if (r.v !== 1)
    return { error: `Unsupported state version. Expected "v": 1.` };
  if (!r.winners || typeof r.winners != `object`)
    return { error: `Missing or invalid "winners" object.` };
  let i = {};
  for (let [e, n] of Object.entries(r.winners)) {
    if (typeof n != `string`)
      return { error: `Winner for ${e} must be an ISO code string.` };
    let r = Ne(t, n);
    if (!r) return { error: `Unknown team ISO code "${n}" for ${e}.` };
    i[e] = r;
  }
  return { pairWinners: ce(t, i) };
}
function Ie() {
  if (typeof navigator < `u` && navigator.product === `ReactNative`) return !0;
  if (typeof process < `u`) {
    let e = process.type;
    return e === `renderer` || e === `worker`
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var Le = u(
    s((e, t) => {
      t.exports = function (e) {
        return (
          e != null &&
          e.constructor != null &&
          typeof e.constructor.isBuffer == `function` &&
          e.constructor.isBuffer(e)
        );
      };
    })(),
    1,
  ),
  Re = {
    toWeb() {
      throw Error(
        `Vercel Blob: Sorry, we cannot get a Readable stream in this environment. If you see this message please open an issue here: https://github.com/vercel/storage/ with details on your environment.`,
      );
    },
  },
  ze = s((e, t) => {
    var n = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      a = Object.prototype.hasOwnProperty,
      o = (e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      },
      s = (e, t, o, s) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let c of i(t))
            !a.call(e, c) &&
              c !== o &&
              n(e, c, {
                get: () => t[c],
                enumerable: !(s = r(t, c)) || s.enumerable,
              });
        return e;
      },
      c = (e) => s(n({}, `__esModule`, { value: !0 }), e),
      l = {};
    o(l, { SYMBOL_FOR_REQ_CONTEXT: () => u, getContext: () => d }),
      (t.exports = c(l));
    var u = Symbol.for(`@vercel/request-context`);
    function d() {
      return globalThis[u]?.get?.() ?? {};
    }
    0 && (t.exports = { SYMBOL_FOR_REQ_CONTEXT: u, getContext: d });
  }),
  A,
  Be,
  Ve = o(() => {
    (A = crypto), (Be = (e) => e instanceof CryptoKey);
  }),
  He,
  Ue = o(() => {
    Ve(),
      (He = async (e, t) => {
        let n = `SHA-${e.slice(-3)}`;
        return new Uint8Array(await A.subtle.digest(n, t));
      });
  });
function We(...e) {
  let t = e.reduce((e, { length: t }) => e + t, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) n.set(t, r), (r += t.length);
  return n;
}
function Ge(e, t) {
  return We(j.encode(e), new Uint8Array([0]), t);
}
function Ke(e, t, n) {
  if (t < 0 || t >= Qe)
    throw RangeError(`value must be >= 0 and <= ${Qe - 1}. Received ${t}`);
  e.set([t >>> 24, t >>> 16, t >>> 8, t & 255], n);
}
function qe(e) {
  let t = Math.floor(e / Qe),
    n = e % Qe,
    r = new Uint8Array(8);
  return Ke(r, t, 0), Ke(r, n, 4), r;
}
function Je(e) {
  let t = new Uint8Array(4);
  return Ke(t, e), t;
}
function Ye(e) {
  return We(Je(e.length), e);
}
async function Xe(e, t, n) {
  let r = Math.ceil((t >> 3) / 32),
    i = new Uint8Array(r * 32);
  for (let t = 0; t < r; t++) {
    let r = new Uint8Array(4 + e.length + n.length);
    r.set(Je(t + 1)),
      r.set(e, 4),
      r.set(n, 4 + e.length),
      i.set(await He(`sha256`, r), t * 32);
  }
  return i.slice(0, t >> 3);
}
var j,
  Ze,
  Qe,
  $e = o(() => {
    Ue(), (j = new TextEncoder()), (Ze = new TextDecoder()), (Qe = 2 ** 32);
  }),
  et,
  tt,
  nt,
  M,
  rt = o(() => {
    $e(),
      (et = (e) => {
        let t = e;
        typeof t == `string` && (t = j.encode(t));
        let n = 32768,
          r = [];
        for (let e = 0; e < t.length; e += n)
          r.push(String.fromCharCode.apply(null, t.subarray(e, e + n)));
        return btoa(r.join(``));
      }),
      (tt = (e) =>
        et(e).replace(/=/g, ``).replace(/\+/g, `-`).replace(/\//g, `_`)),
      (nt = (e) => {
        let t = atob(e),
          n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
        return n;
      }),
      (M = (e) => {
        let t = e;
        t instanceof Uint8Array && (t = Ze.decode(t)),
          (t = t.replace(/-/g, `+`).replace(/_/g, `/`).replace(/\s/g, ``));
        try {
          return nt(t);
        } catch {
          throw TypeError(`The input to be decoded is not correctly encoded.`);
        }
      });
  }),
  it = c({
    JOSEAlgNotAllowed: () => ct,
    JOSEError: () => at,
    JOSENotSupported: () => N,
    JWEDecryptionFailed: () => lt,
    JWEInvalid: () => P,
    JWKInvalid: () => ut,
    JWKSInvalid: () => dt,
    JWKSMultipleMatchingKeys: () => pt,
    JWKSNoMatchingKey: () => ft,
    JWKSTimeout: () => mt,
    JWSInvalid: () => F,
    JWSSignatureVerificationFailed: () => ht,
    JWTClaimValidationFailed: () => ot,
    JWTExpired: () => st,
    JWTInvalid: () => I,
  }),
  at,
  ot,
  st,
  ct,
  N,
  lt,
  P,
  F,
  I,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  L = o(() => {
    (at = class extends Error {
      constructor(e, t) {
        super(e, t),
          (this.code = `ERR_JOSE_GENERIC`),
          (this.name = this.constructor.name),
          Error.captureStackTrace?.(this, this.constructor);
      }
    }),
      (at.code = `ERR_JOSE_GENERIC`),
      (ot = class extends at {
        constructor(e, t, n = `unspecified`, r = `unspecified`) {
          super(e, { cause: { claim: n, reason: r, payload: t } }),
            (this.code = `ERR_JWT_CLAIM_VALIDATION_FAILED`),
            (this.claim = n),
            (this.reason = r),
            (this.payload = t);
        }
      }),
      (ot.code = `ERR_JWT_CLAIM_VALIDATION_FAILED`),
      (st = class extends at {
        constructor(e, t, n = `unspecified`, r = `unspecified`) {
          super(e, { cause: { claim: n, reason: r, payload: t } }),
            (this.code = `ERR_JWT_EXPIRED`),
            (this.claim = n),
            (this.reason = r),
            (this.payload = t);
        }
      }),
      (st.code = `ERR_JWT_EXPIRED`),
      (ct = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JOSE_ALG_NOT_ALLOWED`);
        }
      }),
      (ct.code = `ERR_JOSE_ALG_NOT_ALLOWED`),
      (N = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JOSE_NOT_SUPPORTED`);
        }
      }),
      (N.code = `ERR_JOSE_NOT_SUPPORTED`),
      (lt = class extends at {
        constructor(e = `decryption operation failed`, t) {
          super(e, t), (this.code = `ERR_JWE_DECRYPTION_FAILED`);
        }
      }),
      (lt.code = `ERR_JWE_DECRYPTION_FAILED`),
      (P = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JWE_INVALID`);
        }
      }),
      (P.code = `ERR_JWE_INVALID`),
      (F = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JWS_INVALID`);
        }
      }),
      (F.code = `ERR_JWS_INVALID`),
      (I = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JWT_INVALID`);
        }
      }),
      (I.code = `ERR_JWT_INVALID`),
      (ut = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JWK_INVALID`);
        }
      }),
      (ut.code = `ERR_JWK_INVALID`),
      (dt = class extends at {
        constructor() {
          super(...arguments), (this.code = `ERR_JWKS_INVALID`);
        }
      }),
      (dt.code = `ERR_JWKS_INVALID`),
      (ft = class extends at {
        constructor(e = `no applicable key found in the JSON Web Key Set`, t) {
          super(e, t), (this.code = `ERR_JWKS_NO_MATCHING_KEY`);
        }
      }),
      (ft.code = `ERR_JWKS_NO_MATCHING_KEY`),
      (pt = class extends at {
        constructor(
          e = `multiple matching keys found in the JSON Web Key Set`,
          t,
        ) {
          super(e, t), (this.code = `ERR_JWKS_MULTIPLE_MATCHING_KEYS`);
        }
      }),
      (pt.code = `ERR_JWKS_MULTIPLE_MATCHING_KEYS`),
      (mt = class extends at {
        constructor(e = `request timed out`, t) {
          super(e, t), (this.code = `ERR_JWKS_TIMEOUT`);
        }
      }),
      (mt.code = `ERR_JWKS_TIMEOUT`),
      (ht = class extends at {
        constructor(e = `signature verification failed`, t) {
          super(e, t), (this.code = `ERR_JWS_SIGNATURE_VERIFICATION_FAILED`);
        }
      }),
      (ht.code = `ERR_JWS_SIGNATURE_VERIFICATION_FAILED`);
  }),
  gt,
  _t = o(() => {
    Ve(), (gt = A.getRandomValues.bind(A));
  });
function vt(e) {
  switch (e) {
    case `A128GCM`:
    case `A128GCMKW`:
    case `A192GCM`:
    case `A192GCMKW`:
    case `A256GCM`:
    case `A256GCMKW`:
      return 96;
    case `A128CBC-HS256`:
    case `A192CBC-HS384`:
    case `A256CBC-HS512`:
      return 128;
    default:
      throw new N(`Unsupported JWE Algorithm: ${e}`);
  }
}
var yt,
  bt = o(() => {
    L(), _t(), (yt = (e) => gt(new Uint8Array(vt(e) >> 3)));
  }),
  xt,
  St = o(() => {
    L(),
      bt(),
      (xt = (e, t) => {
        if (t.length << 3 !== vt(e))
          throw new P(`Invalid Initialization Vector length`);
      });
  }),
  Ct,
  wt = o(() => {
    L(),
      (Ct = (e, t) => {
        let n = e.byteLength << 3;
        if (n !== t)
          throw new P(
            `Invalid Content Encryption Key length. Expected ${t} bits, got ${n} bits`,
          );
      });
  }),
  Tt,
  Et = o(() => {
    Tt = (e, t) => {
      if (!(e instanceof Uint8Array))
        throw TypeError(`First argument must be a buffer`);
      if (!(t instanceof Uint8Array))
        throw TypeError(`Second argument must be a buffer`);
      if (e.length !== t.length)
        throw TypeError(`Input buffers must have the same length`);
      let n = e.length,
        r = 0,
        i = -1;
      for (; ++i < n; ) r |= e[i] ^ t[i];
      return r === 0;
    };
  });
function Dt(e, t = `algorithm.name`) {
  return TypeError(
    `CryptoKey does not support this operation, its ${t} must be ${e}`,
  );
}
function Ot(e, t) {
  return e.name === t;
}
function kt(e) {
  return parseInt(e.name.slice(4), 10);
}
function At(e) {
  switch (e) {
    case `ES256`:
      return `P-256`;
    case `ES384`:
      return `P-384`;
    case `ES512`:
      return `P-521`;
    default:
      throw Error(`unreachable`);
  }
}
function jt(e, t) {
  if (t.length && !t.some((t) => e.usages.includes(t))) {
    let e = `CryptoKey does not support this operation, its usages must include `;
    if (t.length > 2) {
      let n = t.pop();
      e += `one of ${t.join(`, `)}, or ${n}.`;
    } else
      t.length === 2 ? (e += `one of ${t[0]} or ${t[1]}.`) : (e += `${t[0]}.`);
    throw TypeError(e);
  }
}
function Mt(e, t, ...n) {
  switch (t) {
    case `HS256`:
    case `HS384`:
    case `HS512`: {
      if (!Ot(e.algorithm, `HMAC`)) throw Dt(`HMAC`);
      let n = parseInt(t.slice(2), 10);
      if (kt(e.algorithm.hash) !== n) throw Dt(`SHA-${n}`, `algorithm.hash`);
      break;
    }
    case `RS256`:
    case `RS384`:
    case `RS512`: {
      if (!Ot(e.algorithm, `RSASSA-PKCS1-v1_5`)) throw Dt(`RSASSA-PKCS1-v1_5`);
      let n = parseInt(t.slice(2), 10);
      if (kt(e.algorithm.hash) !== n) throw Dt(`SHA-${n}`, `algorithm.hash`);
      break;
    }
    case `PS256`:
    case `PS384`:
    case `PS512`: {
      if (!Ot(e.algorithm, `RSA-PSS`)) throw Dt(`RSA-PSS`);
      let n = parseInt(t.slice(2), 10);
      if (kt(e.algorithm.hash) !== n) throw Dt(`SHA-${n}`, `algorithm.hash`);
      break;
    }
    case `EdDSA`:
      if (e.algorithm.name !== `Ed25519` && e.algorithm.name !== `Ed448`)
        throw Dt(`Ed25519 or Ed448`);
      break;
    case `Ed25519`:
      if (!Ot(e.algorithm, `Ed25519`)) throw Dt(`Ed25519`);
      break;
    case `ES256`:
    case `ES384`:
    case `ES512`: {
      if (!Ot(e.algorithm, `ECDSA`)) throw Dt(`ECDSA`);
      let n = At(t);
      if (e.algorithm.namedCurve !== n) throw Dt(n, `algorithm.namedCurve`);
      break;
    }
    default:
      throw TypeError(`CryptoKey does not support this operation`);
  }
  jt(e, n);
}
function Nt(e, t, ...n) {
  switch (t) {
    case `A128GCM`:
    case `A192GCM`:
    case `A256GCM`: {
      if (!Ot(e.algorithm, `AES-GCM`)) throw Dt(`AES-GCM`);
      let n = parseInt(t.slice(1, 4), 10);
      if (e.algorithm.length !== n) throw Dt(n, `algorithm.length`);
      break;
    }
    case `A128KW`:
    case `A192KW`:
    case `A256KW`: {
      if (!Ot(e.algorithm, `AES-KW`)) throw Dt(`AES-KW`);
      let n = parseInt(t.slice(1, 4), 10);
      if (e.algorithm.length !== n) throw Dt(n, `algorithm.length`);
      break;
    }
    case `ECDH`:
      switch (e.algorithm.name) {
        case `ECDH`:
        case `X25519`:
        case `X448`:
          break;
        default:
          throw Dt(`ECDH, X25519, or X448`);
      }
      break;
    case `PBES2-HS256+A128KW`:
    case `PBES2-HS384+A192KW`:
    case `PBES2-HS512+A256KW`:
      if (!Ot(e.algorithm, `PBKDF2`)) throw Dt(`PBKDF2`);
      break;
    case `RSA-OAEP`:
    case `RSA-OAEP-256`:
    case `RSA-OAEP-384`:
    case `RSA-OAEP-512`: {
      if (!Ot(e.algorithm, `RSA-OAEP`)) throw Dt(`RSA-OAEP`);
      let n = parseInt(t.slice(9), 10) || 1;
      if (kt(e.algorithm.hash) !== n) throw Dt(`SHA-${n}`, `algorithm.hash`);
      break;
    }
    default:
      throw TypeError(`CryptoKey does not support this operation`);
  }
  jt(e, n);
}
var Pt = o(() => {});
function Ft(e, t, ...n) {
  if (((n = n.filter(Boolean)), n.length > 2)) {
    let t = n.pop();
    e += `one of type ${n.join(`, `)}, or ${t}.`;
  } else
    n.length === 2
      ? (e += `one of type ${n[0]} or ${n[1]}.`)
      : (e += `of type ${n[0]}.`);
  return (
    t == null
      ? (e += ` Received ${t}`)
      : typeof t == `function` && t.name
        ? (e += ` Received function ${t.name}`)
        : typeof t == `object` &&
          t &&
          t.constructor?.name &&
          (e += ` Received an instance of ${t.constructor.name}`),
    e
  );
}
function It(e, t, ...n) {
  return Ft(`Key for the ${e} algorithm must be `, t, ...n);
}
var Lt,
  Rt = o(() => {
    Lt = (e, ...t) => Ft(`Key must be `, e, ...t);
  }),
  zt,
  Bt,
  Vt = o(() => {
    Ve(),
      (zt = (e) => (Be(e) ? !0 : e?.[Symbol.toStringTag] === `KeyObject`)),
      (Bt = [`CryptoKey`]);
  });
async function Ht(e, t, n, r, i, a) {
  if (!(t instanceof Uint8Array)) throw TypeError(Lt(t, `Uint8Array`));
  let o = parseInt(e.slice(1, 4), 10),
    s = await A.subtle.importKey(`raw`, t.subarray(o >> 3), `AES-CBC`, !1, [
      `decrypt`,
    ]),
    c = await A.subtle.importKey(
      `raw`,
      t.subarray(0, o >> 3),
      { hash: `SHA-${o << 1}`, name: `HMAC` },
      !1,
      [`sign`],
    ),
    l = We(a, r, n, qe(a.length << 3)),
    u = new Uint8Array((await A.subtle.sign(`HMAC`, c, l)).slice(0, o >> 3)),
    d;
  try {
    d = Tt(i, u);
  } catch {}
  if (!d) throw new lt();
  let f;
  try {
    f = new Uint8Array(
      await A.subtle.decrypt({ iv: r, name: `AES-CBC` }, s, n),
    );
  } catch {}
  if (!f) throw new lt();
  return f;
}
async function Ut(e, t, n, r, i, a) {
  let o;
  t instanceof Uint8Array
    ? (o = await A.subtle.importKey(`raw`, t, `AES-GCM`, !1, [`decrypt`]))
    : (Nt(t, e, `decrypt`), (o = t));
  try {
    return new Uint8Array(
      await A.subtle.decrypt(
        { additionalData: a, iv: r, name: `AES-GCM`, tagLength: 128 },
        o,
        We(n, i),
      ),
    );
  } catch {
    throw new lt();
  }
}
var Wt,
  Gt = o(() => {
    $e(),
      St(),
      wt(),
      Et(),
      L(),
      Ve(),
      Pt(),
      Rt(),
      Vt(),
      (Wt = async (e, t, n, r, i, a) => {
        if (!Be(t) && !(t instanceof Uint8Array))
          throw TypeError(Lt(t, ...Bt, `Uint8Array`));
        if (!r) throw new P(`JWE Initialization Vector missing`);
        if (!i) throw new P(`JWE Authentication Tag missing`);
        switch ((xt(e, r), e)) {
          case `A128CBC-HS256`:
          case `A192CBC-HS384`:
          case `A256CBC-HS512`:
            return (
              t instanceof Uint8Array && Ct(t, parseInt(e.slice(-3), 10)),
              Ht(e, t, n, r, i, a)
            );
          case `A128GCM`:
          case `A192GCM`:
          case `A256GCM`:
            return (
              t instanceof Uint8Array && Ct(t, parseInt(e.slice(1, 4), 10)),
              Ut(e, t, n, r, i, a)
            );
          default:
            throw new N(`Unsupported JWE Content Encryption Algorithm`);
        }
      });
  }),
  Kt,
  qt = o(() => {
    Kt = (...e) => {
      let t = e.filter(Boolean);
      if (t.length === 0 || t.length === 1) return !0;
      let n;
      for (let e of t) {
        let t = Object.keys(e);
        if (!n || n.size === 0) {
          n = new Set(t);
          continue;
        }
        for (let e of t) {
          if (n.has(e)) return !1;
          n.add(e);
        }
      }
      return !0;
    };
  });
function Jt(e) {
  return typeof e == `object` && !!e;
}
function Yt(e) {
  if (!Jt(e) || Object.prototype.toString.call(e) !== `[object Object]`)
    return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
var Xt = o(() => {}),
  Zt,
  Qt = o(() => {
    Zt = [{ hash: `SHA-256`, name: `HMAC` }, !0, [`sign`]];
  });
function $t(e, t) {
  if (e.algorithm.length !== parseInt(t.slice(1, 4), 10))
    throw TypeError(`Invalid key size for alg: ${t}`);
}
function en(e, t, n) {
  if (Be(e)) return Nt(e, t, n), e;
  if (e instanceof Uint8Array)
    return A.subtle.importKey(`raw`, e, `AES-KW`, !0, [n]);
  throw TypeError(Lt(e, ...Bt, `Uint8Array`));
}
var tn,
  nn,
  rn = o(() => {
    Qt(),
      Ve(),
      Pt(),
      Rt(),
      Vt(),
      (tn = async (e, t, n) => {
        let r = await en(t, e, `wrapKey`);
        $t(r, e);
        let i = await A.subtle.importKey(`raw`, n, ...Zt);
        return new Uint8Array(await A.subtle.wrapKey(`raw`, i, r, `AES-KW`));
      }),
      (nn = async (e, t, n) => {
        let r = await en(t, e, `unwrapKey`);
        $t(r, e);
        let i = await A.subtle.unwrapKey(`raw`, n, r, `AES-KW`, ...Zt);
        return new Uint8Array(await A.subtle.exportKey(`raw`, i));
      });
  });
async function an(e, t, n, r, i = new Uint8Array(), a = new Uint8Array()) {
  if (!Be(e)) throw TypeError(Lt(e, ...Bt));
  if ((Nt(e, `ECDH`), !Be(t))) throw TypeError(Lt(t, ...Bt));
  Nt(t, `ECDH`, `deriveBits`);
  let o = We(Ye(j.encode(n)), Ye(i), Ye(a), Je(r)),
    s;
  return (
    (s =
      e.algorithm.name === `X25519`
        ? 256
        : e.algorithm.name === `X448`
          ? 448
          : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) <<
            3),
    Xe(
      new Uint8Array(
        await A.subtle.deriveBits({ name: e.algorithm.name, public: e }, t, s),
      ),
      r,
      o,
    )
  );
}
async function on(e) {
  if (!Be(e)) throw TypeError(Lt(e, ...Bt));
  return A.subtle.generateKey(e.algorithm, !0, [`deriveBits`]);
}
function sn(e) {
  if (!Be(e)) throw TypeError(Lt(e, ...Bt));
  return (
    [`P-256`, `P-384`, `P-521`].includes(e.algorithm.namedCurve) ||
    e.algorithm.name === `X25519` ||
    e.algorithm.name === `X448`
  );
}
var cn = o(() => {
  $e(), Ve(), Pt(), Rt(), Vt();
});
function ln(e) {
  if (!(e instanceof Uint8Array) || e.length < 8)
    throw new P(`PBES2 Salt Input must be 8 or more octets`);
}
var un = o(() => {
  L();
});
function dn(e, t) {
  if (e instanceof Uint8Array)
    return A.subtle.importKey(`raw`, e, `PBKDF2`, !1, [`deriveBits`]);
  if (Be(e)) return Nt(e, t, `deriveBits`, `deriveKey`), e;
  throw TypeError(Lt(e, ...Bt, `Uint8Array`));
}
async function fn(e, t, n, r) {
  ln(e);
  let i = Ge(t, e),
    a = parseInt(t.slice(13, 16), 10),
    o = {
      hash: `SHA-${t.slice(8, 11)}`,
      iterations: n,
      name: `PBKDF2`,
      salt: i,
    },
    s = { length: a, name: `AES-KW` },
    c = await dn(r, t);
  if (c.usages.includes(`deriveBits`))
    return new Uint8Array(await A.subtle.deriveBits(o, c, a));
  if (c.usages.includes(`deriveKey`))
    return A.subtle.deriveKey(o, c, s, !1, [`wrapKey`, `unwrapKey`]);
  throw TypeError(
    `PBKDF2 key "usages" must include "deriveBits" or "deriveKey"`,
  );
}
var pn,
  mn,
  hn = o(() => {
    _t(),
      $e(),
      rt(),
      rn(),
      un(),
      Ve(),
      Pt(),
      Rt(),
      Vt(),
      (pn = async (e, t, n, r = 2048, i = gt(new Uint8Array(16))) => {
        let a = await fn(i, e, r, t);
        return {
          encryptedKey: await tn(e.slice(-6), a, n),
          p2c: r,
          p2s: tt(i),
        };
      }),
      (mn = async (e, t, n, r, i) => {
        let a = await fn(i, e, r, t);
        return nn(e.slice(-6), a, n);
      });
  });
function gn(e) {
  switch (e) {
    case `RSA-OAEP`:
    case `RSA-OAEP-256`:
    case `RSA-OAEP-384`:
    case `RSA-OAEP-512`:
      return `RSA-OAEP`;
    default:
      throw new N(
        `alg ${e} is not supported either by JOSE or your javascript runtime`,
      );
  }
}
var _n = o(() => {
    L();
  }),
  vn,
  yn = o(() => {
    vn = (e, t) => {
      if (e.startsWith(`RS`) || e.startsWith(`PS`)) {
        let { modulusLength: n } = t.algorithm;
        if (typeof n != `number` || n < 2048)
          throw TypeError(
            `${e} requires key modulusLength to be 2048 bits or larger`,
          );
      }
    };
  }),
  bn,
  xn,
  Sn = o(() => {
    _n(),
      Qt(),
      Ve(),
      Pt(),
      yn(),
      Rt(),
      Vt(),
      (bn = async (e, t, n) => {
        if (!Be(t)) throw TypeError(Lt(t, ...Bt));
        if (
          (Nt(t, e, `encrypt`, `wrapKey`),
          vn(e, t),
          t.usages.includes(`encrypt`))
        )
          return new Uint8Array(await A.subtle.encrypt(gn(e), t, n));
        if (t.usages.includes(`wrapKey`)) {
          let r = await A.subtle.importKey(`raw`, n, ...Zt);
          return new Uint8Array(await A.subtle.wrapKey(`raw`, r, t, gn(e)));
        }
        throw TypeError(
          `RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation`,
        );
      }),
      (xn = async (e, t, n) => {
        if (!Be(t)) throw TypeError(Lt(t, ...Bt));
        if (
          (Nt(t, e, `decrypt`, `unwrapKey`),
          vn(e, t),
          t.usages.includes(`decrypt`))
        )
          return new Uint8Array(await A.subtle.decrypt(gn(e), t, n));
        if (t.usages.includes(`unwrapKey`)) {
          let r = await A.subtle.unwrapKey(`raw`, n, t, gn(e), ...Zt);
          return new Uint8Array(await A.subtle.exportKey(`raw`, r));
        }
        throw TypeError(
          `RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation`,
        );
      });
  });
function Cn(e) {
  return Yt(e) && typeof e.kty == `string`;
}
function wn(e) {
  return e.kty !== `oct` && typeof e.d == `string`;
}
function Tn(e) {
  return e.kty !== `oct` && e.d === void 0;
}
function En(e) {
  return Cn(e) && e.kty === `oct` && typeof e.k == `string`;
}
var Dn = o(() => {
  Xt();
});
function On(e) {
  let t, n;
  switch (e.kty) {
    case `RSA`:
      switch (e.alg) {
        case `PS256`:
        case `PS384`:
        case `PS512`:
          (t = { name: `RSA-PSS`, hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `RS256`:
        case `RS384`:
        case `RS512`:
          (t = { name: `RSASSA-PKCS1-v1_5`, hash: `SHA-${e.alg.slice(-3)}` }),
            (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `RSA-OAEP`:
        case `RSA-OAEP-256`:
        case `RSA-OAEP-384`:
        case `RSA-OAEP-512`:
          (t = {
            name: `RSA-OAEP`,
            hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`,
          }),
            (n = e.d ? [`decrypt`, `unwrapKey`] : [`encrypt`, `wrapKey`]);
          break;
        default:
          throw new N(
            `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`,
          );
      }
      break;
    case `EC`:
      switch (e.alg) {
        case `ES256`:
          (t = { name: `ECDSA`, namedCurve: `P-256` }),
            (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `ES384`:
          (t = { name: `ECDSA`, namedCurve: `P-384` }),
            (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `ES512`:
          (t = { name: `ECDSA`, namedCurve: `P-521` }),
            (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `ECDH-ES`:
        case `ECDH-ES+A128KW`:
        case `ECDH-ES+A192KW`:
        case `ECDH-ES+A256KW`:
          (t = { name: `ECDH`, namedCurve: e.crv }),
            (n = e.d ? [`deriveBits`] : []);
          break;
        default:
          throw new N(
            `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`,
          );
      }
      break;
    case `OKP`:
      switch (e.alg) {
        case `Ed25519`:
          (t = { name: `Ed25519` }), (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `EdDSA`:
          (t = { name: e.crv }), (n = e.d ? [`sign`] : [`verify`]);
          break;
        case `ECDH-ES`:
        case `ECDH-ES+A128KW`:
        case `ECDH-ES+A192KW`:
        case `ECDH-ES+A256KW`:
          (t = { name: e.crv }), (n = e.d ? [`deriveBits`] : []);
          break;
        default:
          throw new N(
            `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`,
          );
      }
      break;
    default:
      throw new N(
        `Invalid or unsupported JWK "kty" (Key Type) Parameter value`,
      );
  }
  return { algorithm: t, keyUsages: n };
}
var kn,
  An = o(() => {
    Ve(),
      L(),
      (kn = async (e) => {
        if (!e.alg)
          throw TypeError(
            `"alg" argument is required when "jwk.alg" is not present`,
          );
        let { algorithm: t, keyUsages: n } = On(e),
          r = [t, e.ext ?? !1, e.key_ops ?? n],
          i = { ...e };
        return delete i.alg, delete i.use, A.subtle.importKey(`jwk`, i, ...r);
      });
  }),
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn = o(() => {
    Dn(),
      rt(),
      An(),
      (jn = (e) => M(e)),
      (Pn = (e) => e?.[Symbol.toStringTag] === `KeyObject`),
      (Fn = async (e, t, n, r, i = !1) => {
        let a = e.get(t);
        if (a?.[r]) return a[r];
        let o = await kn({ ...n, alg: r });
        return i && Object.freeze(t), a ? (a[r] = o) : e.set(t, { [r]: o }), o;
      }),
      (In = (e, t) => {
        if (Pn(e)) {
          let n = e.export({ format: `jwk` });
          return (
            delete n.d,
            delete n.dp,
            delete n.dq,
            delete n.p,
            delete n.q,
            delete n.qi,
            n.k ? jn(n.k) : ((Nn ||= new WeakMap()), Fn(Nn, e, n, t))
          );
        }
        return Cn(e)
          ? e.k
            ? M(e.k)
            : ((Nn ||= new WeakMap()), Fn(Nn, e, e, t, !0))
          : e;
      }),
      (Ln = (e, t) => {
        if (Pn(e)) {
          let n = e.export({ format: `jwk` });
          return n.k ? jn(n.k) : ((Mn ||= new WeakMap()), Fn(Mn, e, n, t));
        }
        return Cn(e)
          ? e.k
            ? M(e.k)
            : ((Mn ||= new WeakMap()), Fn(Mn, e, e, t, !0))
          : e;
      }),
      (Rn = { normalizePublicKey: In, normalizePrivateKey: Ln });
  });
function Bn(e) {
  switch (e) {
    case `A128GCM`:
      return 128;
    case `A192GCM`:
      return 192;
    case `A256GCM`:
    case `A128CBC-HS256`:
      return 256;
    case `A192CBC-HS384`:
      return 384;
    case `A256CBC-HS512`:
      return 512;
    default:
      throw new N(`Unsupported JWE Algorithm: ${e}`);
  }
}
var Vn,
  Hn = o(() => {
    L(), _t(), (Vn = (e) => gt(new Uint8Array(Bn(e) >> 3)));
  }),
  Un,
  Wn = o(() => {
    Un = (e, t) =>
      `-----BEGIN ${t}-----\n${(e.match(/.{1,64}/g) || []).join(`
`)}\n-----END ${t}-----`;
  });
function Gn(e) {
  let t = [],
    n = 0;
  for (; n < e.length; ) {
    let r = Kn(e.subarray(n));
    t.push(r), (n += r.byteLength);
  }
  return t;
}
function Kn(e) {
  let t = 0,
    n = e[0] & 31;
  if ((t++, n === 31)) {
    for (n = 0; e[t] >= 128; ) (n = n * 128 + e[t] - 128), t++;
    (n = n * 128 + e[t] - 128), t++;
  }
  let r = 0;
  if (e[t] < 128) (r = e[t]), t++;
  else if (r === 128) {
    for (r = 0; e[t + r] !== 0 || e[t + r + 1] !== 0; ) {
      if (r > e.byteLength) throw TypeError(`invalid indefinite form length`);
      r++;
    }
    let n = t + r + 2;
    return {
      byteLength: n,
      contents: e.subarray(t, t + r),
      raw: e.subarray(0, n),
    };
  } else {
    let n = e[t] & 127;
    t++, (r = 0);
    for (let i = 0; i < n; i++) (r = r * 256 + e[t]), t++;
  }
  let i = t + r;
  return { byteLength: i, contents: e.subarray(t, i), raw: e.subarray(0, i) };
}
function qn(e) {
  let t = Gn(Gn(Kn(e).contents)[0].contents);
  return et(t[t[0].raw[0] === 160 ? 6 : 5].raw);
}
function Jn(e) {
  return Un(
    qn(nt(e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ``))),
    `PUBLIC KEY`,
  );
}
var Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir = o(() => {
    Ve(),
      Rt(),
      rt(),
      Wn(),
      L(),
      Vt(),
      (Yn = async (e, t, n) => {
        if (!Be(n)) throw TypeError(Lt(n, ...Bt));
        if (!n.extractable) throw TypeError(`CryptoKey is not extractable`);
        if (n.type !== e) throw TypeError(`key is not a ${e} key`);
        return Un(
          et(new Uint8Array(await A.subtle.exportKey(t, n))),
          `${e.toUpperCase()} KEY`,
        );
      }),
      (Xn = (e) => Yn(`public`, `spki`, e)),
      (Zn = (e) => Yn(`private`, `pkcs8`, e)),
      (Qn = (e, t, n = 0) => {
        n === 0 && (t.unshift(t.length), t.unshift(6));
        let r = e.indexOf(t[0], n);
        if (r === -1) return !1;
        let i = e.subarray(r, r + t.length);
        return i.length === t.length
          ? i.every((e, n) => e === t[n]) || Qn(e, t, r + 1)
          : !1;
      }),
      ($n = (e) => {
        switch (!0) {
          case Qn(e, [42, 134, 72, 206, 61, 3, 1, 7]):
            return `P-256`;
          case Qn(e, [43, 129, 4, 0, 34]):
            return `P-384`;
          case Qn(e, [43, 129, 4, 0, 35]):
            return `P-521`;
          case Qn(e, [43, 101, 110]):
            return `X25519`;
          case Qn(e, [43, 101, 111]):
            return `X448`;
          case Qn(e, [43, 101, 112]):
            return `Ed25519`;
          case Qn(e, [43, 101, 113]):
            return `Ed448`;
          default:
            throw new N(
              `Invalid or unsupported EC Key Curve or OKP Key Sub Type`,
            );
        }
      }),
      (er = async (e, t, n, r, i) => {
        let a,
          o,
          s = new Uint8Array(
            atob(n.replace(e, ``))
              .split(``)
              .map((e) => e.charCodeAt(0)),
          ),
          c = t === `spki`;
        switch (r) {
          case `PS256`:
          case `PS384`:
          case `PS512`:
            (a = { name: `RSA-PSS`, hash: `SHA-${r.slice(-3)}` }),
              (o = c ? [`verify`] : [`sign`]);
            break;
          case `RS256`:
          case `RS384`:
          case `RS512`:
            (a = { name: `RSASSA-PKCS1-v1_5`, hash: `SHA-${r.slice(-3)}` }),
              (o = c ? [`verify`] : [`sign`]);
            break;
          case `RSA-OAEP`:
          case `RSA-OAEP-256`:
          case `RSA-OAEP-384`:
          case `RSA-OAEP-512`:
            (a = {
              name: `RSA-OAEP`,
              hash: `SHA-${parseInt(r.slice(-3), 10) || 1}`,
            }),
              (o = c ? [`encrypt`, `wrapKey`] : [`decrypt`, `unwrapKey`]);
            break;
          case `ES256`:
            (a = { name: `ECDSA`, namedCurve: `P-256` }),
              (o = c ? [`verify`] : [`sign`]);
            break;
          case `ES384`:
            (a = { name: `ECDSA`, namedCurve: `P-384` }),
              (o = c ? [`verify`] : [`sign`]);
            break;
          case `ES512`:
            (a = { name: `ECDSA`, namedCurve: `P-521` }),
              (o = c ? [`verify`] : [`sign`]);
            break;
          case `ECDH-ES`:
          case `ECDH-ES+A128KW`:
          case `ECDH-ES+A192KW`:
          case `ECDH-ES+A256KW`: {
            let e = $n(s);
            (a = e.startsWith(`P-`)
              ? { name: `ECDH`, namedCurve: e }
              : { name: e }),
              (o = c ? [] : [`deriveBits`]);
            break;
          }
          case `Ed25519`:
            (a = { name: `Ed25519` }), (o = c ? [`verify`] : [`sign`]);
            break;
          case `EdDSA`:
            (a = { name: $n(s) }), (o = c ? [`verify`] : [`sign`]);
            break;
          default:
            throw new N(`Invalid or unsupported "alg" (Algorithm) value`);
        }
        return A.subtle.importKey(t, s, a, i?.extractable ?? !1, o);
      }),
      (tr = (e, t, n) =>
        er(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, `pkcs8`, e, t, n)),
      (nr = (e, t, n) =>
        er(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, `spki`, e, t, n)),
      (rr = (e, t, n) => {
        let r;
        try {
          r = Jn(e);
        } catch (e) {
          throw TypeError(`Failed to parse the X.509 certificate`, {
            cause: e,
          });
        }
        return nr(r, t, n);
      });
  });
async function ar(e, t, n) {
  if (typeof e != `string` || e.indexOf(`-----BEGIN PUBLIC KEY-----`) !== 0)
    throw TypeError(`"spki" must be SPKI formatted string`);
  return nr(e, t, n);
}
async function or(e, t, n) {
  if (typeof e != `string` || e.indexOf(`-----BEGIN CERTIFICATE-----`) !== 0)
    throw TypeError(`"x509" must be X.509 formatted string`);
  return rr(e, t, n);
}
async function sr(e, t, n) {
  if (typeof e != `string` || e.indexOf(`-----BEGIN PRIVATE KEY-----`) !== 0)
    throw TypeError(`"pkcs8" must be PKCS#8 formatted string`);
  return tr(e, t, n);
}
async function cr(e, t) {
  if (!Yt(e)) throw TypeError(`JWK must be an object`);
  switch (((t ||= e.alg), e.kty)) {
    case `oct`:
      if (typeof e.k != `string` || !e.k)
        throw TypeError(`missing "k" (Key Value) Parameter value`);
      return M(e.k);
    case `RSA`:
      if (`oth` in e && e.oth !== void 0)
        throw new N(
          `RSA JWK "oth" (Other Primes Info) Parameter value is not supported`,
        );
    case `EC`:
    case `OKP`:
      return kn({ ...e, alg: t });
    default:
      throw new N(`Unsupported "kty" (Key Type) Parameter value`);
  }
}
var lr = o(() => {
  rt(), ir(), An(), L(), Xt();
});
function ur(e, t, n, r) {
  t.startsWith(`HS`) ||
  t === `dir` ||
  t.startsWith(`PBES2`) ||
  /^A\d{3}(?:GCM)?KW$/.test(t)
    ? pr(t, n, r, e)
    : mr(t, n, r, e);
}
var dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r = o(() => {
    Rt(),
      Vt(),
      Dn(),
      (dr = (e) => e?.[Symbol.toStringTag]),
      (fr = (e, t, n) => {
        if (t.use !== void 0 && t.use !== `sig`)
          throw TypeError(
            `Invalid key for this operation, when present its use must be sig`,
          );
        if (t.key_ops !== void 0 && t.key_ops.includes?.(n) !== !0)
          throw TypeError(
            `Invalid key for this operation, when present its key_ops must include ${n}`,
          );
        if (t.alg !== void 0 && t.alg !== e)
          throw TypeError(
            `Invalid key for this operation, when present its alg must be ${e}`,
          );
        return !0;
      }),
      (pr = (e, t, n, r) => {
        if (!(t instanceof Uint8Array)) {
          if (r && Cn(t)) {
            if (En(t) && fr(e, t, n)) return;
            throw TypeError(
              `JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`,
            );
          }
          if (!zt(t))
            throw TypeError(
              It(e, t, ...Bt, `Uint8Array`, r ? `JSON Web Key` : null),
            );
          if (t.type !== `secret`)
            throw TypeError(
              `${dr(t)} instances for symmetric algorithms must be of type "secret"`,
            );
        }
      }),
      (mr = (e, t, n, r) => {
        if (r && Cn(t))
          switch (n) {
            case `sign`:
              if (wn(t) && fr(e, t, n)) return;
              throw TypeError(
                `JSON Web Key for this operation be a private JWK`,
              );
            case `verify`:
              if (Tn(t) && fr(e, t, n)) return;
              throw TypeError(
                `JSON Web Key for this operation be a public JWK`,
              );
          }
        if (!zt(t)) throw TypeError(It(e, t, ...Bt, r ? `JSON Web Key` : null));
        if (t.type === `secret`)
          throw TypeError(
            `${dr(t)} instances for asymmetric algorithms must not be of type "secret"`,
          );
        if (n === `sign` && t.type === `public`)
          throw TypeError(
            `${dr(t)} instances for asymmetric algorithm signing must be of type "private"`,
          );
        if (n === `decrypt` && t.type === `public`)
          throw TypeError(
            `${dr(t)} instances for asymmetric algorithm decryption must be of type "private"`,
          );
        if (t.algorithm && n === `verify` && t.type === `private`)
          throw TypeError(
            `${dr(t)} instances for asymmetric algorithm verifying must be of type "public"`,
          );
        if (t.algorithm && n === `encrypt` && t.type === `private`)
          throw TypeError(
            `${dr(t)} instances for asymmetric algorithm encryption must be of type "public"`,
          );
      }),
      (hr = ur.bind(void 0, !1)),
      (gr = ur.bind(void 0, !0));
  });
async function vr(e, t, n, r, i) {
  if (!(n instanceof Uint8Array)) throw TypeError(Lt(n, `Uint8Array`));
  let a = parseInt(e.slice(1, 4), 10),
    o = await A.subtle.importKey(`raw`, n.subarray(a >> 3), `AES-CBC`, !1, [
      `encrypt`,
    ]),
    s = await A.subtle.importKey(
      `raw`,
      n.subarray(0, a >> 3),
      { hash: `SHA-${a << 1}`, name: `HMAC` },
      !1,
      [`sign`],
    ),
    c = new Uint8Array(
      await A.subtle.encrypt({ iv: r, name: `AES-CBC` }, o, t),
    ),
    l = We(i, r, c, qe(i.length << 3));
  return {
    ciphertext: c,
    tag: new Uint8Array((await A.subtle.sign(`HMAC`, s, l)).slice(0, a >> 3)),
    iv: r,
  };
}
async function yr(e, t, n, r, i) {
  let a;
  n instanceof Uint8Array
    ? (a = await A.subtle.importKey(`raw`, n, `AES-GCM`, !1, [`encrypt`]))
    : (Nt(n, e, `encrypt`), (a = n));
  let o = new Uint8Array(
      await A.subtle.encrypt(
        { additionalData: i, iv: r, name: `AES-GCM`, tagLength: 128 },
        a,
        t,
      ),
    ),
    s = o.slice(-16);
  return { ciphertext: o.slice(0, -16), tag: s, iv: r };
}
var br,
  xr = o(() => {
    $e(),
      St(),
      wt(),
      Ve(),
      Pt(),
      Rt(),
      bt(),
      L(),
      Vt(),
      (br = async (e, t, n, r, i) => {
        if (!Be(n) && !(n instanceof Uint8Array))
          throw TypeError(Lt(n, ...Bt, `Uint8Array`));
        switch ((r ? xt(e, r) : (r = yt(e)), e)) {
          case `A128CBC-HS256`:
          case `A192CBC-HS384`:
          case `A256CBC-HS512`:
            return (
              n instanceof Uint8Array && Ct(n, parseInt(e.slice(-3), 10)),
              vr(e, t, n, r, i)
            );
          case `A128GCM`:
          case `A192GCM`:
          case `A256GCM`:
            return (
              n instanceof Uint8Array && Ct(n, parseInt(e.slice(1, 4), 10)),
              yr(e, t, n, r, i)
            );
          default:
            throw new N(`Unsupported JWE Content Encryption Algorithm`);
        }
      });
  });
async function Sr(e, t, n, r) {
  let i = await br(e.slice(0, 7), n, t, r, new Uint8Array());
  return { encryptedKey: i.ciphertext, iv: tt(i.iv), tag: tt(i.tag) };
}
async function Cr(e, t, n, r, i) {
  return Wt(e.slice(0, 7), t, n, r, i, new Uint8Array());
}
var wr = o(() => {
  xr(), Gt(), rt();
});
async function Tr(e, t, n, r, i) {
  switch (
    (hr(e, t, `decrypt`), (t = (await Rn.normalizePrivateKey?.(t, e)) || t), e)
  ) {
    case `dir`:
      if (n !== void 0) throw new P(`Encountered unexpected JWE Encrypted Key`);
      return t;
    case `ECDH-ES`:
      if (n !== void 0) throw new P(`Encountered unexpected JWE Encrypted Key`);
    case `ECDH-ES+A128KW`:
    case `ECDH-ES+A192KW`:
    case `ECDH-ES+A256KW`: {
      if (!Yt(r.epk))
        throw new P(
          `JOSE Header "epk" (Ephemeral Public Key) missing or invalid`,
        );
      if (!sn(t))
        throw new N(
          `ECDH with the provided key is not allowed or not supported by your javascript runtime`,
        );
      let i = await cr(r.epk, e),
        a,
        o;
      if (r.apu !== void 0) {
        if (typeof r.apu != `string`)
          throw new P(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          a = M(r.apu);
        } catch {
          throw new P(`Failed to base64url decode the apu`);
        }
      }
      if (r.apv !== void 0) {
        if (typeof r.apv != `string`)
          throw new P(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          o = M(r.apv);
        } catch {
          throw new P(`Failed to base64url decode the apv`);
        }
      }
      let s = await an(
        i,
        t,
        e === `ECDH-ES` ? r.enc : e,
        e === `ECDH-ES` ? Bn(r.enc) : parseInt(e.slice(-5, -2), 10),
        a,
        o,
      );
      if (e === `ECDH-ES`) return s;
      if (n === void 0) throw new P(`JWE Encrypted Key missing`);
      return nn(e.slice(-6), s, n);
    }
    case `RSA1_5`:
    case `RSA-OAEP`:
    case `RSA-OAEP-256`:
    case `RSA-OAEP-384`:
    case `RSA-OAEP-512`:
      if (n === void 0) throw new P(`JWE Encrypted Key missing`);
      return xn(e, t, n);
    case `PBES2-HS256+A128KW`:
    case `PBES2-HS384+A192KW`:
    case `PBES2-HS512+A256KW`: {
      if (n === void 0) throw new P(`JWE Encrypted Key missing`);
      if (typeof r.p2c != `number`)
        throw new P(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      let a = i?.maxPBES2Count || 1e4;
      if (r.p2c > a)
        throw new P(
          `JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`,
        );
      if (typeof r.p2s != `string`)
        throw new P(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let o;
      try {
        o = M(r.p2s);
      } catch {
        throw new P(`Failed to base64url decode the p2s`);
      }
      return mn(e, t, n, r.p2c, o);
    }
    case `A128KW`:
    case `A192KW`:
    case `A256KW`:
      if (n === void 0) throw new P(`JWE Encrypted Key missing`);
      return nn(e, t, n);
    case `A128GCMKW`:
    case `A192GCMKW`:
    case `A256GCMKW`: {
      if (n === void 0) throw new P(`JWE Encrypted Key missing`);
      if (typeof r.iv != `string`)
        throw new P(
          `JOSE Header "iv" (Initialization Vector) missing or invalid`,
        );
      if (typeof r.tag != `string`)
        throw new P(
          `JOSE Header "tag" (Authentication Tag) missing or invalid`,
        );
      let i;
      try {
        i = M(r.iv);
      } catch {
        throw new P(`Failed to base64url decode the iv`);
      }
      let a;
      try {
        a = M(r.tag);
      } catch {
        throw new P(`Failed to base64url decode the tag`);
      }
      return Cr(e, t, n, i, a);
    }
    default:
      throw new N(`Invalid or unsupported "alg" (JWE Algorithm) header value`);
  }
}
var Er = o(() => {
  rn(), cn(), hn(), Sn(), rt(), zn(), L(), Hn(), lr(), _r(), Xt(), wr();
});
function Dr(e, t, n, r, i) {
  if (i.crit !== void 0 && r?.crit === void 0)
    throw new e(
      `"crit" (Critical) Header Parameter MUST be integrity protected`,
    );
  if (!r || r.crit === void 0) return new Set();
  if (
    !Array.isArray(r.crit) ||
    r.crit.length === 0 ||
    r.crit.some((e) => typeof e != `string` || e.length === 0)
  )
    throw new e(
      `"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present`,
    );
  let a;
  a = n === void 0 ? t : new Map([...Object.entries(n), ...t.entries()]);
  for (let t of r.crit) {
    if (!a.has(t))
      throw new N(`Extension Header Parameter "${t}" is not recognized`);
    if (i[t] === void 0)
      throw new e(`Extension Header Parameter "${t}" is missing`);
    if (a.get(t) && r[t] === void 0)
      throw new e(
        `Extension Header Parameter "${t}" MUST be integrity protected`,
      );
  }
  return new Set(r.crit);
}
var Or = o(() => {
    L();
  }),
  kr,
  Ar = o(() => {
    kr = (e, t) => {
      if (
        t !== void 0 &&
        (!Array.isArray(t) || t.some((e) => typeof e != `string`))
      )
        throw TypeError(`"${e}" option must be an array of strings`);
      if (t) return new Set(t);
    };
  });
async function jr(e, t, n) {
  if (!Yt(e)) throw new P(`Flattened JWE must be an object`);
  if (e.protected === void 0 && e.header === void 0 && e.unprotected === void 0)
    throw new P(`JOSE Header missing`);
  if (e.iv !== void 0 && typeof e.iv != `string`)
    throw new P(`JWE Initialization Vector incorrect type`);
  if (typeof e.ciphertext != `string`)
    throw new P(`JWE Ciphertext missing or incorrect type`);
  if (e.tag !== void 0 && typeof e.tag != `string`)
    throw new P(`JWE Authentication Tag incorrect type`);
  if (e.protected !== void 0 && typeof e.protected != `string`)
    throw new P(`JWE Protected Header incorrect type`);
  if (e.encrypted_key !== void 0 && typeof e.encrypted_key != `string`)
    throw new P(`JWE Encrypted Key incorrect type`);
  if (e.aad !== void 0 && typeof e.aad != `string`)
    throw new P(`JWE AAD incorrect type`);
  if (e.header !== void 0 && !Yt(e.header))
    throw new P(`JWE Shared Unprotected Header incorrect type`);
  if (e.unprotected !== void 0 && !Yt(e.unprotected))
    throw new P(`JWE Per-Recipient Unprotected Header incorrect type`);
  let r;
  if (e.protected)
    try {
      let t = M(e.protected);
      r = JSON.parse(Ze.decode(t));
    } catch {
      throw new P(`JWE Protected Header is invalid`);
    }
  if (!Kt(r, e.header, e.unprotected))
    throw new P(
      `JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint`,
    );
  let i = { ...r, ...e.header, ...e.unprotected };
  if ((Dr(P, new Map(), n?.crit, r, i), i.zip !== void 0))
    throw new N(
      `JWE "zip" (Compression Algorithm) Header Parameter is not supported.`,
    );
  let { alg: a, enc: o } = i;
  if (typeof a != `string` || !a)
    throw new P(`missing JWE Algorithm (alg) in JWE Header`);
  if (typeof o != `string` || !o)
    throw new P(`missing JWE Encryption Algorithm (enc) in JWE Header`);
  let s = n && kr(`keyManagementAlgorithms`, n.keyManagementAlgorithms),
    c = n && kr(`contentEncryptionAlgorithms`, n.contentEncryptionAlgorithms);
  if ((s && !s.has(a)) || (!s && a.startsWith(`PBES2`)))
    throw new ct(`"alg" (Algorithm) Header Parameter value not allowed`);
  if (c && !c.has(o))
    throw new ct(
      `"enc" (Encryption Algorithm) Header Parameter value not allowed`,
    );
  let l;
  if (e.encrypted_key !== void 0)
    try {
      l = M(e.encrypted_key);
    } catch {
      throw new P(`Failed to base64url decode the encrypted_key`);
    }
  let u = !1;
  typeof t == `function` && ((t = await t(r, e)), (u = !0));
  let d;
  try {
    d = await Tr(a, t, l, i, n);
  } catch (e) {
    if (e instanceof TypeError || e instanceof P || e instanceof N) throw e;
    d = Vn(o);
  }
  let f, p;
  if (e.iv !== void 0)
    try {
      f = M(e.iv);
    } catch {
      throw new P(`Failed to base64url decode the iv`);
    }
  if (e.tag !== void 0)
    try {
      p = M(e.tag);
    } catch {
      throw new P(`Failed to base64url decode the tag`);
    }
  let m = j.encode(e.protected ?? ``),
    h;
  h = e.aad === void 0 ? m : We(m, j.encode(`.`), j.encode(e.aad));
  let g;
  try {
    g = M(e.ciphertext);
  } catch {
    throw new P(`Failed to base64url decode the ciphertext`);
  }
  let _ = { plaintext: await Wt(o, d, g, f, p, h) };
  if ((e.protected !== void 0 && (_.protectedHeader = r), e.aad !== void 0))
    try {
      _.additionalAuthenticatedData = M(e.aad);
    } catch {
      throw new P(`Failed to base64url decode the aad`);
    }
  return (
    e.unprotected !== void 0 && (_.sharedUnprotectedHeader = e.unprotected),
    e.header !== void 0 && (_.unprotectedHeader = e.header),
    u ? { ..._, key: t } : _
  );
}
var Mr = o(() => {
  rt(), Gt(), L(), qt(), Xt(), Er(), $e(), Hn(), Or(), Ar();
});
async function Nr(e, t, n) {
  if ((e instanceof Uint8Array && (e = Ze.decode(e)), typeof e != `string`))
    throw new P(`Compact JWE must be a string or Uint8Array`);
  let { 0: r, 1: i, 2: a, 3: o, 4: s, length: c } = e.split(`.`);
  if (c !== 5) throw new P(`Invalid Compact JWE`);
  let l = await jr(
      {
        ciphertext: o,
        iv: a || void 0,
        protected: r,
        tag: s || void 0,
        encrypted_key: i || void 0,
      },
      t,
      n,
    ),
    u = { plaintext: l.plaintext, protectedHeader: l.protectedHeader };
  return typeof t == `function` ? { ...u, key: l.key } : u;
}
var Pr = o(() => {
  Mr(), L(), $e();
});
async function Fr(e, t, n) {
  if (!Yt(e)) throw new P(`General JWE must be an object`);
  if (!Array.isArray(e.recipients) || !e.recipients.every(Yt))
    throw new P(`JWE Recipients missing or incorrect type`);
  if (!e.recipients.length) throw new P(`JWE Recipients has no members`);
  for (let r of e.recipients)
    try {
      return await jr(
        {
          aad: e.aad,
          ciphertext: e.ciphertext,
          encrypted_key: r.encrypted_key,
          header: r.header,
          iv: e.iv,
          protected: e.protected,
          tag: e.tag,
          unprotected: e.unprotected,
        },
        t,
        n,
      );
    } catch {}
  throw new lt();
}
var Ir = o(() => {
    Mr(), L(), Xt();
  }),
  Lr,
  Rr = o(() => {
    Lr = Symbol();
  }),
  zr,
  Br = o(() => {
    Ve(),
      Rt(),
      rt(),
      Vt(),
      (zr = async (e) => {
        if (e instanceof Uint8Array) return { kty: `oct`, k: tt(e) };
        if (!Be(e)) throw TypeError(Lt(e, ...Bt, `Uint8Array`));
        if (!e.extractable)
          throw TypeError(
            `non-extractable CryptoKey cannot be exported as a JWK`,
          );
        let {
          ext: t,
          key_ops: n,
          alg: r,
          use: i,
          ...a
        } = await A.subtle.exportKey(`jwk`, e);
        return a;
      });
  });
async function Vr(e) {
  return Xn(e);
}
async function Hr(e) {
  return Zn(e);
}
async function Ur(e) {
  return zr(e);
}
var Wr = o(() => {
  ir(), Br();
});
async function Gr(e, t, n, r, i = {}) {
  let a, o, s;
  switch (
    (hr(e, n, `encrypt`), (n = (await Rn.normalizePublicKey?.(n, e)) || n), e)
  ) {
    case `dir`:
      s = n;
      break;
    case `ECDH-ES`:
    case `ECDH-ES+A128KW`:
    case `ECDH-ES+A192KW`:
    case `ECDH-ES+A256KW`: {
      if (!sn(n))
        throw new N(
          `ECDH with the provided key is not allowed or not supported by your javascript runtime`,
        );
      let { apu: c, apv: l } = i,
        { epk: u } = i;
      u ||= (await on(n)).privateKey;
      let { x: d, y: f, crv: p, kty: m } = await Ur(u),
        h = await an(
          n,
          u,
          e === `ECDH-ES` ? t : e,
          e === `ECDH-ES` ? Bn(t) : parseInt(e.slice(-5, -2), 10),
          c,
          l,
        );
      if (
        ((o = { epk: { x: d, crv: p, kty: m } }),
        m === `EC` && (o.epk.y = f),
        c && (o.apu = tt(c)),
        l && (o.apv = tt(l)),
        e === `ECDH-ES`)
      ) {
        s = h;
        break;
      }
      (s = r || Vn(t)), (a = await tn(e.slice(-6), h, s));
      break;
    }
    case `RSA1_5`:
    case `RSA-OAEP`:
    case `RSA-OAEP-256`:
    case `RSA-OAEP-384`:
    case `RSA-OAEP-512`:
      (s = r || Vn(t)), (a = await bn(e, n, s));
      break;
    case `PBES2-HS256+A128KW`:
    case `PBES2-HS384+A192KW`:
    case `PBES2-HS512+A256KW`: {
      s = r || Vn(t);
      let { p2c: c, p2s: l } = i;
      ({ encryptedKey: a, ...o } = await pn(e, n, s, c, l));
      break;
    }
    case `A128KW`:
    case `A192KW`:
    case `A256KW`:
      (s = r || Vn(t)), (a = await tn(e, n, s));
      break;
    case `A128GCMKW`:
    case `A192GCMKW`:
    case `A256GCMKW`: {
      s = r || Vn(t);
      let { iv: c } = i;
      ({ encryptedKey: a, ...o } = await Sr(e, n, s, c));
      break;
    }
    default:
      throw new N(`Invalid or unsupported "alg" (JWE Algorithm) header value`);
  }
  return { cek: s, encryptedKey: a, parameters: o };
}
var Kr = o(() => {
    rn(), cn(), hn(), Sn(), rt(), zn(), Hn(), L(), Wr(), _r(), wr();
  }),
  qr,
  Jr = o(() => {
    rt(),
      Rr(),
      xr(),
      Kr(),
      L(),
      qt(),
      $e(),
      Or(),
      (qr = class {
        constructor(e) {
          if (!(e instanceof Uint8Array))
            throw TypeError(`plaintext must be an instance of Uint8Array`);
          this._plaintext = e;
        }
        setKeyManagementParameters(e) {
          if (this._keyManagementParameters)
            throw TypeError(
              `setKeyManagementParameters can only be called once`,
            );
          return (this._keyManagementParameters = e), this;
        }
        setProtectedHeader(e) {
          if (this._protectedHeader)
            throw TypeError(`setProtectedHeader can only be called once`);
          return (this._protectedHeader = e), this;
        }
        setSharedUnprotectedHeader(e) {
          if (this._sharedUnprotectedHeader)
            throw TypeError(
              `setSharedUnprotectedHeader can only be called once`,
            );
          return (this._sharedUnprotectedHeader = e), this;
        }
        setUnprotectedHeader(e) {
          if (this._unprotectedHeader)
            throw TypeError(`setUnprotectedHeader can only be called once`);
          return (this._unprotectedHeader = e), this;
        }
        setAdditionalAuthenticatedData(e) {
          return (this._aad = e), this;
        }
        setContentEncryptionKey(e) {
          if (this._cek)
            throw TypeError(`setContentEncryptionKey can only be called once`);
          return (this._cek = e), this;
        }
        setInitializationVector(e) {
          if (this._iv)
            throw TypeError(`setInitializationVector can only be called once`);
          return (this._iv = e), this;
        }
        async encrypt(e, t) {
          if (
            !this._protectedHeader &&
            !this._unprotectedHeader &&
            !this._sharedUnprotectedHeader
          )
            throw new P(
              `either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()`,
            );
          if (
            !Kt(
              this._protectedHeader,
              this._unprotectedHeader,
              this._sharedUnprotectedHeader,
            )
          )
            throw new P(
              `JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint`,
            );
          let n = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader,
          };
          if (
            (Dr(P, new Map(), t?.crit, this._protectedHeader, n),
            n.zip !== void 0)
          )
            throw new N(
              `JWE "zip" (Compression Algorithm) Header Parameter is not supported.`,
            );
          let { alg: r, enc: i } = n;
          if (typeof r != `string` || !r)
            throw new P(
              `JWE "alg" (Algorithm) Header Parameter missing or invalid`,
            );
          if (typeof i != `string` || !i)
            throw new P(
              `JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid`,
            );
          let a;
          if (this._cek && (r === `dir` || r === `ECDH-ES`))
            throw TypeError(
              `setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${r}`,
            );
          let o;
          {
            let n;
            ({
              cek: o,
              encryptedKey: a,
              parameters: n,
            } = await Gr(r, i, e, this._cek, this._keyManagementParameters)),
              n &&
                (t && Lr in t
                  ? this._unprotectedHeader
                    ? (this._unprotectedHeader = {
                        ...this._unprotectedHeader,
                        ...n,
                      })
                    : this.setUnprotectedHeader(n)
                  : this._protectedHeader
                    ? (this._protectedHeader = {
                        ...this._protectedHeader,
                        ...n,
                      })
                    : this.setProtectedHeader(n));
          }
          let s, c, l;
          (c = this._protectedHeader
            ? j.encode(tt(JSON.stringify(this._protectedHeader)))
            : j.encode(``)),
            this._aad
              ? ((l = tt(this._aad)), (s = We(c, j.encode(`.`), j.encode(l))))
              : (s = c);
          let {
              ciphertext: u,
              tag: d,
              iv: f,
            } = await br(i, this._plaintext, o, this._iv, s),
            p = { ciphertext: tt(u) };
          return (
            f && (p.iv = tt(f)),
            d && (p.tag = tt(d)),
            a && (p.encrypted_key = tt(a)),
            l && (p.aad = l),
            this._protectedHeader && (p.protected = Ze.decode(c)),
            this._sharedUnprotectedHeader &&
              (p.unprotected = this._sharedUnprotectedHeader),
            this._unprotectedHeader && (p.header = this._unprotectedHeader),
            p
          );
        }
      });
  }),
  Yr,
  Xr,
  Zr = o(() => {
    Jr(),
      Rr(),
      L(),
      Hn(),
      qt(),
      Kr(),
      rt(),
      Or(),
      (Yr = class {
        constructor(e, t, n) {
          (this.parent = e), (this.key = t), (this.options = n);
        }
        setUnprotectedHeader(e) {
          if (this.unprotectedHeader)
            throw TypeError(`setUnprotectedHeader can only be called once`);
          return (this.unprotectedHeader = e), this;
        }
        addRecipient(...e) {
          return this.parent.addRecipient(...e);
        }
        encrypt(...e) {
          return this.parent.encrypt(...e);
        }
        done() {
          return this.parent;
        }
      }),
      (Xr = class {
        constructor(e) {
          (this._recipients = []), (this._plaintext = e);
        }
        addRecipient(e, t) {
          let n = new Yr(this, e, { crit: t?.crit });
          return this._recipients.push(n), n;
        }
        setProtectedHeader(e) {
          if (this._protectedHeader)
            throw TypeError(`setProtectedHeader can only be called once`);
          return (this._protectedHeader = e), this;
        }
        setSharedUnprotectedHeader(e) {
          if (this._unprotectedHeader)
            throw TypeError(
              `setSharedUnprotectedHeader can only be called once`,
            );
          return (this._unprotectedHeader = e), this;
        }
        setAdditionalAuthenticatedData(e) {
          return (this._aad = e), this;
        }
        async encrypt() {
          if (!this._recipients.length)
            throw new P(`at least one recipient must be added`);
          if (this._recipients.length === 1) {
            let [e] = this._recipients,
              t = await new qr(this._plaintext)
                .setAdditionalAuthenticatedData(this._aad)
                .setProtectedHeader(this._protectedHeader)
                .setSharedUnprotectedHeader(this._unprotectedHeader)
                .setUnprotectedHeader(e.unprotectedHeader)
                .encrypt(e.key, { ...e.options }),
              n = {
                ciphertext: t.ciphertext,
                iv: t.iv,
                recipients: [{}],
                tag: t.tag,
              };
            return (
              t.aad && (n.aad = t.aad),
              t.protected && (n.protected = t.protected),
              t.unprotected && (n.unprotected = t.unprotected),
              t.encrypted_key &&
                (n.recipients[0].encrypted_key = t.encrypted_key),
              t.header && (n.recipients[0].header = t.header),
              n
            );
          }
          let e;
          for (let t = 0; t < this._recipients.length; t++) {
            let n = this._recipients[t];
            if (
              !Kt(
                this._protectedHeader,
                this._unprotectedHeader,
                n.unprotectedHeader,
              )
            )
              throw new P(
                `JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint`,
              );
            let r = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...n.unprotectedHeader,
              },
              { alg: i } = r;
            if (typeof i != `string` || !i)
              throw new P(
                `JWE "alg" (Algorithm) Header Parameter missing or invalid`,
              );
            if (i === `dir` || i === `ECDH-ES`)
              throw new P(
                `"dir" and "ECDH-ES" alg may only be used with a single recipient`,
              );
            if (typeof r.enc != `string` || !r.enc)
              throw new P(
                `JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid`,
              );
            if (!e) e = r.enc;
            else if (e !== r.enc)
              throw new P(
                `JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients`,
              );
            if (
              (Dr(P, new Map(), n.options.crit, this._protectedHeader, r),
              r.zip !== void 0)
            )
              throw new N(
                `JWE "zip" (Compression Algorithm) Header Parameter is not supported.`,
              );
          }
          let t = Vn(e),
            n = { ciphertext: ``, iv: ``, recipients: [], tag: `` };
          for (let r = 0; r < this._recipients.length; r++) {
            let i = this._recipients[r],
              a = {};
            n.recipients.push(a);
            let o = {
              ...this._protectedHeader,
              ...this._unprotectedHeader,
              ...i.unprotectedHeader,
            }.alg.startsWith(`PBES2`)
              ? 2048 + r
              : void 0;
            if (r === 0) {
              let e = await new qr(this._plaintext)
                .setAdditionalAuthenticatedData(this._aad)
                .setContentEncryptionKey(t)
                .setProtectedHeader(this._protectedHeader)
                .setSharedUnprotectedHeader(this._unprotectedHeader)
                .setUnprotectedHeader(i.unprotectedHeader)
                .setKeyManagementParameters({ p2c: o })
                .encrypt(i.key, { ...i.options, [Lr]: !0 });
              (n.ciphertext = e.ciphertext),
                (n.iv = e.iv),
                (n.tag = e.tag),
                e.aad && (n.aad = e.aad),
                e.protected && (n.protected = e.protected),
                e.unprotected && (n.unprotected = e.unprotected),
                (a.encrypted_key = e.encrypted_key),
                e.header && (a.header = e.header);
              continue;
            }
            let { encryptedKey: s, parameters: c } = await Gr(
              i.unprotectedHeader?.alg ||
                this._protectedHeader?.alg ||
                this._unprotectedHeader?.alg,
              e,
              i.key,
              t,
              { p2c: o },
            );
            (a.encrypted_key = tt(s)),
              (i.unprotectedHeader || c) &&
                (a.header = { ...i.unprotectedHeader, ...c });
          }
          return n;
        }
      });
  });
function Qr(e, t) {
  let n = `SHA-${e.slice(-3)}`;
  switch (e) {
    case `HS256`:
    case `HS384`:
    case `HS512`:
      return { hash: n, name: `HMAC` };
    case `PS256`:
    case `PS384`:
    case `PS512`:
      return { hash: n, name: `RSA-PSS`, saltLength: e.slice(-3) >> 3 };
    case `RS256`:
    case `RS384`:
    case `RS512`:
      return { hash: n, name: `RSASSA-PKCS1-v1_5` };
    case `ES256`:
    case `ES384`:
    case `ES512`:
      return { hash: n, name: `ECDSA`, namedCurve: t.namedCurve };
    case `Ed25519`:
      return { name: `Ed25519` };
    case `EdDSA`:
      return { name: t.name };
    default:
      throw new N(
        `alg ${e} is not supported either by JOSE or your javascript runtime`,
      );
  }
}
var $r = o(() => {
  L();
});
async function ei(e, t, n) {
  if (
    (n === `sign` && (t = await Rn.normalizePrivateKey(t, e)),
    n === `verify` && (t = await Rn.normalizePublicKey(t, e)),
    Be(t))
  )
    return Mt(t, e, n), t;
  if (t instanceof Uint8Array) {
    if (!e.startsWith(`HS`)) throw TypeError(Lt(t, ...Bt));
    return A.subtle.importKey(
      `raw`,
      t,
      { hash: `SHA-${e.slice(-3)}`, name: `HMAC` },
      !1,
      [n],
    );
  }
  throw TypeError(Lt(t, ...Bt, `Uint8Array`, `JSON Web Key`));
}
var ti = o(() => {
    Ve(), Pt(), Rt(), Vt(), zn();
  }),
  ni,
  ri = o(() => {
    $r(),
      Ve(),
      yn(),
      ti(),
      (ni = async (e, t, n, r) => {
        let i = await ei(e, t, `verify`);
        vn(e, i);
        let a = Qr(e, i.algorithm);
        try {
          return await A.subtle.verify(a, i, n, r);
        } catch {
          return !1;
        }
      });
  });
async function ii(e, t, n) {
  if (!Yt(e)) throw new F(`Flattened JWS must be an object`);
  if (e.protected === void 0 && e.header === void 0)
    throw new F(
      `Flattened JWS must have either of the "protected" or "header" members`,
    );
  if (e.protected !== void 0 && typeof e.protected != `string`)
    throw new F(`JWS Protected Header incorrect type`);
  if (e.payload === void 0) throw new F(`JWS Payload missing`);
  if (typeof e.signature != `string`)
    throw new F(`JWS Signature missing or incorrect type`);
  if (e.header !== void 0 && !Yt(e.header))
    throw new F(`JWS Unprotected Header incorrect type`);
  let r = {};
  if (e.protected)
    try {
      let t = M(e.protected);
      r = JSON.parse(Ze.decode(t));
    } catch {
      throw new F(`JWS Protected Header is invalid`);
    }
  if (!Kt(r, e.header))
    throw new F(
      `JWS Protected and JWS Unprotected Header Parameter names must be disjoint`,
    );
  let i = { ...r, ...e.header },
    a = Dr(F, new Map([[`b64`, !0]]), n?.crit, r, i),
    o = !0;
  if (a.has(`b64`) && ((o = r.b64), typeof o != `boolean`))
    throw new F(
      `The "b64" (base64url-encode payload) Header Parameter must be a boolean`,
    );
  let { alg: s } = i;
  if (typeof s != `string` || !s)
    throw new F(`JWS "alg" (Algorithm) Header Parameter missing or invalid`);
  let c = n && kr(`algorithms`, n.algorithms);
  if (c && !c.has(s))
    throw new ct(`"alg" (Algorithm) Header Parameter value not allowed`);
  if (o) {
    if (typeof e.payload != `string`)
      throw new F(`JWS Payload must be a string`);
  } else if (typeof e.payload != `string` && !(e.payload instanceof Uint8Array))
    throw new F(`JWS Payload must be a string or an Uint8Array instance`);
  let l = !1;
  typeof t == `function`
    ? ((t = await t(r, e)),
      (l = !0),
      gr(s, t, `verify`),
      Cn(t) && (t = await cr(t, s)))
    : gr(s, t, `verify`);
  let u = We(
      j.encode(e.protected ?? ``),
      j.encode(`.`),
      typeof e.payload == `string` ? j.encode(e.payload) : e.payload,
    ),
    d;
  try {
    d = M(e.signature);
  } catch {
    throw new F(`Failed to base64url decode the signature`);
  }
  if (!(await ni(s, t, d, u))) throw new ht();
  let f;
  if (o)
    try {
      f = M(e.payload);
    } catch {
      throw new F(`Failed to base64url decode the payload`);
    }
  else f = typeof e.payload == `string` ? j.encode(e.payload) : e.payload;
  let p = { payload: f };
  return (
    e.protected !== void 0 && (p.protectedHeader = r),
    e.header !== void 0 && (p.unprotectedHeader = e.header),
    l ? { ...p, key: t } : p
  );
}
var ai = o(() => {
  rt(), ri(), L(), $e(), qt(), Xt(), _r(), Or(), Ar(), Dn(), lr();
});
async function oi(e, t, n) {
  if ((e instanceof Uint8Array && (e = Ze.decode(e)), typeof e != `string`))
    throw new F(`Compact JWS must be a string or Uint8Array`);
  let { 0: r, 1: i, 2: a, length: o } = e.split(`.`);
  if (o !== 3) throw new F(`Invalid Compact JWS`);
  let s = await ii({ payload: i, protected: r, signature: a }, t, n),
    c = { payload: s.payload, protectedHeader: s.protectedHeader };
  return typeof t == `function` ? { ...c, key: s.key } : c;
}
var si = o(() => {
  ai(), L(), $e();
});
async function ci(e, t, n) {
  if (!Yt(e)) throw new F(`General JWS must be an object`);
  if (!Array.isArray(e.signatures) || !e.signatures.every(Yt))
    throw new F(`JWS Signatures missing or incorrect type`);
  for (let r of e.signatures)
    try {
      return await ii(
        {
          header: r.header,
          payload: e.payload,
          protected: r.protected,
          signature: r.signature,
        },
        t,
        n,
      );
    } catch {}
  throw new ht();
}
var li = o(() => {
    ai(), L(), Xt();
  }),
  ui,
  di = o(() => {
    ui = (e) => Math.floor(e.getTime() / 1e3);
  }),
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi = o(() => {
    (fi = 60),
      (pi = fi * 60),
      (mi = pi * 24),
      (hi = mi * 7),
      (gi = mi * 365.25),
      (_i =
        /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i),
      (vi = (e) => {
        let t = _i.exec(e);
        if (!t || (t[4] && t[1])) throw TypeError(`Invalid time period format`);
        let n = parseFloat(t[2]),
          r = t[3].toLowerCase(),
          i;
        switch (r) {
          case `sec`:
          case `secs`:
          case `second`:
          case `seconds`:
          case `s`:
            i = Math.round(n);
            break;
          case `minute`:
          case `minutes`:
          case `min`:
          case `mins`:
          case `m`:
            i = Math.round(n * fi);
            break;
          case `hour`:
          case `hours`:
          case `hr`:
          case `hrs`:
          case `h`:
            i = Math.round(n * pi);
            break;
          case `day`:
          case `days`:
          case `d`:
            i = Math.round(n * mi);
            break;
          case `week`:
          case `weeks`:
          case `w`:
            i = Math.round(n * hi);
            break;
          default:
            i = Math.round(n * gi);
            break;
        }
        return t[1] === `-` || t[4] === `ago` ? -i : i;
      });
  }),
  bi,
  xi,
  Si,
  Ci = o(() => {
    L(),
      $e(),
      di(),
      yi(),
      Xt(),
      (bi = (e) => e.toLowerCase().replace(/^application\//, ``)),
      (xi = (e, t) =>
        typeof e == `string`
          ? t.includes(e)
          : Array.isArray(e)
            ? t.some(Set.prototype.has.bind(new Set(e)))
            : !1),
      (Si = (e, t, n = {}) => {
        let r;
        try {
          r = JSON.parse(Ze.decode(t));
        } catch {}
        if (!Yt(r))
          throw new I(`JWT Claims Set must be a top-level JSON object`);
        let { typ: i } = n;
        if (i && (typeof e.typ != `string` || bi(e.typ) !== bi(i)))
          throw new ot(
            `unexpected "typ" JWT header value`,
            r,
            `typ`,
            `check_failed`,
          );
        let {
            requiredClaims: a = [],
            issuer: o,
            subject: s,
            audience: c,
            maxTokenAge: l,
          } = n,
          u = [...a];
        l !== void 0 && u.push(`iat`),
          c !== void 0 && u.push(`aud`),
          s !== void 0 && u.push(`sub`),
          o !== void 0 && u.push(`iss`);
        for (let e of new Set(u.reverse()))
          if (!(e in r))
            throw new ot(`missing required "${e}" claim`, r, e, `missing`);
        if (o && !(Array.isArray(o) ? o : [o]).includes(r.iss))
          throw new ot(
            `unexpected "iss" claim value`,
            r,
            `iss`,
            `check_failed`,
          );
        if (s && r.sub !== s)
          throw new ot(
            `unexpected "sub" claim value`,
            r,
            `sub`,
            `check_failed`,
          );
        if (c && !xi(r.aud, typeof c == `string` ? [c] : c))
          throw new ot(
            `unexpected "aud" claim value`,
            r,
            `aud`,
            `check_failed`,
          );
        let d;
        switch (typeof n.clockTolerance) {
          case `string`:
            d = vi(n.clockTolerance);
            break;
          case `number`:
            d = n.clockTolerance;
            break;
          case `undefined`:
            d = 0;
            break;
          default:
            throw TypeError(`Invalid clockTolerance option type`);
        }
        let { currentDate: f } = n,
          p = ui(f || new Date());
        if ((r.iat !== void 0 || l) && typeof r.iat != `number`)
          throw new ot(`"iat" claim must be a number`, r, `iat`, `invalid`);
        if (r.nbf !== void 0) {
          if (typeof r.nbf != `number`)
            throw new ot(`"nbf" claim must be a number`, r, `nbf`, `invalid`);
          if (r.nbf > p + d)
            throw new ot(
              `"nbf" claim timestamp check failed`,
              r,
              `nbf`,
              `check_failed`,
            );
        }
        if (r.exp !== void 0) {
          if (typeof r.exp != `number`)
            throw new ot(`"exp" claim must be a number`, r, `exp`, `invalid`);
          if (r.exp <= p - d)
            throw new st(
              `"exp" claim timestamp check failed`,
              r,
              `exp`,
              `check_failed`,
            );
        }
        if (l) {
          let e = p - r.iat,
            t = typeof l == `number` ? l : vi(l);
          if (e - d > t)
            throw new st(
              `"iat" claim timestamp check failed (too far in the past)`,
              r,
              `iat`,
              `check_failed`,
            );
          if (e < 0 - d)
            throw new ot(
              `"iat" claim timestamp check failed (it should be in the past)`,
              r,
              `iat`,
              `check_failed`,
            );
        }
        return r;
      });
  });
async function wi(e, t, n) {
  let r = await oi(e, t, n);
  if (r.protectedHeader.crit?.includes(`b64`) && r.protectedHeader.b64 === !1)
    throw new I(`JWTs MUST NOT use unencoded payload`);
  let i = {
    payload: Si(r.protectedHeader, r.payload, n),
    protectedHeader: r.protectedHeader,
  };
  return typeof t == `function` ? { ...i, key: r.key } : i;
}
var Ti = o(() => {
  si(), Ci(), L();
});
async function Ei(e, t, n) {
  let r = await Nr(e, t, n),
    i = Si(r.protectedHeader, r.plaintext, n),
    { protectedHeader: a } = r;
  if (a.iss !== void 0 && a.iss !== i.iss)
    throw new ot(
      `replicated "iss" claim header parameter mismatch`,
      i,
      `iss`,
      `mismatch`,
    );
  if (a.sub !== void 0 && a.sub !== i.sub)
    throw new ot(
      `replicated "sub" claim header parameter mismatch`,
      i,
      `sub`,
      `mismatch`,
    );
  if (a.aud !== void 0 && JSON.stringify(a.aud) !== JSON.stringify(i.aud))
    throw new ot(
      `replicated "aud" claim header parameter mismatch`,
      i,
      `aud`,
      `mismatch`,
    );
  let o = { payload: i, protectedHeader: a };
  return typeof t == `function` ? { ...o, key: r.key } : o;
}
var Di = o(() => {
    Pr(), Ci(), L();
  }),
  Oi,
  ki = o(() => {
    Jr(),
      (Oi = class {
        constructor(e) {
          this._flattened = new qr(e);
        }
        setContentEncryptionKey(e) {
          return this._flattened.setContentEncryptionKey(e), this;
        }
        setInitializationVector(e) {
          return this._flattened.setInitializationVector(e), this;
        }
        setProtectedHeader(e) {
          return this._flattened.setProtectedHeader(e), this;
        }
        setKeyManagementParameters(e) {
          return this._flattened.setKeyManagementParameters(e), this;
        }
        async encrypt(e, t) {
          let n = await this._flattened.encrypt(e, t);
          return [n.protected, n.encrypted_key, n.iv, n.ciphertext, n.tag].join(
            `.`,
          );
        }
      });
  }),
  Ai,
  ji = o(() => {
    $r(),
      Ve(),
      yn(),
      ti(),
      (Ai = async (e, t, n) => {
        let r = await ei(e, t, `sign`);
        vn(e, r);
        let i = await A.subtle.sign(Qr(e, r.algorithm), r, n);
        return new Uint8Array(i);
      });
  }),
  Mi,
  Ni = o(() => {
    rt(),
      ji(),
      qt(),
      L(),
      $e(),
      _r(),
      Or(),
      (Mi = class {
        constructor(e) {
          if (!(e instanceof Uint8Array))
            throw TypeError(`payload must be an instance of Uint8Array`);
          this._payload = e;
        }
        setProtectedHeader(e) {
          if (this._protectedHeader)
            throw TypeError(`setProtectedHeader can only be called once`);
          return (this._protectedHeader = e), this;
        }
        setUnprotectedHeader(e) {
          if (this._unprotectedHeader)
            throw TypeError(`setUnprotectedHeader can only be called once`);
          return (this._unprotectedHeader = e), this;
        }
        async sign(e, t) {
          if (!this._protectedHeader && !this._unprotectedHeader)
            throw new F(
              `either setProtectedHeader or setUnprotectedHeader must be called before #sign()`,
            );
          if (!Kt(this._protectedHeader, this._unprotectedHeader))
            throw new F(
              `JWS Protected and JWS Unprotected Header Parameter names must be disjoint`,
            );
          let n = { ...this._protectedHeader, ...this._unprotectedHeader },
            r = Dr(
              F,
              new Map([[`b64`, !0]]),
              t?.crit,
              this._protectedHeader,
              n,
            ),
            i = !0;
          if (
            r.has(`b64`) &&
            ((i = this._protectedHeader.b64), typeof i != `boolean`)
          )
            throw new F(
              `The "b64" (base64url-encode payload) Header Parameter must be a boolean`,
            );
          let { alg: a } = n;
          if (typeof a != `string` || !a)
            throw new F(
              `JWS "alg" (Algorithm) Header Parameter missing or invalid`,
            );
          gr(a, e, `sign`);
          let o = this._payload;
          i && (o = j.encode(tt(o)));
          let s;
          s = this._protectedHeader
            ? j.encode(tt(JSON.stringify(this._protectedHeader)))
            : j.encode(``);
          let c = {
            signature: tt(await Ai(a, e, We(s, j.encode(`.`), o))),
            payload: ``,
          };
          return (
            i && (c.payload = Ze.decode(o)),
            this._unprotectedHeader && (c.header = this._unprotectedHeader),
            this._protectedHeader && (c.protected = Ze.decode(s)),
            c
          );
        }
      });
  }),
  Pi,
  R = o(() => {
    Ni(),
      (Pi = class {
        constructor(e) {
          this._flattened = new Mi(e);
        }
        setProtectedHeader(e) {
          return this._flattened.setProtectedHeader(e), this;
        }
        async sign(e, t) {
          let n = await this._flattened.sign(e, t);
          if (n.payload === void 0)
            throw TypeError(
              `use the flattened module for creating JWS with b64: false`,
            );
          return `${n.protected}.${n.payload}.${n.signature}`;
        }
      });
  }),
  z,
  Fi,
  Ii = o(() => {
    Ni(),
      L(),
      (z = class {
        constructor(e, t, n) {
          (this.parent = e), (this.key = t), (this.options = n);
        }
        setProtectedHeader(e) {
          if (this.protectedHeader)
            throw TypeError(`setProtectedHeader can only be called once`);
          return (this.protectedHeader = e), this;
        }
        setUnprotectedHeader(e) {
          if (this.unprotectedHeader)
            throw TypeError(`setUnprotectedHeader can only be called once`);
          return (this.unprotectedHeader = e), this;
        }
        addSignature(...e) {
          return this.parent.addSignature(...e);
        }
        sign(...e) {
          return this.parent.sign(...e);
        }
        done() {
          return this.parent;
        }
      }),
      (Fi = class {
        constructor(e) {
          (this._signatures = []), (this._payload = e);
        }
        addSignature(e, t) {
          let n = new z(this, e, t);
          return this._signatures.push(n), n;
        }
        async sign() {
          if (!this._signatures.length)
            throw new F(`at least one signature must be added`);
          let e = { signatures: [], payload: `` };
          for (let t = 0; t < this._signatures.length; t++) {
            let n = this._signatures[t],
              r = new Mi(this._payload);
            r.setProtectedHeader(n.protectedHeader),
              r.setUnprotectedHeader(n.unprotectedHeader);
            let { payload: i, ...a } = await r.sign(n.key, n.options);
            if (t === 0) e.payload = i;
            else if (e.payload !== i)
              throw new F(
                `inconsistent use of JWS Unencoded Payload (RFC7797)`,
              );
            e.signatures.push(a);
          }
          return e;
        }
      });
  });
function Li(e, t) {
  if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
  return t;
}
var Ri,
  zi = o(() => {
    di(),
      Xt(),
      yi(),
      (Ri = class {
        constructor(e = {}) {
          if (!Yt(e)) throw TypeError(`JWT Claims Set MUST be an object`);
          this._payload = e;
        }
        setIssuer(e) {
          return (this._payload = { ...this._payload, iss: e }), this;
        }
        setSubject(e) {
          return (this._payload = { ...this._payload, sub: e }), this;
        }
        setAudience(e) {
          return (this._payload = { ...this._payload, aud: e }), this;
        }
        setJti(e) {
          return (this._payload = { ...this._payload, jti: e }), this;
        }
        setNotBefore(e) {
          return (
            typeof e == `number`
              ? (this._payload = {
                  ...this._payload,
                  nbf: Li(`setNotBefore`, e),
                })
              : e instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    nbf: Li(`setNotBefore`, ui(e)),
                  })
                : (this._payload = {
                    ...this._payload,
                    nbf: ui(new Date()) + vi(e),
                  }),
            this
          );
        }
        setExpirationTime(e) {
          return (
            typeof e == `number`
              ? (this._payload = {
                  ...this._payload,
                  exp: Li(`setExpirationTime`, e),
                })
              : e instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    exp: Li(`setExpirationTime`, ui(e)),
                  })
                : (this._payload = {
                    ...this._payload,
                    exp: ui(new Date()) + vi(e),
                  }),
            this
          );
        }
        setIssuedAt(e) {
          return (
            e === void 0
              ? (this._payload = { ...this._payload, iat: ui(new Date()) })
              : e instanceof Date
                ? (this._payload = {
                    ...this._payload,
                    iat: Li(`setIssuedAt`, ui(e)),
                  })
                : typeof e == `string`
                  ? (this._payload = {
                      ...this._payload,
                      iat: Li(`setIssuedAt`, ui(new Date()) + vi(e)),
                    })
                  : (this._payload = {
                      ...this._payload,
                      iat: Li(`setIssuedAt`, e),
                    }),
            this
          );
        }
      });
  }),
  Bi,
  Vi = o(() => {
    R(),
      L(),
      $e(),
      zi(),
      (Bi = class extends Ri {
        setProtectedHeader(e) {
          return (this._protectedHeader = e), this;
        }
        async sign(e, t) {
          let n = new Pi(j.encode(JSON.stringify(this._payload)));
          if (
            (n.setProtectedHeader(this._protectedHeader),
            Array.isArray(this._protectedHeader?.crit) &&
              this._protectedHeader.crit.includes(`b64`) &&
              this._protectedHeader.b64 === !1)
          )
            throw new I(`JWTs MUST NOT use unencoded payload`);
          return n.sign(e, t);
        }
      });
  }),
  Hi,
  Ui = o(() => {
    ki(),
      $e(),
      zi(),
      (Hi = class extends Ri {
        setProtectedHeader(e) {
          if (this._protectedHeader)
            throw TypeError(`setProtectedHeader can only be called once`);
          return (this._protectedHeader = e), this;
        }
        setKeyManagementParameters(e) {
          if (this._keyManagementParameters)
            throw TypeError(
              `setKeyManagementParameters can only be called once`,
            );
          return (this._keyManagementParameters = e), this;
        }
        setContentEncryptionKey(e) {
          if (this._cek)
            throw TypeError(`setContentEncryptionKey can only be called once`);
          return (this._cek = e), this;
        }
        setInitializationVector(e) {
          if (this._iv)
            throw TypeError(`setInitializationVector can only be called once`);
          return (this._iv = e), this;
        }
        replicateIssuerAsHeader() {
          return (this._replicateIssuerAsHeader = !0), this;
        }
        replicateSubjectAsHeader() {
          return (this._replicateSubjectAsHeader = !0), this;
        }
        replicateAudienceAsHeader() {
          return (this._replicateAudienceAsHeader = !0), this;
        }
        async encrypt(e, t) {
          let n = new Oi(j.encode(JSON.stringify(this._payload)));
          return (
            this._replicateIssuerAsHeader &&
              (this._protectedHeader = {
                ...this._protectedHeader,
                iss: this._payload.iss,
              }),
            this._replicateSubjectAsHeader &&
              (this._protectedHeader = {
                ...this._protectedHeader,
                sub: this._payload.sub,
              }),
            this._replicateAudienceAsHeader &&
              (this._protectedHeader = {
                ...this._protectedHeader,
                aud: this._payload.aud,
              }),
            n.setProtectedHeader(this._protectedHeader),
            this._iv && n.setInitializationVector(this._iv),
            this._cek && n.setContentEncryptionKey(this._cek),
            this._keyManagementParameters &&
              n.setKeyManagementParameters(this._keyManagementParameters),
            n.encrypt(e, t)
          );
        }
      });
  });
async function Wi(e, t) {
  if (!Yt(e)) throw TypeError(`JWK must be an object`);
  if (((t ??= `sha256`), t !== `sha256` && t !== `sha384` && t !== `sha512`))
    throw TypeError(
      `digestAlgorithm must one of "sha256", "sha384", or "sha512"`,
    );
  let n;
  switch (e.kty) {
    case `EC`:
      Ki(e.crv, `"crv" (Curve) Parameter`),
        Ki(e.x, `"x" (X Coordinate) Parameter`),
        Ki(e.y, `"y" (Y Coordinate) Parameter`),
        (n = { crv: e.crv, kty: e.kty, x: e.x, y: e.y });
      break;
    case `OKP`:
      Ki(e.crv, `"crv" (Subtype of Key Pair) Parameter`),
        Ki(e.x, `"x" (Public Key) Parameter`),
        (n = { crv: e.crv, kty: e.kty, x: e.x });
      break;
    case `RSA`:
      Ki(e.e, `"e" (Exponent) Parameter`),
        Ki(e.n, `"n" (Modulus) Parameter`),
        (n = { e: e.e, kty: e.kty, n: e.n });
      break;
    case `oct`:
      Ki(e.k, `"k" (Key Value) Parameter`), (n = { k: e.k, kty: e.kty });
      break;
    default:
      throw new N(`"kty" (Key Type) Parameter missing or unsupported`);
  }
  let r = j.encode(JSON.stringify(n));
  return tt(await He(t, r));
}
async function Gi(e, t) {
  t ??= `sha256`;
  let n = await Wi(e, t);
  return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${n}`;
}
var Ki,
  qi = o(() => {
    Ue(),
      rt(),
      L(),
      $e(),
      Xt(),
      (Ki = (e, t) => {
        if (typeof e != `string` || !e) throw new ut(`${t} missing or invalid`);
      });
  });
async function Ji(e, t) {
  let n = { ...e, ...t?.header };
  if (!Yt(n.jwk))
    throw new F(`"jwk" (JSON Web Key) Header Parameter must be a JSON object`);
  let r = await cr({ ...n.jwk, ext: !0 }, n.alg);
  if (r instanceof Uint8Array || r.type !== `public`)
    throw new F(`"jwk" (JSON Web Key) Header Parameter must be a public key`);
  return r;
}
var Yi = o(() => {
  lr(), Xt(), L();
});
function Xi(e) {
  switch (typeof e == `string` && e.slice(0, 2)) {
    case `RS`:
    case `PS`:
      return `RSA`;
    case `ES`:
      return `EC`;
    case `Ed`:
      return `OKP`;
    default:
      throw new N(`Unsupported "alg" value for a JSON Web Key Set`);
  }
}
function Zi(e) {
  return e && typeof e == `object` && Array.isArray(e.keys) && e.keys.every(Qi);
}
function Qi(e) {
  return Yt(e);
}
function $i(e) {
  return typeof structuredClone == `function`
    ? structuredClone(e)
    : JSON.parse(JSON.stringify(e));
}
async function ea(e, t, n) {
  let r = e.get(t) || e.set(t, {}).get(t);
  if (r[n] === void 0) {
    let e = await cr({ ...t, ext: !0 }, n);
    if (e instanceof Uint8Array || e.type !== `public`)
      throw new dt(`JSON Web Key Set members must be public keys`);
    r[n] = e;
  }
  return r[n];
}
function ta(e) {
  let t = new na(e),
    n = async (e, n) => t.getKey(e, n);
  return (
    Object.defineProperties(n, {
      jwks: {
        value: () => $i(t._jwks),
        enumerable: !0,
        configurable: !1,
        writable: !1,
      },
    }),
    n
  );
}
var na,
  ra = o(() => {
    lr(),
      L(),
      Xt(),
      (na = class {
        constructor(e) {
          if (((this._cached = new WeakMap()), !Zi(e)))
            throw new dt(`JSON Web Key Set malformed`);
          this._jwks = $i(e);
        }
        async getKey(e, t) {
          let { alg: n, kid: r } = { ...e, ...t?.header },
            i = Xi(n),
            a = this._jwks.keys.filter((e) => {
              let t = i === e.kty;
              if (
                (t && typeof r == `string` && (t = r === e.kid),
                t && typeof e.alg == `string` && (t = n === e.alg),
                t && typeof e.use == `string` && (t = e.use === `sig`),
                t &&
                  Array.isArray(e.key_ops) &&
                  (t = e.key_ops.includes(`verify`)),
                t)
              )
                switch (n) {
                  case `ES256`:
                    t = e.crv === `P-256`;
                    break;
                  case `ES256K`:
                    t = e.crv === `secp256k1`;
                    break;
                  case `ES384`:
                    t = e.crv === `P-384`;
                    break;
                  case `ES512`:
                    t = e.crv === `P-521`;
                    break;
                  case `Ed25519`:
                    t = e.crv === `Ed25519`;
                    break;
                  case `EdDSA`:
                    t = e.crv === `Ed25519` || e.crv === `Ed448`;
                    break;
                }
              return t;
            }),
            { 0: o, length: s } = a;
          if (s === 0) throw new ft();
          if (s !== 1) {
            let e = new pt(),
              { _cached: t } = this;
            throw (
              ((e[Symbol.asyncIterator] = async function* () {
                for (let e of a)
                  try {
                    yield await ea(t, e, n);
                  } catch {}
              }),
              e)
            );
          }
          return ea(this._cached, o, n);
        }
      });
  }),
  ia,
  aa = o(() => {
    L(),
      (ia = async (e, t, n) => {
        let r,
          i,
          a = !1;
        typeof AbortController == `function` &&
          ((r = new AbortController()),
          (i = setTimeout(() => {
            (a = !0), r.abort();
          }, t)));
        let o = await fetch(e.href, {
          signal: r ? r.signal : void 0,
          redirect: `manual`,
          headers: n.headers,
        }).catch((e) => {
          throw a ? new mt() : e;
        });
        if ((i !== void 0 && clearTimeout(i), o.status !== 200))
          throw new at(
            `Expected 200 OK from the JSON Web Key Set HTTP response`,
          );
        try {
          return await o.json();
        } catch {
          throw new at(
            `Failed to parse the JSON Web Key Set HTTP response as JSON`,
          );
        }
      });
  });
function oa() {
  return (
    typeof WebSocketPair < `u` ||
    (typeof navigator < `u` && navigator.userAgent === `Cloudflare-Workers`) ||
    (typeof EdgeRuntime < `u` && EdgeRuntime === `vercel`)
  );
}
function sa(e, t) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`uat` in e) ||
    typeof e.uat != `number` ||
    Date.now() - e.uat >= t ||
    !(`jwks` in e) ||
    !Yt(e.jwks) ||
    !Array.isArray(e.jwks.keys) ||
    !Array.prototype.every.call(e.jwks.keys, Yt)
  );
}
function ca(e, t) {
  let n = new da(e, t),
    r = async (e, t) => n.getKey(e, t);
  return (
    Object.defineProperties(r, {
      coolingDown: {
        get: () => n.coolingDown(),
        enumerable: !0,
        configurable: !1,
      },
      fresh: { get: () => n.fresh(), enumerable: !0, configurable: !1 },
      reload: {
        value: () => n.reload(),
        enumerable: !0,
        configurable: !1,
        writable: !1,
      },
      reloading: {
        get: () => !!n._pendingFetch,
        enumerable: !0,
        configurable: !1,
      },
      jwks: {
        value: () => n._local?.jwks(),
        enumerable: !0,
        configurable: !1,
        writable: !1,
      },
    }),
    r
  );
}
var la,
  ua,
  da,
  fa,
  pa = o(() => {
    aa(),
      L(),
      ra(),
      Xt(),
      (typeof navigator > `u` ||
        !navigator.userAgent?.startsWith?.(`Mozilla/5.0 `)) &&
        (la = `jose/v5.10.0`),
      (ua = Symbol()),
      (da = class {
        constructor(e, t) {
          if (!(e instanceof URL))
            throw TypeError(`url must be an instance of URL`);
          (this._url = new URL(e.href)),
            (this._options = { agent: t?.agent, headers: t?.headers }),
            (this._timeoutDuration =
              typeof t?.timeoutDuration == `number` ? t?.timeoutDuration : 5e3),
            (this._cooldownDuration =
              typeof t?.cooldownDuration == `number`
                ? t?.cooldownDuration
                : 3e4),
            (this._cacheMaxAge =
              typeof t?.cacheMaxAge == `number` ? t?.cacheMaxAge : 6e5),
            t?.[ua] !== void 0 &&
              ((this._cache = t?.[ua]),
              sa(t?.[ua], this._cacheMaxAge) &&
                ((this._jwksTimestamp = this._cache.uat),
                (this._local = ta(this._cache.jwks))));
        }
        coolingDown() {
          return typeof this._jwksTimestamp == `number`
            ? Date.now() < this._jwksTimestamp + this._cooldownDuration
            : !1;
        }
        fresh() {
          return typeof this._jwksTimestamp == `number`
            ? Date.now() < this._jwksTimestamp + this._cacheMaxAge
            : !1;
        }
        async getKey(e, t) {
          (!this._local || !this.fresh()) && (await this.reload());
          try {
            return await this._local(e, t);
          } catch (n) {
            if (n instanceof ft && this.coolingDown() === !1)
              return await this.reload(), this._local(e, t);
            throw n;
          }
        }
        async reload() {
          this._pendingFetch && oa() && (this._pendingFetch = void 0);
          let e = new Headers(this._options.headers);
          la &&
            !e.has(`User-Agent`) &&
            (e.set(`User-Agent`, la),
            (this._options.headers = Object.fromEntries(e.entries()))),
            (this._pendingFetch ||= ia(
              this._url,
              this._timeoutDuration,
              this._options,
            )
              .then((e) => {
                (this._local = ta(e)),
                  this._cache &&
                    ((this._cache.uat = Date.now()), (this._cache.jwks = e)),
                  (this._jwksTimestamp = Date.now()),
                  (this._pendingFetch = void 0);
              })
              .catch((e) => {
                throw ((this._pendingFetch = void 0), e);
              })),
            await this._pendingFetch;
        }
      }),
      (fa = ua);
  }),
  ma,
  ha = o(() => {
    rt(),
      $e(),
      L(),
      Ci(),
      zi(),
      (ma = class extends Ri {
        encode() {
          return `${tt(JSON.stringify({ alg: `none` }))}.${tt(JSON.stringify(this._payload))}.`;
        }
        static decode(e, t) {
          if (typeof e != `string`)
            throw new I(`Unsecured JWT must be a string`);
          let { 0: n, 1: r, 2: i, length: a } = e.split(`.`);
          if (a !== 3 || i !== ``) throw new I(`Invalid Unsecured JWT`);
          let o;
          try {
            if (((o = JSON.parse(Ze.decode(M(n)))), o.alg !== `none`))
              throw Error();
          } catch {
            throw new I(`Invalid Unsecured JWT`);
          }
          return { payload: Si(o, M(r), t), header: o };
        }
      });
  }),
  ga = c({ decode: () => va, encode: () => _a }),
  _a,
  va,
  ya = o(() => {
    rt(), (_a = tt), (va = M);
  });
function ba(e) {
  let t;
  if (typeof e == `string`) {
    let n = e.split(`.`);
    (n.length === 3 || n.length === 5) && ([t] = n);
  } else if (typeof e == `object` && e)
    if (`protected` in e) t = e.protected;
    else throw TypeError(`Token does not contain a Protected Header`);
  try {
    if (typeof t != `string` || !t) throw Error();
    let e = JSON.parse(Ze.decode(va(t)));
    if (!Yt(e)) throw Error();
    return e;
  } catch {
    throw TypeError(`Invalid Token or Protected Header formatting`);
  }
}
var xa = o(() => {
  ya(), $e(), Xt();
});
function Sa(e) {
  if (typeof e != `string`)
    throw new I(
      `JWTs must use Compact JWS serialization, JWT must be a string`,
    );
  let { 1: t, length: n } = e.split(`.`);
  if (n === 5)
    throw new I(`Only JWTs using Compact JWS serialization can be decoded`);
  if (n !== 3) throw new I(`Invalid JWT`);
  if (!t) throw new I(`JWTs must contain a payload`);
  let r;
  try {
    r = va(t);
  } catch {
    throw new I(`Failed to base64url decode the payload`);
  }
  let i;
  try {
    i = JSON.parse(Ze.decode(r));
  } catch {
    throw new I(`Failed to parse the decoded payload as JSON`);
  }
  if (!Yt(i)) throw new I(`Invalid JWT Claims Set`);
  return i;
}
var Ca = o(() => {
  ya(), $e(), Xt(), L();
});
async function wa(e, t) {
  let n, r, i;
  switch (e) {
    case `HS256`:
    case `HS384`:
    case `HS512`:
      (n = parseInt(e.slice(-3), 10)),
        (r = { name: `HMAC`, hash: `SHA-${n}`, length: n }),
        (i = [`sign`, `verify`]);
      break;
    case `A128CBC-HS256`:
    case `A192CBC-HS384`:
    case `A256CBC-HS512`:
      return (n = parseInt(e.slice(-3), 10)), gt(new Uint8Array(n >> 3));
    case `A128KW`:
    case `A192KW`:
    case `A256KW`:
      (n = parseInt(e.slice(1, 4), 10)),
        (r = { name: `AES-KW`, length: n }),
        (i = [`wrapKey`, `unwrapKey`]);
      break;
    case `A128GCMKW`:
    case `A192GCMKW`:
    case `A256GCMKW`:
    case `A128GCM`:
    case `A192GCM`:
    case `A256GCM`:
      (n = parseInt(e.slice(1, 4), 10)),
        (r = { name: `AES-GCM`, length: n }),
        (i = [`encrypt`, `decrypt`]);
      break;
    default:
      throw new N(
        `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`,
      );
  }
  return A.subtle.generateKey(r, t?.extractable ?? !1, i);
}
function Ta(e) {
  let t = e?.modulusLength ?? 2048;
  if (typeof t != `number` || t < 2048)
    throw new N(
      `Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used`,
    );
  return t;
}
async function Ea(e, t) {
  let n, r;
  switch (e) {
    case `PS256`:
    case `PS384`:
    case `PS512`:
      (n = {
        name: `RSA-PSS`,
        hash: `SHA-${e.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: Ta(t),
      }),
        (r = [`sign`, `verify`]);
      break;
    case `RS256`:
    case `RS384`:
    case `RS512`:
      (n = {
        name: `RSASSA-PKCS1-v1_5`,
        hash: `SHA-${e.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: Ta(t),
      }),
        (r = [`sign`, `verify`]);
      break;
    case `RSA-OAEP`:
    case `RSA-OAEP-256`:
    case `RSA-OAEP-384`:
    case `RSA-OAEP-512`:
      (n = {
        name: `RSA-OAEP`,
        hash: `SHA-${parseInt(e.slice(-3), 10) || 1}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: Ta(t),
      }),
        (r = [`decrypt`, `unwrapKey`, `encrypt`, `wrapKey`]);
      break;
    case `ES256`:
      (n = { name: `ECDSA`, namedCurve: `P-256` }), (r = [`sign`, `verify`]);
      break;
    case `ES384`:
      (n = { name: `ECDSA`, namedCurve: `P-384` }), (r = [`sign`, `verify`]);
      break;
    case `ES512`:
      (n = { name: `ECDSA`, namedCurve: `P-521` }), (r = [`sign`, `verify`]);
      break;
    case `Ed25519`:
      (n = { name: `Ed25519` }), (r = [`sign`, `verify`]);
      break;
    case `EdDSA`: {
      r = [`sign`, `verify`];
      let e = t?.crv ?? `Ed25519`;
      switch (e) {
        case `Ed25519`:
        case `Ed448`:
          n = { name: e };
          break;
        default:
          throw new N(`Invalid or unsupported crv option provided`);
      }
      break;
    }
    case `ECDH-ES`:
    case `ECDH-ES+A128KW`:
    case `ECDH-ES+A192KW`:
    case `ECDH-ES+A256KW`: {
      r = [`deriveKey`, `deriveBits`];
      let e = t?.crv ?? `P-256`;
      switch (e) {
        case `P-256`:
        case `P-384`:
        case `P-521`:
          n = { name: `ECDH`, namedCurve: e };
          break;
        case `X25519`:
        case `X448`:
          n = { name: e };
          break;
        default:
          throw new N(
            `Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448`,
          );
      }
      break;
    }
    default:
      throw new N(
        `Invalid or unsupported JWK "alg" (Algorithm) Parameter value`,
      );
  }
  return A.subtle.generateKey(n, t?.extractable ?? !1, r);
}
var Da = o(() => {
  Ve(), L(), _t();
});
async function Oa(e, t) {
  return Ea(e, t);
}
var ka = o(() => {
  Da();
});
async function Aa(e, t) {
  return wa(e, t);
}
var ja = o(() => {
    Da();
  }),
  Ma,
  Na = o(() => {
    Ma = `WebCryptoAPI`;
  }),
  Pa,
  Fa = o(() => {
    Na(), (Pa = Ma);
  }),
  Ia = c({
    CompactEncrypt: () => Oi,
    CompactSign: () => Pi,
    EmbeddedJWK: () => Ji,
    EncryptJWT: () => Hi,
    FlattenedEncrypt: () => qr,
    FlattenedSign: () => Mi,
    GeneralEncrypt: () => Xr,
    GeneralSign: () => Fi,
    SignJWT: () => Bi,
    UnsecuredJWT: () => ma,
    base64url: () => ga,
    calculateJwkThumbprint: () => Wi,
    calculateJwkThumbprintUri: () => Gi,
    compactDecrypt: () => Nr,
    compactVerify: () => oi,
    createLocalJWKSet: () => ta,
    createRemoteJWKSet: () => ca,
    cryptoRuntime: () => Pa,
    decodeJwt: () => Sa,
    decodeProtectedHeader: () => ba,
    errors: () => it,
    experimental_jwksCache: () => fa,
    exportJWK: () => Ur,
    exportPKCS8: () => Hr,
    exportSPKI: () => Vr,
    flattenedDecrypt: () => jr,
    flattenedVerify: () => ii,
    generalDecrypt: () => Fr,
    generalVerify: () => ci,
    generateKeyPair: () => Oa,
    generateSecret: () => Aa,
    importJWK: () => cr,
    importPKCS8: () => sr,
    importSPKI: () => ar,
    importX509: () => or,
    jwksCache: () => ua,
    jwtDecrypt: () => Ei,
    jwtVerify: () => wi,
  }),
  La = o(() => {
    Pr(),
      Mr(),
      Ir(),
      Zr(),
      si(),
      ai(),
      li(),
      Ti(),
      Di(),
      ki(),
      Jr(),
      R(),
      Ni(),
      Ii(),
      Vi(),
      Ui(),
      qi(),
      Yi(),
      ra(),
      pa(),
      ha(),
      Wr(),
      lr(),
      xa(),
      Ca(),
      L(),
      ka(),
      ja(),
      ya(),
      Fa();
  }),
  Ra = s((e, t) => {
    var n = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      a = Object.prototype.hasOwnProperty,
      o = (e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      },
      s = (e, t, o, s) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let c of i(t))
            !a.call(e, c) &&
              c !== o &&
              n(e, c, {
                get: () => t[c],
                enumerable: !(s = r(t, c)) || s.enumerable,
              });
        return e;
      },
      c = (e) => s(n({}, `__esModule`, { value: !0 }), e),
      l = {};
    o(l, { verifyVercelOidcToken: () => h }), (t.exports = c(l));
    var u = (La(), c(Ia)),
      d = `https://oidc.vercel.com`,
      f = new URL(`https://oidc.vercel.com/.well-known/jwks`),
      p = [`RS256`],
      m = (0, u.createRemoteJWKSet)(f);
    async function h(e, t) {
      let {
        algorithms: n,
        projectId: r = {}.VERCEL_PROJECT_ID,
        environment: i = {}.VERCEL_TARGET_ENV || {}.VERCEL_ENV,
        ownerId: a,
        ...o
      } = t ?? {};
      if (r === `*` && a === void 0 && !g(o.audience))
        throw TypeError(
          `Expected ownerId or audience to be provided when projectId is '*'.`,
        );
      let s = await (0, u.jwtVerify)(e, m, { ...o, algorithms: n ?? p });
      return (
        _(s.payload.iss),
        v({
          actual: s.payload.project_id,
          claim: `project_id`,
          env: `VERCEL_PROJECT_ID`,
          expected: r,
          option: `projectId`,
        }),
        v({
          actual: s.payload.environment,
          claim: `environment`,
          env: `VERCEL_TARGET_ENV or VERCEL_ENV`,
          expected: i,
          option: `environment`,
        }),
        y({ actual: s.payload.owner_id, claim: `owner_id`, expected: a }),
        s
      );
    }
    function g(e) {
      return Array.isArray(e) ? e.length > 0 : e !== void 0;
    }
    function _(e) {
      if (e !== d && (typeof e != `string` || !e.startsWith(`${d}/`)))
        throw TypeError(
          `Expected Vercel OIDC token iss claim to be "${d}" or to start with "${d}/".`,
        );
    }
    function v({ actual: e, claim: t, env: n, expected: r, option: i }) {
      if (r !== `*`) {
        if (r === void 0 || r.length === 0)
          throw TypeError(
            `Expected ${n} to be set or ${i} to be provided. Pass ${i}: '*' to allow any ${t} claim.`,
          );
        if (
          !(Array.isArray(r) && typeof e == `string` && r.includes(e)) &&
          e !== r
        )
          throw TypeError(
            Array.isArray(r)
              ? `Expected Vercel OIDC token ${t} claim to be one of: ${r.map((e) => `"${e}"`).join(`, `)}.`
              : `Expected Vercel OIDC token ${t} claim to be "${r}".`,
          );
      }
    }
    function y({ actual: e, claim: t, expected: n }) {
      if (n !== void 0 && e !== n)
        throw TypeError(`Expected Vercel OIDC token ${t} claim to be "${n}".`);
    }
    0 && (t.exports = { verifyVercelOidcToken: h });
  }),
  za = s((e, t) => {
    var n = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      a = Object.prototype.hasOwnProperty,
      o = (e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      },
      s = (e, t, o, s) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let c of i(t))
            !a.call(e, c) &&
              c !== o &&
              n(e, c, {
                get: () => t[c],
                enumerable: !(s = r(t, c)) || s.enumerable,
              });
        return e;
      },
      c = (e) => s(n({}, `__esModule`, { value: !0 }), e),
      l = {};
    o(l, {
      AccessTokenMissingError: () => u,
      RefreshAccessTokenFailedError: () => d,
    }),
      (t.exports = c(l));
    var u = class extends Error {
        constructor() {
          super(
            `No authentication found. Please log in with the Vercel CLI (vercel login).`,
          ),
            (this.name = `AccessTokenMissingError`);
        }
      },
      d = class extends Error {
        constructor(e) {
          super(`Failed to refresh authentication token.`),
            (this.name = `RefreshAccessTokenFailedError`),
            e !== void 0 && (this.cause = e);
        }
      };
    0 &&
      (t.exports = {
        AccessTokenMissingError: u,
        RefreshAccessTokenFailedError: d,
      });
  }),
  Ba = s((e, t) => {
    var n = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      a = Object.prototype.hasOwnProperty,
      o = (e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      },
      s = (e, t, o, s) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let c of i(t))
            !a.call(e, c) &&
              c !== o &&
              n(e, c, {
                get: () => t[c],
                enumerable: !(s = r(t, c)) || s.enumerable,
              });
        return e;
      },
      c = (e) => s(n({}, `__esModule`, { value: !0 }), e),
      l = {};
    o(l, {
      AccessTokenMissingError: () => f.AccessTokenMissingError,
      RefreshAccessTokenFailedError: () => f.RefreshAccessTokenFailedError,
      getContext: () => u.getContext,
      getVercelOidcToken: () => p,
      getVercelOidcTokenSync: () => m,
      getVercelToken: () => h,
      verifyVercelOidcToken: () => d.verifyVercelOidcToken,
    }),
      (t.exports = c(l));
    var u = ze(),
      d = Ra(),
      f = za();
    async function p() {
      return ``;
    }
    function m() {
      return ``;
    }
    async function h() {
      throw Error(`getVercelToken is not supported in browser environments`);
    }
    0 &&
      (t.exports = {
        AccessTokenMissingError,
        RefreshAccessTokenFailedError,
        getContext,
        getVercelOidcToken: p,
        getVercelOidcTokenSync: m,
        getVercelToken: h,
        verifyVercelOidcToken,
      });
  }),
  Va = s((e, t) => {
    function n(e, t) {
      typeof t == `boolean` && (t = { forever: t }),
        (this._originalTimeouts = JSON.parse(JSON.stringify(e))),
        (this._timeouts = e),
        (this._options = t || {}),
        (this._maxRetryTime = (t && t.maxRetryTime) || 1 / 0),
        (this._fn = null),
        (this._errors = []),
        (this._attempts = 1),
        (this._operationTimeout = null),
        (this._operationTimeoutCb = null),
        (this._timeout = null),
        (this._operationStart = null),
        (this._timer = null),
        this._options.forever &&
          (this._cachedTimeouts = this._timeouts.slice(0));
    }
    (t.exports = n),
      (n.prototype.reset = function () {
        (this._attempts = 1),
          (this._timeouts = this._originalTimeouts.slice(0));
      }),
      (n.prototype.stop = function () {
        this._timeout && clearTimeout(this._timeout),
          this._timer && clearTimeout(this._timer),
          (this._timeouts = []),
          (this._cachedTimeouts = null);
      }),
      (n.prototype.retry = function (e) {
        if ((this._timeout && clearTimeout(this._timeout), !e)) return !1;
        var t = new Date().getTime();
        if (e && t - this._operationStart >= this._maxRetryTime)
          return (
            this._errors.push(e),
            this._errors.unshift(Error(`RetryOperation timeout occurred`)),
            !1
          );
        this._errors.push(e);
        var n = this._timeouts.shift();
        if (n === void 0)
          if (this._cachedTimeouts)
            this._errors.splice(0, this._errors.length - 1),
              (n = this._cachedTimeouts.slice(-1));
          else return !1;
        var r = this;
        return (
          (this._timer = setTimeout(function () {
            r._attempts++,
              r._operationTimeoutCb &&
                ((r._timeout = setTimeout(function () {
                  r._operationTimeoutCb(r._attempts);
                }, r._operationTimeout)),
                r._options.unref && r._timeout.unref()),
              r._fn(r._attempts);
          }, n)),
          this._options.unref && this._timer.unref(),
          !0
        );
      }),
      (n.prototype.attempt = function (e, t) {
        (this._fn = e),
          t &&
            (t.timeout && (this._operationTimeout = t.timeout),
            t.cb && (this._operationTimeoutCb = t.cb));
        var n = this;
        this._operationTimeoutCb &&
          (this._timeout = setTimeout(function () {
            n._operationTimeoutCb();
          }, n._operationTimeout)),
          (this._operationStart = new Date().getTime()),
          this._fn(this._attempts);
      }),
      (n.prototype.try = function (e) {
        console.log(`Using RetryOperation.try() is deprecated`),
          this.attempt(e);
      }),
      (n.prototype.start = function (e) {
        console.log(`Using RetryOperation.start() is deprecated`),
          this.attempt(e);
      }),
      (n.prototype.start = n.prototype.try),
      (n.prototype.errors = function () {
        return this._errors;
      }),
      (n.prototype.attempts = function () {
        return this._attempts;
      }),
      (n.prototype.mainError = function () {
        if (this._errors.length === 0) return null;
        for (var e = {}, t = null, n = 0, r = 0; r < this._errors.length; r++) {
          var i = this._errors[r],
            a = i.message,
            o = (e[a] || 0) + 1;
          (e[a] = o), o >= n && ((t = i), (n = o));
        }
        return t;
      });
  }),
  Ha = s((e) => {
    var t = Va();
    (e.operation = function (n) {
      return new t(e.timeouts(n), {
        forever: n && (n.forever || n.retries === 1 / 0),
        unref: n && n.unref,
        maxRetryTime: n && n.maxRetryTime,
      });
    }),
      (e.timeouts = function (e) {
        if (e instanceof Array) return [].concat(e);
        var t = {
          retries: 10,
          factor: 2,
          minTimeout: 1 * 1e3,
          maxTimeout: 1 / 0,
          randomize: !1,
        };
        for (var n in e) t[n] = e[n];
        if (t.minTimeout > t.maxTimeout)
          throw Error(`minTimeout is greater than maxTimeout`);
        for (var r = [], i = 0; i < t.retries; i++)
          r.push(this.createTimeout(i, t));
        return (
          e && e.forever && !r.length && r.push(this.createTimeout(i, t)),
          r.sort(function (e, t) {
            return e - t;
          }),
          r
        );
      }),
      (e.createTimeout = function (e, t) {
        var n = t.randomize ? Math.random() + 1 : 1,
          r = Math.round(n * Math.max(t.minTimeout, 1) * t.factor ** +e);
        return (r = Math.min(r, t.maxTimeout)), r;
      }),
      (e.wrap = function (t, n, r) {
        if ((n instanceof Array && ((r = n), (n = null)), !r))
          for (var i in ((r = []), t)) typeof t[i] == `function` && r.push(i);
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = t[o];
          (t[o] = function (r) {
            var i = e.operation(n),
              a = Array.prototype.slice.call(arguments, 1),
              o = a.pop();
            a.push(function (e) {
              i.retry(e) ||
                (e && (arguments[0] = i.mainError()), o.apply(this, arguments));
            }),
              i.attempt(function () {
                r.apply(t, a);
              });
          }.bind(t, s)),
            (t[o].options = n);
        }
      });
  }),
  Ua = s((e, t) => {
    t.exports = Ha();
  }),
  Wa = s((e, t) => {
    var n = Ua();
    function r(e, t) {
      function r(r, i) {
        var a = t || {},
          o;
        `randomize` in a || (a.randomize = !0), (o = n.operation(a));
        function s(e) {
          i(e || Error(`Aborted`));
        }
        function c(e, t) {
          if (e.bail) {
            s(e);
            return;
          }
          o.retry(e) ? a.onRetry && a.onRetry(e, t) : i(o.mainError());
        }
        function l(t) {
          var n;
          try {
            n = e(s, t);
          } catch (e) {
            c(e, t);
            return;
          }
          Promise.resolve(n)
            .then(r)
            .catch(function (e) {
              c(e, t);
            });
        }
        o.attempt(l);
      }
      return new Promise(r);
    }
    t.exports = r;
  }),
  Ga = Ba(),
  Ka = u(Wa(), 1),
  qa = globalThis.fetch.bind(globalThis),
  Ja = u(
    s((e, t) => {
      function n(e, t) {
        if (typeof e != `function`)
          throw TypeError(
            `Expected the first argument to be a \`function\`, got \`${typeof e}\`.`,
          );
        let n,
          r = 0;
        return function (...i) {
          clearTimeout(n);
          let a = Date.now(),
            o = t - (a - r);
          o <= 0
            ? ((r = a), e.apply(this, i))
            : (n = setTimeout(() => {
                (r = Date.now()), e.apply(this, i);
              }, o));
        };
      }
      t.exports = n;
    })(),
    1,
  ),
  Ya = new Promise((e) => {
    try {
      let t = new Uint8Array([104, 101, 108, 108, 111]);
      new Blob([t])
        .text()
        .then((t) => {
          e(t === `hello`);
        })
        .catch(() => {
          e(!1);
        });
    } catch {
      e(!1);
    }
  });
async function Xa(e) {
  if (e instanceof ReadableStream) return e;
  if (e instanceof Blob) return e.stream();
  if (Za(e)) return Re.toWeb(e);
  let t;
  return (
    (t = e instanceof ArrayBuffer ? new Uint8Array(e) : $a(e) ? e : Qa(e)),
    (await Ya)
      ? new Blob([t]).stream()
      : new ReadableStream({
          start(e) {
            e.enqueue(t), e.close();
          },
        })
  );
}
function Za(e) {
  return (
    typeof e == `object` &&
    typeof e.pipe == `function` &&
    e.readable &&
    typeof e._read == `function` &&
    typeof e._readableState == `object`
  );
}
function Qa(e) {
  return new TextEncoder().encode(e);
}
function $a(e) {
  return (0, Le.default)(e);
}
async function eo() {
  try {
    let e = (await (0, Ga.getVercelOidcToken)()).trim();
    return e === `` ? void 0 : e;
  } catch {
    return;
  }
}
var to = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i,
  no = {
    b: 1,
    kb: 1024,
    mb: 1 << 20,
    gb: 1 << 30,
    tb: 1024 ** 4,
    pb: 1024 ** 5,
  };
function B(e) {
  if (typeof e == `number` && !Number.isNaN(e)) return e;
  if (typeof e != `string`) return null;
  let t = to.exec(e),
    n,
    r = `b`;
  if (!t) n = parseInt(e, 10);
  else {
    let [, e, , , i] = t;
    if (!e) return null;
    (n = parseFloat(e)), i && (r = i.toLowerCase());
  }
  return Number.isNaN(n) ? null : Math.floor(no[r] * n);
}
var ro = `https://vercel.com/api/blob`;
function io(e) {
  try {
    let t = {}[e];
    return typeof t == `string` && t.trim() !== `` ? t.trim() : void 0;
  } catch {
    return;
  }
}
function ao(e) {
  let [, , , t = ``] = e.split(`_`);
  return t;
}
function oo(e) {
  let t = e.replace(/-/g, `+`).replace(/_/g, `/`),
    n = 4 - (t.length % 4);
  if ((n !== 4 && (t += `=`.repeat(n)), typeof atob == `function`))
    return atob(t);
  if (typeof Buffer < `u`) return Buffer.from(t, `base64`).toString(`utf8`);
  throw new V(`Cannot decode base64: no atob or Buffer available.`);
}
function so(e) {
  let t = e.indexOf(`.`);
  if (t < 0) throw new V(`Invalid delegation token format.`);
  let n = e.slice(0, t),
    r;
  try {
    r = JSON.parse(oo(n));
  } catch {
    throw new V(`Invalid delegation token payload.`);
  }
  if (!r.storeId || typeof r.storeId != `string`)
    throw new V("Delegation token payload is missing `storeId`.");
  return co(r.storeId);
}
function co(e) {
  return e.startsWith(`store_`) ? e.slice(6) : e;
}
async function lo(e) {
  if (e?.presignedUrlPayload)
    return {
      kind: `presigned`,
      storeId: so(e.presignedUrlPayload.delegationToken),
    };
  if (e?.token) {
    let t = ao(e.token);
    return { kind: `readWrite`, token: e.token, storeId: t };
  }
  let t = e?.oidcToken?.trim(),
    n = t || (await eo());
  if (n) {
    let r = e?.storeId?.trim();
    if (r) return { kind: `oidc`, token: n, storeId: co(r) };
    let i = io(`BLOB_STORE_ID`);
    if (i) return { kind: `oidc`, token: n, storeId: co(i) };
    if (t)
      throw new V(
        "oidcToken was passed, but no storeId was found. Pass a `storeId` option or set `BLOB_STORE_ID` to use OIDC auth",
      );
  }
  let r = io(`BLOB_READ_WRITE_TOKEN`);
  if (r) return { kind: `readWrite`, token: r, storeId: ao(r) };
  throw new V(
    "No blob credentials found. Pass a `token` option, set `BLOB_READ_WRITE_TOKEN`, or use `oidcToken` (or `VERCEL_OIDC_TOKEN`) with `storeId` or `BLOB_STORE_ID`.",
  );
}
var V = class extends Error {
  constructor(e) {
    super(`Vercel Blob: ${e}`);
  }
};
function uo(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
var H = [`//`],
  U = (() => {
    if (Ie()) return !0;
    if (fo().startsWith(`http://localhost`)) return !1;
    let e = !1,
      t = new Request(fo(), {
        body: new ReadableStream(),
        method: `POST`,
        get duplex() {
          return (e = !0), `half`;
        },
      }).headers.has(`Content-Type`);
    return e && !t;
  })();
function fo(e = ``) {
  let t = null;
  try {
    t = {}.VERCEL_BLOB_API_URL || {}.NEXT_PUBLIC_VERCEL_BLOB_API_URL;
  } catch {}
  return `${t || ro}${e}`;
}
var po = typeof TextEncoder == `function` ? new TextEncoder() : null;
function mo(e) {
  return e
    ? typeof e == `string`
      ? po
        ? po.encode(e).byteLength
        : new Blob([e]).size
      : `byteLength` in e && typeof e.byteLength == `number`
        ? e.byteLength
        : `size` in e && typeof e.size == `number`
          ? e.size
          : 0
    : 0;
}
var ho = (e, t) => {
  let n = new Uint8Array();
  return new TransformStream({
    transform(r, i) {
      let a = new Uint8Array(n.length + r.byteLength);
      for (
        a.set(n), a.set(new Uint8Array(r), n.length), n = a;
        n.length >= e;

      ) {
        let r = n.slice(0, e);
        i.enqueue(r), t?.(r.byteLength), (n = n.slice(e));
      }
    },
    flush(e) {
      n.length > 0 && (e.enqueue(n), t?.(n.byteLength));
    },
  });
};
function go(e) {
  return globalThis.ReadableStream && e instanceof ReadableStream;
}
function _o(e) {
  return !!(go(e) || Za(e));
}
var vo = (e, t) => {
    let n = new URL(e);
    for (let [e, r] of Object.entries(t.params)) n.searchParams.set(e, r);
    return (
      n.searchParams.set(`vercel-blob-delegation`, t.delegationToken),
      n.searchParams.set(`vercel-blob-signature`, t.signature),
      n.toString()
    );
  },
  yo = !1;
try {
  (({}).DEBUG?.includes(`blob`) || {}.NEXT_PUBLIC_DEBUG?.includes(`blob`)) &&
    (yo = !0);
} catch {}
function W(e, ...t) {
  yo && console.debug(`vercel-blob: ${e}`, ...t);
}
var bo =
    globalThis.DOMException ??
    (() => {
      try {
        atob(`~`);
      } catch (e) {
        return Object.getPrototypeOf(e).constructor;
      }
    })(),
  xo = Object.prototype.toString,
  So = (e) => xo.call(e) === `[object Error]`,
  Co = new Set([
    `network error`,
    `Failed to fetch`,
    `NetworkError when attempting to fetch resource.`,
    `The Internet connection appears to be offline.`,
    `Load failed`,
    `Network request failed`,
    `fetch failed`,
    `terminated`,
  ]);
function wo(e) {
  return e && So(e) && e.name === `TypeError` && typeof e.message == `string`
    ? e.message === `Load failed`
      ? e.stack === void 0
      : Co.has(e.message)
    : !1;
}
var To = typeof qa == `function`,
  Eo = To && U,
  Do = 64 * 1024,
  Oo = async ({ input: e, init: t, onUploadProgress: n }) => {
    W(`using fetch`);
    let r;
    if (t.body)
      if (n) {
        let e = await Xa(t.body),
          i = 0,
          a = ho(Do, (e) => {
            (i += e), n(i);
          });
        r = e.pipeThrough(a);
      } else r = t.body;
    let i = U && r && _o(r) ? `half` : void 0;
    return qa(e, { ...t, ...(t.body ? { body: r } : {}), duplex: i });
  },
  ko = typeof XMLHttpRequest < `u`,
  Ao = async ({ input: e, init: t, onUploadProgress: n }) => {
    W(`using xhr`);
    let r = null;
    return (
      t.body && (r = go(t.body) ? await new Response(t.body).blob() : t.body),
      new Promise((i, a) => {
        let o = new XMLHttpRequest();
        if (
          (o.open(t.method || `GET`, e.toString(), !0),
          n &&
            o.upload.addEventListener(`progress`, (e) => {
              e.lengthComputable && n(e.loaded);
            }),
          (o.onload = () => {
            if (t.signal?.aborted) {
              a(
                new DOMException(`The user aborted the request.`, `AbortError`),
              );
              return;
            }
            let e = new Headers();
            o
              .getAllResponseHeaders()
              .trim()
              .split(/[\r\n]+/)
              .forEach((t) => {
                let n = t.split(`: `),
                  r = n.shift(),
                  i = n.join(`: `);
                r && e.set(r.toLowerCase(), i);
              }),
              i(
                new Response(o.response, {
                  status: o.status,
                  statusText: o.statusText,
                  headers: e,
                }),
              );
          }),
          (o.onerror = () => {
            a(TypeError(`Network request failed`));
          }),
          (o.ontimeout = () => {
            a(TypeError(`Network request timed out`));
          }),
          (o.onabort = () => {
            a(new DOMException(`The user aborted a request.`, `AbortError`));
          }),
          t.headers &&
            new Headers(t.headers).forEach((e, t) => {
              o.setRequestHeader(t, e);
            }),
          t.signal &&
            (t.signal.addEventListener(`abort`, () => {
              o.abort();
            }),
            t.signal.aborted))
        ) {
          o.abort();
          return;
        }
        o.send(r);
      })
    );
  },
  jo = async ({ input: e, init: t, onUploadProgress: n }) => {
    if (n) {
      if (Eo) return Oo({ input: e, init: t, onUploadProgress: n });
      if (ko) return Ao({ input: e, init: t, onUploadProgress: n });
    }
    if (To) return Oo({ input: e, init: t });
    if (ko) return Ao({ input: e, init: t });
    throw Error(`No request implementation available`);
  },
  Mo = class extends V {
    constructor() {
      super(`Access denied, please provide a valid token for this resource.`);
    }
  },
  No = class extends V {
    constructor(e) {
      super(
        e ??
          `OIDC is enabled for this project, but not for this token's environment.`,
      );
    }
  },
  Po = class extends V {
    constructor(e) {
      super(`Content type mismatch, ${e}.`);
    }
  },
  Fo = class extends V {
    constructor(e) {
      super(
        `Pathname mismatch, ${e}. Check the pathname used in upload() or put() matches the one from the client token.`,
      );
    }
  },
  Io = class extends V {
    constructor() {
      super(`Client token has expired.`);
    }
  },
  Lo = class extends V {
    constructor(e) {
      super(`File is too large, ${e}.`);
    }
  },
  Ro = class extends V {
    constructor() {
      super(`This store does not exist.`);
    }
  },
  zo = class extends V {
    constructor() {
      super(`This store has been suspended.`);
    }
  },
  Bo = class extends V {
    constructor() {
      super(`Unknown error, please visit https://vercel.com/help.`);
    }
  },
  Vo = class extends V {
    constructor() {
      super(`The requested blob does not exist`);
    }
  },
  Ho = class extends V {
    constructor() {
      super(`The blob service is currently not available. Please try again.`);
    }
  },
  Uo = class extends V {
    constructor(e) {
      super(
        `Too many requests please lower the number of concurrent requests ${e ? ` - try again in ${e} seconds` : ``}.`,
      ),
        (this.retryAfter = e ?? 0);
    }
  },
  Wo = class extends V {
    constructor() {
      super(`The request was aborted.`);
    }
  },
  Go = class extends V {
    constructor() {
      super(`Precondition failed: ETag mismatch.`);
    }
  },
  Ko = 12;
function qo() {
  let e = null;
  try {
    e =
      {}.VERCEL_BLOB_API_VERSION_OVERRIDE ||
      {}.NEXT_PUBLIC_VERCEL_BLOB_API_VERSION_OVERRIDE;
  } catch {}
  return `${e ?? Ko}`;
}
function Jo() {
  try {
    let e = {}.VERCEL_BLOB_RETRIES || `10`;
    return parseInt(e, 10);
  } catch {
    return 10;
  }
}
function Yo(e) {
  let t = e.headers.get(`retry-after`);
  return new Uo(t ? parseInt(t, 10) : void 0);
}
async function Xo(e) {
  let t, n;
  try {
    let r = await e.json();
    (t = r.error?.code ?? `unknown_error`), (n = r.error?.message);
  } catch {
    t = `unknown_error`;
  }
  n?.includes(`contentType`) &&
    n.includes(`is not allowed`) &&
    (t = `content_type_not_allowed`),
    n?.includes(`"pathname"`) &&
      n.includes(`does not match the token payload`) &&
      (t = `client_token_pathname_mismatch`),
    n === `Token expired` && (t = `client_token_expired`),
    n?.includes(`the file length cannot be greater than`) &&
      (t = `file_too_large`),
    n?.startsWith(`OIDC is enabled for this project, but not for the`) &&
      n.includes(`environment.`) &&
      (t = `oidc_environment_not_allowed`);
  let r;
  switch (t) {
    case `store_suspended`:
      r = new zo();
      break;
    case `forbidden`:
      r = new Mo();
      break;
    case `oidc_environment_not_allowed`:
      r = new No(n);
      break;
    case `content_type_not_allowed`:
      r = new Po(n);
      break;
    case `client_token_pathname_mismatch`:
      r = new Fo(n);
      break;
    case `client_token_expired`:
      r = new Io();
      break;
    case `file_too_large`:
      r = new Lo(n);
      break;
    case `not_found`:
      r = new Vo();
      break;
    case `client_token_not_allowed`:
      r = new V(
        n ??
          `This operation is not available when using a client token. Use a read–write or OIDC token on the server.`,
      );
      break;
    case `store_not_found`:
      r = new Ro();
      break;
    case `bad_request`:
      r = new V(n ?? `Bad request`);
      break;
    case `service_unavailable`:
      r = new Ho();
      break;
    case `rate_limited`:
      r = Yo(e);
      break;
    case `precondition_failed`:
      r = new Go();
      break;
    default:
      r = new Bo();
      break;
  }
  return { code: t, error: r };
}
async function Zo(e, t, n) {
  let r = qo(),
    i = await lo(n),
    a = i.kind === `presigned` ? void 0 : i.token,
    o = Qo(),
    s = fo(e);
  n?.presignedUrlPayload && (s = vo(s, n.presignedUrlPayload));
  let c = `${i.storeId}:${Date.now()}:${Math.random().toString(16).slice(2)}`,
    l = 0,
    u = 0,
    d = 0,
    f = n?.onUploadProgress || $o();
  t.body && f && (u = mo(t.body)),
    n?.onUploadProgress &&
      n.onUploadProgress({ loaded: 0, total: u, percentage: 0 });
  let p = await (0, Ka.default)(
    async (e) => {
      let p;
      try {
        p = await jo({
          input: s,
          init: {
            ...t,
            headers: {
              "x-api-blob-request-id": c,
              "x-vercel-blob-store-id": i.storeId,
              "x-api-blob-request-attempt": String(l),
              "x-api-version": r,
              ...(f ? { "x-content-length": String(u) } : {}),
              ...(a === void 0 ? {} : { authorization: `Bearer ${a}` }),
              ...o,
              ...t.headers,
            },
          },
          onUploadProgress: n?.onUploadProgress
            ? (e) => {
                var t;
                let r = u === 0 ? e : u;
                d = e;
                let i = u > 0 ? Number(((e / r) * 100).toFixed(2)) : 0;
                (i === 100 && u > 0) ||
                  (t = n.onUploadProgress) == null ||
                  t.call(n, { loaded: e, total: r, percentage: i });
              }
            : void 0,
        });
      } catch (t) {
        if (t instanceof bo && t.name === `AbortError`) {
          e(new Wo());
          return;
        }
        if (wo(t)) throw t;
        if (t instanceof TypeError) {
          e(t);
          return;
        }
        throw t;
      }
      if (p.ok) return p;
      let { code: m, error: h } = await Xo(p);
      if (
        m === `unknown_error` ||
        m === `service_unavailable` ||
        m === `internal_server_error`
      )
        throw h;
      e(h);
    },
    {
      retries: Jo(),
      onRetry: (t) => {
        t instanceof Error && W(`retrying API request to ${e}`, t.message),
          (l += 1);
      },
    },
  );
  if (!p) throw new Bo();
  return (
    n?.onUploadProgress &&
      n.onUploadProgress({ loaded: d, total: d, percentage: 100 }),
    await p.json()
  );
}
function Qo() {
  let e = {};
  try {
    `VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API` in {} &&
    {}.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0
      ? (e[`x-proxy-through-alternative-api`] =
          {}.VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API)
      : `NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API` in {} &&
        {}.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API !== void 0 &&
        (e[`x-proxy-through-alternative-api`] =
          {}.NEXT_PUBLIC_VERCEL_BLOB_PROXY_THROUGH_ALTERNATIVE_API);
  } catch {}
  return e;
}
function $o() {
  try {
    return {}.VERCEL_BLOB_USE_X_CONTENT_LENGTH === `1`;
  } catch {
    return !1;
  }
}
var es = {
  cacheControlMaxAge: `x-cache-control-max-age`,
  addRandomSuffix: `x-add-random-suffix`,
  allowOverwrite: `x-allow-overwrite`,
  contentType: `x-content-type`,
  access: `x-vercel-blob-access`,
  ifMatch: `x-if-match`,
};
function ts(e, t) {
  let n = {};
  if (
    ((n[es.access] = t.access),
    e.includes(`contentType`) &&
      t.contentType &&
      (n[es.contentType] = t.contentType),
    e.includes(`addRandomSuffix`) &&
      t.addRandomSuffix !== void 0 &&
      (n[es.addRandomSuffix] = t.addRandomSuffix ? `1` : `0`),
    e.includes(`ifMatch`) && t.ifMatch)
  ) {
    if (t.allowOverwrite === !1)
      throw new V(
        `ifMatch and allowOverwrite: false are contradictory. ifMatch is used for conditional overwrites, which requires allowOverwrite to be true.`,
      );
    (n[es.ifMatch] = t.ifMatch),
      e.includes(`allowOverwrite`) &&
        t.allowOverwrite === void 0 &&
        (n[es.allowOverwrite] = `1`);
  }
  return (
    e.includes(`allowOverwrite`) &&
      t.allowOverwrite !== void 0 &&
      (n[es.allowOverwrite] = t.allowOverwrite ? `1` : `0`),
    e.includes(`cacheControlMaxAge`) &&
      t.cacheControlMaxAge !== void 0 &&
      (n[es.cacheControlMaxAge] = t.cacheControlMaxAge.toString()),
    n
  );
}
async function ns({ pathname: e, options: t, extraChecks: n, getToken: r }) {
  if (!e) throw new V(`pathname is required`);
  if (e.length > 950)
    throw new V(`pathname is too long, maximum length is 950`);
  for (let t of H)
    if (e.includes(t))
      throw new V(`pathname cannot contain "${t}", please encode it if needed`);
  if (!t) throw new V(`missing options, see usage`);
  if (t.access !== `public` && t.access !== `private`)
    throw new V(
      `access must be "private" or "public", see https://vercel.com/docs/vercel-blob`,
    );
  return n && n(t), r && (t.token = await r(e, t)), t;
}
function rs({ allowedOptions: e, getToken: t, extraChecks: n }) {
  return async (r, i, a) => {
    let o = await ns({ pathname: r, options: a, extraChecks: n, getToken: t }),
      s = ts(e, o);
    return is({
      uploadId: o.uploadId,
      key: o.key,
      pathname: r,
      headers: s,
      options: o,
      parts: i,
    });
  };
}
async function is({
  uploadId: e,
  key: t,
  pathname: n,
  parts: r,
  headers: i,
  options: a,
}) {
  let o = new URLSearchParams({ pathname: n });
  try {
    let n = await Zo(
      `/mpu?${o.toString()}`,
      {
        method: `POST`,
        headers: {
          ...i,
          "content-type": `application/json`,
          "x-mpu-action": `complete`,
          "x-mpu-upload-id": e,
          "x-mpu-key": encodeURIComponent(t),
        },
        body: JSON.stringify(r),
        signal: a.abortSignal,
      },
      a,
    );
    return W(`mpu: complete`, n), n;
  } catch (e) {
    throw e instanceof TypeError &&
      (e.message === `Failed to fetch` || e.message === `fetch failed`)
      ? new Ho()
      : e;
  }
}
function as({ allowedOptions: e, getToken: t, extraChecks: n }) {
  return async (r, i) => {
    let a = await ns({ pathname: r, options: i, extraChecks: n, getToken: t }),
      o = await os(r, ts(e, a), a);
    return { key: o.key, uploadId: o.uploadId };
  };
}
async function os(e, t, n) {
  W(`mpu: create`, `pathname:`, e);
  let r = new URLSearchParams({ pathname: e });
  try {
    let e = await Zo(
      `/mpu?${r.toString()}`,
      {
        method: `POST`,
        headers: { ...t, "x-mpu-action": `create` },
        signal: n.abortSignal,
      },
      n,
    );
    return W(`mpu: create`, e), e;
  } catch (e) {
    throw e instanceof TypeError &&
      (e.message === `Failed to fetch` || e.message === `fetch failed`)
      ? new Ho()
      : e;
  }
}
function ss({ allowedOptions: e, getToken: t, extraChecks: n }) {
  return async (r, i, a) => {
    let o = await ns({ pathname: r, options: a, extraChecks: n, getToken: t }),
      s = ts(e, o);
    if (uo(i))
      throw new V(
        `Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.`,
      );
    return {
      etag: (
        await cs({
          uploadId: o.uploadId,
          key: o.key,
          pathname: r,
          part: { blob: i, partNumber: o.partNumber },
          headers: s,
          options: o,
        })
      ).etag,
      partNumber: o.partNumber,
    };
  };
}
async function cs({
  uploadId: e,
  key: t,
  pathname: n,
  headers: r,
  options: i,
  internalAbortController: a = new AbortController(),
  part: o,
}) {
  var s, c;
  let l = Zo(
    `/mpu?${new URLSearchParams({ pathname: n }).toString()}`,
    {
      signal: a.signal,
      method: `POST`,
      headers: {
        ...r,
        "x-mpu-action": `upload`,
        "x-mpu-key": encodeURIComponent(t),
        "x-mpu-upload-id": e,
        "x-mpu-part-number": o.partNumber.toString(),
      },
      body: o.blob,
    },
    i,
  );
  function u() {
    a.abort();
  }
  i.abortSignal?.aborted
    ? u()
    : (s = i.abortSignal) == null || s.addEventListener(`abort`, u);
  let d = await l;
  return (c = i.abortSignal) == null || c.removeEventListener(`abort`, u), d;
}
var ls = typeof window < `u` ? 6 : 8,
  us = 8 * 1024 * 1024,
  ds = ls * us * 2;
function fs({
  uploadId: e,
  key: t,
  pathname: n,
  stream: r,
  headers: i,
  options: a,
  totalToLoad: o,
}) {
  W(`mpu: upload init`, `key:`, t);
  let s = new AbortController();
  return new Promise((c, l) => {
    let u = [],
      d = [],
      f = r.getReader(),
      p = 0,
      m = !1,
      h = 1,
      g = !1,
      _ = 0,
      v = !1,
      y = 0,
      b = [],
      x = 0,
      S,
      C = {};
    a.onUploadProgress &&
      (S = (0, Ja.default)(() => {
        var e;
        let t = Object.values(C).reduce((e, t) => e + t, 0),
          n = o || t,
          r = o > 0 ? Number(((t / o || t) * 100).toFixed(2)) : 0;
        (e = a.onUploadProgress) == null ||
          e.call(a, { loaded: t, total: n, percentage: r });
      }, 150)),
      w().catch(ne);
    async function w() {
      for (
        W(
          `mpu: upload read start`,
          `activeUploads:`,
          p,
          `currentBytesInMemory:`,
          `${B(_)}/${B(ds)}`,
          `bytesSent:`,
          B(y),
        ),
          m = !0;
        _ < ds && !g;

      )
        try {
          let { value: e, done: t } = await f.read();
          if (t) {
            (v = !0),
              W(`mpu: upload read consumed the whole stream`),
              b.length > 0
                ? (u.push({
                    partNumber: h++,
                    blob: new Blob(b, { type: `application/octet-stream` }),
                  }),
                  te())
                : p === 0 && (f.releaseLock(), c(d)),
              (m = !1);
            return;
          }
          _ += e.byteLength;
          let n = 0;
          for (; n < e.byteLength; ) {
            let t = us - x,
              r = Math.min(n + t, e.byteLength),
              i = e.slice(n, r);
            b.push(i),
              (x += i.byteLength),
              (n = r),
              x === us &&
                (u.push({
                  partNumber: h++,
                  blob: new Blob(b, { type: `application/octet-stream` }),
                }),
                (b = []),
                (x = 0),
                te());
          }
        } catch (e) {
          ne(e);
        }
      W(
        `mpu: upload read end`,
        `activeUploads:`,
        p,
        `currentBytesInMemory:`,
        `${B(_)}/${B(ds)}`,
        `bytesSent:`,
        B(y),
      ),
        (m = !1);
    }
    async function ee(r) {
      p++,
        W(
          `mpu: upload send part start`,
          `partNumber:`,
          r.partNumber,
          `size:`,
          r.blob.size,
          `activeUploads:`,
          p,
          `currentBytesInMemory:`,
          `${B(_)}/${B(ds)}`,
          `bytesSent:`,
          B(y),
        );
      try {
        let o = a.onUploadProgress
            ? (e) => {
                (C[r.partNumber] = e.loaded), S && S();
              }
            : void 0,
          l = await cs({
            uploadId: e,
            key: t,
            pathname: n,
            headers: i,
            options: { ...a, onUploadProgress: o },
            internalAbortController: s,
            part: r,
          });
        if (
          (W(
            `mpu: upload send part end`,
            `partNumber:`,
            r.partNumber,
            `activeUploads`,
            p,
            `currentBytesInMemory:`,
            `${B(_)}/${B(ds)}`,
            `bytesSent:`,
            B(y),
          ),
          g)
        )
          return;
        if (
          (d.push({ partNumber: r.partNumber, etag: l.etag }),
          (_ -= r.blob.size),
          p--,
          (y += r.blob.size),
          u.length > 0 && te(),
          v)
        ) {
          p === 0 && (f.releaseLock(), c(d));
          return;
        }
        m || w().catch(ne);
      } catch (e) {
        ne(e);
      }
    }
    function te() {
      if (!g)
        for (
          W(`send parts`, `activeUploads`, p, `partsToUpload`, u.length);
          p < ls && u.length > 0;

        ) {
          let e = u.shift();
          e && ee(e);
        }
    }
    function ne(e) {
      g ||
        ((g = !0),
        s.abort(),
        f.releaseLock(),
        e instanceof TypeError &&
        (e.message === `Failed to fetch` || e.message === `fetch failed`)
          ? l(new Ho())
          : l(e));
    }
  });
}
function ps({ allowedOptions: e, getToken: t, extraChecks: n }) {
  return async (r, i) => {
    let a = await ns({ pathname: r, options: i, extraChecks: n, getToken: t }),
      o = ts(e, a),
      s = await os(r, o, a);
    return {
      key: s.key,
      uploadId: s.uploadId,
      async uploadPart(e, t) {
        if (uo(t))
          throw new V(
            `Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.`,
          );
        return {
          etag: (
            await cs({
              uploadId: s.uploadId,
              key: s.key,
              pathname: r,
              part: { partNumber: e, blob: t },
              headers: o,
              options: a,
            })
          ).etag,
          partNumber: e,
        };
      },
      async complete(e) {
        return is({
          uploadId: s.uploadId,
          key: s.key,
          pathname: r,
          parts: e,
          headers: o,
          options: a,
        });
      },
    };
  };
}
async function ms(e, t, n, r) {
  W(`mpu: init`, `pathname:`, e, `headers:`, n);
  let i = { ...r, onUploadProgress: void 0 };
  if (r.maximumSizeInBytes !== void 0 && !_o(t) && mo(t) > r.maximumSizeInBytes)
    throw new V(
      `Body size of ${mo(t)} bytes exceeds the maximum allowed size of ${r.maximumSizeInBytes} bytes`,
    );
  let a = await os(e, n, i),
    o = mo(t),
    s = await Xa(t),
    c = await fs({
      uploadId: a.uploadId,
      key: a.key,
      pathname: e,
      stream: s,
      headers: n,
      options: r,
      totalToLoad: o,
    });
  return await is({
    uploadId: a.uploadId,
    key: a.key,
    pathname: e,
    parts: c,
    headers: n,
    options: i,
  });
}
function hs({
  allowedOptions: e,
  getToken: t,
  getPresignedUrlPayload: n,
  extraChecks: r,
}) {
  return async function (i, a, o) {
    if (!a) throw new V(`body is required`);
    if (uo(a))
      throw new V(
        `Body must be a string, buffer or stream. You sent a plain JavaScript object, double check what you're trying to upload.`,
      );
    let s = await ns({ pathname: i, options: o, extraChecks: r, getToken: t }),
      c = await n?.(i, s),
      l = { ...s, presignedUrlPayload: c },
      u = ts(e, s);
    if (s.multipart === !0) return ms(i, a, u, l);
    let d = s.onUploadProgress
        ? (0, Ja.default)(s.onUploadProgress, 100)
        : void 0,
      f = await Zo(
        `/?${new URLSearchParams({ pathname: i }).toString()}`,
        { method: `PUT`, body: a, headers: u, signal: s.abortSignal },
        { ...l, onUploadProgress: d },
      );
    return {
      url: f.url,
      downloadUrl: f.downloadUrl,
      pathname: f.pathname,
      contentType: f.contentType,
      contentDisposition: f.contentDisposition,
      etag: f.etag,
    };
  };
}
new TextEncoder();
function gs(e) {
  return function (t) {
    if (!t.token.startsWith(`vercel_blob_client_`))
      throw new V(`${e} must be called with a client token`);
    if (
      t.addRandomSuffix !== void 0 ||
      t.allowOverwrite !== void 0 ||
      t.cacheControlMaxAge !== void 0
    )
      throw new V(
        `${e} doesn't allow \`addRandomSuffix\`, \`cacheControlMaxAge\` or \`allowOverwrite\`. Configure these options at the server side when generating client tokens.`,
      );
  };
}
hs({ allowedOptions: [`contentType`], extraChecks: gs("client/`put`") }),
  as({
    allowedOptions: [`contentType`],
    extraChecks: gs("client/`createMultipartUpload`"),
  }),
  ps({
    allowedOptions: [`contentType`],
    extraChecks: gs("client/`createMultipartUpload`"),
  }),
  ss({
    allowedOptions: [`contentType`],
    extraChecks: gs("client/`multipartUpload`"),
  }),
  rs({
    allowedOptions: [`contentType`],
    extraChecks: gs("client/`completeMultipartUpload`"),
  });
var _s = hs({
  allowedOptions: [`contentType`],
  extraChecks(e) {
    if (e.handleUploadUrl === void 0)
      throw new V("client/`upload` requires the 'handleUploadUrl' parameter");
    if (
      e.addRandomSuffix !== void 0 ||
      e.allowOverwrite !== void 0 ||
      e.cacheControlMaxAge !== void 0 ||
      e.ifMatch !== void 0
    )
      throw new V(
        "client/`upload` doesn't allow `addRandomSuffix`, `cacheControlMaxAge`, `allowOverwrite` or `ifMatch`. Configure these options at the server side when generating client tokens.",
      );
  },
  async getToken(e, t) {
    return ys({
      handleUploadUrl: t.handleUploadUrl,
      pathname: e,
      clientPayload: t.clientPayload ?? null,
      multipart: t.multipart ?? !1,
      headers: t.headers,
    });
  },
});
hs({
  allowedOptions: [`contentType`],
  extraChecks(e) {
    if (e.handleUploadUrl === void 0)
      throw new V("client/`upload` requires the 'handleUploadUrl' parameter");
    if (
      e.addRandomSuffix !== void 0 ||
      e.allowOverwrite !== void 0 ||
      e.cacheControlMaxAge !== void 0 ||
      e.ifMatch !== void 0
    )
      throw new V(
        "client/`uploadPresigned` doesn't allow `addRandomSuffix`, `cacheControlMaxAge`, `allowOverwrite` or `ifMatch`. Configure these options at the server side when generating presigned URLs.",
      );
  },
  async getPresignedUrlPayload(e, t) {
    return bs({
      pathname: e,
      handleUploadUrl: t.handleUploadUrl,
      clientPayload: t.clientPayload ?? null,
      multipart: t.multipart ?? !1,
      headers: t.headers,
    });
  },
});
var vs = {
  generateClientToken: `blob.generate-client-token`,
  generatePresignedUrl: `blob.generate-presigned-url`,
  uploadCompleted: `blob.upload-completed`,
};
async function ys(e) {
  let { handleUploadUrl: t, pathname: n } = e,
    r = Ss(t) ? t : xs(t),
    i = {
      type: vs.generateClientToken,
      payload: {
        pathname: n,
        clientPayload: e.clientPayload,
        multipart: e.multipart,
      },
    },
    a = await qa(r, {
      method: `POST`,
      body: JSON.stringify(i),
      headers: { "content-type": `application/json`, ...e.headers },
      signal: e.abortSignal,
    });
  if (!a.ok) throw new V(`Failed to  retrieve the client token`);
  try {
    let { clientToken: e } = await a.json();
    return e;
  } catch {
    throw new V(`Failed to retrieve the client token`);
  }
}
async function bs(e) {
  let { handleUploadUrl: t, pathname: n } = e,
    r = Ss(t) ? t : xs(t),
    i = {
      type: vs.generatePresignedUrl,
      payload: {
        pathname: n,
        clientPayload: e.clientPayload,
        multipart: e.multipart,
      },
    },
    a = await qa(r, {
      method: `POST`,
      body: JSON.stringify(i),
      headers: { "content-type": `application/json`, ...e.headers },
      signal: e.abortSignal,
    });
  if (!a.ok) throw new V(`Failed to retrieve the presigned URL`);
  try {
    let { presignedUrlPayload: e } = await a.json();
    if (e) return e;
    throw new V(`Missing presignedUrlPayload`);
  } catch (e) {
    throw e instanceof V ? e : new V(`Failed to retrieve the presigned URL`);
  }
}
function xs(e) {
  return new URL(e, location.href).href;
}
function Ss(e) {
  try {
    return !!new URL(e);
  } catch {
    return !1;
  }
}
var Cs = `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`,
  ws = (e = 21) => {
    let t = ``,
      n = crypto.getRandomValues(new Uint8Array((e |= 0)));
    for (; e--; ) t += Cs[n[e] & 63];
    return t;
  },
  Ts = /^[A-Za-z0-9_-]{10}$/;
function Es(e) {
  return Ts.test(e);
}
function Ds() {
  let e = new URLSearchParams(window.location.search).get(`share`);
  return !e || !Es(e) ? null : e;
}
async function Os(e) {
  let t = ws(10);
  return (
    await _s(`${t}.json`, e, {
      access: `public`,
      handleUploadUrl: `/api/upload`,
      contentType: `application/json`,
    }),
    t
  );
}
async function ks(e) {
  let t = await fetch(`/api/share?id=${encodeURIComponent(e)}`);
  if (!t.ok) {
    let e = `Failed to load shared draw.`;
    try {
      let n = await t.json();
      n.error && (e = n.error);
    } catch {}
    throw Error(e);
  }
  return t.text();
}
var As = { v: 1, winners: { "0-pair-13": `CAN` } },
  js = [
    { isoCode: `BRA`, name: `Brazil` },
    { isoCode: `JPN`, name: `Japan` },
    { isoCode: `CIV`, name: `Côte d'Ivoire` },
    { isoCode: `NOR`, name: `Norway` },
    { isoCode: `MEX`, name: `Mexico` },
    { isoCode: `ECU`, name: `Ecuador` },
    { isoCode: `GB-ENG`, name: `England` },
    { isoCode: `COD`, name: `DR Congo` },
    { isoCode: `ARG`, name: `Argentina` },
    { isoCode: `CPV`, name: `Cape Verde` },
    { isoCode: `AUS`, name: `Australia` },
    { isoCode: `EGY`, name: `Egypt` },
    { isoCode: `CHE`, name: `Switzerland` },
    { isoCode: `DZA`, name: `Algeria` },
    { isoCode: `COL`, name: `Colombia` },
    { isoCode: `GHA`, name: `Ghana` },
    { isoCode: `SEN`, name: `Senegal` },
    { isoCode: `BEL`, name: `Belgium` },
    { isoCode: `USA`, name: `United States` },
    { isoCode: `BIH`, name: `Bosnia and Herzegovina` },
    { isoCode: `ESP`, name: `Spain` },
    { isoCode: `AUT`, name: `Austria` },
    { isoCode: `PRT`, name: `Portugal` },
    { isoCode: `HRV`, name: `Croatia` },
    { isoCode: `NLD`, name: `Netherlands` },
    { isoCode: `MAR`, name: `Morocco` },
    { isoCode: `CAN`, name: `Canada` },
    { isoCode: `ZAF`, name: `South Africa` },
    { isoCode: `FRA`, name: `France` },
    { isoCode: `SWE`, name: `Sweden` },
    { isoCode: `DEU`, name: `Germany` },
    { isoCode: `PRY`, name: `Paraguay` },
  ].map((e, t) => {
    let n = t + 1;
    return {
      position: n,
      pair: Math.ceil(n / 2),
      isoCode: e.isoCode,
      team: e.name,
    };
  });
function Ms() {
  let e = Fe(JSON.stringify(As), js);
  if (`error` in e) throw Error(e.error);
  return e.pairWinners;
}
function Ns() {
  return new URLSearchParams(window.location.search).get(`debug`) === `1`;
}
function Ps() {
  let e = Ns(),
    t = Ds(),
    [n, r] = (0, y.useState)(() => (t ? {} : Ms())),
    [i, a] = (0, y.useState)(0),
    [o, s] = (0, y.useState)(``),
    [c, l] = (0, y.useState)(null),
    [u, d] = (0, y.useState)(!1),
    [f, p] = (0, y.useState)(null),
    [m, h] = (0, y.useState)(null),
    [g, _] = (0, y.useState)(!1),
    [v, b] = (0, y.useState)(!!t),
    [x, S] = (0, y.useState)(null),
    [C, w] = (0, y.useState)(!1),
    ee = Object.keys(n).length > 0;
  (0, y.useEffect)(() => {
    if (!t) return;
    let e = !1;
    return (
      (async () => {
        try {
          let n = Fe(await ks(t), js);
          if (e) return;
          if (`error` in n) {
            S(n.error);
            return;
          }
          r(n.pairWinners), a((e) => e + 1);
        } catch (t) {
          e ||
            S(t instanceof Error ? t.message : `Failed to load shared draw.`);
        } finally {
          e || b(!1);
        }
      })(),
      () => {
        e = !0;
      }
    );
  }, [t]);
  let te = (0, y.useCallback)(async () => {
      let e = Pe(n);
      s(e), l(null);
      try {
        await navigator.clipboard.writeText(e), l(`Copied to clipboard.`);
      } catch {
        l(`State updated in textarea (clipboard unavailable).`);
      }
    }, [n]),
    ne = (0, y.useCallback)(() => {
      let e = Fe(o, js);
      if (`error` in e) {
        l(e.error);
        return;
      }
      r(e.pairWinners), a((e) => e + 1), l(`State loaded.`);
    }, [o]),
    T = (0, y.useCallback)(() => {
      r({}), a((e) => e + 1), s(``), l(null), d(!1);
    }, []),
    re = (0, y.useCallback)(() => {
      T(), l(`Draw reset.`);
    }, [T]),
    ie = (0, y.useCallback)(async () => {
      d(!0), p(null), h(null), w(!1), _(!0);
      try {
        let e = await Os(Pe(n)),
          t = new URL(window.location.href);
        (t.search = ``), t.searchParams.set(`share`, e), p(t.toString());
      } catch (e) {
        h(e instanceof Error ? e.message : `Failed to share draw.`);
      } finally {
        _(!1);
      }
    }, [n]),
    ae = (0, y.useCallback)(() => {
      d(!1), p(null), h(null), w(!1);
    }, []),
    oe = (0, y.useCallback)(async () => {
      if (f)
        try {
          await navigator.clipboard.writeText(f), w(!0);
        } catch {
          w(!1);
        }
    }, [f]);
  return (0, k.jsxs)(`main`, {
    className: `app`,
    children: [
      (0, k.jsxs)(`aside`, {
        className: `app-sidebar`,
        children: [
          (0, k.jsx)(`h1`, {
            className: `app-sidebar__title`,
            children: `World Cup 2026 Knockout Phase`,
          }),
          (0, k.jsxs)(`p`, {
            className: `app-sidebar__text`,
            children: [
              `Interactive visualization based on an`,
              ` `,
              (0, k.jsx)(`a`, {
                target: `_blank`,
                href: `https://x.com/mkobach/status/2071353471295430705`,
                rel: `noopener noreferrer`,
                children: `original design`,
              }),
              `.`,
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `app-sidebar__actions`,
            children: [
              (0, k.jsx)(`button`, {
                type: `button`,
                className: `app-action-btn`,
                disabled: !ee || g,
                onClick: ie,
                children: `Share`,
              }),
              (0, k.jsx)(`button`, {
                type: `button`,
                className: `app-action-btn`,
                onClick: T,
                children: `Reset`,
              }),
            ],
          }),
          v
            ? (0, k.jsx)(`p`, {
                className: `app-sidebar__share-message`,
                role: `status`,
                children: `Loading shared draw…`,
              })
            : x
              ? (0, k.jsx)(`p`, {
                  className: `app-sidebar__share-message app-sidebar__share-message--error`,
                  role: `alert`,
                  children: x,
                })
              : null,
          e &&
            (0, k.jsxs)(`section`, {
              className: `app-sidebar__debug`,
              "aria-label": `Debug panel`,
              children: [
                (0, k.jsx)(`h2`, {
                  className: `app-sidebar__debug-title`,
                  children: `Debug`,
                }),
                (0, k.jsx)(`p`, {
                  className: `app-sidebar__debug-help`,
                  children: `Copy the current draw, paste a saved state, then load it.`,
                }),
                (0, k.jsx)(`textarea`, {
                  className: `app-sidebar__debug-input`,
                  value: o,
                  onChange: (e) => {
                    s(e.target.value), l(null);
                  },
                  rows: 12,
                  spellCheck: !1,
                  placeholder: `{"v":1,"winners":{"0-pair-0":"CAN"}}`,
                }),
                (0, k.jsxs)(`div`, {
                  className: `app-sidebar__debug-actions`,
                  children: [
                    (0, k.jsx)(`button`, {
                      type: `button`,
                      onClick: te,
                      children: `Copy current`,
                    }),
                    (0, k.jsx)(`button`, {
                      type: `button`,
                      onClick: ne,
                      children: `Load`,
                    }),
                    (0, k.jsx)(`button`, {
                      type: `button`,
                      onClick: re,
                      children: `Reset`,
                    }),
                  ],
                }),
                c
                  ? (0, k.jsx)(`p`, {
                      className: `app-sidebar__debug-message`,
                      role: `status`,
                      children: c,
                    })
                  : null,
              ],
            }),
          (0, k.jsx)(`p`, {
            className: `app-sidebar__footer`,
            style: { opacity: 0.66 },
            children: (0, k.jsx)(`a`, {
              href: `https://x.com/paul__ux`,
              style: { textDecoration: `none` },
              children: `@paul__ux`,
            }),
          }),
        ],
      }),
      (0, k.jsx)(`div`, {
        className: `app-main`,
        children: v
          ? (0, k.jsx)(`p`, {
              className: `app-main__loading`,
              role: `status`,
              children: `Loading shared draw`,
            })
          : (0, k.jsx)(
              Me,
              { positions: js, pairWinners: n, onPairWinnersChange: r },
              i,
            ),
      }),
      u
        ? (0, k.jsx)(`div`, {
            className: `app-share-modal`,
            role: `presentation`,
            onClick: ae,
            children: (0, k.jsxs)(`div`, {
              className: `app-share-modal__panel`,
              role: `dialog`,
              "aria-modal": `true`,
              "aria-labelledby": `share-modal-title`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, k.jsx)(`h2`, {
                  id: `share-modal-title`,
                  className: `app-share-modal__title`,
                  children: `Share`,
                }),
                g
                  ? (0, k.jsx)(`p`, {
                      className: `app-share-modal__status`,
                      role: `status`,
                      children: `Uploading…`,
                    })
                  : m
                    ? (0, k.jsx)(`p`, {
                        className: `app-share-modal__error`,
                        role: `alert`,
                        children: m,
                      })
                    : f
                      ? (0, k.jsxs)(`div`, {
                          className: `app-share-modal__link-block`,
                          children: [
                            (0, k.jsxs)(`div`, {
                              className: `app-share-modal__link-row`,
                              children: [
                                (0, k.jsx)(`p`, {
                                  className: `app-share-modal__link`,
                                  title: f,
                                  children: f,
                                }),
                                (0, k.jsx)(`button`, {
                                  type: `button`,
                                  className: `app-share-modal__copy`,
                                  "aria-label": `Copy share link`,
                                  onClick: oe,
                                  children: (0, k.jsx)(`svg`, {
                                    className: `app-share-modal__copy-icon`,
                                    viewBox: `0 0 24 24`,
                                    "aria-hidden": `true`,
                                    children: (0, k.jsx)(`path`, {
                                      d: `m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            C
                              ? (0, k.jsx)(`p`, {
                                  className: `app-share-modal__copied`,
                                  role: `status`,
                                  children: `Copied to clipboard`,
                                })
                              : null,
                          ],
                        })
                      : null,
                (0, k.jsx)(`button`, {
                  type: `button`,
                  className: `app-action-btn`,
                  onClick: ae,
                  children: `Close`,
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
(0, b.createRoot)(document.getElementById(`root`)).render(
  (0, k.jsx)(y.StrictMode, { children: (0, k.jsx)(Ps, {}) }),
);
