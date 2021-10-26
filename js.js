(function() {
        window.google = {
          kEI: "6H94YaTzA7ebwbkPiqSaoAo",
          kEXPI: "31",
          u: "9c5f5c65",
          kBL: "BfWv"
        };
        google.sn = "web";
        google.kHL = "en";
      })();
      (function() {
        var f = this || self;
        var h,
          k = [];
        function l(a) {
          for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid"))); )
            a = a.parentNode;
          return b || h;
        }
        function m(a) {
          for (
            var b = null;
            a && (!a.getAttribute || !(b = a.getAttribute("leid")));

          )
            a = a.parentNode;
          return b;
        }
        function n(a, b, c, d, g) {
          var e = "";
          c ||
            -1 !== b.search("&ei=") ||
            ((e = "&ei=" + l(d)),
            -1 === b.search("&lei=") && (d = m(d)) && (e += "&lei=" + d));
          d = "";
          !c &&
            f._cshid &&
            -1 === b.search("&cshid=") &&
            "slh" !== a &&
            (d = "&cshid=" + f._cshid);
          c =
            c ||
            "/" +
              (g || "gen_204") +
              "?atyp=i&ct=" +
              a +
              "&cad=" +
              b +
              e +
              "&zx=" +
              Date.now() +
              d;
          /^http:/i.test(c) &&
            "https:" === window.location.protocol &&
            (google.ml && google.ml(Error("a"), !1, { src: c, glmm: 1 }),
            (c = ""));
          return c;
        }
        h = google.kEI;
        google.getEI = l;
        google.getLEI = m;
        google.ml = function() {
          return null;
        };
        google.log = function(a, b, c, d, g) {
          if ((c = n(a, b, c, d, g))) {
            a = new Image();
            var e = k.length;
            k[e] = a;
            a.onerror = a.onload = a.onabort = function() {
              delete k[e];
            };
            a.src = c;
          }
        };
        google.logUrl = n;
      }.call(this));
      (function() {
        google.y = {};
        google.sy = [];
        google.x = function(a, b) {
          if (a) var c = a.id;
          else {
            do c = Math.random();
            while (google.y[c]);
          }
          google.y[c] = [a, b];
          return !1;
        };
        google.sx = function(a) {
          google.sy.push(a);
        };
        google.lm = [];
        google.plm = function(a) {
          google.lm.push.apply(google.lm, a);
        };
        google.lq = [];
        google.load = function(a, b, c) {
          google.lq.push([[a], b, c]);
        };
        google.loadAll = function(a, b) {
          google.lq.push([a, b]);
        };
        google.bx = !1;
        google.lx = function() {};
      }.call(this));
      google.f = {};
      (function() {
        document.documentElement.addEventListener(
          "submit",
          function(b) {
            var a;
            if ((a = b.target)) {
              var c = a.getAttribute("data-submitfalse");
              a = "1" === c || ("q" === c && !a.elements.q.value) ? !0 : !1;
            } else a = !1;
            a && (b.preventDefault(), b.stopPropagation());
          },
          !0
        );
        document.documentElement.addEventListener(
          "click",
          function(b) {
            var a;
            a: {
              for (
                a = b.target;
                a && a !== document.documentElement;
                a = a.parentElement
              )
                if ("A" === a.tagName) {
                  a = "1" === a.getAttribute("data-nohref");
                  break a;
                }
              a = !1;
            }
            a && b.preventDefault();
          },
          !0
        );
      }.call(this));
      (function() {
        google.hs = { di: true, h: true, peh: true, sie: false };
      })();
      (function() {
        google.c = {
          btfi: false,
          frt: false,
          gl: false,
          lhc: false,
          ll: true,
          nli: false,
          timl: false,
          wvcpe: false,
          wve: true
        };
        (function() {
          var e = this || self;
          var g = window.performance;
          google.timers = {};
          google.startTick = function(a) {
            google.timers[a] = { t: { start: Date.now() }, e: {}, m: {} };
          };
          google.tick = function(a, b, c) {
            google.timers[a] || google.startTick(a);
            c = void 0 !== c ? c : Date.now();
            b instanceof Array || (b = [b]);
            for (var d = 0, f; (f = b[d++]); ) google.timers[a].t[f] = c;
          };
          google.c.e = function(a, b, c) {
            google.timers[a].e[b] = c;
          };
          google.c.b = function(a) {
            var b = google.timers.load.m;
            b[a] && google.ml(Error("a"), !1, { m: a });
            b[a] = !0;
          };
          google.c.u = function(a) {
            var b = google.timers.load.m;
            if (b[a]) {
              b[a] = !1;
              for (a in b) if (b[a]) return;
              google.csiReport();
            } else {
              var c = "",
                d;
              for (d in b) c += d + ":" + b[d] + ";";
              google.ml(Error("b"), !1, { m: a, b: !1 === b[a], s: c });
            }
          };
          function h(a, b, c, d) {
            a.addEventListener
              ? a.addEventListener(b, c, d || !1)
              : a.attachEvent && a.attachEvent("on" + b, c);
          }
          function k(a, b, c, d) {
            "addEventListener" in a
              ? a.removeEventListener(b, c, d || !1)
              : a.attachEvent && a.detachEvent("on" + b, c);
          }
          google.rll = function(a, b, c) {
            function d(f) {
              c(f);
              k(a, "load", d);
              k(a, "error", d);
            }
            h(a, "load", d);
            b && h(a, "error", d);
          };
          e.google.aft = function(a) {
            a.setAttribute("data-iml", String(Date.now()));
          };
          google.startTick("load");
          var l = google.timers.load;
          a: {
            var m = l.t;
            if (g) {
              var n = g.timing;
              if (n) {
                var p = n.navigationStart,
                  q = n.responseStart;
                if (q > p && q <= m.start) {
                  m.start = q;
                  l.wsrt = q - p;
                  break a;
                }
              }
              g.now && (l.wsrt = Math.floor(g.now()));
            }
          }
          function r(a) {
            return "hidden" === document.visibilityState
              ? ((google.c.fh = a), !0)
              : !1;
          }
          function t(a) {
            r(a.timeStamp) && k(document, "visibilitychange", t, !0);
          }
          google.c.wve &&
            ((google.c.fh = Infinity),
            h(document, "visibilitychange", t, !0),
            r(0));
          google.c.b("pr");
          google.c.b("xe");
          if (google.c.gl) {
            var u = function(a) {
              a && e.google.aft(a.target);
            };
            h(document.documentElement, "load", u, !0);
            google.c.glu = function() {
              k(document.documentElement, "load", u, !0);
            };
          }
        }.call(this));
      })();
      (function() {
        function m() {
          return (
            window.performance &&
            window.performance.navigation &&
            window.performance.navigation.type
          );
        }
        function p(a, c) {
          if (!a || r(a)) return 0;
          if (!a.getBoundingClientRect) return 1;
          var d = function(b) {
            return b.getBoundingClientRect();
          };
          return t(a, c, d) ? 0 : u(a, c, d);
        }
        function t(a, c, d) {
          a: {
            for (var b = a; b && b !== c; b = b.parentElement)
              if ("hidden" === b.style.overflow) {
                c = b;
                break a;
              }
            c = null;
          }
          if (!c) return !1;
          a = d(a);
          d = d(c);
          return (
            a.bottom < d.top ||
            a.top >= d.bottom ||
            a.right < d.left ||
            a.left >= d.right
          );
        }
        function r(a) {
          return "none" === a.style.display
            ? !0
            : document.defaultView && document.defaultView.getComputedStyle
            ? ((a = document.defaultView.getComputedStyle(a)),
              !!a &&
                ("hidden" === a.visibility ||
                  ("0px" === a.height && "0px" === a.width)))
            : !1;
        }
        function u(a, c, d) {
          var b = d(a),
            f = b.left + window.pageXOffset,
            h = b.top + window.pageYOffset,
            k = b.width,
            g = b.height,
            e = 0;
          if (0 >= g && 0 >= k) return e;
          var n = window.innerHeight || document.documentElement.clientHeight;
          0 > h + g ? (e = 2) : h >= n && (e = 4);
          if (
            0 > f + k ||
            f >= (window.innerWidth || document.documentElement.clientWidth)
          )
            e |= 8;
          else if (c) {
            for (b = b.left; a && a !== c; a = a.parentElement)
              b += a.scrollLeft;
            c = d(c);
            if (b + k < c.left || b >= c.right) e |= 8;
          }
          e || ((e = 1), h + g > n && (e |= 4));
          return e;
        }
        var v = window.location,
          w = "aft frt hct prt pprt sct".split(" ");
        function x(a) {
          return (a = v.search.match(new RegExp("[?&]" + a + "=(\\d+)")))
            ? Number(a[1])
            : -1;
        }
        var y = window.innerHeight || document.documentElement.clientHeight,
          z = 0,
          A = 0,
          C = 0,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = !0,
          K = !0,
          L = -1;
        function M(a, c, d, b) {
          var f = google.timers.load.t[a];
          (f && (d || (b && null != c && c < f))) || google.tick("load", a, c);
        }
        function N(a, c, d, b) {
          "1" === a.getAttribute("data-frt") && (M("frt", b, !1, !0), ++D, O());
          c && (M("aft", b, !1, !0), M("afti", b, !1, !0), ++F, d || ++I, O());
          google.c.timl && M("iml", b, !1, !0);
          ++A;
          a.setAttribute("data-frt", "0");
          (google.c.timl || c) && P();
        }
        function P() {
          var a = google.c.timl ? A === z : E === F;
          !K && a && google.c.u("il");
        }
        function O() {
          if (!J) {
            var a = F === E,
              c = D === C,
              d = I === H;
            d = google.c.nli ? d : a;
            if (a && c) {
              google.c.e("load", "ima", String(E));
              google.c.e("load", "imad", String(G));
              google.c.e("load", "aftp", String(Math.round(L)));
              var b = google.timers.load;
              a = b.m;
              if (!a || !a.prs) {
                var f = m() ? 0 : x("qsubts");
                0 < f &&
                  ((a = x("fbts")), 0 < a && (b.t.start = Math.max(f, a)));
                var h = b.t,
                  k = h.start;
                a = { wsrt: b.wsrt };
                for (var g = 0, e; (e = w[g++]); ) {
                  var n = h[e];
                  n && k && (a[e] = n - k);
                }
                0 < f && (a.gsasrt = b.t.start - f);
                f = b.e;
                b =
                  "/gen_204?s=" +
                  google.sn +
                  "&t=aft&atyp=csi&ei=" +
                  google.kEI +
                  "&rt=";
                h = "";
                for (l in a) (b += "" + h + l + "." + a[l]), (h = ",");
                for (var q in f) b += "&" + q + "=" + f[q];
                window._cshid && (b += "&cshid=" + window._cshid);
                2 === m() && (b += "&bb=1");
                1 === m() && (b += "&r=1");
                if ("gsasrt" in a) {
                  var l = x("qsd");
                  0 < l && (b += "&qsd=" + l);
                }
                google.kBL && (b += "&bl=" + google.kBL);
                l = b;
                navigator.sendBeacon
                  ? navigator.sendBeacon(l, "")
                  : google.log("", "", l);
              }
            }
            if (
              null !== google.aftq &&
              ((l =
                2 === google.fevent || 3 === google.fevent ? google.fevent : 1),
              (2 === l && c) || (1 === l && d) || (3 === l && (d || c)))
            ) {
              google.tick("load", "aftqf", Date.now());
              var B;
              for (
                c = 0;
                (d =
                  null === (B = google.aftq) || void 0 === B ? void 0 : B[c++]);

              )
                try {
                  d();
                } catch (R) {
                  google.ml(R, !1);
                }
              google.aftq = null;
            }
          }
        }
        var Q = "src bsrc url ll image img-url".split(" ");
        function S(a) {
          for (var c = 0, d; (d = Q[c++]); )
            if (a.getAttribute("data-" + d)) return !0;
          return !1;
        }
        function T(a, c) {
          0 === c || c & 8 || (a.setAttribute("data-frt", "1"), ++C);
        }
        google.c.b("il");
        google.c.setup = function(a, c, d) {
          var b = a.getAttribute("data-atf");
          if (b)
            return (
              (d = Number(b)), c && !a.hasAttribute("data-frt") && T(a, d), d
            );
          var f = "string" !== typeof a.src || !a.src,
            h = !!a.getAttribute("data-bsrc");
          b = !!a.getAttribute("data-deferred");
          var k = !b && S(a);
          k && a.setAttribute("data-lzy_", "1");
          var g;
          for (g = a; g && "center_col" !== g.id; ) g = g.parentElement;
          g = p(a, g);
          a.setAttribute("data-atf", String(g));
          var e = !!(g & 1);
          f = (f || a.complete) && !b && !h && !(google.c.ll && e && k);
          h = (!google.c.lhc && Number(a.getAttribute("data-iml"))) || 0;
          ++z;
          if ((f && !h) || a.hasAttribute("data-noaft"))
            a.setAttribute("data-frt", "0"), ++A;
          else {
            var n = google.c.btfi && g & 4 && h && L < y;
            if (n) {
              var q = a.getBoundingClientRect().top + window.pageYOffset;
              !d || q < d ? (L = e ? y : q) : (n = !1);
            }
            e && (++E, b && ++G, k || ++H);
            c && T(a, g);
            n && M("aft", h, !1, !0);
            f && h
              ? N(a, e, k, google.c.btfi ? 0 : h)
              : (e && (!d || d >= y) && (L = y),
                google.rll(a, !0, function() {
                  N(a, e, k, Date.now());
                }));
          }
          return g;
        };
        google.c.ubr = function(a, c, d) {
          0 > L && (d && (L = d), google.c.btfi && M("aft", c));
          a || M("afts", c, !0);
          M("aft", c, !0);
          J && !google.c.frt && ((J = !1), O());
          a &&
            K &&
            (M("prt", c),
            google.c.timl && M("iml", c, !0),
            (K = !1),
            P(),
            (google.c.setup = function() {
              return 0;
            }),
            (google.c.ubr = function() {}));
        };
      }.call(this));
      (function() {
        var b = [
          function() {
            google.tick && google.tick("load", "dcl");
          }
        ];
        google.dclc = function(a) {
          b.length ? b.push(a) : a();
        };
        function c() {
          for (var a = b.shift(); a; ) a(), (a = b.shift());
        }
        window.addEventListener
          ? (document.addEventListener("DOMContentLoaded", c, !1),
            window.addEventListener("load", c, !1))
          : window.attachEvent && window.attachEvent("onload", c);
      }.call(this));
      (function() {
        var b = [];
        google.jsc = {
          xx: b,
          x: function(a) {
            b.push(a);
          },
          mm: [],
          m: function(a) {
            google.jsc.mm.length || (google.jsc.mm = a);
          }
        };
      }.call(this));
      (function() {
        var e = this || self;

        var f = {};
        function w(a, b) {
          if (null === b) return !1;
          if ("contains" in a && 1 == b.nodeType) return a.contains(b);
          if ("compareDocumentPosition" in a)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
          for (; b && a != b; ) b = b.parentNode;
          return b == a;
        }
        var x = function(a, b) {
            return function(d) {
              d || (d = window.event);
              return b.call(a, d);
            };
          },
          z =
            "undefined" != typeof navigator &&
            /Macintosh/.test(navigator.userAgent),
          A = function() {
            this._mouseEventsPrevented = !0;
          };
        var F = function(a) {
            this.g = a;
            this.h = [];
          },
          G = function(a) {
            for (var b = 0; b < a.h.length; ++b) {
              var d = a.g,
                c = a.h[b];
              d.removeEventListener
                ? d.removeEventListener(c.eventType, c.o, c.capture)
                : d.detachEvent && d.detachEvent("on" + c.eventType, c.o);
            }
            a.h = [];
          };
        var H = e._jsa || {};
        H._cfc = void 0;
        H._aeh = void 0;
        var I = function() {
            this.h = this.g = null;
          },
          K = function(a, b) {
            var d = J;
            d.g = a;
            d.h = b;
            return d;
          };
        I.prototype.i = function() {
          var a = this.g;
          this.g && this.g != this.h
            ? (this.g = this.g.__owner || this.g.parentNode)
            : (this.g = null);
          return a;
        };
        var L = function() {
          this.j = [];
          this.g = 0;
          this.h = null;
          this.l = !1;
        };
        L.prototype.i = function() {
          if (this.l) return J.i();
          if (this.g != this.j.length) {
            var a = this.j[this.g];
            this.g++;
            a != this.h &&
              a &&
              a.__owner &&
              ((this.l = !0), K(a.__owner, this.h));
            return a;
          }
          return null;
        };
        var J = new I(),
          M = new L();
        var Q = function() {
            this.s = [];
            this.g = [];
            this.h = [];
            this.l = {};
            this.i = null;
            this.j = [];
            N(this, "_custom");
          },
          R = function(a) {
            return String.prototype.trim
              ? a.trim()
              : a.replace(/^\s+/, "").replace(/\s+$/, "");
          },
          ha = function(a, b) {
            return function l(c, g) {
              g = void 0 === g ? !0 : g;
              var k = b;
              if ("_custom" == k) {
                k = c.detail;
                if (!k || !k._type) return;
                k = k._type;
              }
              var m = k;
              "click" == m &&
              ((z && c.metaKey) ||
                (!z && c.ctrlKey) ||
                2 == c.which ||
                (null == c.which && 4 == c.button) ||
                c.shiftKey)
                ? (m = "clickmod")
                : "keydown" == m && !c.a11ysc && (m = "maybe_click");
              var u = c.srcElement || c.target;
              k = S(m, c, u, "", null);
              if (c.path) {
                M.j = c.path;
                M.g = 0;
                M.h = this;
                M.l = !1;
                var O = M;
              } else O = K(u, this);
              for (var r; (r = O.i()); ) {
                var h = r;
                var p = void 0;
                r = h;
                var q = m,
                  aa = c;
                var n = r.__jsaction;
                if (!n) {
                  var y;
                  n = null;
                  "getAttribute" in r && (n = r.getAttribute("jsaction"));
                  if ((y = n)) {
                    n = f[y];
                    if (!n) {
                      n = {};
                      for (
                        var B = y.split(ba), ca = B ? B.length : 0, C = 0;
                        C < ca;
                        C++
                      ) {
                        var v = B[C];
                        if (v) {
                          var D = v.indexOf(":"),
                            P = -1 != D,
                            ea = P ? R(v.substr(0, D)) : da;
                          v = P ? R(v.substr(D + 1)) : v;
                          n[ea] = v;
                        }
                      }
                      f[y] = n;
                    }
                    r.__jsaction = n;
                  } else (n = fa), (r.__jsaction = n);
                }
                "maybe_click" == q && n.click
                  ? ((p = q), (q = "click"))
                  : "clickkey" == q
                  ? (q = "click")
                  : "click" != q || n.click || (q = "clickonly");
                p =
                  H._cfc && n.click
                    ? H._cfc(r, aa, n, q, p)
                    : {
                        eventType: p ? p : q,
                        action: n[q] || "",
                        event: null,
                        ignore: !1
                      };
                k = S(
                  p.eventType,
                  p.event || c,
                  u,
                  p.action || "",
                  h,
                  k.timeStamp
                );
                if (p.ignore || p.action) break;
              }
              k &&
                "touchend" == k.eventType &&
                (k.event._preventMouseEvents = A);
              if (p && p.action) {
                if ("mouseenter" == m || "mouseleave" == m)
                  if (
                    ((u = c.relatedTarget),
                    !(
                      ("mouseover" == c.type && "mouseenter" == m) ||
                      ("mouseout" == c.type && "mouseleave" == m)
                    ) ||
                      (u && (u === h || w(h, u))))
                  )
                    (k.action = ""), (k.actionElement = null);
                  else {
                    m = {};
                    for (var t in c)
                      "function" !== typeof c[t] &&
                        "srcElement" !== t &&
                        "target" !== t &&
                        (m[t] = c[t]);
                    m.type =
                      "mouseover" == c.type ? "mouseenter" : "mouseleave";
                    m.target = m.srcElement = h;
                    m.bubbles = !1;
                    k.event = m;
                    k.targetElement = h;
                  }
              } else (k.action = ""), (k.actionElement = null);
              h = k;
              a.i &&
                !h.event.a11ysgd &&
                ((t = S(
                  h.eventType,
                  h.event,
                  h.targetElement,
                  h.action,
                  h.actionElement,
                  h.timeStamp
                )),
                "clickonly" == t.eventType && (t.eventType = "click"),
                a.i(t, !0));
              if (h.actionElement || "maybe_click" == h.eventType) {
                if (a.i) {
                  if (
                    (!h.actionElement ||
                      "A" != h.actionElement.tagName ||
                      ("click" != h.eventType && "clickmod" != h.eventType) ||
                      (c.preventDefault
                        ? c.preventDefault()
                        : (c.returnValue = !1)),
                    (c = a.i(h)) && g)
                  ) {
                    l.call(this, c, !1);
                    return;
                  }
                } else {
                  if ((g = e.document) && !g.createEvent && g.createEventObject)
                    try {
                      var E = g.createEventObject(c);
                    } catch (ka) {
                      E = c;
                    }
                  else E = c;
                  h.event = E;
                  a.j.push(h);
                }
                H._aeh && H._aeh(h);
              }
            };
          },
          S = function(a, b, d, c, g, l) {
            return {
              eventType: a,
              event: b,
              targetElement: d,
              action: c,
              actionElement: g,
              timeStamp: l || Date.now()
            };
          },
          ia = function(a, b) {
            return function(d) {
              var c = a,
                g = b,
                l = !1;
              "mouseenter" == c
                ? (c = "mouseover")
                : "mouseleave" == c && (c = "mouseout");
              if (d.addEventListener) {
                if ("focus" == c || "blur" == c || "error" == c || "load" == c)
                  l = !0;
                d.addEventListener(c, g, l);
              } else
                d.attachEvent &&
                  ("focus" == c
                    ? (c = "focusin")
                    : "blur" == c && (c = "focusout"),
                  (g = x(d, g)),
                  d.attachEvent("on" + c, g));
              return { eventType: c, o: g, capture: l };
            };
          },
          N = function(a, b) {
            if (!a.l.hasOwnProperty(b)) {
              var d = ha(a, b),
                c = ia(b, d);
              a.l[b] = d;
              a.s.push(c);
              for (d = 0; d < a.g.length; ++d) {
                var g = a.g[d];
                g.h.push(c.call(null, g.g));
              }
              "click" == b && N(a, "keydown");
            }
          };
        Q.prototype.o = function(a) {
          return this.l[a];
        };
        var W = function(a, b) {
            var d = new F(b);
            a: {
              for (var c = 0; c < a.g.length; c++)
                if (T(a.g[c].g, b)) {
                  b = !0;
                  break a;
                }
              b = !1;
            }
            if (b) return a.h.push(d), d;
            U(a, d);
            a.g.push(d);
            V(a);
            return d;
          },
          V = function(a) {
            for (
              var b = a.h.concat(a.g), d = [], c = [], g = 0;
              g < a.g.length;
              ++g
            ) {
              var l = a.g[g];
              X(l, b) ? (d.push(l), G(l)) : c.push(l);
            }
            for (g = 0; g < a.h.length; ++g)
              (l = a.h[g]), X(l, b) ? d.push(l) : (c.push(l), U(a, l));
            a.g = c;
            a.h = d;
          },
          U = function(a, b) {
            var d = b.g;
            ja && (d.style.cursor = "pointer");
            for (d = 0; d < a.s.length; ++d) b.h.push(a.s[d].call(null, b.g));
          },
          Y = function(a, b) {
            a.i = b;
            a.j && (0 < a.j.length && b(a.j), (a.j = null));
          },
          X = function(a, b) {
            for (var d = 0; d < b.length; ++d)
              if (b[d].g != a.g && T(b[d].g, a.g)) return !0;
            return !1;
          },
          T = function(a, b) {
            for (; a != b && b.parentNode; ) b = b.parentNode;
            return a == b;
          },
          ja =
            "undefined" != typeof navigator &&
            /iPhone|iPad|iPod/.test(navigator.userAgent),
          ba = /\s*;\s*/,
          da = "click",
          fa = {};
        var Z = new Q();
        W(Z, window.document.documentElement);
        N(Z, "click");
        N(Z, "focus");
        N(Z, "focusin");
        N(Z, "blur");
        N(Z, "focusout");
        N(Z, "error");
        N(Z, "load");
        N(Z, "auxclick");
        N(Z, "change");
        N(Z, "dblclick");
        N(Z, "input");
        N(Z, "keyup");
        N(Z, "keydown");
        N(Z, "keypress");
        N(Z, "mousedown");
        N(Z, "mouseenter");
        N(Z, "mouseleave");
        N(Z, "mouseout");
        N(Z, "mouseover");
        N(Z, "mouseup");
        N(Z, "paste");
        N(Z, "touchstart");
        N(Z, "touchend");
        N(Z, "touchcancel");
        N(Z, "speech");
        (function(a) {
          google.jsad = function(b) {
            Y(a, b);
          };
          google.jsaac = function(b) {
            return W(a, b);
          };
          google.jsarc = function(b) {
            G(b);
            for (var d = !1, c = 0; c < a.g.length; ++c)
              if (a.g[c] === b) {
                a.g.splice(c, 1);
                d = !0;
                break;
              }
            if (!d)
              for (d = 0; d < a.h.length; ++d)
                if (a.h[d] === b) {
                  a.h.splice(d, 1);
                  break;
                }
            V(a);
          };
        })(Z);
        e.gws_wizbind = (0,
        function(a) {
          return {
            trigger: function(b) {
              var d = a.o(b.type);
              d || (N(a, b.type), (d = a.o(b.type)));
              var c = b.target || b.srcElement;
              d && d.call(c.ownerDocument.documentElement, b);
            },
            bind: function(b) {
              Y(a, b);
            }
          };
        })(Z);
      }.call(this));
      (function() {
        window.google.erd = { sp: "srp", jsr: 0, bv: 1464, sd: true, de: true };
      })();
      var h =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function(a, b, c) {
                if (a == Array.prototype || a == Object.prototype) return a;
                a[b] = c.value;
                return a;
              },
        k = function(a) {
          a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global
          ];
          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
          }
          throw Error("a");
        },
        l = k(this),
        m = function(a, b) {
          if (b)
            a: {
              var c = l;
              a = a.split(".");
              for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e];
              }
              a = a[a.length - 1];
              d = c[a];
              b = b(d);
              b != d &&
                null != b &&
                h(c, a, { configurable: !0, writable: !0, value: b });
            }
        };
      m("String.prototype.startsWith", function(a) {
        return a
          ? a
          : function(b, c) {
              if (null == this)
                throw new TypeError(
                  "The 'this' value for String.prototype.startsWith must not be null or undefined"
                );
              if (b instanceof RegExp)
                throw new TypeError(
                  "First argument to String.prototype.startsWith must not be a regular expression"
                );
              var d = this + "";
              b += "";
              var e = d.length,
                g = b.length;
              c = Math.max(0, Math.min(c | 0, d.length));
              for (var f = 0; f < g && c < e; ) if (d[c++] != b[f++]) return !1;
              return f >= g;
            };
      });
      google.arwt = function(a) {
        a.href = document.getElementById(
          a.id.substring(a.id.startsWith("vcs") ? 3 : 1)
        ).href;
        return !0;
      };
      (function() {
        var d = function(a) {
            this.h = a = a.url;
            var b = /[?&]dsh=1(&|$)/.test(a);
            this.j = !b && /[?&]ae=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
              try {
                var c = decodeURIComponent(this.g[1]);
              } catch (e) {
                c = null;
              }
              this.i = c;
            }
          },
          g = function(a, b) {
            return (a.j && a.i) || a.l
              ? 1 == b
                ? a.j
                  ? a.i
                  : f(a, "&dct=1")
                : 2 == b
                ? f(a, "&ri=2")
                : f(a, "&ri=16")
              : a.h;
          },
          f = function(a, b) {
            return a.g
              ? a.h.slice(0, a.g.index) + b + a.h.slice(a.g.index)
              : a.h + b;
          };
        var k = function(a, b) {
          this.g = b === h ? a : "";
        };
        k.prototype.i = !0;
        k.prototype.h = function() {
          return this.g.toString();
        };
        k.prototype.toString = function() {
          return this.g.toString();
        };
        var m = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
          h = {};
        var n = /^((market|itms|intent|itms-appss):\/\/)/i;
        var p = function(a, b) {
          b instanceof k ||
            b instanceof k ||
            ((b = "object" == typeof b && b.i ? b.h() : String(b)),
            m.test(b) || (b = "about:invalid#zClosurez"),
            (b = new k(b, h)));
          a.href =
            b instanceof k && b.constructor === k ? b.g : "type_error:SafeUrl";
        };
        function q(a) {
          var b = /[?&]adurl=/.exec(a);
          return b
            ? "" + a.slice(0, b.index + 1) + "nis=3&" + a.slice(b.index + 1)
            : "" + a + (-1 === a.indexOf("?") ? "?" : "&") + "nis=3";
        }
        function r(a) {
          if (document.featurePolicy) {
            if ("86" === a.getAttribute("data-ans")) {
              if (
                !(
                  a.hasAttribute("impressiondata") &&
                  a.hasAttribute("conversiondestination") &&
                  a.hasAttribute("reportingorigin") &&
                  a.hasAttribute("impressionexpiry") &&
                  document.featurePolicy.allowsFeature("conversion-measurement")
                )
              )
                return;
            } else if (
              !(
                a.hasAttribute("attributionsourceeventid") &&
                a.hasAttribute("attributiondestination") &&
                a.hasAttribute("attributionreportto") &&
                a.hasAttribute("attributionexpiry") &&
                document.featurePolicy.allowsFeature("attribution-reporting")
              )
            )
              return;
            var b = a.href,
              c = /[?&]nis=([^&]*)/.exec(b);
            (c && "3" === c[1]) ||
              ((b = c
                ? b.replace(/([?&])nis=([^&]*)/, function(e, l) {
                    return l + "nis=3";
                  })
                : q(b)),
              p(a, b));
          }
        }
        google.ausb = function(a) {
          if (!a) return google.ml(Error("a"), !1), !0;
          if (a.hasAttribute("data-impdclcc"))
            try {
              r(a);
            } catch (l) {}
          if (a.getAttribute("data-sbv2")) {
            if (a.hasAttribute("data-ohref"))
              var b = a.getAttribute("data-ohref");
            else (b = a.href), a.setAttribute("data-ohref", b);
            var c = b;
            var e = new d({ url: c });
            c =
              (e.j && e.i) || e.l
                ? navigator.sendBeacon
                  ? navigator.sendBeacon(f(e, "&act=1&ri=1"), "")
                    ? g(e, 1)
                    : g(e, 2)
                  : g(e, 0)
                : c;
            c = c instanceof k || !n.test(c) ? c : new k(c, h);
            b != c && p(a, c);
          }
          return !0;
        };
      }.call(this));
      (function() {
        function c(a) {
          for (; a && a != document.documentElement; a = a.parentElement)
            if ("A" == a.tagName) return a;
          return null;
        }
        function d(a) {
          if ((a = c(a.target)))
            switch (a.getAttribute("data-agdh")) {
              case "arwt":
                google.arwt(a);
                break;
              case "fvd3vc":
                window.J4LCUe(a);
                break;
              case "EdKoMd":
                (0, google.f.LmvwCb)(a);
            }
          return !0;
        }
        window.document.documentElement.addEventListener("mousedown", d, !0);
        window.document.documentElement.addEventListener("touchstart", d, !0);
        window.document.documentElement.addEventListener(
          "click",
          function(a) {
            var b = c(a.target);
            if (b)
              switch (b.getAttribute("data-agch")) {
                case "ausb":
                  google.ausb(b);
                  break;
                case "HJ3bqe":
                  window.YvikHb(a, b);
                  break;
                case "cqUJI":
                  (0, google.f.DfwaCb)(b);
              }
            return !0;
          },
          !0
        );
      }.call(this));
      /*CSH_START*/ (function() {
        google.csc = "gwoc";
        google.cshid = "1635287298441330";
        window._csc = "gwoc";
        window._cshid = "1635287298441330";
      })(); /*CSH_END*/