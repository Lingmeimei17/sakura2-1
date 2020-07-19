/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery)
}(this, (function(t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }
            )))),
            i.forEach((function(e) {
                o(t, e, n[e])
            }
            ))
        }
        return t
    }
    e = e && e.hasOwnProperty("default") ? e.default : e;
    function s(t) {
        var n = this
          , i = !1;
        return e(this).one(a.TRANSITION_END, (function() {
            i = !0
        }
        )),
        setTimeout((function() {
            i || a.triggerTransitionEnd(n)
        }
        ), t),
        this
    }
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var n = e(t).css("transition-duration")
              , i = e(t).css("transition-delay")
              , o = parseFloat(n)
              , r = parseFloat(i);
            return o || r ? (n = n.split(",")[0],
            i = i.split(",")[0],
            1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            e(t).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && a.isElement(r) ? "element" : (l = r,
                    {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null
        }
    };
    e.fn.emulateTransitionEnd = s,
    e.event.special[a.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(t) {
            if (e(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert"
      , c = e.fn[l]
      , h = {
        CLOSE: "close.bs.alert",
        CLOSED: "closed.bs.alert",
        CLICK_DATA_API: "click.bs.alert.data-api"
    }
      , u = "alert"
      , f = "fade"
      , d = "show"
      , p = function() {
        function t(t) {
            this._element = t
        }
        var n = t.prototype;
        return n.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.alert"),
            this._element = null
        }
        ,
        n._getRootElement = function(t) {
            var n = a.getSelectorFromElement(t)
              , i = !1;
            return n && (i = document.querySelector(n)),
            i || (i = e(t).closest("." + u)[0]),
            i
        }
        ,
        n._triggerCloseEvent = function(t) {
            var n = e.Event(h.CLOSE);
            return e(t).trigger(n),
            n
        }
        ,
        n._removeElement = function(t) {
            var n = this;
            if (e(t).removeClass(d),
            e(t).hasClass(f)) {
                var i = a.getTransitionDurationFromElement(t);
                e(t).one(a.TRANSITION_END, (function(e) {
                    return n._destroyElement(t, e)
                }
                )).emulateTransitionEnd(i)
            } else
                this._destroyElement(t)
        }
        ,
        n._destroyElement = function(t) {
            e(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this)
                  , o = i.data("bs.alert");
                o || (o = new t(this),
                i.data("bs.alert", o)),
                "close" === n && o[n](this)
            }
            ))
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        t
    }();
    e(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    e.fn[l] = p._jQueryInterface,
    e.fn[l].Constructor = p,
    e.fn[l].noConflict = function() {
        return e.fn[l] = c,
        p._jQueryInterface
    }
    ;
    var m = e.fn.button
      , g = "active"
      , _ = "btn"
      , v = "focus"
      , b = '[data-toggle^="button"]'
      , y = '[data-toggle="buttons"]'
      , E = 'input:not([type="hidden"])'
      , w = ".active"
      , C = ".btn"
      , T = {
        CLICK_DATA_API: "click.bs.button.data-api",
        FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
    }
      , S = function() {
        function t(t) {
            this._element = t
        }
        var n = t.prototype;
        return n.toggle = function() {
            var t = !0
              , n = !0
              , i = e(this._element).closest(y)[0];
            if (i) {
                var o = this._element.querySelector(E);
                if (o) {
                    if ("radio" === o.type)
                        if (o.checked && this._element.classList.contains(g))
                            t = !1;
                        else {
                            var r = i.querySelector(w);
                            r && e(r).removeClass(g)
                        }
                    if (t) {
                        if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled"))
                            return;
                        o.checked = !this._element.classList.contains(g),
                        e(o).trigger("change")
                    }
                    o.focus(),
                    n = !1
                }
            }
            n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(g)),
            t && e(this._element).toggleClass(g)
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.button"),
            this._element = null
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this).data("bs.button");
                i || (i = new t(this),
                e(this).data("bs.button", i)),
                "toggle" === n && i[n]()
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        t
    }();
    e(document).on(T.CLICK_DATA_API, b, (function(t) {
        t.preventDefault();
        var n = t.target;
        e(n).hasClass(_) || (n = e(n).closest(C)),
        S._jQueryInterface.call(e(n), "toggle")
    }
    )).on(T.FOCUS_BLUR_DATA_API, b, (function(t) {
        var n = e(t.target).closest(C)[0];
        e(n).toggleClass(v, /^focus(in)?$/.test(t.type))
    }
    )),
    e.fn.button = S._jQueryInterface,
    e.fn.button.Constructor = S,
    e.fn.button.noConflict = function() {
        return e.fn.button = m,
        S._jQueryInterface
    }
    ;
    var D = "carousel"
      , I = ".bs.carousel"
      , A = e.fn[D]
      , O = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , N = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , k = "next"
      , L = "prev"
      , x = "left"
      , P = "right"
      , H = {
        SLIDE: "slide" + I,
        SLID: "slid" + I,
        KEYDOWN: "keydown" + I,
        MOUSEENTER: "mouseenter" + I,
        MOUSELEAVE: "mouseleave" + I,
        TOUCHSTART: "touchstart" + I,
        TOUCHMOVE: "touchmove" + I,
        TOUCHEND: "touchend" + I,
        POINTERDOWN: "pointerdown" + I,
        POINTERUP: "pointerup" + I,
        DRAG_START: "dragstart" + I,
        LOAD_DATA_API: "load" + I + ".data-api",
        CLICK_DATA_API: "click" + I + ".data-api"
    }
      , j = "carousel"
      , R = "active"
      , F = "slide"
      , M = "carousel-item-right"
      , W = "carousel-item-left"
      , U = "carousel-item-next"
      , B = "carousel-item-prev"
      , q = "pointer-event"
      , K = ".active"
      , Q = ".active.carousel-item"
      , V = ".carousel-item"
      , Y = ".carousel-item img"
      , z = ".carousel-item-next, .carousel-item-prev"
      , X = ".carousel-indicators"
      , G = "[data-slide], [data-slide-to]"
      , $ = '[data-ride="carousel"]'
      , J = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , Z = function() {
        function t(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(X),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var n = t.prototype;
        return n.next = function() {
            this._isSliding || this._slide(k)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(L)
        }
        ,
        n.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(z) && (a.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        n.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(t) {
            var n = this;
            this._activeElement = this._element.querySelector(Q);
            var i = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    e(this._element).one(H.SLID, (function() {
                        return n.to(t)
                    }
                    ));
                else {
                    if (i === t)
                        return this.pause(),
                        void this.cycle();
                    var o = t > i ? k : L;
                    this._slide(o, this._items[t])
                }
        }
        ,
        n.dispose = function() {
            e(this._element).off(I),
            e.removeData(this._element, "bs.carousel"),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(t) {
            return t = r({}, O, t),
            a.typeCheckConfig(D, t, N),
            t
        }
        ,
        n._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        n._addEventListeners = function() {
            var t = this;
            this._config.keyboard && e(this._element).on(H.KEYDOWN, (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && e(this._element).on(H.MOUSEENTER, (function(e) {
                return t.pause(e)
            }
            )).on(H.MOUSELEAVE, (function(e) {
                return t.cycle(e)
            }
            )),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var n = function(e) {
                    t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , i = function(e) {
                    t._pointerEvent && J[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout((function(e) {
                        return t.cycle(e)
                    }
                    ), 500 + t._config.interval))
                };
                e(this._element.querySelectorAll(Y)).on(H.DRAG_START, (function(t) {
                    return t.preventDefault()
                }
                )),
                this._pointerEvent ? (e(this._element).on(H.POINTERDOWN, (function(t) {
                    return n(t)
                }
                )),
                e(this._element).on(H.POINTERUP, (function(t) {
                    return i(t)
                }
                )),
                this._element.classList.add(q)) : (e(this._element).on(H.TOUCHSTART, (function(t) {
                    return n(t)
                }
                )),
                e(this._element).on(H.TOUCHMOVE, (function(e) {
                    return function(e) {
                        e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                    }(e)
                }
                )),
                e(this._element).on(H.TOUCHEND, (function(t) {
                    return i(t)
                }
                )))
            }
        }
        ,
        n._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(V)) : [],
            this._items.indexOf(t)
        }
        ,
        n._getItemByDirection = function(t, e) {
            var n = t === k
              , i = t === L
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === L ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        n._triggerSlideEvent = function(t, n) {
            var i = this._getItemIndex(t)
              , o = this._getItemIndex(this._element.querySelector(Q))
              , r = e.Event(H.SLIDE, {
                relatedTarget: t,
                direction: n,
                from: o,
                to: i
            });
            return e(this._element).trigger(r),
            r
        }
        ,
        n._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(K));
                e(n).removeClass(R);
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && e(i).addClass(R)
            }
        }
        ,
        n._slide = function(t, n) {
            var i, o, r, s = this, l = this._element.querySelector(Q), c = this._getItemIndex(l), h = n || l && this._getItemByDirection(t, l), u = this._getItemIndex(h), f = Boolean(this._interval);
            if (t === k ? (i = W,
            o = U,
            r = x) : (i = M,
            o = B,
            r = P),
            h && e(h).hasClass(R))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
                this._isSliding = !0,
                f && this.pause(),
                this._setActiveIndicatorElement(h);
                var d = e.Event(H.SLID, {
                    relatedTarget: h,
                    direction: r,
                    from: c,
                    to: u
                });
                if (e(this._element).hasClass(F)) {
                    e(h).addClass(o),
                    a.reflow(h),
                    e(l).addClass(i),
                    e(h).addClass(i);
                    var p = parseInt(h.getAttribute("data-interval"), 10);
                    p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var m = a.getTransitionDurationFromElement(l);
                    e(l).one(a.TRANSITION_END, (function() {
                        e(h).removeClass(i + " " + o).addClass(R),
                        e(l).removeClass(R + " " + o + " " + i),
                        s._isSliding = !1,
                        setTimeout((function() {
                            return e(s._element).trigger(d)
                        }
                        ), 0)
                    }
                    )).emulateTransitionEnd(m)
                } else
                    e(l).removeClass(R),
                    e(h).addClass(R),
                    this._isSliding = !1,
                    e(this._element).trigger(d);
                f && this.cycle()
            }
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this).data("bs.carousel")
                  , o = r({}, O, e(this).data());
                "object" == typeof n && (o = r({}, o, n));
                var s = "string" == typeof n ? n : o.slide;
                if (i || (i = new t(this,o),
                e(this).data("bs.carousel", i)),
                "number" == typeof n)
                    i.to(n);
                else if ("string" == typeof s) {
                    if (void 0 === i[s])
                        throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else
                    o.interval && o.ride && (i.pause(),
                    i.cycle())
            }
            ))
        }
        ,
        t._dataApiClickHandler = function(n) {
            var i = a.getSelectorFromElement(this);
            if (i) {
                var o = e(i)[0];
                if (o && e(o).hasClass(j)) {
                    var s = r({}, e(o).data(), e(this).data())
                      , l = this.getAttribute("data-slide-to");
                    l && (s.interval = !1),
                    t._jQueryInterface.call(e(o), s),
                    l && e(o).data("bs.carousel").to(l),
                    n.preventDefault()
                }
            }
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return O
            }
        }]),
        t
    }();
    e(document).on(H.CLICK_DATA_API, G, Z._dataApiClickHandler),
    e(window).on(H.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll($)), n = 0, i = t.length; n < i; n++) {
            var o = e(t[n]);
            Z._jQueryInterface.call(o, o.data())
        }
    }
    )),
    e.fn[D] = Z._jQueryInterface,
    e.fn[D].Constructor = Z,
    e.fn[D].noConflict = function() {
        return e.fn[D] = A,
        Z._jQueryInterface
    }
    ;
    var tt = "collapse"
      , et = e.fn[tt]
      , nt = {
        toggle: !0,
        parent: ""
    }
      , it = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , ot = {
        SHOW: "show.bs.collapse",
        SHOWN: "shown.bs.collapse",
        HIDE: "hide.bs.collapse",
        HIDDEN: "hidden.bs.collapse",
        CLICK_DATA_API: "click.bs.collapse.data-api"
    }
      , rt = "show"
      , st = "collapse"
      , at = "collapsing"
      , lt = "collapsed"
      , ct = "width"
      , ht = "height"
      , ut = ".show, .collapsing"
      , ft = '[data-toggle="collapse"]'
      , dt = function() {
        function t(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(ft)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = a.getSelectorFromElement(r)
                  , l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                    return e === t
                }
                ));
                null !== s && l.length > 0 && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var n = t.prototype;
        return n.toggle = function() {
            e(this._element).hasClass(rt) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, i, o = this;
            if (!this._isTransitioning && !e(this._element).hasClass(rt) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(ut)).filter((function(t) {
                return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(st)
            }
            ))).length && (n = null),
            !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                var r = e.Event(ot.SHOW);
                if (e(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                    i || e(n).data("bs.collapse", null));
                    var s = this._getDimension();
                    e(this._element).removeClass(st).addClass(at),
                    this._element.style[s] = 0,
                    this._triggerArray.length && e(this._triggerArray).removeClass(lt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var l = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , c = a.getTransitionDurationFromElement(this._element);
                    e(this._element).one(a.TRANSITION_END, (function() {
                        e(o._element).removeClass(at).addClass(st).addClass(rt),
                        o._element.style[s] = "",
                        o.setTransitioning(!1),
                        e(o._element).trigger(ot.SHOWN)
                    }
                    )).emulateTransitionEnd(c),
                    this._element.style[s] = this._element[l] + "px"
                }
            }
        }
        ,
        n.hide = function() {
            var t = this;
            if (!this._isTransitioning && e(this._element).hasClass(rt)) {
                var n = e.Event(ot.HIDE);
                if (e(this._element).trigger(n),
                !n.isDefaultPrevented()) {
                    var i = this._getDimension();
                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                    a.reflow(this._element),
                    e(this._element).addClass(at).removeClass(st).removeClass(rt);
                    var o = this._triggerArray.length;
                    if (o > 0)
                        for (var r = 0; r < o; r++) {
                            var s = this._triggerArray[r]
                              , l = a.getSelectorFromElement(s);
                            if (null !== l)
                                e([].slice.call(document.querySelectorAll(l))).hasClass(rt) || e(s).addClass(lt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[i] = "";
                    var c = a.getTransitionDurationFromElement(this._element);
                    e(this._element).one(a.TRANSITION_END, (function() {
                        t.setTransitioning(!1),
                        e(t._element).removeClass(at).addClass(st).trigger(ot.HIDDEN)
                    }
                    )).emulateTransitionEnd(c)
                }
            }
        }
        ,
        n.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.collapse"),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(t) {
            return (t = r({}, nt, t)).toggle = Boolean(t.toggle),
            a.typeCheckConfig(tt, t, it),
            t
        }
        ,
        n._getDimension = function() {
            return e(this._element).hasClass(ct) ? ct : ht
        }
        ,
        n._getParent = function() {
            var n, i = this;
            a.isElement(this._config.parent) ? (n = this._config.parent,
            void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , r = [].slice.call(n.querySelectorAll(o));
            return e(r).each((function(e, n) {
                i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
            }
            )),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(t, n) {
            var i = e(t).hasClass(rt);
            n.length && e(n).toggleClass(lt, !i).attr("aria-expanded", i)
        }
        ,
        t._getTargetFromElement = function(t) {
            var e = a.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this)
                  , o = i.data("bs.collapse")
                  , s = r({}, nt, i.data(), "object" == typeof n && n ? n : {});
                if (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                o || (o = new t(this,s),
                i.data("bs.collapse", o)),
                "string" == typeof n) {
                    if (void 0 === o[n])
                        throw new TypeError('No method named "' + n + '"');
                    o[n]()
                }
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return nt
            }
        }]),
        t
    }();
    e(document).on(ot.CLICK_DATA_API, ft, (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this)
          , i = a.getSelectorFromElement(this)
          , o = [].slice.call(document.querySelectorAll(i));
        e(o).each((function() {
            var t = e(this)
              , i = t.data("bs.collapse") ? "toggle" : n.data();
            dt._jQueryInterface.call(t, i)
        }
        ))
    }
    )),
    e.fn[tt] = dt._jQueryInterface,
    e.fn[tt].Constructor = dt,
    e.fn[tt].noConflict = function() {
        return e.fn[tt] = et,
        dt._jQueryInterface
    }
    ;
    for (/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.7
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
    var pt = "undefined" != typeof window && "undefined" != typeof document, mt = ["Edge", "Trident", "Firefox"], gt = 0, _t = 0; _t < mt.length; _t += 1)
        if (pt && navigator.userAgent.indexOf(mt[_t]) >= 0) {
            gt = 1;
            break
        }
    var vt = pt && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then((function() {
                e = !1,
                t()
            }
            )))
        }
    }
    : function(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout((function() {
                e = !1,
                t()
            }
            ), gt))
        }
    }
    ;
    function bt(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function yt(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function Et(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function wt(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
        case "HTML":
        case "BODY":
            return t.ownerDocument.body;
        case "#document":
            return t.body
        }
        var e = yt(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : wt(Et(t))
    }
    var Ct = pt && !(!window.MSInputMethodContext || !document.documentMode)
      , Tt = pt && /MSIE 10/.test(navigator.userAgent);
    function St(t) {
        return 11 === t ? Ct : 10 === t ? Tt : Ct || Tt
    }
    function Dt(t) {
        if (!t)
            return document.documentElement;
        for (var e = St(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === yt(n, "position") ? Dt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function It(t) {
        return null !== t.parentNode ? It(t.parentNode) : t
    }
    function At(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? t : e
          , o = n ? e : t
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Dt(s.firstElementChild) !== s ? Dt(l) : l;
        var c = It(t);
        return c.host ? At(c.host, e) : At(t, It(e).host)
    }
    function Ot(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
          , n = "top" === e ? "scrollTop" : "scrollLeft"
          , i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement
              , r = t.ownerDocument.scrollingElement || o;
            return r[n]
        }
        return t[n]
    }
    function Nt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = Ot(e, "top")
          , o = Ot(e, "left")
          , r = n ? -1 : 1;
        return t.top += i * r,
        t.bottom += i * r,
        t.left += o * r,
        t.right += o * r,
        t
    }
    function kt(t, e) {
        var n = "x" === e ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }
    function Lt(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], St(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }
    function xt(t) {
        var e = t.body
          , n = t.documentElement
          , i = St(10) && getComputedStyle(n);
        return {
            height: Lt("Height", e, n, i),
            width: Lt("Width", e, n, i)
        }
    }
    var Pt = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , Ht = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , jt = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
      , Rt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function Ft(t) {
        return Rt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function Mt(t) {
        var e = {};
        try {
            if (St(10)) {
                e = t.getBoundingClientRect();
                var n = Ot(t, "top")
                  , i = Ot(t, "left");
                e.top += n,
                e.left += i,
                e.bottom += n,
                e.right += i
            } else
                e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
          , r = "HTML" === t.nodeName ? xt(t.ownerDocument) : {}
          , s = r.width || t.clientWidth || o.right - o.left
          , a = r.height || t.clientHeight || o.bottom - o.top
          , l = t.offsetWidth - s
          , c = t.offsetHeight - a;
        if (l || c) {
            var h = yt(t);
            l -= kt(h, "x"),
            c -= kt(h, "y"),
            o.width -= l,
            o.height -= c
        }
        return Ft(o)
    }
    function Wt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , i = St(10)
          , o = "HTML" === e.nodeName
          , r = Mt(t)
          , s = Mt(e)
          , a = wt(t)
          , l = yt(e)
          , c = parseFloat(l.borderTopWidth, 10)
          , h = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0));
        var u = Ft({
            top: r.top - s.top - c,
            left: r.left - s.left - h,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0,
        u.marginLeft = 0,
        !i && o) {
            var f = parseFloat(l.marginTop, 10)
              , d = parseFloat(l.marginLeft, 10);
            u.top -= c - f,
            u.bottom -= c - f,
            u.left -= h - d,
            u.right -= h - d,
            u.marginTop = f,
            u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = Nt(u, e)),
        u
    }
    function Ut(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = t.ownerDocument.documentElement
          , i = Wt(t, n)
          , o = Math.max(n.clientWidth, window.innerWidth || 0)
          , r = Math.max(n.clientHeight, window.innerHeight || 0)
          , s = e ? 0 : Ot(n)
          , a = e ? 0 : Ot(n, "left")
          , l = {
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: o,
            height: r
        };
        return Ft(l)
    }
    function Bt(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e)
            return !1;
        if ("fixed" === yt(t, "position"))
            return !0;
        var n = Et(t);
        return !!n && Bt(n)
    }
    function qt(t) {
        if (!t || !t.parentElement || St())
            return document.documentElement;
        for (var e = t.parentElement; e && "none" === yt(e, "transform"); )
            e = e.parentElement;
        return e || document.documentElement
    }
    function Kt(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          , r = {
            top: 0,
            left: 0
        }
          , s = o ? qt(t) : At(t, e);
        if ("viewport" === i)
            r = Ut(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = wt(Et(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Wt(a, s, o);
            if ("HTML" !== a.nodeName || Bt(s))
                r = l;
            else {
                var c = xt(t.ownerDocument)
                  , h = c.height
                  , u = c.width;
                r.top += l.top - l.marginTop,
                r.bottom = h + l.top,
                r.left += l.left - l.marginLeft,
                r.right = u + l.left
            }
        }
        var f = "number" == typeof (n = n || 0);
        return r.left += f ? n : n.left || 0,
        r.top += f ? n : n.top || 0,
        r.right -= f ? n : n.right || 0,
        r.bottom -= f ? n : n.bottom || 0,
        r
    }
    function Qt(t) {
        return t.width * t.height
    }
    function Vt(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = Kt(n, i, r, o)
          , a = {
            top: {
                width: s.width,
                height: e.top - s.top
            },
            right: {
                width: s.right - e.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - e.bottom
            },
            left: {
                width: e.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map((function(t) {
            return Rt({
                key: t
            }, a[t], {
                area: Qt(a[t])
            })
        }
        )).sort((function(t, e) {
            return e.area - t.area
        }
        ))
          , c = l.filter((function(t) {
            var e = t.width
              , i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        }
        ))
          , h = c.length > 0 ? c[0].key : l[0].key
          , u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }
    function Yt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , o = i ? qt(e) : At(e, n);
        return Wt(n, o, i)
    }
    function zt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t)
          , n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
          , i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function Xt(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }
        ))
    }
    function Gt(t, e, n) {
        n = n.split("-")[0];
        var i = zt(t)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , s = r ? "top" : "left"
          , a = r ? "left" : "top"
          , l = r ? "height" : "width"
          , c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2,
        o[a] = n === a ? e[a] - i[c] : e[Xt(a)],
        o
    }
    function $t(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function Jt(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex((function(t) {
                    return t[e] === n
                }
                ));
            var i = $t(t, (function(t) {
                return t[e] === n
            }
            ));
            return t.indexOf(i)
        }(t, "name", n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && bt(n) && (e.offsets.popper = Ft(e.offsets.popper),
            e.offsets.reference = Ft(e.offsets.reference),
            e = n(e, t))
        }
        )),
        e
    }
    function Zt() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = Yt(this.state, this.popper, this.reference, this.options.positionFixed),
            t.placement = Vt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            t.originalPlacement = t.placement,
            t.positionFixed = this.options.positionFixed,
            t.offsets.popper = Gt(this.popper, t.offsets.reference, t.placement),
            t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            t = Jt(this.modifiers, t),
            this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
            this.options.onCreate(t))
        }
    }
    function te(t, e) {
        return t.some((function(t) {
            var n = t.name;
            return t.enabled && n === e
        }
        ))
    }
    function ee(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i]
              , r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r])
                return r
        }
        return null
    }
    function ne() {
        return this.state.isDestroyed = !0,
        te(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[ee("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function ie(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function oe(t, e, n, i) {
        n.updateBound = i,
        ie(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = wt(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName
              , s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }),
            r || t(wt(s.parentNode), n, i, o),
            o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function re() {
        this.state.eventsEnabled || (this.state = oe(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function se() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        e = this.state,
        ie(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach((function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }
        )),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function ae(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function le(t, e) {
        Object.keys(e).forEach((function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ae(e[n]) && (i = "px"),
            t.style[n] = e[n] + i
        }
        ))
    }
    var ce = pt && /Firefox/i.test(navigator.userAgent);
    function he(t, e, n) {
        var i = $t(t, (function(t) {
            return t.name === e
        }
        ))
          , o = !!i && t.some((function(t) {
            return t.name === n && t.enabled && t.order < i.order
        }
        ));
        if (!o) {
            var r = "`" + e + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var ue = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , fe = ue.slice(3);
    function de(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = fe.indexOf(t)
          , i = fe.slice(n + 1).concat(fe.slice(0, n));
        return e ? i.reverse() : i
    }
    var pe = "flip"
      , me = "clockwise"
      , ge = "counterclockwise";
    function _e(t, e, n, i) {
        var o = [0, 0]
          , r = -1 !== ["right", "left"].indexOf(i)
          , s = t.split(/(\+|\-)/).map((function(t) {
            return t.trim()
        }
        ))
          , a = s.indexOf($t(s, (function(t) {
            return -1 !== t.search(/,|\s/)
        }
        )));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map((function(t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width"
              , s = !1;
            return t.reduce((function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                s = !0,
                t) : s ? (t[t.length - 1] += e,
                s = !1,
                t) : t.concat(e)
            }
            ), []).map((function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , r = +o[1]
                      , s = o[2];
                    if (!r)
                        return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return Ft(a)[e] / 100 * r
                    }
                    if ("vh" === s || "vw" === s) {
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                    }
                    return r
                }(t, o, e, n)
            }
            ))
        }
        ))).forEach((function(t, e) {
            t.forEach((function(n, i) {
                ae(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            }
            ))
        }
        )),
        o
    }
    var ve = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets
                          , r = o.reference
                          , s = o.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , h = {
                            start: jt({}, l, r[l]),
                            end: jt({}, l, r[l] + r[c] - s[c])
                        };
                        t.offsets.popper = Rt({}, s, h[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.offset
                      , i = t.placement
                      , o = t.offsets
                      , r = o.popper
                      , s = o.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = ae(+n) ? [+n, 0] : _e(n, r, s, a),
                    "left" === a ? (r.top += l[0],
                    r.left -= l[1]) : "right" === a ? (r.top += l[0],
                    r.left += l[1]) : "top" === a ? (r.left += l[0],
                    r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                    r.top += l[1]),
                    t.popper = r,
                    t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.boundariesElement || Dt(t.instance.popper);
                    t.instance.reference === n && (n = Dt(n));
                    var i = ee("transform")
                      , o = t.instance.popper.style
                      , r = o.top
                      , s = o.left
                      , a = o[i];
                    o.top = "",
                    o.left = "",
                    o[i] = "";
                    var l = Kt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = r,
                    o.left = s,
                    o[i] = a,
                    e.boundaries = l;
                    var c = e.priority
                      , h = t.offsets.popper
                      , u = {
                        primary: function(t) {
                            var n = h[t];
                            return h[t] < l[t] && !e.escapeWithReference && (n = Math.max(h[t], l[t])),
                            jt({}, t, n)
                        },
                        secondary: function(t) {
                            var n = "right" === t ? "left" : "top"
                              , i = h[n];
                            return h[t] > l[t] && !e.escapeWithReference && (i = Math.min(h[n], l[t] - ("right" === t ? h.width : h.height))),
                            jt({}, n, i)
                        }
                    };
                    return c.forEach((function(t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        h = Rt({}, h, u[e](t))
                    }
                    )),
                    t.offsets.popper = h,
                    t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets
                      , n = e.popper
                      , i = e.reference
                      , o = t.placement.split("-")[0]
                      , r = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(o)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                    t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, e) {
                    var n;
                    if (!he(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))
                            return t
                    } else if (!t.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        t;
                    var o = t.placement.split("-")[0]
                      , r = t.offsets
                      , s = r.popper
                      , a = r.reference
                      , l = -1 !== ["left", "right"].indexOf(o)
                      , c = l ? "height" : "width"
                      , h = l ? "Top" : "Left"
                      , u = h.toLowerCase()
                      , f = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = zt(i)[c];
                    a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
                    a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
                    t.offsets.popper = Ft(t.offsets.popper);
                    var m = a[u] + a[c] / 2 - p / 2
                      , g = yt(t.instance.popper)
                      , _ = parseFloat(g["margin" + h], 10)
                      , v = parseFloat(g["border" + h + "Width"], 10)
                      , b = m - t.offsets.popper[u] - _ - v;
                    return b = Math.max(Math.min(s[c] - p, b), 0),
                    t.arrowElement = i,
                    t.offsets.arrow = (jt(n = {}, u, Math.round(b)),
                    jt(n, f, ""),
                    n),
                    t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (te(t.instance.modifiers, "inner"))
                        return t;
                    if (t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var n = Kt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
                      , i = t.placement.split("-")[0]
                      , o = Xt(i)
                      , r = t.placement.split("-")[1] || ""
                      , s = [];
                    switch (e.behavior) {
                    case pe:
                        s = [i, o];
                        break;
                    case me:
                        s = de(i);
                        break;
                    case ge:
                        s = de(i, !0);
                        break;
                    default:
                        s = e.behavior
                    }
                    return s.forEach((function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return t;
                        i = t.placement.split("-")[0],
                        o = Xt(i);
                        var c = t.offsets.popper
                          , h = t.offsets.reference
                          , u = Math.floor
                          , f = "left" === i && u(c.right) > u(h.left) || "right" === i && u(c.left) < u(h.right) || "top" === i && u(c.bottom) > u(h.top) || "bottom" === i && u(c.top) < u(h.bottom)
                          , d = u(c.left) < u(n.left)
                          , p = u(c.right) > u(n.right)
                          , m = u(c.top) < u(n.top)
                          , g = u(c.bottom) > u(n.bottom)
                          , _ = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g
                          , v = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!e.flipVariations && (v && "start" === r && d || v && "end" === r && p || !v && "start" === r && m || !v && "end" === r && g);
                        (f || _ || b) && (t.flipped = !0,
                        (f || _) && (i = s[l + 1]),
                        b && (r = function(t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(r)),
                        t.placement = i + (r ? "-" + r : ""),
                        t.offsets.popper = Rt({}, t.offsets.popper, Gt(t.instance.popper, t.offsets.reference, t.placement)),
                        t = Jt(t.instance.modifiers, t, "flip"))
                    }
                    )),
                    t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement
                      , n = e.split("-")[0]
                      , i = t.offsets
                      , o = i.popper
                      , r = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                    t.placement = Xt(e),
                    t.offsets.popper = Ft(o),
                    t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!he(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                      , n = $t(t.instance.modifiers, (function(t) {
                        return "preventOverflow" === t.name
                    }
                    )).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                        t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
                        t.hide = !1,
                        t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var n = e.x
                      , i = e.y
                      , o = t.offsets.popper
                      , r = $t(t.instance.modifiers, (function(t) {
                        return "applyStyle" === t.name
                    }
                    )).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== r ? r : e.gpuAcceleration
                      , a = Dt(t.instance.popper)
                      , l = Mt(a)
                      , c = {
                        position: o.position
                    }
                      , h = function(t, e) {
                        var n = t.offsets
                          , i = n.popper
                          , o = n.reference
                          , r = Math.round
                          , s = Math.floor
                          , a = function(t) {
                            return t
                        }
                          , l = r(o.width)
                          , c = r(i.width)
                          , h = -1 !== ["left", "right"].indexOf(t.placement)
                          , u = -1 !== t.placement.indexOf("-")
                          , f = e ? h || u || l % 2 == c % 2 ? r : s : a
                          , d = e ? r : a;
                        return {
                            left: f(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left),
                            top: d(i.top),
                            bottom: d(i.bottom),
                            right: f(i.right)
                        }
                    }(t, window.devicePixelRatio < 2 || !ce)
                      , u = "bottom" === n ? "top" : "bottom"
                      , f = "right" === i ? "left" : "right"
                      , d = ee("transform")
                      , p = void 0
                      , m = void 0;
                    if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top,
                    p = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left,
                    s && d)
                        c[d] = "translate3d(" + p + "px, " + m + "px, 0)",
                        c[u] = 0,
                        c[f] = 0,
                        c.willChange = "transform";
                    else {
                        var g = "bottom" === u ? -1 : 1
                          , _ = "right" === f ? -1 : 1;
                        c[u] = m * g,
                        c[f] = p * _,
                        c.willChange = u + ", " + f
                    }
                    var v = {
                        "x-placement": t.placement
                    };
                    return t.attributes = Rt({}, v, t.attributes),
                    t.styles = Rt({}, c, t.styles),
                    t.arrowStyles = Rt({}, t.offsets.arrow, t.arrowStyles),
                    t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    var e, n;
                    return le(t.instance.popper, t.styles),
                    e = t.instance.popper,
                    n = t.attributes,
                    Object.keys(n).forEach((function(t) {
                        !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                    }
                    )),
                    t.arrowElement && Object.keys(t.arrowStyles).length && le(t.arrowElement, t.arrowStyles),
                    t
                },
                onLoad: function(t, e, n, i, o) {
                    var r = Yt(o, e, t, n.positionFixed)
                      , s = Vt(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s),
                    le(e, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , be = function() {
        function t(e, n) {
            var i = this
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Pt(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = vt(this.update.bind(this)),
            this.options = Rt({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(Rt({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) {
                i.options.modifiers[e] = Rt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }
            )),
            this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                return Rt({
                    name: t
                }, i.options.modifiers[t])
            }
            )).sort((function(t, e) {
                return t.order - e.order
            }
            )),
            this.modifiers.forEach((function(t) {
                t.enabled && bt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }
            )),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return Ht(t, [{
            key: "update",
            value: function() {
                return Zt.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return ne.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return re.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return se.call(this)
            }
        }]),
        t
    }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    be.placements = ue,
    be.Defaults = ve;
    var ye = "dropdown"
      , Ee = e.fn[ye]
      , we = new RegExp("38|40|27")
      , Ce = {
        HIDE: "hide.bs.dropdown",
        HIDDEN: "hidden.bs.dropdown",
        SHOW: "show.bs.dropdown",
        SHOWN: "shown.bs.dropdown",
        CLICK: "click.bs.dropdown",
        CLICK_DATA_API: "click.bs.dropdown.data-api",
        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
        KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
    }
      , Te = "disabled"
      , Se = "show"
      , De = "dropup"
      , Ie = "dropright"
      , Ae = "dropleft"
      , Oe = "dropdown-menu-right"
      , Ne = "position-static"
      , ke = '[data-toggle="dropdown"]'
      , Le = ".dropdown form"
      , xe = ".dropdown-menu"
      , Pe = ".navbar-nav"
      , He = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , je = "top-start"
      , Re = "top-end"
      , Fe = "bottom-start"
      , Me = "bottom-end"
      , We = "right-start"
      , Ue = "left-start"
      , Be = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , qe = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , Ke = function() {
        function t(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var n = t.prototype;
        return n.toggle = function() {
            if (!this._element.disabled && !e(this._element).hasClass(Te)) {
                var n = t._getParentFromElement(this._element)
                  , i = e(this._menu).hasClass(Se);
                if (t._clearMenus(),
                !i) {
                    var o = {
                        relatedTarget: this._element
                    }
                      , r = e.Event(Ce.SHOW, o);
                    if (e(n).trigger(r),
                    !r.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === be)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = n : a.isElement(this._config.reference) && (s = this._config.reference,
                            void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && e(n).addClass(Ne),
                            this._popper = new be(s,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === e(n).closest(Pe).length && e(document.body).children().on("mouseover", null, e.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        e(this._menu).toggleClass(Se),
                        e(n).toggleClass(Se).trigger(e.Event(Ce.SHOWN, o))
                    }
                }
            }
        }
        ,
        n.show = function() {
            if (!(this._element.disabled || e(this._element).hasClass(Te) || e(this._menu).hasClass(Se))) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = e.Event(Ce.SHOW, n)
                  , o = t._getParentFromElement(this._element);
                e(o).trigger(i),
                i.isDefaultPrevented() || (e(this._menu).toggleClass(Se),
                e(o).toggleClass(Se).trigger(e.Event(Ce.SHOWN, n)))
            }
        }
        ,
        n.hide = function() {
            if (!this._element.disabled && !e(this._element).hasClass(Te) && e(this._menu).hasClass(Se)) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = e.Event(Ce.HIDE, n)
                  , o = t._getParentFromElement(this._element);
                e(o).trigger(i),
                i.isDefaultPrevented() || (e(this._menu).toggleClass(Se),
                e(o).toggleClass(Se).trigger(e.Event(Ce.HIDDEN, n)))
            }
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.dropdown"),
            e(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        n.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n._addEventListeners = function() {
            var t = this;
            e(this._element).on(Ce.CLICK, (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        n._getConfig = function(t) {
            return t = r({}, this.constructor.Default, e(this._element).data(), t),
            a.typeCheckConfig(ye, t, this.constructor.DefaultType),
            t
        }
        ,
        n._getMenuElement = function() {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(xe))
            }
            return this._menu
        }
        ,
        n._getPlacement = function() {
            var t = e(this._element.parentNode)
              , n = Fe;
            return t.hasClass(De) ? (n = je,
            e(this._menu).hasClass(Oe) && (n = Re)) : t.hasClass(Ie) ? n = We : t.hasClass(Ae) ? n = Ue : e(this._menu).hasClass(Oe) && (n = Me),
            n
        }
        ,
        n._detectNavbar = function() {
            return e(this._element).closest(".navbar").length > 0
        }
        ,
        n._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        n._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            t
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this).data("bs.dropdown");
                if (i || (i = new t(this,"object" == typeof n ? n : null),
                e(this).data("bs.dropdown", i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }
            ))
        }
        ,
        t._clearMenus = function(n) {
            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                for (var i = [].slice.call(document.querySelectorAll(ke)), o = 0, r = i.length; o < r; o++) {
                    var s = t._getParentFromElement(i[o])
                      , a = e(i[o]).data("bs.dropdown")
                      , l = {
                        relatedTarget: i[o]
                    };
                    if (n && "click" === n.type && (l.clickEvent = n),
                    a) {
                        var c = a._menu;
                        if (e(s).hasClass(Se) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                            var h = e.Event(Ce.HIDE, l);
                            e(s).trigger(h),
                            h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                            i[o].setAttribute("aria-expanded", "false"),
                            e(c).removeClass(Se),
                            e(s).removeClass(Se).trigger(e.Event(Ce.HIDDEN, l)))
                        }
                    }
                }
        }
        ,
        t._getParentFromElement = function(t) {
            var e, n = a.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        t._dataApiKeydownHandler = function(n) {
            if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(xe).length) : !we.test(n.which)) && (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !e(this).hasClass(Te))) {
                var i = t._getParentFromElement(this)
                  , o = e(i).hasClass(Se);
                if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                    var r = [].slice.call(i.querySelectorAll(He));
                    if (0 !== r.length) {
                        var s = r.indexOf(n.target);
                        38 === n.which && s > 0 && s--,
                        40 === n.which && s < r.length - 1 && s++,
                        s < 0 && (s = 0),
                        r[s].focus()
                    }
                } else {
                    if (27 === n.which) {
                        var a = i.querySelector(ke);
                        e(a).trigger("focus")
                    }
                    e(this).trigger("click")
                }
            }
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Be
            }
        }, {
            key: "DefaultType",
            get: function() {
                return qe
            }
        }]),
        t
    }();
    e(document).on(Ce.KEYDOWN_DATA_API, ke, Ke._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API, xe, Ke._dataApiKeydownHandler).on(Ce.CLICK_DATA_API + " " + Ce.KEYUP_DATA_API, Ke._clearMenus).on(Ce.CLICK_DATA_API, ke, (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Ke._jQueryInterface.call(e(this), "toggle")
    }
    )).on(Ce.CLICK_DATA_API, Le, (function(t) {
        t.stopPropagation()
    }
    )),
    e.fn[ye] = Ke._jQueryInterface,
    e.fn[ye].Constructor = Ke,
    e.fn[ye].noConflict = function() {
        return e.fn[ye] = Ee,
        Ke._jQueryInterface
    }
    ;
    var Qe = e.fn.modal
      , Ve = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Ye = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , ze = {
        HIDE: "hide.bs.modal",
        HIDDEN: "hidden.bs.modal",
        SHOW: "show.bs.modal",
        SHOWN: "shown.bs.modal",
        FOCUSIN: "focusin.bs.modal",
        RESIZE: "resize.bs.modal",
        CLICK_DISMISS: "click.dismiss.bs.modal",
        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
        CLICK_DATA_API: "click.bs.modal.data-api"
    }
      , Xe = "modal-dialog-scrollable"
      , Ge = "modal-scrollbar-measure"
      , $e = "modal-backdrop"
      , Je = "modal-open"
      , Ze = "fade"
      , tn = "show"
      , en = ".modal-dialog"
      , nn = ".modal-body"
      , on = '[data-toggle="modal"]'
      , rn = '[data-dismiss="modal"]'
      , sn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , an = ".sticky-top"
      , ln = function() {
        function t(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(en),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var n = t.prototype;
        return n.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        n.show = function(t) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
                e(this._element).hasClass(Ze) && (this._isTransitioning = !0);
                var i = e.Event(ze.SHOW, {
                    relatedTarget: t
                });
                e(this._element).trigger(i),
                this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(ze.CLICK_DISMISS, rn, (function(t) {
                    return n.hide(t)
                }
                )),
                e(this._dialog).on(ze.MOUSEDOWN_DISMISS, (function() {
                    e(n._element).one(ze.MOUSEUP_DISMISS, (function(t) {
                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return n._showElement(t)
                }
                )))
            }
        }
        ,
        n.hide = function(t) {
            var n = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var i = e.Event(ze.HIDE);
                if (e(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var o = e(this._element).hasClass(Ze);
                    if (o && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(document).off(ze.FOCUSIN),
                    e(this._element).removeClass(tn),
                    e(this._element).off(ze.CLICK_DISMISS),
                    e(this._dialog).off(ze.MOUSEDOWN_DISMISS),
                    o) {
                        var r = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, (function(t) {
                            return n._hideModal(t)
                        }
                        )).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return e(t).off(".bs.modal")
            }
            )),
            e(document).off(ze.FOCUSIN),
            e.removeData(this._element, "bs.modal"),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(t) {
            return t = r({}, Ve, t),
            a.typeCheckConfig("modal", t, Ye),
            t
        }
        ,
        n._showElement = function(t) {
            var n = this
              , i = e(this._element).hasClass(Ze);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            e(this._dialog).hasClass(Xe) ? this._dialog.querySelector(nn).scrollTop = 0 : this._element.scrollTop = 0,
            i && a.reflow(this._element),
            e(this._element).addClass(tn),
            this._config.focus && this._enforceFocus();
            var o = e.Event(ze.SHOWN, {
                relatedTarget: t
            })
              , r = function() {
                n._config.focus && n._element.focus(),
                n._isTransitioning = !1,
                e(n._element).trigger(o)
            };
            if (i) {
                var s = a.getTransitionDurationFromElement(this._dialog);
                e(this._dialog).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
            } else
                r()
        }
        ,
        n._enforceFocus = function() {
            var t = this;
            e(document).off(ze.FOCUSIN).on(ze.FOCUSIN, (function(n) {
                document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
            }
            ))
        }
        ,
        n._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? e(this._element).on(ze.KEYDOWN_DISMISS, (function(e) {
                27 === e.which && (e.preventDefault(),
                t.hide())
            }
            )) : this._isShown || e(this._element).off(ze.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var t = this;
            this._isShown ? e(window).on(ze.RESIZE, (function(e) {
                return t.handleUpdate(e)
            }
            )) : e(window).off(ze.RESIZE)
        }
        ,
        n._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                e(document.body).removeClass(Je),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger(ze.HIDDEN)
            }
            ))
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (e(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(t) {
            var n = this
              , i = e(this._element).hasClass(Ze) ? Ze : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = $e,
                i && this._backdrop.classList.add(i),
                e(this._backdrop).appendTo(document.body),
                e(this._element).on(ze.CLICK_DISMISS, (function(t) {
                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                }
                )),
                i && a.reflow(this._backdrop),
                e(this._backdrop).addClass(tn),
                !t)
                    return;
                if (!i)
                    return void t();
                var o = a.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(o)
            } else if (!this._isShown && this._backdrop) {
                e(this._backdrop).removeClass(tn);
                var r = function() {
                    n._removeBackdrop(),
                    t && t()
                };
                if (e(this._element).hasClass(Ze)) {
                    var s = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                } else
                    r()
            } else
                t && t()
        }
        ,
        n._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                var n = [].slice.call(document.querySelectorAll(sn))
                  , i = [].slice.call(document.querySelectorAll(an));
                e(n).each((function(n, i) {
                    var o = i.style.paddingRight
                      , r = e(i).css("padding-right");
                    e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                }
                )),
                e(i).each((function(n, i) {
                    var o = i.style.marginRight
                      , r = e(i).css("margin-right");
                    e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                }
                ));
                var o = document.body.style.paddingRight
                  , r = e(document.body).css("padding-right");
                e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
            }
            e(document.body).addClass(Je)
        }
        ,
        n._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(sn));
            e(t).each((function(t, n) {
                var i = e(n).data("padding-right");
                e(n).removeData("padding-right"),
                n.style.paddingRight = i || ""
            }
            ));
            var n = [].slice.call(document.querySelectorAll("" + an));
            e(n).each((function(t, n) {
                var i = e(n).data("margin-right");
                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
            }
            ));
            var i = e(document.body).data("padding-right");
            e(document.body).removeData("padding-right"),
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = Ge,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        t._jQueryInterface = function(n, i) {
            return this.each((function() {
                var o = e(this).data("bs.modal")
                  , s = r({}, Ve, e(this).data(), "object" == typeof n && n ? n : {});
                if (o || (o = new t(this,s),
                e(this).data("bs.modal", o)),
                "string" == typeof n) {
                    if (void 0 === o[n])
                        throw new TypeError('No method named "' + n + '"');
                    o[n](i)
                } else
                    s.show && o.show(i)
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Ve
            }
        }]),
        t
    }();
    e(document).on(ze.CLICK_DATA_API, on, (function(t) {
        var n, i = this, o = a.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var s = e(n).data("bs.modal") ? "toggle" : r({}, e(n).data(), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = e(n).one(ze.SHOW, (function(t) {
            t.isDefaultPrevented() || l.one(ze.HIDDEN, (function() {
                e(i).is(":visible") && i.focus()
            }
            ))
        }
        ));
        ln._jQueryInterface.call(e(n), s, this)
    }
    )),
    e.fn.modal = ln._jQueryInterface,
    e.fn.modal.Constructor = ln,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = Qe,
        ln._jQueryInterface
    }
    ;
    var cn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , hn = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , un = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , fn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function dn(t, e, n) {
        if (0 === t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
            var i = r[t]
              , s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            var a = [].slice.call(i.attributes)
              , l = [].concat(e["*"] || [], e[s] || []);
            a.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === cn.indexOf(n) || Boolean(t.nodeValue.match(un) || t.nodeValue.match(fn));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, l) || i.removeAttribute(t.nodeName)
            }
            ))
        }, a = 0, l = r.length; a < l; a++)
            s(a);
        return i.body.innerHTML
    }
    var pn = "tooltip"
      , mn = e.fn[pn]
      , gn = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , _n = ["sanitize", "whiteList", "sanitizeFn"]
      , vn = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , bn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , yn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: hn
    }
      , En = "show"
      , wn = "out"
      , Cn = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Tn = "fade"
      , Sn = "show"
      , Dn = ".tooltip-inner"
      , In = ".arrow"
      , An = "hover"
      , On = "focus"
      , Nn = "click"
      , kn = "manual"
      , Ln = function() {
        function t(t, e) {
            if (void 0 === be)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var n = t.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var n = this.constructor.DATA_KEY
                      , i = e(t.currentTarget).data(n);
                    i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    e(t.currentTarget).data(n, i)),
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (e(this.getTipElement()).hasClass(Sn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && e(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            null !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        n.show = function() {
            var t = this;
            if ("none" === e(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var n = e.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                e(this.element).trigger(n);
                var i = a.findShadowRoot(this.element)
                  , o = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                if (n.isDefaultPrevented() || !o)
                    return;
                var r = this.getTipElement()
                  , s = a.getUID(this.constructor.NAME);
                r.setAttribute("id", s),
                this.element.setAttribute("aria-describedby", s),
                this.setContent(),
                this.config.animation && e(r).addClass(Tn);
                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                  , c = this._getAttachment(l);
                this.addAttachmentClass(c);
                var h = this._getContainer();
                e(r).data(this.constructor.DATA_KEY, this),
                e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h),
                e(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new be(this.element,r,{
                    placement: c,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: In
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }),
                e(r).addClass(Sn),
                "ontouchstart"in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                var u = function() {
                    t.config.animation && t._fixTransition();
                    var n = t._hoverState;
                    t._hoverState = null,
                    e(t.element).trigger(t.constructor.Event.SHOWN),
                    n === wn && t._leave(null, t)
                };
                if (e(this.tip).hasClass(Tn)) {
                    var f = a.getTransitionDurationFromElement(this.tip);
                    e(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(f)
                } else
                    u()
            }
        }
        ,
        n.hide = function(t) {
            var n = this
              , i = this.getTipElement()
              , o = e.Event(this.constructor.Event.HIDE)
              , r = function() {
                n._hoverState !== En && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t()
            };
            if (e(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (e(i).removeClass(Sn),
                "ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                this._activeTrigger[Nn] = !1,
                this._activeTrigger[On] = !1,
                this._activeTrigger[An] = !1,
                e(this.tip).hasClass(Tn)) {
                    var s = a.getTransitionDurationFromElement(i);
                    e(i).one(a.TRANSITION_END, r).emulateTransitionEnd(s)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.addAttachmentClass = function(t) {
            e(this.getTipElement()).addClass("bs-tooltip-" + t)
        }
        ,
        n.getTipElement = function() {
            return this.tip = this.tip || e(this.config.template)[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(e(t.querySelectorAll(Dn)), this.getTitle()),
            e(t).removeClass(Tn + " " + Sn)
        }
        ,
        n.setElementContent = function(t, n) {
            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = dn(n, this.config.whiteList, this.config.sanitizeFn)),
            t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
        }
        ,
        n.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        n._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
        }
        ,
        n._getAttachment = function(t) {
            return bn[t.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(n) {
                if ("click" === n)
                    e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if (n !== kn) {
                    var i = n === An ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , o = n === An ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    e(t.element).on(i, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )).on(o, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            e(this.element).closest(".modal").on("hide.bs.modal", (function() {
                t.element && t.hide()
            }
            )),
            this.config.selector ? this.config = r({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(t, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            e(t.currentTarget).data(i, n)),
            t && (n._activeTrigger["focusin" === t.type ? On : An] = !0),
            e(n.getTipElement()).hasClass(Sn) || n._hoverState === En ? n._hoverState = En : (clearTimeout(n._timeout),
            n._hoverState = En,
            n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                n._hoverState === En && n.show()
            }
            ), n.config.delay.show) : n.show())
        }
        ,
        n._leave = function(t, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            e(t.currentTarget).data(i, n)),
            t && (n._activeTrigger["focusout" === t.type ? On : An] = !1),
            n._isWithActiveTrigger() || (clearTimeout(n._timeout),
            n._hoverState = wn,
            n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                n._hoverState === wn && n.hide()
            }
            ), n.config.delay.hide) : n.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(t) {
            var n = e(this.element).data();
            return Object.keys(n).forEach((function(t) {
                -1 !== _n.indexOf(t) && delete n[t]
            }
            )),
            "number" == typeof (t = r({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            a.typeCheckConfig(pn, t, this.constructor.DefaultType),
            t.sanitize && (t.template = dn(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        n._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        n._cleanTipClass = function() {
            var t = e(this.getTipElement())
              , n = t.attr("class").match(gn);
            null !== n && n.length && t.removeClass(n.join(""))
        }
        ,
        n._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        n._fixTransition = function() {
            var t = this.getTipElement()
              , n = this.config.animation;
            null === t.getAttribute("x-placement") && (e(t).removeClass(Tn),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = n)
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this).data("bs.tooltip")
                  , o = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this,o),
                e(this).data("bs.tooltip", i)),
                "string" == typeof n)) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return yn
            }
        }, {
            key: "NAME",
            get: function() {
                return pn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return Cn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return vn
            }
        }]),
        t
    }();
    e.fn[pn] = Ln._jQueryInterface,
    e.fn[pn].Constructor = Ln,
    e.fn[pn].noConflict = function() {
        return e.fn[pn] = mn,
        Ln._jQueryInterface
    }
    ;
    var xn = "popover"
      , Pn = e.fn[xn]
      , Hn = new RegExp("(^|\\s)bs-popover\\S+","g")
      , jn = r({}, Ln.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Rn = r({}, Ln.DefaultType, {
        content: "(string|element|function)"
    })
      , Fn = "fade"
      , Mn = "show"
      , Wn = ".popover-header"
      , Un = ".popover-body"
      , Bn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , qn = function(t) {
        var n, o;
        function r() {
            return t.apply(this, arguments) || this
        }
        o = t,
        (n = r).prototype = Object.create(o.prototype),
        n.prototype.constructor = n,
        n.__proto__ = o;
        var s = r.prototype;
        return s.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        s.addAttachmentClass = function(t) {
            e(this.getTipElement()).addClass("bs-popover-" + t)
        }
        ,
        s.getTipElement = function() {
            return this.tip = this.tip || e(this.config.template)[0],
            this.tip
        }
        ,
        s.setContent = function() {
            var t = e(this.getTipElement());
            this.setElementContent(t.find(Wn), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(Un), n),
            t.removeClass(Fn + " " + Mn)
        }
        ,
        s._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        s._cleanTipClass = function() {
            var t = e(this.getTipElement())
              , n = t.attr("class").match(Hn);
            null !== n && n.length > 0 && t.removeClass(n.join(""))
        }
        ,
        r._jQueryInterface = function(t) {
            return this.each((function() {
                var n = e(this).data("bs.popover")
                  , i = "object" == typeof t ? t : null;
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this,i),
                e(this).data("bs.popover", n)),
                "string" == typeof t)) {
                    if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }
            ))
        }
        ,
        i(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return jn
            }
        }, {
            key: "NAME",
            get: function() {
                return xn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Bn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Rn
            }
        }]),
        r
    }(Ln);
    e.fn[xn] = qn._jQueryInterface,
    e.fn[xn].Constructor = qn,
    e.fn[xn].noConflict = function() {
        return e.fn[xn] = Pn,
        qn._jQueryInterface
    }
    ;
    var Kn = "scrollspy"
      , Qn = e.fn[Kn]
      , Vn = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Yn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , zn = {
        ACTIVATE: "activate.bs.scrollspy",
        SCROLL: "scroll.bs.scrollspy",
        LOAD_DATA_API: "load.bs.scrollspy.data-api"
    }
      , Xn = "dropdown-item"
      , Gn = "active"
      , $n = '[data-spy="scroll"]'
      , Jn = ".nav, .list-group"
      , Zn = ".nav-link"
      , ti = ".nav-item"
      , ei = ".list-group-item"
      , ni = ".dropdown"
      , ii = ".dropdown-item"
      , oi = ".dropdown-toggle"
      , ri = "offset"
      , si = "position"
      , ai = function() {
        function t(t, n) {
            var i = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(n),
            this._selector = this._config.target + " " + Zn + "," + this._config.target + " " + ei + "," + this._config.target + " " + ii,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            e(this._scrollElement).on(zn.SCROLL, (function(t) {
                return i._process(t)
            }
            )),
            this.refresh(),
            this._process()
        }
        var n = t.prototype;
        return n.refresh = function() {
            var t = this
              , n = this._scrollElement === this._scrollElement.window ? ri : si
              , i = "auto" === this._config.method ? n : this._config.method
              , o = i === si ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                var n, r = a.getSelectorFromElement(t);
                if (r && (n = document.querySelector(r)),
                n) {
                    var s = n.getBoundingClientRect();
                    if (s.width || s.height)
                        return [e(n)[i]().top + o, r]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.scrollspy"),
            e(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(t) {
            if ("string" != typeof (t = r({}, Vn, "object" == typeof t && t ? t : {})).target) {
                var n = e(t.target).attr("id");
                n || (n = a.getUID(Kn),
                e(t.target).attr("id", n)),
                t.target = "#" + n
            }
            return a.typeCheckConfig(Kn, t, Yn),
            t
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        n._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var n = this._selector.split(",").map((function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , i = e([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass(Xn) ? (i.closest(ni).find(oi).addClass(Gn),
            i.addClass(Gn)) : (i.addClass(Gn),
            i.parents(Jn).prev(Zn + ", " + ei).addClass(Gn),
            i.parents(Jn).prev(ti).children(Zn).addClass(Gn)),
            e(this._scrollElement).trigger(zn.ACTIVATE, {
                relatedTarget: t
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                return t.classList.contains(Gn)
            }
            )).forEach((function(t) {
                return t.classList.remove(Gn)
            }
            ))
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this).data("bs.scrollspy");
                if (i || (i = new t(this,"object" == typeof n && n),
                e(this).data("bs.scrollspy", i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Vn
            }
        }]),
        t
    }();
    e(window).on(zn.LOAD_DATA_API, (function() {
        for (var t = [].slice.call(document.querySelectorAll($n)), n = t.length; n--; ) {
            var i = e(t[n]);
            ai._jQueryInterface.call(i, i.data())
        }
    }
    )),
    e.fn[Kn] = ai._jQueryInterface,
    e.fn[Kn].Constructor = ai,
    e.fn[Kn].noConflict = function() {
        return e.fn[Kn] = Qn,
        ai._jQueryInterface
    }
    ;
    var li = e.fn.tab
      , ci = {
        HIDE: "hide.bs.tab",
        HIDDEN: "hidden.bs.tab",
        SHOW: "show.bs.tab",
        SHOWN: "shown.bs.tab",
        CLICK_DATA_API: "click.bs.tab.data-api"
    }
      , hi = "dropdown-menu"
      , ui = "active"
      , fi = "disabled"
      , di = "fade"
      , pi = "show"
      , mi = ".dropdown"
      , gi = ".nav, .list-group"
      , _i = ".active"
      , vi = "> li > .active"
      , bi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , yi = ".dropdown-toggle"
      , Ei = "> .dropdown-menu .active"
      , wi = function() {
        function t(t) {
            this._element = t
        }
        var n = t.prototype;
        return n.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(ui) || e(this._element).hasClass(fi))) {
                var n, i, o = e(this._element).closest(gi)[0], r = a.getSelectorFromElement(this._element);
                if (o) {
                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? vi : _i;
                    i = (i = e.makeArray(e(o).find(s)))[i.length - 1]
                }
                var l = e.Event(ci.HIDE, {
                    relatedTarget: this._element
                })
                  , c = e.Event(ci.SHOW, {
                    relatedTarget: i
                });
                if (i && e(i).trigger(l),
                e(this._element).trigger(c),
                !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    r && (n = document.querySelector(r)),
                    this._activate(this._element, o);
                    var h = function() {
                        var n = e.Event(ci.HIDDEN, {
                            relatedTarget: t._element
                        })
                          , o = e.Event(ci.SHOWN, {
                            relatedTarget: i
                        });
                        e(i).trigger(n),
                        e(t._element).trigger(o)
                    };
                    n ? this._activate(n, n.parentNode, h) : h()
                }
            }
        }
        ,
        n.dispose = function() {
            e.removeData(this._element, "bs.tab"),
            this._element = null
        }
        ,
        n._activate = function(t, n, i) {
            var o = this
              , r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(_i) : e(n).find(vi))[0]
              , s = i && r && e(r).hasClass(di)
              , l = function() {
                return o._transitionComplete(t, r, i)
            };
            if (r && s) {
                var c = a.getTransitionDurationFromElement(r);
                e(r).removeClass(pi).one(a.TRANSITION_END, l).emulateTransitionEnd(c)
            } else
                l()
        }
        ,
        n._transitionComplete = function(t, n, i) {
            if (n) {
                e(n).removeClass(ui);
                var o = e(n.parentNode).find(Ei)[0];
                o && e(o).removeClass(ui),
                "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (e(t).addClass(ui),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            a.reflow(t),
            t.classList.contains(di) && t.classList.add(pi),
            t.parentNode && e(t.parentNode).hasClass(hi)) {
                var r = e(t).closest(mi)[0];
                if (r) {
                    var s = [].slice.call(r.querySelectorAll(yi));
                    e(s).addClass(ui)
                }
                t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this)
                  , o = i.data("bs.tab");
                if (o || (o = new t(this),
                i.data("bs.tab", o)),
                "string" == typeof n) {
                    if (void 0 === o[n])
                        throw new TypeError('No method named "' + n + '"');
                    o[n]()
                }
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        t
    }();
    e(document).on(ci.CLICK_DATA_API, bi, (function(t) {
        t.preventDefault(),
        wi._jQueryInterface.call(e(this), "show")
    }
    )),
    e.fn.tab = wi._jQueryInterface,
    e.fn.tab.Constructor = wi,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = li,
        wi._jQueryInterface
    }
    ;
    var Ci = e.fn.toast
      , Ti = {
        CLICK_DISMISS: "click.dismiss.bs.toast",
        HIDE: "hide.bs.toast",
        HIDDEN: "hidden.bs.toast",
        SHOW: "show.bs.toast",
        SHOWN: "shown.bs.toast"
    }
      , Si = "fade"
      , Di = "hide"
      , Ii = "show"
      , Ai = "showing"
      , Oi = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Ni = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , ki = '[data-dismiss="toast"]'
      , Li = function() {
        function t(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var n = t.prototype;
        return n.show = function() {
            var t = this;
            e(this._element).trigger(Ti.SHOW),
            this._config.animation && this._element.classList.add(Si);
            var n = function() {
                t._element.classList.remove(Ai),
                t._element.classList.add(Ii),
                e(t._element).trigger(Ti.SHOWN),
                t._config.autohide && t.hide()
            };
            if (this._element.classList.remove(Di),
            this._element.classList.add(Ai),
            this._config.animation) {
                var i = a.getTransitionDurationFromElement(this._element);
                e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
            } else
                n()
        }
        ,
        n.hide = function(t) {
            var n = this;
            this._element.classList.contains(Ii) && (e(this._element).trigger(Ti.HIDE),
            t ? this._close() : this._timeout = setTimeout((function() {
                n._close()
            }
            ), this._config.delay))
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Ii) && this._element.classList.remove(Ii),
            e(this._element).off(Ti.CLICK_DISMISS),
            e.removeData(this._element, "bs.toast"),
            this._element = null,
            this._config = null
        }
        ,
        n._getConfig = function(t) {
            return t = r({}, Ni, e(this._element).data(), "object" == typeof t && t ? t : {}),
            a.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        n._setListeners = function() {
            var t = this;
            e(this._element).on(Ti.CLICK_DISMISS, ki, (function() {
                return t.hide(!0)
            }
            ))
        }
        ,
        n._close = function() {
            var t = this
              , n = function() {
                t._element.classList.add(Di),
                e(t._element).trigger(Ti.HIDDEN)
            };
            if (this._element.classList.remove(Ii),
            this._config.animation) {
                var i = a.getTransitionDurationFromElement(this._element);
                e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
            } else
                n()
        }
        ,
        t._jQueryInterface = function(n) {
            return this.each((function() {
                var i = e(this)
                  , o = i.data("bs.toast");
                if (o || (o = new t(this,"object" == typeof n && n),
                i.data("bs.toast", o)),
                "string" == typeof n) {
                    if (void 0 === o[n])
                        throw new TypeError('No method named "' + n + '"');
                    o[n](this)
                }
            }
            ))
        }
        ,
        i(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Oi
            }
        }, {
            key: "Default",
            get: function() {
                return Ni
            }
        }]),
        t
    }();
    e.fn.toast = Li._jQueryInterface,
    e.fn.toast.Constructor = Li,
    e.fn.toast.noConflict = function() {
        return e.fn.toast = Ci,
        Li._jQueryInterface
    }
    ,
    function() {
        if (void 0 === e)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    t.Util = a,
    t.Alert = p,
    t.Button = S,
    t.Carousel = Z,
    t.Collapse = dt,
    t.Dropdown = Ke,
    t.Modal = ln,
    t.Popover = qn,
    t.Scrollspy = ai,
    t.Tab = wi,
    t.Toast = Li,
    t.Tooltip = Ln,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
