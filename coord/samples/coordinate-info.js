! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 528)
}({
    528: function (e, t) {
        window.CoordinateInfo = function (e) {
            var t = {};

            function n(o) {
                if (t[o]) return t[o].exports;
                var i = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            return n.m = e, n.c = t, n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) n.d(o, i, function (t) {
                        return e[t]
                    }.bind(null, i));
                return o
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 0)
        }([function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(1),
                i = function () {
                    function e() {
                        this.urls = {
                            nts: "https://geogratis.gc.ca/services/delimitation/en/nts?",
                            utm: "https://geogratis.gc.ca/services/delimitation/en/utmzone?",
                            alti: "https://geogratis.gc.ca/services/elevation/cdem/altitude?",
                            decli: "https://geomag.nrcan.gc.ca/service/tools/magnetic/calculator/?"
                        }
                    }
                    return e.prototype.init = function (t) {
                        this.api = t, this.button = this.api.mapI.addPluginButton(e.prototype.translations[this._RV.getCurrentLang()].coordButtonLabel, this.onMenuItemClick()), null !== this.api.mapDiv[0].getAttributeNode("coord-info-active") && (this.api.layers.identifyMode = "none", void 0 !== this.panel && (this.panel.close({
                            destroy: !0
                        }), this.panel = void 0), this.toggleActive())
                    }, e.prototype.onMenuItemClick = function () {
                        var e, t = this;
                        return function () {
                            if (t._RV.toggleSideNav("close"), void 0 === t.handler) {
                                e = t.toggleActive();
                                var n = document.createAttribute("coord-info-active");
                                t.api.mapDiv[0].setAttributeNode(n)
                            } else t.handler.unsubscribe(), t.handler = void 0, t._RV.setMapCursor(""), t.button.isActive = !1, t.api.layers.identifyMode = e, n = t.api.mapDiv[0].getAttributeNode("coord-info-active"), t.api.mapDiv[0].removeAttributeNode(n)
                        }
                    }, e.prototype.toggleActive = function () {
                        var e = this;
                        this.handler = this.api.click.subscribe((function (t) {
                            return e.clickHandler(t)
                        })), this.button.isActive = !0, this._RV.setMapCursor("crosshair");
                        var t = this.api.layers.identifyMode;
                        return this.api.layers.identifyMode = "none", t
                    }, e.prototype.clickHandler = function (e) {
                        var t = this,
                            n = this._RV.getCurrentLang(),
                            o = e.xy;
                        o.spatialReference = 4326;
                        var i = this._RV.convertDDToDMS(o.y, o.x),
                            r = (new Date).toISOString().substr(0, 10),
                            a = [];
                        a.push(new Promise((function (e) {
                            $.ajax({
                                url: t.urls.nts,
                                cache: !1,
                                data: {
                                    bbox: o.x + "," + o.y + "," + o.x + "," + o.y
                                },
                                dataType: "jsonp",
                                success: function (n) {
                                    return e(t.parseNTS(n.features))
                                }
                            })
                        }))), a.push(new Promise((function (e) {
                            $.ajax({
                                url: t.urls.utm,
                                cache: !1,
                                data: {
                                    bbox: o.x + "," + o.y + "," + o.x + "," + o.y
                                },
                                dataType: "jsonp",
                                success: function (n) {
                                    return e(t.parseUtm(n.features, o))
                                }
                            })
                        }))), a.push(new Promise((function (e) {
                            $.ajax({
                                url: t.urls.alti,
                                cache: !1,
                                data: {
                                    lat: o.y,
                                    lon: o.x
                                },
                                dataType: "jsonp",
                                success: function (t) {
                                    return e(null !== t.altitude ? t.altitude : 0)
                                }
                            })
                        }))), a.push(new Promise((function (e) {
                            $.ajax({
                                url: t.urls.decli,
                                cache: !0,
                                data: {
                                    latitude: o.y,
                                    longitude: o.x,
                                    date: r,
                                    format: "json"
                                },
                                dataType: "jsonp",
                                success: function (o) {
                                    return e(t.parseDecli(o, n))
                                },
                                error: function () {
                                    e(void 0)
                                }
                            })
                        }))), Promise.all(a).then((function (e) {
                            t.generateOutput(e, o, i, r)
                        }))
                    }, e.prototype.generateOutput = function (e, t, n, i) {
                        var r = o.template.replace(/{pt.y}/, t.y.toFixed(6)).replace(/{pt.x}/, t.x.toFixed(6)).replace(/{dms.y}/, n.y).replace(/{dms.x}/, n.x).replace(/{zone}/, e[1].zone).replace(/{outPt.x}/, e[1].outPt.x).replace(/{outPt.y}/, e[1].outPt.y).replace(/{nts250}/, e[0].nts250).replace(/{nts50}/, e[0].nts50).replace(/{elevation}/, e[2]);
                        if (e[3]) {
                            var a = o.magSection.replace(/{date}/, i).replace(/{magnetic}/, e[3].magnetic).replace(/{annChange}/, e[3].annChange).replace(/{compass}/, e[3].compass);
                            r = r.replace(/{magSection}/, a)
                        } else r = r.replace(/{magSection}/, "");
                        this.panel ? this.panel.close() : (this.panel = this.api.panels.create("coord-info"), this.panel.element.css({
                            bottom: "0em",
                            width: "400px"
                        }), this.panel.element.addClass("mobile-fullscreen"), this.panel.header.closeButton, this.panel.header.title = "plugins.coordInfo.coordButtonLabel"), this.panel.body = r, this.panel.open()
                    }, e.prototype.parseNTS = function (e) {
                        return {
                            nts250: e.length > 0 ? e[0].properties.identifier + "-" + e[0].properties.name : "",
                            nts50: e.length > 1 ? e[1].properties.identifier + "-" + e[1].properties.name : ""
                        }
                    }, e.prototype.parseUtm = function (e, t) {
                        if (0 === e.length) return {
                            zone: "Error",
                            outPt: {
                                x: "-",
                                y: "-"
                            }
                        };
                        var n = e[0].properties.identifier;
                        n < 10 && (n = "0" + n);
                        var o = this._RV.projectGeometry(t, parseInt("326" + n));
                        return {
                            zone: n,
                            outPt: {
                                x: o.x,
                                y: o.y
                            }
                        }
                    }, e.prototype.parseDecli = function (t, n) {
                        return {
                            magnetic: null !== t.components.D ? "" + t.components.D + String.fromCharCode(176) : "---",
                            annChange: null !== t.annual_change.dD ? t.annual_change.dD : "---",
                            compass: "useless" !== t.compass ? "" : e.prototype.translations[n].plugin.coordInfo.magCompassOut
                        }
                    }, e
                }();
            t.default = i, i.prototype.translations = {
                "en-CA": {
                    coordButtonLabel: "Coords Info",
                    title: "Map location information",
                    coordSection: "Geographic Coordinates",
                    coordLat: "Latitude: ",
                    coordLong: "Longitude: ",
                    coordDecimal: "Degrees Decimal: ",
                    coordDMS: "Degrees Minutes Seconds (DMS): ",
                    utmSection: "UTM Coordinates",
                    utmZone: "Zone: ",
                    utmEast: "Easting: ",
                    utmNorth: "Northing: ",
                    ntsSection: "NTS Mapsheet",
                    altiSection: "Elevation",
                    magSection: "Magnetic declination",
                    magDate: "Date: ",
                    magDecli: "Magnetic declination (DD): ",
                    magChange: "Annual change (minutes/year): ",
                    magDecliOut: "-WARNING- Out of scope.",
                    magCompassOut: "-WARNING- Compass erratic for this coordinate."
                },
                "fr-CA": {
                    coordButtonLabel: "Info coords",
                    title: "Information de localisation sur la carte",
                    coordSection: "CoordonnÃ©es gÃ©ographiques",
                    coordLat: "Latitude : ",
                    coordLong: "Longitude : ",
                    coordDecimal: "DegrÃ©s dÃ©cimaux : ",
                    coordDMS: "DegrÃ©s minutes secondes (DMS) : ",
                    utmSection: "CoordonnÃ©es UTM",
                    utmZone: "Zone : ",
                    utmEast: "Abscisse : ",
                    utmNorth: "OrdonnÃ©e : ",
                    ntsSection: "Carte du SNRC",
                    altiSection: "Ã‰lÃ©vation",
                    magSection: "DÃ©clinaison magnÃ©tique",
                    magDate: "Date : ",
                    magDecli: "DÃ©clinaison magnÃ©tique (DD) : ",
                    magChange: "Changement annuel (minutes/annÃ©e) : ",
                    magDecliOut: "-ATTENTION- Hors de portÃ©e.",
                    magCompassOut: "-ATTENTION- Boussole peu fiable pour cette coordonnÃ©e."
                }
            }, window.coordInfo = i
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.template = "<div tabindex=\"-2\"><ul class=\"rv-list\">\n    <li>\n        <strong>{{ 'plugins.coordInfo.coordSection' | translate }}</strong>\n        <div class=\"rv-subsection\">\n            <div>{{ 'plugins.coordInfo.coordDecimal' | translate }}</div>\n            <div class=\"rv-subsection\">\n            <div>{{ 'plugins.coordInfo.coordLat' | translate }}{pt.y}</div>\n            <div>{{ 'plugins.coordInfo.coordLong' | translate }}{pt.x}</div>\n            </div>\n            <div>{{ 'plugins.coordInfo.coordDMS' | translate }}</div>\n            <div class=\"rv-subsection\">\n            <div>{{ 'plugins.coordInfo.coordLat' | translate }}{dms.y}</div>\n            <div>{{ 'plugins.coordInfo.coordLong' | translate}}{dms.x}</div>\n            </div>\n        </div>\n    </li>\n    <li>\n        <strong>{{ 'plugins.coordInfo.utmSection' | translate }}</strong>\n        <div class=\"rv-subsection\">\n            <div>{{ 'plugins.coordInfo.utmZone' | translate }}{zone}</div>\n            <div>{{ 'plugins.coordInfo.utmEast' | translate }}{outPt.x}</div>\n            <div>{{ 'plugins.coordInfo.utmNorth' | translate }}{outPt.y}</div>\n        </div>\n    </li>\n    <li>\n        <strong>{{ 'plugins.coordInfo.ntsSection' | translate }}</strong>\n        <div class=\"rv-subsection\">\n            <div>{nts250}</div>\n            <div>{nts50}</div>\n        </div>\n    </li>\n    <li>\n        <strong>{{ 'plugins.coordInfo.altiSection' | translate }}</strong>\n        <div class=\"rv-subsection\">{elevation} m</div>\n    </li>\n    {magSection}\n</ul></div>", t.magSection = "<li>\n<strong>{{ 'plugins.coordInfo.magSection' | translate }}</strong>\n<div class=\"rv-subsection\">\n    <div>{{ 'plugins.coordInfo.magDate' | translate }}{date}</div>\n    <div>{{ 'plugins.coordInfo.magDecli' | translate }}{magnetic}</div>\n    <div>{{ 'plugins.coordInfo.magChange' | translate }}{annChange}</div>\n    <div>{compass}</div>\n</div>\n</li>"
        }]).default
    }
});
//# sourceMappingURL=ramp-plugin-coordinate-info.js.map
