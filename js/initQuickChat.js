!function() {
    function u(e, n) {
        for (var t = {}, i = e.indexOf("?"), o = e.substr(i + 1).split("&"), a = 0; a < o.length; a++) {
            var d = o[a].split("=");
            if (t[d[0]] = d[1],
            n && n === d[0])
                return d[1]
        }
        if (!n)
            return t
    }
    function e() {}
    var n, t, i, o, a, p = (n = function() {
        for (var e = +(new Date).getTime(), n = 0; e === (new Date).getTime(); )
            n++;
        return e.toString(16) + n.toString(16)
    }
    ,
    t = function() {
        var e, n, t = navigator.userAgent, o = [], i = 0;
        function a(e, n) {
            for (var t = 0, i = 0; i < n.length; i++)
                t |= o[i] << 8 * i;
            return e ^ t
        }
        for (e = 0; e < t.length; e++)
            n = t.charCodeAt(e),
            o.unshift(255 & n),
            4 <= o.length && (i = a(i, o),
            o = []);
        return (i = 0 < o.length ? a(i, o) : i).toString(16)
    }
    ,
    function() {
        var e = (window.screen.height * window.screen.width).toString(16);
        return n() + "-" + Math.random().toString(16).replace(".", "") + "-" + t() + "-" + e + "-" + n()
    }), d = "true" === localStorage.getItem("quick-chat-debug"), c = d ? console.log.bind(console) : e, w = d ? console.time.bind(console) : e, h = d ? console.timeEnd.bind(console) : e;

    // Step 1: Custom Device ID Generator
    function getCustomDeviceId() {
        const existingDeviceId = localStorage.getItem("custom_device_id");
        if (existingDeviceId) {
            return existingDeviceId; // 如果已存在，直接返回
        }

        const today = new Date();
        const formattedDate = today.getFullYear() +
            String(today.getMonth() + 1).padStart(2, "0") +
            String(today.getDate()).padStart(2, "0");

        const newDeviceId = `USER_${formattedDate}`;
        localStorage.setItem("custom_device_id", newDeviceId); // 存储到 localStorage
        return newDeviceId;
    }
    // Step 2: Set the custom device ID before initialization
    const customDeviceId = getCustomDeviceId();
    console.log("Using custom $device_id:", customDeviceId);
    
    function r(e) {
        var t;
        window.quickLoadJs || (window.quickLoadJs = !0,
        t = e.contentDocument,
        "static/js/runtime-main.3bde12ae.js,static/js/chunk-init.3bde12ae.chunk.js,static/js/vendors~main.3bde12ae.chunk.js,static/js/main.3bde12ae.chunk.js".split(",").forEach(function(e) {
            var n = t.createElement("script");
            n.type = "text/javascript",
            n.setAttribute("src", "https://chat.quickcep.com/" + e),
            t.body.appendChild(n),
            c(t ? "iframe-js-loading" : "iframe-js-no-load")
        }),
        window.quick_video_loader = function(e) {
            delete window.quick_video_loader;
            var n = document.createElement("script");
            n.setAttribute("src", "https://feedfront.quickcep.com/quickcep-feeds.iife.js"),
            n.async = !0,
            e && (n.onload = e),
            document.body.appendChild(n)
        }
        )
    }
    i = function() {
        window.quickChatloaded || (window.quickChatloaded = !0,
        function() {
            w("initMixPanel");
            var e, n = Array.prototype.slice.call(document.scripts).filter(function(e) {
                return e.src && e.src.includes("initQuickChat.js")
            }), t = u(n[0].src, "accessId"), i = u(n[0].src, "platform"), o = u(n[0].src, "medium") || "", a = u(n[0].src, "onlyChat"), d = u(n[0].src, "needIdentify"), c = u(n[0].src, "oemFlag"), r = u(n[0].src, "visitorId"), s = u(n[0].src, "lang");
            if (a && (window.__quick__onlyChat = !0),
            !window.__quick__initMixPanel)
                if (window.__quick__initMixPanel = !0,
                d ? sessionStorage.setItem("needIdentify", d) : sessionStorage.removeItem("needIdentify"),
                sessionStorage.setItem("quick-chat-accessId", t),
                sessionStorage.setItem("quick-chat-medium", o),
                s ? sessionStorage.setItem("quick-chat-lang", s) : sessionStorage.removeItem("quick-chat-lang"),
                c ? sessionStorage.setItem("quick-chat-oemFlag", c) : sessionStorage.getItem("quick-chat-oemFlag") && sessionStorage.removeItem("quick-chat-oemFlag"),
                r ? sessionStorage.setItem("quick-chat-visitorId", r) : sessionStorage.getItem("quick-chat-visitorId") && sessionStorage.removeItem("quick-chat-visitorId"),
                window.quickChatPreviewMode)
                    window.CEPMixpanel = {
                        onInitComplete: function(e) {
                            e()
                        }
                    };
                else if (window.quickChatSandbox) {
                    var l = (m = (m = function() {
                        return Math.random().toString(36).substring(2, 10)
                    }
                    )() + m(),
                    e ? m.substring(0, e) : m)
                      , m = u(n[0].src).sanboxRobotId;
                    sessionStorage.setItem("sandboxRobotId", m),
                    window.CEPMixpanel = {
                        cookie: {
                            props: {
                                $device_id: getCustomDeviceId() // Replace with custom logic
                            }
                        },
                        _: {
                            info: {
                                getSessionId: function() {
                                    return l
                                }
                            }
                        },
                        onInitComplete: function(e) {
                            e()
                        }
                    }
                } else {
                    if (window.CEPMixpanel && window.CEPMixpanel.init)
                        return window.CEPMixpanelUnload = {
                            initCompleteCb: function() {},
                            onInitComplete: function(e) {
                                this.__loaded ? e() : this.initCompleteCb = e
                            }
                        },
                        window.CEPMixpanel.initCompleteCb = window.CEPMixpanelUnload.initCompleteCb,
                        window.CEPMixpanel.onInitComplete = window.CEPMixpanelUnload.onInitComplete,
                        window.CEPMixpanel.init(t, {
                            platform: i || "shopify",
                            debug: !1,
                            batch_autostart: !1,
                            api_host: "https://collect.quickcep.com",
                            persistence: "localStorage",
                            loaded: function() {
                                 // Forcefully override $device_id after initialization
                                if (window.CEPMixpanel && window.CEPMixpanel.cookie && window.CEPMixpanel.cookie.props) {
                                    window.CEPMixpanel.cookie.props.$device_id = customDeviceId; // Replace $device_id
                                    window.CEPMixpanel.identify(customDeviceId); // Ensure distinct_id matches custom ID
                                    console.log("Custom $device_id set to:", customDeviceId);
                                } else {
                                    console.error("Failed to access CEPMixpanel.cookie or properties.");
                                }
                                // Original callback
                                window.CEPMixpanel.initCompleteCb(),
                                h("mixpanel-single-init")
                            }
                        });
                    m = document.createElement("script");
                    m.setAttribute("src", "https://js-s3.quickcep.com/mixpanel.iife.js?v=2.50.00"),
                    m.async = !0,
                    document.body.appendChild(m),
                    window.CEPMixpanelUnload = {
                        initCompleteCb: function() {},
                        __SV: 2,
                        onInitComplete: function(e) {
                            this.__loaded ? e(this.__loaded, d) : this.initCompleteCb = e
                        }
                    },
                    window.CEPMixpanel = window.CEPMixpanelUnload,
                    m.onload = function() {
                        window.CEPMixpanel.initCompleteCb = window.CEPMixpanelUnload.initCompleteCb,
                        window.CEPMixpanel.onInitComplete = window.CEPMixpanelUnload.onInitComplete,
                        window.CEPMixpanelUnload = void 0,
                        window.CEPMixpanel.init(t, {
                            platform: i || "shopify",
                            debug: !1,
                            batch_autostart: !1,
                            api_host: "https://collect.quickcep.com",
                            persistence: "localStorage",
                            loaded: function() {
                                d && "function" == typeof window.CEPMixpanelIdentify && window.CEPMixpanelIdentify(window.CEPMixpanel),
                                window.CEPMixpanel.initCompleteCb(this.__loaded, d),
                                h("initMixPanel")
                            }
                        })
                    }
                }
        }(),
        function() {
            w("iniChat");
            var e = document.createElement("style");
            e.setAttribute("id", "quick-chat-custom-css"),
            document.head.appendChild(e),
            e.innerHTML = ".quick-chat-bodystyle {overflow: hidden !important}";
            var n, t = document.getElementById("quick-chat-iframe"), e = document.getElementById("quick-chat-box");
            t ? (r(t),
            h("iniChat")) : ((t = document.createElement("iframe")).id = "quick-chat-iframe",
            t.name = "quick-chat-iframe",
            t.src = 'javascript:(function(){document.open();document.write(" ");document.close();})();',
            n = {
                display: "none",
                border: "none",
                position: "fixed",
                right: "0",
                inset: "auto 0px 0px auto",
                width: "1px",
                height: "1px",
                opacity: "1",
                background: "none transparent",
                margin: "0px",
                maxHeight: "100%",
                maxWidth: "100vw",
                transform: "translateY(200px)",
                transition: "transform 0.3s ease 0s",
                visibility: "hidden",
                zIndex: "1000000000000",
                borderRadius: /Android|webOS|iPhone|iPod|SymbianOS|iPad|BlackBerry/i.test(navigator.userAgent) ? "none" : "47px 30px 47px 47px"
            },
            Object.keys(n).forEach(function(e) {
                t.style[e] = n[e]
            }),
            t.onload = function() {
                r(t),
                h("iniChat")
            }
            ,
            (e || document.body).appendChild(t),
            c("iframe-created! spend", (new Date).getTime() - performance.timing.navigationStart, "ms"))
        }())
    }
    ,
    document.body ? i() : document.addEventListener ? (o = function() {
        document.removeEventListener("DOMContentLoaded", o),
        i()
    }
    ,
    document.addEventListener("DOMContentLoaded", o, !1)) : document.attachEvent && (a = function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", a),
        i())
    }
    ,
    document.attachEvent("onreadystatechange", a))
}();
