/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/b-1.7.0/date-1.0.2/r-2.2.7/sl-1.3.2
 *
 * Included libraries:
 *  Buttons 1.7.0, DateTime 1.0.2, Responsive 2.2.7, Select 1.3.2
 */

/*!
 Buttons for DataTables 1.7.0
 ©2016-2021 SpryMedia Ltd - datatables.net/license
*/
(function (f) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (A) { return f(A, window, document) }) : "object" === typeof exports ? module.exports = function (A, y) { A || (A = window); y && y.fn.dataTable || (y = require("datatables.net")(A, y).$); return f(y, A, A.document) } : f(jQuery, window, document) })(function (f, A, y, t) {
  function E(a, b, c) { f.fn.animate ? a.stop().fadeIn(b, c) : (a.css("display", "block"), c && c.call(a)) } function F(a, b, c) { f.fn.animate ? a.stop().fadeOut(b, c) : (a.css("display", "none"), c && c.call(a)) }
  function H(a, b) { a = new q.Api(a); b = b ? b : a.init().buttons || q.defaults.buttons; return (new u(a, b)).container() } var q = f.fn.dataTable, M = 0, N = 0, z = q.ext.buttons, u = function (a, b) {
    if (!(this instanceof u)) return function (c) { return (new u(c, a)).container() }; "undefined" === typeof b && (b = {}); !0 === b && (b = {}); Array.isArray(b) && (b = { buttons: b }); this.c = f.extend(!0, {}, u.defaults, b); b.buttons && (this.c.buttons = b.buttons); this.s = { dt: new q.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + M++ }; this.dom = {
      container: f("<" + this.c.dom.container.tag +
        "/>").addClass(this.c.dom.container.className)
    }; this._constructor()
  }; f.extend(u.prototype, {
    action: function (a, b) { a = this._nodeToButton(a); if (b === t) return a.conf.action; a.conf.action = b; return this }, active: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.button.active; c = f(c.node); if (b === t) return c.hasClass(a); c.toggleClass(a, b === t ? !0 : b); return this }, add: function (a, b) {
      var c = this.s.buttons; if ("string" === typeof b) {
        b = b.split("-"); var d = this.s; c = 0; for (var e = b.length - 1; c < e; c++)d = d.buttons[1 * b[c]]; c = d.buttons;
        b = 1 * b[b.length - 1]
      } this._expandButton(c, a, d !== t, b); this._draw(); return this
    }, container: function () { return this.dom.container }, disable: function (a) { a = this._nodeToButton(a); f(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0); return this }, destroy: function () {
      f("body").off("keyup." + this.s.namespace); var a = this.s.buttons.slice(), b; var c = 0; for (b = a.length; c < b; c++)this.remove(a[c].node); this.dom.container.remove(); a = this.s.dt.settings()[0]; c = 0; for (b = a.length; c < b; c++)if (a.inst === this) {
        a.splice(c,
          1); break
      } return this
    }, enable: function (a, b) { if (!1 === b) return this.disable(a); a = this._nodeToButton(a); f(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled"); return this }, name: function () { return this.c.name }, node: function (a) { if (!a) return this.dom.container; a = this._nodeToButton(a); return f(a.node) }, processing: function (a, b) {
      var c = this.s.dt, d = this._nodeToButton(a); if (b === t) return f(d.node).hasClass("processing"); f(d.node).toggleClass("processing", b); f(c.table().node()).triggerHandler("buttons-processing.dt",
        [b, c.button(a), c, f(a), d.conf]); return this
    }, remove: function (a) { var b = this._nodeToButton(a), c = this._nodeToHost(a), d = this.s.dt; if (b.buttons.length) for (var e = b.buttons.length - 1; 0 <= e; e--)this.remove(b.buttons[e].node); b.conf.destroy && b.conf.destroy.call(d.button(a), d, f(a), b.conf); this._removeKey(b.conf); f(b.node).remove(); a = f.inArray(b, c); c.splice(a, 1); return this }, text: function (a, b) {
      var c = this._nodeToButton(a); a = this.c.dom.collection.buttonLiner; a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var d = this.s.dt, e = f(c.node), h = function (m) { return "function" === typeof m ? m(d, e, c.conf) : m }; if (b === t) return h(c.conf.text); c.conf.text = b; a ? e.children(a).html(h(b)) : e.html(h(b)); return this
    }, _constructor: function () {
      var a = this, b = this.s.dt, c = b.settings()[0], d = this.c.buttons; c._buttons || (c._buttons = []); c._buttons.push({ inst: this, name: this.c.name }); for (var e = 0, h = d.length; e < h; e++)this.add(d[e]); b.on("destroy", function (m, g) { g === c && a.destroy() }); f("body").on("keyup." + this.s.namespace, function (m) {
        if (!y.activeElement ||
          y.activeElement === y.body) { var g = String.fromCharCode(m.keyCode).toLowerCase(); -1 !== a.s.listenKeys.toLowerCase().indexOf(g) && a._keypress(g, m) }
      })
    }, _addKey: function (a) { a.key && (this.s.listenKeys += f.isPlainObject(a.key) ? a.key.key : a.key) }, _draw: function (a, b) { a || (a = this.dom.container, b = this.s.buttons); a.children().detach(); for (var c = 0, d = b.length; c < d; c++)a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons) }, _expandButton: function (a, b, c, d) {
      var e =
        this.s.dt, h = 0; b = Array.isArray(b) ? b : [b]; for (var m = 0, g = b.length; m < g; m++) { var l = this._resolveExtends(b[m]); if (l) if (Array.isArray(l)) this._expandButton(a, l, c, d); else { var k = this._buildButton(l, c); k && (d !== t && null !== d ? (a.splice(d, 0, k), d++) : a.push(k), k.conf.buttons && (k.collection = f("<" + this.c.dom.collection.tag + "/>"), k.conf._collection = k.collection, this._expandButton(k.buttons, k.conf.buttons, !0, d)), l.init && l.init.call(e.button(k.node), e, f(k.node), l), h++) } }
    }, _buildButton: function (a, b) {
      var c = this.c.dom.button,
        d = this.c.dom.buttonLiner, e = this.c.dom.collection, h = this.s.dt, m = function (n) { return "function" === typeof n ? n(h, k, a) : n }; b && e.button && (c = e.button); b && e.buttonLiner && (d = e.buttonLiner); if (a.available && !a.available(h, a)) return !1; var g = function (n, p, r, v) { v.action.call(p.button(r), n, p, r, v); f(p.table().node()).triggerHandler("buttons-action.dt", [p.button(r), p, r, v]) }; e = a.tag || c.tag; var l = a.clickBlurs === t ? !0 : a.clickBlurs, k = f("<" + e + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls",
          this.s.dt.table().node().id).on("click.dtb", function (n) { n.preventDefault(); !k.hasClass(c.disabled) && a.action && g(n, h, k, a); l && k.trigger("blur") }).on("keyup.dtb", function (n) { 13 === n.keyCode && !k.hasClass(c.disabled) && a.action && g(n, h, k, a) }); "a" === e.toLowerCase() && k.attr("href", "#"); "button" === e.toLowerCase() && k.attr("type", "button"); d.tag ? (e = f("<" + d.tag + "/>").html(m(a.text)).addClass(d.className), "a" === d.tag.toLowerCase() && e.attr("href", "#"), k.append(e)) : k.html(m(a.text)); !1 === a.enabled && k.addClass(c.disabled);
      a.className && k.addClass(a.className); a.titleAttr && k.attr("title", m(a.titleAttr)); a.attr && k.attr(a.attr); a.namespace || (a.namespace = ".dt-button-" + N++); d = (d = this.c.dom.buttonContainer) && d.tag ? f("<" + d.tag + "/>").addClass(d.className).append(k) : k; this._addKey(a); this.c.buttonCreated && (d = this.c.buttonCreated(a, d)); return { conf: a, node: k.get(0), inserter: d, buttons: [], inCollection: b, collection: null }
    }, _nodeToButton: function (a, b) {
      b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) { var e = this._nodeToButton(a, b[c].buttons); if (e) return e }
      }
    }, _nodeToHost: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b; if (b[c].buttons.length) { var e = this._nodeToHost(a, b[c].buttons); if (e) return e } } }, _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (d) {
          for (var e = 0, h = d.length; e < h; e++) {
            var m = d[e].conf, g = d[e].node; m.key && (m.key === a ? (b._buttonsHandled = !0, f(g).click()) : !f.isPlainObject(m.key) || m.key.key !== a || m.key.shiftKey &&
              !b.shiftKey || m.key.altKey && !b.altKey || m.key.ctrlKey && !b.ctrlKey || m.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, f(g).click())); d[e].buttons.length && c(d[e].buttons)
          }
        }; c(this.s.buttons)
      }
    }, _removeKey: function (a) { if (a.key) { var b = f.isPlainObject(a.key) ? a.key.key : a.key; a = this.s.listenKeys.split(""); b = f.inArray(b, a); a.splice(b, 1); this.s.listenKeys = a.join("") } }, _resolveExtends: function (a) {
      var b = this.s.dt, c, d = function (g) {
        for (var l = 0; !f.isPlainObject(g) && !Array.isArray(g);) {
          if (g === t) return; if ("function" ===
            typeof g) { if (g = g(b, a), !g) return !1 } else if ("string" === typeof g) { if (!z[g]) throw "Unknown button type: " + g; g = z[g] } l++; if (30 < l) throw "Buttons: Too many iterations";
        } return Array.isArray(g) ? g : f.extend({}, g)
      }; for (a = d(a); a && a.extend;) {
        if (!z[a.extend]) throw "Cannot extend unknown button type: " + a.extend; var e = d(z[a.extend]); if (Array.isArray(e)) return e; if (!e) return !1; var h = e.className; a = f.extend({}, e, a); h && a.className !== h && (a.className = h + " " + a.className); var m = a.postfixButtons; if (m) {
          a.buttons || (a.buttons = []);
          h = 0; for (c = m.length; h < c; h++)a.buttons.push(m[h]); a.postfixButtons = null
        } if (m = a.prefixButtons) { a.buttons || (a.buttons = []); h = 0; for (c = m.length; h < c; h++)a.buttons.splice(h, 0, m[h]); a.prefixButtons = null } a.extend = e.extend
      } return a
    }, _popover: function (a, b, c) {
      var d = this.c, e = f.extend({
        align: "button-left", autoClose: !1, background: !0, backgroundClassName: "dt-button-background", contentClassName: d.dom.collection.className, collectionLayout: "", collectionTitle: "", dropup: !1, fade: 400, rightAlignClassName: "dt-button-right",
        tag: d.dom.collection.tag
      }, c), h = b.node(), m = function () { F(f(".dt-button-collection"), e.fade, function () { f(this).detach() }); f(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false"); f("div.dt-button-background").off("click.dtb-collection"); u.background(!1, e.backgroundClassName, e.fade, h); f("body").off(".dtb-collection"); b.off("buttons-action.b-internal") }; !1 === a && m(); c = f(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()); c.length && (h = c.eq(0), m());
      c = f("<div/>").addClass("dt-button-collection").addClass(e.collectionLayout).css("display", "none"); a = f(a).addClass(e.contentClassName).attr("role", "menu").appendTo(c); h.attr("aria-expanded", "true"); h.parents("body")[0] !== y.body && (h = y.body.lastChild); e.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + e.collectionTitle + "</div>"); E(c.insertAfter(h), e.fade); d = f(b.table().container()); var g = c.css("position"); "dt-container" === e.align && (h = h.parent(), c.css("width", d.width())); if ("absolute" ===
        g && (c.hasClass(e.rightAlignClassName) || c.hasClass(e.leftAlignClassName) || "dt-container" === e.align)) {
        var l = h.position(); c.css({ top: l.top + h.outerHeight(), left: l.left }); var k = c.outerHeight(), n = d.offset().top + d.height(), p = l.top + h.outerHeight() + k; n = p - n; p = l.top - k; var r = d.offset().top, v = l.top - k - 5; (n > r - p || e.dropup) && -v < r && c.css("top", v); l = d.offset().left; d = d.width(); d = l + d; g = c.offset().left; var x = c.width(); x = g + x; var w = h.offset().left, B = h.outerWidth(); B = w + B; w = 0; c.hasClass(e.rightAlignClassName) ? (w = B - x, l > g +
          w && (g = l - (g + w), d -= x + w, w = g > d ? w + d : w + g)) : (w = l - g, d < x + w && (g = l - (g + w), d -= x + w, w = g > d ? w + d : w + g)); c.css("left", c.position().left + w)
      } else "absolute" === g ? (l = h.position(), c.css({ top: l.top + h.outerHeight(), left: l.left }), k = c.outerHeight(), g = h.offset().top, w = 0, w = h.offset().left, B = h.outerWidth(), B = w + B, g = c.offset().left, x = a.width(), x = g + x, v = l.top - k - 5, n = d.offset().top + d.height(), p = l.top + h.outerHeight() + k, n = p - n, p = l.top - k, r = d.offset().top, (n > r - p || e.dropup) && -v < r && c.css("top", v), w = "button-right" === e.align ? B - x : w - g, c.css("left",
        c.position().left + w)) : (g = c.height() / 2, g > f(A).height() / 2 && (g = f(A).height() / 2), c.css("marginTop", -1 * g)); e.background && u.background(!0, e.backgroundClassName, e.fade, h); f("div.dt-button-background").on("click.dtb-collection", function () { }); f("body").on("click.dtb-collection", function (C) { var I = f.fn.addBack ? "addBack" : "andSelf", J = f(C.target).parent()[0]; (!f(C.target).parents()[I]().filter(a).length && !f(J).hasClass("dt-buttons") || f(C.target).hasClass("dt-button-background")) && m() }).on("keyup.dtb-collection",
          function (C) { 27 === C.keyCode && m() }); e.autoClose && setTimeout(function () { b.on("buttons-action.b-internal", function (C, I, J, O) { O[0] !== h[0] && m() }) }, 0); f(c).trigger("buttons-popover.dt")
    }
  }); u.background = function (a, b, c, d) { c === t && (c = 400); d || (d = y.body); a ? E(f("<div/>").addClass(b).css("display", "none").insertAfter(d), c) : F(f("div." + b), c, function () { f(this).removeClass(b).remove() }) }; u.instanceSelector = function (a, b) {
    if (a === t || null === a) return f.map(b, function (h) { return h.inst }); var c = [], d = f.map(b, function (h) { return h.name }),
      e = function (h) { if (Array.isArray(h)) for (var m = 0, g = h.length; m < g; m++)e(h[m]); else "string" === typeof h ? -1 !== h.indexOf(",") ? e(h.split(",")) : (h = f.inArray(h.trim(), d), -1 !== h && c.push(b[h].inst)) : "number" === typeof h && c.push(b[h].inst) }; e(a); return c
  }; u.buttonSelector = function (a, b) {
    for (var c = [], d = function (g, l, k) { for (var n, p, r = 0, v = l.length; r < v; r++)if (n = l[r]) p = k !== t ? k + r : r + "", g.push({ node: n.node, name: n.conf.name, idx: p }), n.buttons && d(g, n.buttons, p + "-") }, e = function (g, l) {
      var k, n = []; d(n, l.s.buttons); var p = f.map(n, function (r) { return r.node });
      if (Array.isArray(g) || g instanceof f) for (p = 0, k = g.length; p < k; p++)e(g[p], l); else if (null === g || g === t || "*" === g) for (p = 0, k = n.length; p < k; p++)c.push({ inst: l, node: n[p].node }); else if ("number" === typeof g) c.push({ inst: l, node: l.s.buttons[g].node }); else if ("string" === typeof g) if (-1 !== g.indexOf(",")) for (n = g.split(","), p = 0, k = n.length; p < k; p++)e(n[p].trim(), l); else if (g.match(/^\d+(\-\d+)*$/)) p = f.map(n, function (r) { return r.idx }), c.push({ inst: l, node: n[f.inArray(g, p)].node }); else if (-1 !== g.indexOf(":name")) for (g = g.replace(":name",
        ""), p = 0, k = n.length; p < k; p++)n[p].name === g && c.push({ inst: l, node: n[p].node }); else f(p).filter(g).each(function () { c.push({ inst: l, node: this }) }); else "object" === typeof g && g.nodeName && (n = f.inArray(g, p), -1 !== n && c.push({ inst: l, node: p[n] }))
    }, h = 0, m = a.length; h < m; h++)e(b, a[h]); return c
  }; u.stripData = function (a, b) {
    if ("string" !== typeof a) return a; a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""); a = a.replace(/<!\-\-.*?\-\->/g, ""); b.stripHtml && (a = a.replace(/<[^>]*>/g, "")); b.trim && (a = a.replace(/^\s+|\s+$/g,
      "")); b.stripNewlines && (a = a.replace(/\n/g, " ")); b.decodeEntities && (K.innerHTML = a, a = K.value); return a
  }; u.defaults = { buttons: ["copy", "excel", "csv", "pdf", "print"], name: "main", tabIndex: 0, dom: { container: { tag: "div", className: "dt-buttons" }, collection: { tag: "div", className: "" }, button: { tag: "button", className: "dt-button", active: "active", disabled: "disabled" }, buttonLiner: { tag: "span", className: "" } } }; u.version = "1.7.0"; f.extend(z, {
    collection: {
      text: function (a) { return a.i18n("buttons.collection", "Collection") }, className: "buttons-collection",
      init: function (a, b, c) { b.attr("aria-expanded", !1) }, action: function (a, b, c, d) { a.stopPropagation(); d._collection.parents("body").length ? this.popover(!1, d) : this.popover(d._collection, d) }, attr: { "aria-haspopup": !0 }
    }, copy: function (a, b) { if (z.copyHtml5) return "copyHtml5" }, csv: function (a, b) { if (z.csvHtml5 && z.csvHtml5.available(a, b)) return "csvHtml5" }, excel: function (a, b) { if (z.excelHtml5 && z.excelHtml5.available(a, b)) return "excelHtml5" }, pdf: function (a, b) { if (z.pdfHtml5 && z.pdfHtml5.available(a, b)) return "pdfHtml5" }, pageLength: function (a) {
      a =
        a.settings()[0].aLengthMenu; var b = [], c = []; if (Array.isArray(a[0])) b = a[0], c = a[1]; else for (var d = 0; d < a.length; d++) { var e = a[d]; f.isPlainObject(e) ? (b.push(e.value), c.push(e.label)) : (b.push(e), c.push(e)) } return {
          extend: "collection", text: function (h) { return h.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, h.page.len()) }, className: "buttons-page-length", autoClose: !0, buttons: f.map(b, function (h, m) {
            return {
              text: c[m], className: "button-page-length", action: function (g, l) { l.page.len(h).draw() }, init: function (g,
                l, k) { var n = this; l = function () { n.active(g.page.len() === h) }; g.on("length.dt" + k.namespace, l); l() }, destroy: function (g, l, k) { g.off("length.dt" + k.namespace) }
            }
          }), init: function (h, m, g) { var l = this; h.on("length.dt" + g.namespace, function () { l.text(g.text) }) }, destroy: function (h, m, g) { h.off("length.dt" + g.namespace) }
        }
    }
  }); q.Api.register("buttons()", function (a, b) {
    b === t && (b = a, a = t); this.selector.buttonGroup = a; var c = this.iterator(!0, "table", function (d) {
      if (d._buttons) return u.buttonSelector(u.instanceSelector(a, d._buttons),
        b)
    }, !0); c._groupSelector = a; return c
  }); q.Api.register("button()", function (a, b) { a = this.buttons(a, b); 1 < a.length && a.splice(1, a.length); return a }); q.Api.registerPlural("buttons().active()", "button().active()", function (a) { return a === t ? this.map(function (b) { return b.inst.active(b.node) }) : this.each(function (b) { b.inst.active(b.node, a) }) }); q.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === t ? this.map(function (b) { return b.inst.action(b.node) }) : this.each(function (b) {
      b.inst.action(b.node,
        a)
    })
  }); q.Api.register(["buttons().enable()", "button().enable()"], function (a) { return this.each(function (b) { b.inst.enable(b.node, a) }) }); q.Api.register(["buttons().disable()", "button().disable()"], function () { return this.each(function (a) { a.inst.disable(a.node) }) }); q.Api.registerPlural("buttons().nodes()", "button().node()", function () { var a = f(); f(this.each(function (b) { a = a.add(b.inst.node(b.node)) })); return a }); q.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
    return a ===
      t ? this.map(function (b) { return b.inst.processing(b.node) }) : this.each(function (b) { b.inst.processing(b.node, a) })
  }); q.Api.registerPlural("buttons().text()", "button().text()", function (a) { return a === t ? this.map(function (b) { return b.inst.text(b.node) }) : this.each(function (b) { b.inst.text(b.node, a) }) }); q.Api.registerPlural("buttons().trigger()", "button().trigger()", function () { return this.each(function (a) { a.inst.node(a.node).trigger("click") }) }); q.Api.register("button().popover()", function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a,
        this.button(this[0].node), b)
    })
  }); q.Api.register("buttons().containers()", function () { var a = f(), b = this._groupSelector; this.iterator(!0, "table", function (c) { if (c._buttons) { c = u.instanceSelector(b, c._buttons); for (var d = 0, e = c.length; d < e; d++)a = a.add(c[d].container()) } }); return a }); q.Api.register("buttons().container()", function () { return this.containers().eq(0) }); q.Api.register("button().add()", function (a, b) {
    var c = this.context; c.length && (c = u.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b,
      a)); return this.button(this._groupSelector, a)
  }); q.Api.register("buttons().destroy()", function () { this.pluck("inst").unique().each(function (a) { a.destroy() }); return this }); q.Api.registerPlural("buttons().remove()", "buttons().remove()", function () { this.each(function (a) { a.inst.remove(a.node) }); return this }); var D; q.Api.register("buttons.info()", function (a, b, c) {
    var d = this; if (!1 === a) return this.off("destroy.btn-info"), F(f("#datatables_buttons_info"), 400, function () { f(this).remove() }), clearTimeout(D), D = null,
      this; D && clearTimeout(D); f("#datatables_buttons_info").length && f("#datatables_buttons_info").remove(); a = a ? "<h2>" + a + "</h2>" : ""; E(f('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(f("<div/>")["string" === typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body")); c !== t && 0 !== c && (D = setTimeout(function () { d.buttons.info(!1) }, c)); this.on("destroy.btn-info", function () { d.buttons.info(!1) }); return this
  }); q.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) return P(new q.Api(this.context[0]),
      a)
  }); q.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {}); var b = a; var c = "*" === b.filename && "*" !== b.title && b.title !== t && null !== b.title && "" !== b.title ? b.title : b.filename; "function" === typeof c && (c = c()); c === t || null === c ? c = null : (-1 !== c.indexOf("*") && (c = c.replace("*", f("head > title").text()).trim()), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = G(b.extension)) || (b = ""), c += b); b = G(a.title); b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", f("head > title").text() || "Exported data") : b; return {
      filename: c,
      title: b, messageTop: L(this, a.message || a.messageTop, "top"), messageBottom: L(this, a.messageBottom, "bottom")
    }
  }); var G = function (a) { return null === a || a === t ? null : "function" === typeof a ? a() : a }, L = function (a, b, c) { b = G(b); if (null === b) return null; a = f("caption", a.table().container()).eq(0); return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b }, K = f("<textarea/>")[0], P = function (a, b) {
    var c = f.extend(!0, {}, {
      rows: null, columns: "", modifier: { search: "applied", order: "applied" }, orthogonal: "display", stripHtml: !0,
      stripNewlines: !0, decodeEntities: !0, trim: !0, format: { header: function (v) { return u.stripData(v, c) }, footer: function (v) { return u.stripData(v, c) }, body: function (v) { return u.stripData(v, c) } }, customizeData: null
    }, b); b = a.columns(c.columns).indexes().map(function (v) { var x = a.column(v).header(); return c.format.header(x.innerHTML, v, x) }).toArray(); var d = a.table().footer() ? a.columns(c.columns).indexes().map(function (v) { var x = a.column(v).footer(); return c.format.footer(x ? x.innerHTML : "", v, x) }).toArray() : null, e = f.extend({},
      c.modifier); a.select && "function" === typeof a.select.info && e.selected === t && a.rows(c.rows, f.extend({ selected: !0 }, e)).any() && f.extend(e, { selected: !0 }); e = a.rows(c.rows, e).indexes().toArray(); var h = a.cells(e, c.columns); e = h.render(c.orthogonal).toArray(); h = h.nodes().toArray(); for (var m = b.length, g = [], l = 0, k = 0, n = 0 < m ? e.length / m : 0; k < n; k++) { for (var p = [m], r = 0; r < m; r++)p[r] = c.format.body(e[l], k, r, h[l]), l++; g[k] = p } b = { header: b, footer: d, body: g }; c.customizeData && c.customizeData(b); return b
  }; f.fn.dataTable.Buttons = u;
  f.fn.DataTable.Buttons = u; f(y).on("init.dt plugin-init.dt", function (a, b) { "dt" === a.namespace && (a = b.oInit.buttons || q.defaults.buttons) && !b._buttons && (new u(b, a)).container() }); q.ext.feature.push({ fnInit: H, cFeature: "B" }); q.ext.features && q.ext.features.register("buttons", H); return u
});


/*!
 DataTables styling wrapper for Buttons
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-dt", "datatables.net-buttons"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); b && b.fn.dataTable || (b = require("datatables.net-dt")(a, b).$); b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c, a, b, d) { return c.fn.dataTable });


/*!
 DateTime picker for DataTables.net v1.0.2

 ©2020 SpryMedia Ltd, all rights reserved.
 License: MIT datatables.net/license/mit
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (d, e, k) { d instanceof String && (d = String(d)); for (var p = d.length, g = 0; g < p; g++) { var t = d[g]; if (e.call(k, t, g, d)) return { i: g, v: t } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, e, k) { if (d == Array.prototype || d == Object.prototype) return d; d[e] = k.value; return d }; $jscomp.getGlobal = function (d) { d = ["object" == typeof globalThis && globalThis, d, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var e = 0; e < d.length; ++e) { var k = d[e]; if (k && k.Math == Math) return k } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x"); $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; var $jscomp$lookupPolyfilledValue = function (d, e) { var k = $jscomp.propertyToPolyfillSymbol[e]; if (null == k) return d[e]; k = d[k]; return void 0 !== k ? k : d[e] };
$jscomp.polyfill = function (d, e, k, p) { e && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(d, e, k, p) : $jscomp.polyfillUnisolated(d, e, k, p)) }; $jscomp.polyfillUnisolated = function (d, e, k, p) { k = $jscomp.global; d = d.split("."); for (p = 0; p < d.length - 1; p++) { var g = d[p]; if (!(g in k)) return; k = k[g] } d = d[d.length - 1]; p = k[d]; e = e(p); e != p && null != e && $jscomp.defineProperty(k, d, { configurable: !0, writable: !0, value: e }) };
$jscomp.polyfillIsolated = function (d, e, k, p) {
  var g = d.split("."); d = 1 === g.length; p = g[0]; p = !d && p in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var t = 0; t < g.length - 1; t++) { var b = g[t]; if (!(b in p)) return; p = p[b] } g = g[g.length - 1]; k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? p[g] : null; e = e(k); null != e && (d ? $jscomp.defineProperty($jscomp.polyfills, g, { configurable: !0, writable: !0, value: e }) : e !== k && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g =
    $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(p, g, { configurable: !0, writable: !0, value: e })))
}; $jscomp.polyfill("Array.prototype.find", function (d) { return d ? d : function (e, k) { return $jscomp.findInternal(this, e, k).v } }, "es6", "es3");
(function (d) { "function" === typeof define && define.amd ? define(["jquery"], function (e) { return d(e, window, document) }) : "object" === typeof exports ? module.exports = function (e, k) { e || (e = window); return d(k, e, e.document) } : d(jQuery, window, document) })(function (d, e, k, p) {
  var g = e.moment ? e.moment : e.dayjs ? e.dayjs : e.luxon ? e.luxon : null, t = function (b, a) {
    this.c = d.extend(!0, {}, t.defaults, a); a = this.c.classPrefix; var c = this.c.i18n; if (!g && "YYYY-MM-DD" !== this.c.format) throw "DateTime: Without momentjs, dayjs or luxon only the format 'YYYY-MM-DD' can be used";
    "string" === typeof this.c.minDate && (this.c.minDate = new Date(this.c.minDate)); "string" === typeof this.c.maxDate && (this.c.maxDate = new Date(this.c.maxDate)); c = d('<div class="' + a + '"><div class="' + a + '-date"><div class="' + a + '-title"><div class="' + a + '-iconLeft"><button title="' + c.previous + '">' + c.previous + '</button></div><div class="' + a + '-iconRight"><button title="' + c.next + '">' + c.next + '</button></div><div class="' + a + '-label"><span></span><select class="' + a + '-month"></select></div><div class="' + a + '-label"><span></span><select class="' +
      a + '-year"></select></div></div><div class="' + a + '-calendar"></div></div><div class="' + a + '-time"><div class="' + a + '-hours"></div><div class="' + a + '-minutes"></div><div class="' + a + '-seconds"></div></div><div class="' + a + '-error"></div></div>'); this.dom = { container: c, date: c.find("." + a + "-date"), title: c.find("." + a + "-title"), calendar: c.find("." + a + "-calendar"), time: c.find("." + a + "-time"), error: c.find("." + a + "-error"), input: d(b) }; this.s = {
        d: null, display: null, minutesRange: null, secondsRange: null, namespace: "dateime-" +
          t._instance++, parts: { date: null !== this.c.format.match(/[YMD]|L(?!T)|l/), time: null !== this.c.format.match(/[Hhm]|LT|LTS/), seconds: -1 !== this.c.format.indexOf("s"), hours12: null !== this.c.format.match(/[haA]/) }
      }; this.dom.container.append(this.dom.date).append(this.dom.time).append(this.dom.error); this.dom.date.append(this.dom.title).append(this.dom.calendar); this._constructor()
  }; d.extend(t.prototype, {
    destroy: function () { this._hide(!0); this.dom.container.off().empty(); this.dom.input.removeAttr("autocomplete").off(".datetime") },
    errorMsg: function (b) { var a = this.dom.error; b ? a.html(b) : a.empty(); return this }, hide: function () { this._hide(); return this }, max: function (b) { this.c.maxDate = "string" === typeof b ? new Date(b) : b; this._optionsTitle(); this._setCalander(); return this }, min: function (b) { this.c.minDate = "string" === typeof b ? new Date(b) : b; this._optionsTitle(); this._setCalander(); return this }, owns: function (b) { return 0 < d(b).parents().filter(this.dom.container).length }, val: function (b, a) {
      if (b === p) return this.s.d; if (b instanceof Date) this.s.d =
        this._dateToUtc(b); else if (null === b || "" === b) this.s.d = null; else if ("--now" === b) this.s.d = new Date; else if ("string" === typeof b) if (g && g == e.luxon) { var c = g.DateTime.fromFormat(b, this.c.format); this.s.d = c.isValid ? c.toJSDate() : null } else g ? (c = g.utc(b, this.c.format, this.c.locale, this.c.strict), this.s.d = c.isValid() ? c.toDate() : null) : (c = b.match(/(\d{4})\-(\d{2})\-(\d{2})/), this.s.d = c ? new Date(Date.UTC(c[1], c[2] - 1, c[3])) : null); if (a || a === p) this.s.d ? this._writeOutput() : this.dom.input.val(b); this.s.d || (this.s.d = this._dateToUtc(new Date));
      this.s.display = new Date(this.s.d.toString()); this.s.display.setUTCDate(1); this._setTitle(); this._setCalander(); this._setTime(); return this
    }, _constructor: function () {
      var b = this, a = this, c = this.c.classPrefix, l = this.dom.input.val(), h = function () { var f = a.dom.input.val(); f !== l && (a.c.onChange.call(a, f, a.s.d, a.dom.input), l = f) }; this.s.parts.date || this.dom.date.css("display", "none"); this.s.parts.time || this.dom.time.css("display", "none"); this.s.parts.seconds || (this.dom.time.children("div." + c + "-seconds").remove(),
        this.dom.time.children("span").eq(1).remove()); this._optionsTitle(); d(k).on("i18n.dt", function (f, n) { n.oLanguage.datetime && (d.extend(!0, b.c.i18n, n.oLanguage.datetime), b._optionsTitle()) }); "hidden" === this.dom.input.attr("type") && (this.dom.container.addClass("inline"), this.c.attachTo = "input", this.val(this.dom.input.val(), !1), this._show()); l && this.val(l, !1); this.dom.input.attr("autocomplete", "off").on("focus.datetime click.datetime", function () {
          a.dom.container.is(":visible") || a.dom.input.is(":disabled") ||
            (a.val(a.dom.input.val(), !1), a._show())
        }).on("keyup.datetime", function () { a.dom.container.is(":visible") && a.val(a.dom.input.val(), !1) }); this.dom.container.on("change", "select", function () {
          var f = d(this), n = f.val(); f.hasClass(c + "-month") ? (a._correctMonth(a.s.display, n), a._setTitle(), a._setCalander()) : f.hasClass(c + "-year") ? (a.s.display.setUTCFullYear(n), a._setTitle(), a._setCalander()) : f.hasClass(c + "-hours") || f.hasClass(c + "-ampm") ? (a.s.parts.hours12 ? (f = 1 * d(a.dom.container).find("." + c + "-hours").val(), n = "pm" ===
            d(a.dom.container).find("." + c + "-ampm").val(), a.s.d.setUTCHours(12 !== f || n ? n && 12 !== f ? f + 12 : f : 0)) : a.s.d.setUTCHours(n), a._setTime(), a._writeOutput(!0), h()) : f.hasClass(c + "-minutes") ? (a.s.d.setUTCMinutes(n), a._setTime(), a._writeOutput(!0), h()) : f.hasClass(c + "-seconds") && (a.s.d.setSeconds(n), a._setTime(), a._writeOutput(!0), h()); a.dom.input.focus(); a._position()
        }).on("click", function (f) {
          var n = a.s.d, r = f.target.nodeName.toLowerCase(), m = "span" === r ? f.target.parentNode : f.target; r = m.nodeName.toLowerCase(); if ("select" !==
            r) if (f.stopPropagation(), "button" === r) if (m = d(m), f = m.parent(), f.hasClass("disabled") && !f.hasClass("range")) m.blur(); else if (f.hasClass(c + "-iconLeft")) a.s.display.setUTCMonth(a.s.display.getUTCMonth() - 1), a._setTitle(), a._setCalander(), a.dom.input.focus(); else if (f.hasClass(c + "-iconRight")) a._correctMonth(a.s.display, a.s.display.getUTCMonth() + 1), a._setTitle(), a._setCalander(), a.dom.input.focus(); else {
              if (m.parents("." + c + "-time").length) {
                r = m.data("value"); m = m.data("unit"); if ("minutes" === m) {
                  if (f.hasClass("disabled") &&
                    f.hasClass("range")) { a.s.minutesRange = r; a._setTime(); return } a.s.minutesRange = null
                } if ("seconds" === m) { if (f.hasClass("disabled") && f.hasClass("range")) { a.s.secondsRange = r; a._setTime(); return } a.s.secondsRange = null } if ("am" === r) if (12 <= n.getUTCHours()) r = n.getUTCHours() - 12; else return; else if ("pm" === r) if (12 > n.getUTCHours()) r = n.getUTCHours() + 12; else return; n["hours" === m ? "setUTCHours" : "minutes" === m ? "setUTCMinutes" : "setSeconds"](r); a._setTime(); a._writeOutput(!0)
              } else n || (n = a._dateToUtc(new Date)), n.setUTCDate(1),
                n.setUTCFullYear(m.data("year")), n.setUTCMonth(m.data("month")), n.setUTCDate(m.data("day")), a._writeOutput(!0), a.s.parts.time ? a._setCalander() : setTimeout(function () { a._hide() }, 10); h()
            } else a.dom.input.focus()
        })
    }, _compareDates: function (b, a) { return g && g == e.luxon ? g.DateTime.fromJSDate(b).toISODate() === g.DateTime.fromJSDate(a).toISODate() : this._dateToUtcString(b) === this._dateToUtcString(a) }, _correctMonth: function (b, a) {
      var c = this._daysInMonth(b.getUTCFullYear(), a), l = b.getUTCDate() > c; b.setUTCMonth(a); l &&
        (b.setUTCDate(c), b.setUTCMonth(a))
    }, _daysInMonth: function (b, a) { return [31, 0 !== b % 4 || 0 === b % 100 && 0 !== b % 400 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a] }, _dateToUtc: function (b) { return new Date(Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds())) }, _dateToUtcString: function (b) { return g && g == e.luxon ? g.DateTime.fromJSDate(b).toISODate() : b.getUTCFullYear() + "-" + this._pad(b.getUTCMonth() + 1) + "-" + this._pad(b.getUTCDate()) }, _hide: function (b) {
      if (b || "hidden" !== this.dom.input.attr("type")) b =
        this.s.namespace, this.dom.container.detach(), d(e).off("." + b), d(k).off("keydown." + b), d("div.dataTables_scrollBody").off("scroll." + b), d("div.DTE_Body_Content").off("scroll." + b), d("body").off("click." + b)
    }, _hours24To12: function (b) { return 0 === b ? 12 : 12 < b ? b - 12 : b }, _htmlDay: function (b) {
      if (b.empty) return '<td class="empty"></td>'; var a = ["selectable"], c = this.c.classPrefix; b.disabled && a.push("disabled"); b.today && a.push("now"); b.selected && a.push("selected"); return '<td data-day="' + b.day + '" class="' + a.join(" ") + '"><button class="' +
        c + "-button " + c + '-day" type="button" data-year="' + b.year + '" data-month="' + b.month + '" data-day="' + b.day + '"><span>' + b.day + "</span></button></td>"
    }, _htmlMonth: function (b, a) {
      var c = this._dateToUtc(new Date), l = this._daysInMonth(b, a), h = (new Date(Date.UTC(b, a, 1))).getUTCDay(), f = [], n = []; 0 < this.c.firstDay && (h -= this.c.firstDay, 0 > h && (h += 7)); for (var r = l + h, m = r; 7 < m;)m -= 7; r += 7 - m; var w = this.c.minDate; m = this.c.maxDate; w && (w.setUTCHours(0), w.setUTCMinutes(0), w.setSeconds(0)); m && (m.setUTCHours(23), m.setUTCMinutes(59),
        m.setSeconds(59)); for (var q = 0, u = 0; q < r; q++) {
          var x = new Date(Date.UTC(b, a, 1 + (q - h))), A = this.s.d ? this._compareDates(x, this.s.d) : !1, v = this._compareDates(x, c), B = q < h || q >= l + h, z = w && x < w || m && x > m, y = this.c.disableDays; Array.isArray(y) && -1 !== d.inArray(x.getUTCDay(), y) ? z = !0 : "function" === typeof y && !0 === y(x) && (z = !0); n.push(this._htmlDay({ day: 1 + (q - h), month: a, year: b, selected: A, today: v, disabled: z, empty: B })); 7 === ++u && (this.c.showWeekNumber && n.unshift(this._htmlWeekOfYear(q - h, a, b)), f.push("<tr>" + n.join("") + "</tr>"), n = [],
            u = 0)
        } c = this.c.classPrefix; l = c + "-table"; this.c.showWeekNumber && (l += " weekNumber"); w && (w = w >= new Date(Date.UTC(b, a, 1, 0, 0, 0)), this.dom.title.find("div." + c + "-iconLeft").css("display", w ? "none" : "block")); m && (b = m < new Date(Date.UTC(b, a + 1, 1, 0, 0, 0)), this.dom.title.find("div." + c + "-iconRight").css("display", b ? "none" : "block")); return '<table class="' + l + '"><thead>' + this._htmlMonthHead() + "</thead><tbody>" + f.join("") + "</tbody></table>"
    }, _htmlMonthHead: function () {
      var b = [], a = this.c.firstDay, c = this.c.i18n, l = function (f) {
        for (f +=
          a; 7 <= f;)f -= 7; return c.weekdays[f]
      }; this.c.showWeekNumber && b.push("<th></th>"); for (var h = 0; 7 > h; h++)b.push("<th>" + l(h) + "</th>"); return b.join("")
    }, _htmlWeekOfYear: function (b, a, c) { b = new Date(c, a, b, 0, 0, 0, 0); b.setDate(b.getDate() + 4 - (b.getDay() || 7)); return '<td class="' + this.c.classPrefix + '-week">' + Math.ceil(((b - new Date(c, 0, 1)) / 864E5 + 1) / 7) + "</td>" }, _options: function (b, a, c) {
      c || (c = a); b = this.dom.container.find("select." + this.c.classPrefix + "-" + b); b.empty(); for (var l = 0, h = a.length; l < h; l++)b.append('<option value="' +
        a[l] + '">' + c[l] + "</option>")
    }, _optionSet: function (b, a) { var c = this.dom.container.find("select." + this.c.classPrefix + "-" + b); b = c.parent().children("span"); c.val(a); a = c.find("option:selected"); b.html(0 !== a.length ? a.text() : this.c.i18n.unknown) }, _optionsTime: function (b, a, c, l, h) {
      var f = this.c.classPrefix, n = this.dom.container.find("div." + f + "-" + b), r = 12 === a ? function (v) { return v } : this._pad; f = this.c.classPrefix; var m = f + "-table", w = this.c.i18n; if (n.length) {
        var q = ""; var u = 10; var x = function (v, B, z) {
          12 === a && "number" ===
            typeof v && (12 <= c && (v += 12), 12 == v ? v = 0 : 24 == v && (v = 12)); var y = c === v || "am" === v && 12 > c || "pm" === v && 12 <= c ? "selected" : ""; l && -1 === d.inArray(v, l) && (y += " disabled"); z && (y += " " + z); return '<td class="selectable ' + y + '"><button class="' + f + "-button " + f + '-day" type="button" data-unit="' + b + '" data-value="' + v + '"><span>' + B + "</span></button></td>"
        }; if (12 === a) { q += "<tr>"; for (h = 1; 6 >= h; h++)q += x(h, r(h)); q += x("am", w.amPm[0]); q += "</tr><tr>"; for (h = 7; 12 >= h; h++)q += x(h, r(h)); q += x("pm", w.amPm[1]); q += "</tr>"; u = 7 } else {
          if (24 === a) {
            var A =
              0; for (u = 0; 4 > u; u++) { q += "<tr>"; for (h = 0; 6 > h; h++)q += x(A, r(A)), A++; q += "</tr>" }
          } else { q += "<tr>"; for (u = 0; 60 > u; u += 10)q += x(u, r(u), "range"); h = null !== h ? h : 10 * Math.floor(c / 10); q = q + '</tr></tbody></thead><table class="' + (m + " " + m + '-nospace"><tbody><tr>'); for (u = h + 1; u < h + 10; u++)q += x(u, r(u)); q += "</tr>" } u = 6
        } n.empty().append('<table class="' + m + '"><thead><tr><th colspan="' + u + '">' + w[b] + "</th></tr></thead><tbody>" + q + "</tbody></table>")
      }
    }, _optionsTitle: function () {
      var b = this.c.i18n, a = this.c.minDate, c = this.c.maxDate; a = a ? a.getFullYear() :
        null; c = c ? c.getFullYear() : null; a = null !== a ? a : (new Date).getFullYear() - this.c.yearRange; c = null !== c ? c : (new Date).getFullYear() + this.c.yearRange; this._options("month", this._range(0, 11), b.months); this._options("year", this._range(a, c))
    }, _pad: function (b) { return 10 > b ? "0" + b : b }, _position: function () {
      var b = "input" === this.c.attachTo ? this.dom.input.position() : this.dom.input.offset(), a = this.dom.container, c = this.dom.input.outerHeight(); if (a.hasClass("inline")) a.insertAfter(this.dom.input); else {
        this.s.parts.date &&
          this.s.parts.time && 550 < d(e).width() ? a.addClass("horizontal") : a.removeClass("horizontal"); "input" === this.c.attachTo ? a.css({ top: b.top + c, left: b.left }).insertAfter(this.dom.input) : a.css({ top: b.top + c, left: b.left }).appendTo("body"); var l = a.outerHeight(), h = a.outerWidth(), f = d(e).scrollTop(); b.top + c + l - f > d(e).height() && (c = b.top - l, a.css("top", 0 > c ? 0 : c)); h + b.left > d(e).width() && (b = d(e).width() - h, "input" === this.c.attachTo && (b -= d(a).offsetParent().offset().left), a.css("left", 0 > b ? 0 : b))
      }
    }, _range: function (b, a, c) {
      var l =
        []; for (c || (c = 1); b <= a; b += c)l.push(b); return l
    }, _setCalander: function () { this.s.display && this.dom.calendar.empty().append(this._htmlMonth(this.s.display.getUTCFullYear(), this.s.display.getUTCMonth())) }, _setTitle: function () { this._optionSet("month", this.s.display.getUTCMonth()); this._optionSet("year", this.s.display.getUTCFullYear()) }, _setTime: function () {
      var b = this, a = this.s.d, c = null; g && g == e.luxon && (c = g.DateTime.fromJSDate(a)); var l = null != c ? c.hour : a ? a.getUTCHours() : 0, h = function (f) {
        return b.c[f + "Available"] ?
          b.c[f + "Available"] : b._range(0, 59, b.c[f + "Increment"])
      }; this._optionsTime("hours", this.s.parts.hours12 ? 12 : 24, l, this.c.hoursAvailable); this._optionsTime("minutes", 60, null != c ? c.minute : a ? a.getUTCMinutes() : 0, h("minutes"), this.s.minutesRange); this._optionsTime("seconds", 60, null != c ? c.second : a ? a.getSeconds() : 0, h("seconds"), this.s.secondsRange)
    }, _show: function () {
      var b = this, a = this.s.namespace; this._position(); d(e).on("scroll." + a + " resize." + a, function () { b._position() }); d("div.DTE_Body_Content").on("scroll." +
        a, function () { b._position() }); d("div.dataTables_scrollBody").on("scroll." + a, function () { b._position() }); var c = this.dom.input[0].offsetParent; if (c !== k.body) d(c).on("scroll." + a, function () { b._position() }); d(k).on("keydown." + a, function (l) { 9 !== l.keyCode && 27 !== l.keyCode && 13 !== l.keyCode || b._hide() }); setTimeout(function () { d("body").on("click." + a, function (l) { d(l.target).parents().filter(b.dom.container).length || l.target === b.dom.input[0] || b._hide() }) }, 10)
    }, _writeOutput: function (b) {
      var a = this.s.d, c = g && g == e.luxon ?
        g.DateTime.fromJSDate(this.s.d).toFormat(this.c.format) : g ? g.utc(a, p, this.c.locale, this.c.strict).format(this.c.format) : a.getUTCFullYear() + "-" + this._pad(a.getUTCMonth() + 1) + "-" + this._pad(a.getUTCDate()); this.dom.input.val(c).trigger("change", { write: a }); "hidden" === this.dom.input.attr("type") && this.val(c, !1); b && this.dom.input.focus()
    }
  }); t.use = function (b) { g = b }; t._instance = 0; t.defaults = {
    attachTo: "body", classPrefix: "dt-datetime", disableDays: null, firstDay: 1, format: "YYYY-MM-DD", hoursAvailable: null, i18n: {
      previous: "Previous",
      next: "Next", months: "January February March April May June July August September October November December".split(" "), weekdays: "Sun Mon Tue Wed Thu Fri Sat".split(" "), amPm: ["am", "pm"], hours: "Hour", minutes: "Minute", seconds: "Second", unknown: "-"
    }, maxDate: null, minDate: null, minutesAvailable: null, minutesIncrement: 1, strict: !0, locale: "en", onChange: function () { }, secondsAvailable: null, secondsIncrement: 1, showWeekNumber: !1, yearRange: 25
  }; t.version = "1.0.2"; e.DateTime || (e.DateTime = t); d.fn.dtDateTime = function (b) {
    return this.each(function () {
      new t(this,
        b)
    })
  }; d.fn.dataTable && (d.fn.dataTable.DateTime = t, d.fn.DataTable.DateTime = t, d.fn.dataTable.Editor && (d.fn.dataTable.Editor.DateTime = t)); return t
});


/*!
   Copyright 2014-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.2.7
 2014-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (b, k, m) { b instanceof String && (b = String(b)); for (var n = b.length, p = 0; p < n; p++) { var y = b[p]; if (k.call(m, y, p, b)) return { i: p, v: y } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, k, m) { if (b == Array.prototype || b == Object.prototype) return b; b[k] = m.value; return b }; $jscomp.getGlobal = function (b) { b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var k = 0; k < b.length; ++k) { var m = b[k]; if (m && m.Math == Math) return m } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x"); $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; var $jscomp$lookupPolyfilledValue = function (b, k) { var m = $jscomp.propertyToPolyfillSymbol[k]; if (null == m) return b[k]; m = b[m]; return void 0 !== m ? m : b[k] };
$jscomp.polyfill = function (b, k, m, n) { k && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, k, m, n) : $jscomp.polyfillUnisolated(b, k, m, n)) }; $jscomp.polyfillUnisolated = function (b, k, m, n) { m = $jscomp.global; b = b.split("."); for (n = 0; n < b.length - 1; n++) { var p = b[n]; if (!(p in m)) return; m = m[p] } b = b[b.length - 1]; n = m[b]; k = k(n); k != n && null != k && $jscomp.defineProperty(m, b, { configurable: !0, writable: !0, value: k }) };
$jscomp.polyfillIsolated = function (b, k, m, n) {
  var p = b.split("."); b = 1 === p.length; n = p[0]; n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var y = 0; y < p.length - 1; y++) { var z = p[y]; if (!(z in n)) return; n = n[z] } p = p[p.length - 1]; m = $jscomp.IS_SYMBOL_NATIVE && "es6" === m ? n[p] : null; k = k(m); null != k && (b ? $jscomp.defineProperty($jscomp.polyfills, p, { configurable: !0, writable: !0, value: k }) : k !== m && ($jscomp.propertyToPolyfillSymbol[p] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(p) : $jscomp.POLYFILL_PREFIX + p, p =
    $jscomp.propertyToPolyfillSymbol[p], $jscomp.defineProperty(n, p, { configurable: !0, writable: !0, value: k })))
}; $jscomp.polyfill("Array.prototype.find", function (b) { return b ? b : function (k, m) { return $jscomp.findInternal(this, k, m).v } }, "es6", "es3");
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (k) { return b(k, window, document) }) : "object" === typeof exports ? module.exports = function (k, m) { k || (k = window); m && m.fn.dataTable || (m = require("datatables.net")(k, m).$); return b(m, k, k.document) } : b(jQuery, window, document) })(function (b, k, m, n) {
  function p(a, c, d) { var f = c + "-" + d; if (A[f]) return A[f]; var g = []; a = a.cell(c, d).node().childNodes; c = 0; for (d = a.length; c < d; c++)g.push(a[c]); return A[f] = g } function y(a, c, d) {
    var f = c + "-" +
      d; if (A[f]) { a = a.cell(c, d).node(); d = A[f][0].parentNode.childNodes; c = []; for (var g = 0, l = d.length; g < l; g++)c.push(d[g]); d = 0; for (g = c.length; d < g; d++)a.appendChild(c[d]); A[f] = n }
  } var z = b.fn.dataTable, u = function (a, c) {
    if (!z.versionCheck || !z.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer"; this.s = { dt: new z.Api(a), columns: [], current: [] }; this.s.dt.settings()[0].responsive || (c && "string" === typeof c.details ? c.details = { type: c.details } : c && !1 === c.details ? c.details = { type: !1 } : c &&
      !0 === c.details && (c.details = { type: "inline" }), this.c = b.extend(!0, {}, u.defaults, z.defaults.responsive, c), a.responsive = this, this._constructor())
  }; b.extend(u.prototype, {
    _constructor: function () {
      var a = this, c = this.s.dt, d = c.settings()[0], f = b(k).innerWidth(); c.settings()[0]._responsive = this; b(k).on("resize.dtr orientationchange.dtr", z.util.throttle(function () { var g = b(k).innerWidth(); g !== f && (a._resize(), f = g) })); d.oApi._fnCallbackReg(d, "aoRowCreatedCallback", function (g, l, h) {
        -1 !== b.inArray(!1, a.s.current) && b(">td, >th",
          g).each(function (e) { e = c.column.index("toData", e); !1 === a.s.current[e] && b(this).css("display", "none") })
      }); c.on("destroy.dtr", function () { c.off(".dtr"); b(c.table().body()).off(".dtr"); b(k).off("resize.dtr orientationchange.dtr"); c.cells(".dtr-control").nodes().to$().removeClass("dtr-control"); b.each(a.s.current, function (g, l) { !1 === l && a._setColumnVis(g, !0) }) }); this.c.breakpoints.sort(function (g, l) { return g.width < l.width ? 1 : g.width > l.width ? -1 : 0 }); this._classLogic(); this._resizeAuto(); d = this.c.details; !1 !==
        d.type && (a._detailsInit(), c.on("column-visibility.dtr", function () { a._timer && clearTimeout(a._timer); a._timer = setTimeout(function () { a._timer = null; a._classLogic(); a._resizeAuto(); a._resize(!0); a._redrawChildren() }, 100) }), c.on("draw.dtr", function () { a._redrawChildren() }), b(c.table().node()).addClass("dtr-" + d.type)); c.on("column-reorder.dtr", function (g, l, h) { a._classLogic(); a._resizeAuto(); a._resize(!0) }); c.on("column-sizing.dtr", function () { a._resizeAuto(); a._resize() }); c.on("preXhr.dtr", function () {
          var g =
            []; c.rows().every(function () { this.child.isShown() && g.push(this.id(!0)) }); c.one("draw.dtr", function () { a._resizeAuto(); a._resize(); c.rows(g).every(function () { a._detailsDisplay(this, !1) }) })
        }); c.on("draw.dtr", function () { a._controlClass() }).on("init.dtr", function (g, l, h) { "dt" === g.namespace && (a._resizeAuto(), a._resize(), b.inArray(!1, a.s.current) && c.columns.adjust()) }); this._resize()
    }, _columnsVisiblity: function (a) {
      var c = this.s.dt, d = this.s.columns, f, g = d.map(function (t, v) { return { columnIdx: v, priority: t.priority } }).sort(function (t,
        v) { return t.priority !== v.priority ? t.priority - v.priority : t.columnIdx - v.columnIdx }), l = b.map(d, function (t, v) { return !1 === c.column(v).visible() ? "not-visible" : t.auto && null === t.minWidth ? !1 : !0 === t.auto ? "-" : -1 !== b.inArray(a, t.includeIn) }), h = 0; var e = 0; for (f = l.length; e < f; e++)!0 === l[e] && (h += d[e].minWidth); e = c.settings()[0].oScroll; e = e.sY || e.sX ? e.iBarWidth : 0; h = c.table().container().offsetWidth - e - h; e = 0; for (f = l.length; e < f; e++)d[e].control && (h -= d[e].minWidth); var r = !1; e = 0; for (f = g.length; e < f; e++) {
          var q = g[e].columnIdx;
          "-" === l[q] && !d[q].control && d[q].minWidth && (r || 0 > h - d[q].minWidth ? (r = !0, l[q] = !1) : l[q] = !0, h -= d[q].minWidth)
        } g = !1; e = 0; for (f = d.length; e < f; e++)if (!d[e].control && !d[e].never && !1 === l[e]) { g = !0; break } e = 0; for (f = d.length; e < f; e++)d[e].control && (l[e] = g), "not-visible" === l[e] && (l[e] = !1); -1 === b.inArray(!0, l) && (l[0] = !0); return l
    }, _classLogic: function () {
      var a = this, c = this.c.breakpoints, d = this.s.dt, f = d.columns().eq(0).map(function (h) {
        var e = this.column(h), r = e.header().className; h = d.settings()[0].aoColumns[h].responsivePriority;
        e = e.header().getAttribute("data-priority"); h === n && (h = e === n || null === e ? 1E4 : 1 * e); return { className: r, includeIn: [], auto: !1, control: !1, never: r.match(/\bnever\b/) ? !0 : !1, priority: h }
      }), g = function (h, e) { h = f[h].includeIn; -1 === b.inArray(e, h) && h.push(e) }, l = function (h, e, r, q) {
        if (!r) f[h].includeIn.push(e); else if ("max-" === r) for (q = a._find(e).width, e = 0, r = c.length; e < r; e++)c[e].width <= q && g(h, c[e].name); else if ("min-" === r) for (q = a._find(e).width, e = 0, r = c.length; e < r; e++)c[e].width >= q && g(h, c[e].name); else if ("not-" === r) for (e =
          0, r = c.length; e < r; e++)-1 === c[e].name.indexOf(q) && g(h, c[e].name)
      }; f.each(function (h, e) {
        for (var r = h.className.split(" "), q = !1, t = 0, v = r.length; t < v; t++) {
          var B = r[t].trim(); if ("all" === B) { q = !0; h.includeIn = b.map(c, function (w) { return w.name }); return } if ("none" === B || h.never) { q = !0; return } if ("control" === B || "dtr-control" === B) { q = !0; h.control = !0; return } b.each(c, function (w, D) {
            w = D.name.split("-"); var x = B.match(new RegExp("(min\\-|max\\-|not\\-)?(" + w[0] + ")(\\-[_a-zA-Z0-9])?")); x && (q = !0, x[2] === w[0] && x[3] === "-" + w[1] ? l(e,
              D.name, x[1], x[2] + x[3]) : x[2] !== w[0] || x[3] || l(e, D.name, x[1], x[2]))
          })
        } q || (h.auto = !0)
      }); this.s.columns = f
    }, _controlClass: function () { if ("inline" === this.c.details.type) { var a = this.s.dt, c = b.inArray(!0, this.s.current); a.cells(null, function (d) { return d !== c }, { page: "current" }).nodes().to$().filter(".dtr-control").removeClass("dtr-control"); a.cells(null, c, { page: "current" }).nodes().to$().addClass("dtr-control") } }, _detailsDisplay: function (a, c) {
      var d = this, f = this.s.dt, g = this.c.details; if (g && !1 !== g.type) {
        var l = g.display(a,
          c, function () { return g.renderer(f, a[0], d._detailsObj(a[0])) }); !0 !== l && !1 !== l || b(f.table().node()).triggerHandler("responsive-display.dt", [f, a, l, c])
      }
    }, _detailsInit: function () {
      var a = this, c = this.s.dt, d = this.c.details; "inline" === d.type && (d.target = "td.dtr-control, th.dtr-control"); c.on("draw.dtr", function () { a._tabIndexes() }); a._tabIndexes(); b(c.table().body()).on("keyup.dtr", "td, th", function (g) { 13 === g.keyCode && b(this).data("dtr-keyboard") && b(this).click() }); var f = d.target; d = "string" === typeof f ? f : "td, th";
      if (f !== n || null !== f) b(c.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", d, function (g) { if (b(c.table().node()).hasClass("collapsed") && -1 !== b.inArray(b(this).closest("tr").get(0), c.rows().nodes().toArray())) { if ("number" === typeof f) { var l = 0 > f ? c.columns().eq(0).length + f : f; if (c.cell(this).index().column !== l) return } l = c.row(b(this).closest("tr")); "click" === g.type ? a._detailsDisplay(l, !1) : "mousedown" === g.type ? b(this).css("outline", "none") : "mouseup" === g.type && b(this).trigger("blur").css("outline", "") } })
    },
    _detailsObj: function (a) { var c = this, d = this.s.dt; return b.map(this.s.columns, function (f, g) { if (!f.never && !f.control) return f = d.settings()[0].aoColumns[g], { className: f.sClass, columnIndex: g, data: d.cell(a, g).render(c.c.orthogonal), hidden: d.column(g).visible() && !c.s.current[g], rowIndex: a, title: null !== f.sTitle ? f.sTitle : b(d.column(g).header()).text() } }) }, _find: function (a) { for (var c = this.c.breakpoints, d = 0, f = c.length; d < f; d++)if (c[d].name === a) return c[d] }, _redrawChildren: function () {
      var a = this, c = this.s.dt; c.rows({ page: "current" }).iterator("row",
        function (d, f) { c.row(f); a._detailsDisplay(c.row(f), !0) })
    }, _resize: function (a) {
      var c = this, d = this.s.dt, f = b(k).innerWidth(), g = this.c.breakpoints, l = g[0].name, h = this.s.columns, e, r = this.s.current.slice(); for (e = g.length - 1; 0 <= e; e--)if (f <= g[e].width) { l = g[e].name; break } var q = this._columnsVisiblity(l); this.s.current = q; g = !1; e = 0; for (f = h.length; e < f; e++)if (!1 === q[e] && !h[e].never && !h[e].control && !1 === !d.column(e).visible()) { g = !0; break } b(d.table().node()).toggleClass("collapsed", g); var t = !1, v = 0; d.columns().eq(0).each(function (B,
        w) { !0 === q[w] && v++; if (a || q[w] !== r[w]) t = !0, c._setColumnVis(B, q[w]) }); t && (this._redrawChildren(), b(d.table().node()).trigger("responsive-resize.dt", [d, this.s.current]), 0 === d.page.info().recordsDisplay && b("td", d.table().body()).eq(0).attr("colspan", v)); c._controlClass()
    }, _resizeAuto: function () {
      var a = this.s.dt, c = this.s.columns; if (this.c.auto && -1 !== b.inArray(!0, b.map(c, function (e) { return e.auto }))) {
        b.isEmptyObject(A) || b.each(A, function (e) { e = e.split("-"); y(a, 1 * e[0], 1 * e[1]) }); a.table().node(); var d = a.table().node().cloneNode(!1),
          f = b(a.table().header().cloneNode(!1)).appendTo(d), g = b(a.table().body()).clone(!1, !1).empty().appendTo(d); d.style.width = "auto"; var l = a.columns().header().filter(function (e) { return a.column(e).visible() }).to$().clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0); b(g).append(b(a.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""); if (g = a.table().footer()) {
            g = b(g.cloneNode(!1)).appendTo(d); var h = a.columns().footer().filter(function (e) { return a.column(e).visible() }).to$().clone(!1).css("display",
              "table-cell"); b("<tr/>").append(h).appendTo(g)
          } b("<tr/>").append(l).appendTo(f); "inline" === this.c.details.type && b(d).addClass("dtr-inline collapsed"); b(d).find("[name]").removeAttr("name"); b(d).css("position", "relative"); d = b("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(d); d.insertBefore(a.table().node()); l.each(function (e) { e = a.column.index("fromVisible", e); c[e].minWidth = this.offsetWidth || 0 }); d.remove()
      }
    }, _responsiveOnlyHidden: function () {
      var a = this.s.dt; return b.map(this.s.current,
        function (c, d) { return !1 === a.column(d).visible() ? !0 : c })
    }, _setColumnVis: function (a, c) { var d = this.s.dt; c = c ? "" : "none"; b(d.column(a).header()).css("display", c); b(d.column(a).footer()).css("display", c); d.column(a).nodes().to$().css("display", c); b.isEmptyObject(A) || d.cells(null, a).indexes().each(function (f) { y(d, f.row, f.column) }) }, _tabIndexes: function () {
      var a = this.s.dt, c = a.cells({ page: "current" }).nodes().to$(), d = a.settings()[0], f = this.c.details.target; c.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
      "number" === typeof f ? a.cells(null, f, { page: "current" }).nodes().to$().attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === f && (f = ">td:first-child, >th:first-child"), b(f, a.rows({ page: "current" }).nodes()).attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1))
    }
  }); u.breakpoints = [{ name: "desktop", width: Infinity }, { name: "tablet-l", width: 1024 }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }]; u.display = {
    childRow: function (a, c, d) {
      if (c) {
        if (b(a.node()).hasClass("parent")) return a.child(d(),
          "child").show(), !0
      } else { if (a.child.isShown()) return a.child(!1), b(a.node()).removeClass("parent"), !1; a.child(d(), "child").show(); b(a.node()).addClass("parent"); return !0 }
    }, childRowImmediate: function (a, c, d) { if (!c && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), b(a.node()).removeClass("parent"), !1; a.child(d(), "child").show(); b(a.node()).addClass("parent"); return !0 }, modal: function (a) {
      return function (c, d, f) {
        if (d) b("div.dtr-modal-content").empty().append(f()); else {
          var g = function () {
            l.remove();
            b(m).off("keypress.dtr")
          }, l = b('<div class="dtr-modal"/>').append(b('<div class="dtr-modal-display"/>').append(b('<div class="dtr-modal-content"/>').append(f())).append(b('<div class="dtr-modal-close">&times;</div>').click(function () { g() }))).append(b('<div class="dtr-modal-background"/>').click(function () { g() })).appendTo("body"); b(m).on("keyup.dtr", function (h) { 27 === h.keyCode && (h.stopPropagation(), g()) })
        } a && a.header && b("div.dtr-modal-content").prepend("<h2>" + a.header(c) + "</h2>")
      }
    }
  }; var A = {}; u.renderer =
  {
    listHiddenNodes: function () { return function (a, c, d) { var f = b('<ul data-dtr-index="' + c + '" class="dtr-details"/>'), g = !1; b.each(d, function (l, h) { h.hidden && (b("<li " + (h.className ? 'class="' + h.className + '"' : "") + ' data-dtr-index="' + h.columnIndex + '" data-dt-row="' + h.rowIndex + '" data-dt-column="' + h.columnIndex + '"><span class="dtr-title">' + h.title + "</span> </li>").append(b('<span class="dtr-data"/>').append(p(a, h.rowIndex, h.columnIndex))).appendTo(f), g = !0) }); return g ? f : !1 } }, listHidden: function () {
      return function (a,
        c, d) { return (a = b.map(d, function (f) { var g = f.className ? 'class="' + f.className + '"' : ""; return f.hidden ? "<li " + g + ' data-dtr-index="' + f.columnIndex + '" data-dt-row="' + f.rowIndex + '" data-dt-column="' + f.columnIndex + '"><span class="dtr-title">' + f.title + '</span> <span class="dtr-data">' + f.data + "</span></li>" : "" }).join("")) ? b('<ul data-dtr-index="' + c + '" class="dtr-details"/>').append(a) : !1 }
    }, tableAll: function (a) {
      a = b.extend({ tableClass: "" }, a); return function (c, d, f) {
        c = b.map(f, function (g) {
          return "<tr " + (g.className ?
            'class="' + g.className + '"' : "") + ' data-dt-row="' + g.rowIndex + '" data-dt-column="' + g.columnIndex + '"><td>' + g.title + ":</td> <td>" + g.data + "</td></tr>"
        }).join(""); return b('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(c)
      }
    }
  }; u.defaults = { breakpoints: u.breakpoints, auto: !0, details: { display: u.display.childRow, renderer: u.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" }; var C = b.fn.dataTable.Api; C.register("responsive()", function () { return this }); C.register("responsive.index()",
    function (a) { a = b(a); return { column: a.data("dtr-index"), row: a.parent().data("dtr-index") } }); C.register("responsive.rebuild()", function () { return this.iterator("table", function (a) { a._responsive && a._responsive._classLogic() }) }); C.register("responsive.recalc()", function () { return this.iterator("table", function (a) { a._responsive && (a._responsive._resizeAuto(), a._responsive._resize()) }) }); C.register("responsive.hasHidden()", function () {
      var a = this.context[0]; return a._responsive ? -1 !== b.inArray(!1, a._responsive._responsiveOnlyHidden()) :
        !1
    }); C.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () { return this.iterator("column", function (a, c) { return a._responsive ? a._responsive._responsiveOnlyHidden()[c] : !1 }, 1) }); u.version = "2.2.7"; b.fn.dataTable.Responsive = u; b.fn.DataTable.Responsive = u; b(m).on("preInit.dt.dtr", function (a, c, d) {
      "dt" === a.namespace && (b(c.nTable).hasClass("responsive") || b(c.nTable).hasClass("dt-responsive") || c.oInit.responsive || z.defaults.responsive) && (a = c.oInit.responsive, !1 !== a && new u(c,
        b.isPlainObject(a) ? a : {}))
    }); return u
});


/*!
 DataTables styling wrapper for Responsive
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-dt", "datatables.net-responsive"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); b && b.fn.dataTable || (b = require("datatables.net-dt")(a, b).$); b.fn.dataTable.Responsive || require("datatables.net-responsive")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c, a, b, d) { return c.fn.dataTable });


/*!
   Copyright 2015-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net/extensions/select
 Select for DataTables 1.3.2
 2015-2021 SpryMedia Ltd - datatables.net/license/mit
*/
(function (h) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (q) { return h(q, window, document) }) : "object" === typeof exports ? module.exports = function (q, t) { q || (q = window); t && t.fn.dataTable || (t = require("datatables.net")(q, t).$); return h(t, q, q.document) } : h(jQuery, window, document) })(function (h, q, t, n) {
  function E(a, b, c) {
    var d = function (g, f) { if (g > f) { var k = f; f = g; g = k } var l = !1; return a.columns(":visible").indexes().filter(function (p) { p === g && (l = !0); return p === f ? (l = !1, !0) : l }) }; var e =
      function (g, f) { var k = a.rows({ search: "applied" }).indexes(); if (k.indexOf(g) > k.indexOf(f)) { var l = f; f = g; g = l } var p = !1; return k.filter(function (u) { u === g && (p = !0); return u === f ? (p = !1, !0) : p }) }; a.cells({ selected: !0 }).any() || c ? (d = d(c.column, b.column), c = e(c.row, b.row)) : (d = d(0, b.column), c = e(0, b.row)); c = a.cells(c, d).flatten(); a.cells(b, { selected: !0 }).any() ? a.cells(c).deselect() : a.cells(c).select()
  } function A(a) {
    var b = a.settings()[0]._select.selector; h(a.table().container()).off("mousedown.dtSelect", b).off("mouseup.dtSelect",
      b).off("click.dtSelect", b); h("body").off("click.dtSelect" + a.table().node().id.replace(/[^a-zA-Z0-9\-_]/g, "-"))
  } function F(a) {
    var b = h(a.table().container()), c = a.settings()[0], d = c._select.selector, e; b.on("mousedown.dtSelect", d, function (g) { if (g.shiftKey || g.metaKey || g.ctrlKey) b.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function () { return !1 }); q.getSelection && (e = q.getSelection()) }).on("mouseup.dtSelect", d, function () { b.css("-moz-user-select", "") }).on("click.dtSelect", d, function (g) {
      var f =
        a.select.items(); if (e) { var k = q.getSelection(); if ((!k.anchorNode || h(k.anchorNode).closest("table")[0] === a.table().node()) && k !== e) return } k = a.settings()[0]; var l = a.settings()[0].oClasses.sWrapper.trim().replace(/ +/g, "."); if (h(g.target).closest("div." + l)[0] == a.table().container() && (l = a.cell(h(g.target).closest("td, th")), l.any())) {
          var p = h.Event("user-select.dt"); r(a, p, [f, l, g]); p.isDefaultPrevented() || (p = l.index(), "row" === f ? (f = p.row, B(g, a, k, "row", f)) : "column" === f ? (f = l.index().column, B(g, a, k, "column",
            f)) : "cell" === f && (f = l.index(), B(g, a, k, "cell", f)), k._select_lastCell = p)
        }
    }); h("body").on("click.dtSelect" + a.table().node().id.replace(/[^a-zA-Z0-9\-_]/g, "-"), function (g) { !c._select.blurable || h(g.target).parents().filter(a.table().container()).length || 0 === h(g.target).parents("html").length || h(g.target).parents("div.DTE").length || x(c, !0) })
  } function r(a, b, c, d) { if (!d || a.flatten().length) "string" === typeof b && (b += ".dt"), c.unshift(a), h(a.table().node()).trigger(b, c) } function I(a) {
    var b = a.settings()[0]; if (b._select.info &&
      b.aanFeatures.i && "api" !== a.select.style()) {
      var c = a.rows({ selected: !0 }).flatten().length, d = a.columns({ selected: !0 }).flatten().length, e = a.cells({ selected: !0 }).flatten().length, g = function (f, k, l) { f.append(h('<span class="select-item"/>').append(a.i18n("select." + k + "s", { _: "%d " + k + "s selected", 0: "", 1: "1 " + k + " selected" }, l))) }; h.each(b.aanFeatures.i, function (f, k) {
        k = h(k); f = h('<span class="select-info"/>'); g(f, "row", c); g(f, "column", d); g(f, "cell", e); var l = k.children("span.select-info"); l.length && l.remove();
        "" !== f.text() && k.append(f)
      })
    }
  } function J(a) {
    var b = new m.Api(a); a.aoRowCreatedCallback.push({ fn: function (c, d, e) { d = a.aoData[e]; d._select_selected && h(c).addClass(a._select.className); c = 0; for (e = a.aoColumns.length; c < e; c++)(a.aoColumns[c]._select_selected || d._selected_cells && d._selected_cells[c]) && h(d.anCells[c]).addClass(a._select.className) }, sName: "select-deferRender" }); b.on("preXhr.dt.dtSelect", function (c, d) {
      if (d === b.settings()[0]) {
        var e = b.rows({ selected: !0 }).ids(!0).filter(function (f) { return f !== n }),
          g = b.cells({ selected: !0 }).eq(0).map(function (f) { var k = b.row(f.row).id(!0); return k ? { row: k, column: f.column } : n }).filter(function (f) { return f !== n }); b.one("draw.dt.dtSelect", function () { b.rows(e).select(); g.any() && g.each(function (f) { b.cells(f.row, f.column).select() }) })
      }
    }); b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function () { I(b) }); b.on("destroy.dtSelect", function () { b.rows({ selected: !0 }).deselect(); A(b); b.off(".dtSelect") })
  } function G(a, b, c, d) {
    var e = a[b + "s"]({ search: "applied" }).indexes();
    d = h.inArray(d, e); var g = h.inArray(c, e); if (a[b + "s"]({ selected: !0 }).any() || -1 !== d) { if (d > g) { var f = g; g = d; d = f } e.splice(g + 1, e.length); e.splice(0, d) } else e.splice(h.inArray(c, e) + 1, e.length); a[b](c, { selected: !0 }).any() ? (e.splice(h.inArray(c, e), 1), a[b + "s"](e).deselect()) : a[b + "s"](e).select()
  } function x(a, b) { if (b || "single" === a._select.style) a = new m.Api(a), a.rows({ selected: !0 }).deselect(), a.columns({ selected: !0 }).deselect(), a.cells({ selected: !0 }).deselect() } function B(a, b, c, d, e) {
    var g = b.select.style(), f = b.select.toggleable(),
      k = b[d](e, { selected: !0 }).any(); if (!k || f) "os" === g ? a.ctrlKey || a.metaKey ? b[d](e).select(!k) : a.shiftKey ? "cell" === d ? E(b, e, c._select_lastCell || null) : G(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null) : (a = b[d + "s"]({ selected: !0 }), k && 1 === a.flatten().length ? b[d](e).deselect() : (a.deselect(), b[d](e).select())) : "multi+shift" == g ? a.shiftKey ? "cell" === d ? E(b, e, c._select_lastCell || null) : G(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null) : b[d](e).select(!k) : b[d](e).select(!k)
  } function y(a, b) {
    return function (c) {
      return c.i18n("buttons." +
        a, b)
    }
  } function C(a) { a = a._eventNamespace; return "draw.dt.DT" + a + " select.dt.DT" + a + " deselect.dt.DT" + a } function K(a, b) { return -1 !== h.inArray("rows", b.limitTo) && a.rows({ selected: !0 }).any() || -1 !== h.inArray("columns", b.limitTo) && a.columns({ selected: !0 }).any() || -1 !== h.inArray("cells", b.limitTo) && a.cells({ selected: !0 }).any() ? !0 : !1 } var m = h.fn.dataTable; m.select = {}; m.select.version = "1.3.2"; m.select.init = function (a) {
    var b = a.settings()[0], c = b.oInit.select, d = m.defaults.select; c = c === n ? d : c; d = "row"; var e = "api", g = !1,
      f = !0, k = !0, l = "td, th", p = "selected", u = !1; b._select = {}; !0 === c ? (e = "os", u = !0) : "string" === typeof c ? (e = c, u = !0) : h.isPlainObject(c) && (c.blurable !== n && (g = c.blurable), c.toggleable !== n && (f = c.toggleable), c.info !== n && (k = c.info), c.items !== n && (d = c.items), e = c.style !== n ? c.style : "os", u = !0, c.selector !== n && (l = c.selector), c.className !== n && (p = c.className)); a.select.selector(l); a.select.items(d); a.select.style(e); a.select.blurable(g); a.select.toggleable(f); a.select.info(k); b._select.className = p; h.fn.dataTable.ext.order["select-checkbox"] =
        function (z, L) { return this.api().column(L, { order: "index" }).nodes().map(function (H) { return "row" === z._select.items ? h(H).parent().hasClass(z._select.className) : "cell" === z._select.items ? h(H).hasClass(z._select.className) : !1 }) }; !u && h(a.table().node()).hasClass("selectable") && a.select.style("os")
  }; h.each([{ type: "row", prop: "aoData" }, { type: "column", prop: "aoColumns" }], function (a, b) {
    m.ext.selector[b.type].push(function (c, d, e) {
      d = d.selected; var g = []; if (!0 !== d && !1 !== d) return e; for (var f = 0, k = e.length; f < k; f++) {
        var l =
          c[b.prop][e[f]]; (!0 === d && !0 === l._select_selected || !1 === d && !l._select_selected) && g.push(e[f])
      } return g
    })
  }); m.ext.selector.cell.push(function (a, b, c) { b = b.selected; var d = []; if (b === n) return c; for (var e = 0, g = c.length; e < g; e++) { var f = a.aoData[c[e].row]; (!0 === b && f._selected_cells && !0 === f._selected_cells[c[e].column] || !(!1 !== b || f._selected_cells && f._selected_cells[c[e].column])) && d.push(c[e]) } return d }); var v = m.Api.register, w = m.Api.registerPlural; v("select()", function () { return this.iterator("table", function (a) { m.select.init(new m.Api(a)) }) });
  v("select.blurable()", function (a) { return a === n ? this.context[0]._select.blurable : this.iterator("table", function (b) { b._select.blurable = a }) }); v("select.toggleable()", function (a) { return a === n ? this.context[0]._select.toggleable : this.iterator("table", function (b) { b._select.toggleable = a }) }); v("select.info()", function (a) { return a === n ? this.context[0]._select.info : this.iterator("table", function (b) { b._select.info = a }) }); v("select.items()", function (a) {
    return a === n ? this.context[0]._select.items : this.iterator("table",
      function (b) { b._select.items = a; r(new m.Api(b), "selectItems", [a]) })
  }); v("select.style()", function (a) { return a === n ? this.context[0]._select.style : this.iterator("table", function (b) { b._select.style = a; b._select_init || J(b); var c = new m.Api(b); A(c); "api" !== a && F(c); r(new m.Api(b), "selectStyle", [a]) }) }); v("select.selector()", function (a) { return a === n ? this.context[0]._select.selector : this.iterator("table", function (b) { A(new m.Api(b)); b._select.selector = a; "api" !== b._select.style && F(new m.Api(b)) }) }); w("rows().select()",
    "row().select()", function (a) { var b = this; if (!1 === a) return this.deselect(); this.iterator("row", function (c, d) { x(c); c.aoData[d]._select_selected = !0; h(c.aoData[d].nTr).addClass(c._select.className) }); this.iterator("table", function (c, d) { r(b, "select", ["row", b[d]], !0) }); return this }); w("columns().select()", "column().select()", function (a) {
      var b = this; if (!1 === a) return this.deselect(); this.iterator("column", function (c, d) {
        x(c); c.aoColumns[d]._select_selected = !0; d = (new m.Api(c)).column(d); h(d.header()).addClass(c._select.className);
        h(d.footer()).addClass(c._select.className); d.nodes().to$().addClass(c._select.className)
      }); this.iterator("table", function (c, d) { r(b, "select", ["column", b[d]], !0) }); return this
    }); w("cells().select()", "cell().select()", function (a) {
      var b = this; if (!1 === a) return this.deselect(); this.iterator("cell", function (c, d, e) { x(c); d = c.aoData[d]; d._selected_cells === n && (d._selected_cells = []); d._selected_cells[e] = !0; d.anCells && h(d.anCells[e]).addClass(c._select.className) }); this.iterator("table", function (c, d) {
        r(b, "select",
          ["cell", b.cells(b[d]).indexes().toArray()], !0)
      }); return this
    }); w("rows().deselect()", "row().deselect()", function () { var a = this; this.iterator("row", function (b, c) { b.aoData[c]._select_selected = !1; b._select_lastCell = null; h(b.aoData[c].nTr).removeClass(b._select.className) }); this.iterator("table", function (b, c) { r(a, "deselect", ["row", a[c]], !0) }); return this }); w("columns().deselect()", "column().deselect()", function () {
      var a = this; this.iterator("column", function (b, c) {
        b.aoColumns[c]._select_selected = !1; var d =
          new m.Api(b), e = d.column(c); h(e.header()).removeClass(b._select.className); h(e.footer()).removeClass(b._select.className); d.cells(null, c).indexes().each(function (g) { var f = b.aoData[g.row], k = f._selected_cells; !f.anCells || k && k[g.column] || h(f.anCells[g.column]).removeClass(b._select.className) })
      }); this.iterator("table", function (b, c) { r(a, "deselect", ["column", a[c]], !0) }); return this
    }); w("cells().deselect()", "cell().deselect()", function () {
      var a = this; this.iterator("cell", function (b, c, d) {
        c = b.aoData[c]; c._selected_cells[d] =
          !1; c.anCells && !b.aoColumns[d]._select_selected && h(c.anCells[d]).removeClass(b._select.className)
      }); this.iterator("table", function (b, c) { r(a, "deselect", ["cell", a[c]], !0) }); return this
    }); var D = 0; h.extend(m.ext.buttons, {
      selected: { text: y("selected", "Selected"), className: "buttons-selected", limitTo: ["rows", "columns", "cells"], init: function (a, b, c) { var d = this; c._eventNamespace = ".select" + D++; a.on(C(c), function () { d.enable(K(a, c)) }); this.disable() }, destroy: function (a, b, c) { a.off(c._eventNamespace) } }, selectedSingle: {
        text: y("selectedSingle",
          "Selected single"), className: "buttons-selected-single", init: function (a, b, c) { var d = this; c._eventNamespace = ".select" + D++; a.on(C(c), function () { var e = a.rows({ selected: !0 }).flatten().length + a.columns({ selected: !0 }).flatten().length + a.cells({ selected: !0 }).flatten().length; d.enable(1 === e) }); this.disable() }, destroy: function (a, b, c) { a.off(c._eventNamespace) }
      }, selectAll: { text: y("selectAll", "Select all"), className: "buttons-select-all", action: function () { this[this.select.items() + "s"]().select() } }, selectNone: {
        text: y("selectNone",
          "Deselect all"), className: "buttons-select-none", action: function () { x(this.settings()[0], !0) }, init: function (a, b, c) { var d = this; c._eventNamespace = ".select" + D++; a.on(C(c), function () { var e = a.rows({ selected: !0 }).flatten().length + a.columns({ selected: !0 }).flatten().length + a.cells({ selected: !0 }).flatten().length; d.enable(0 < e) }); this.disable() }, destroy: function (a, b, c) { a.off(c._eventNamespace) }
      }
    }); h.each(["Row", "Column", "Cell"], function (a, b) {
      var c = b.toLowerCase(); m.ext.buttons["select" + b + "s"] = {
        text: y("select" +
          b + "s", "Select " + c + "s"), className: "buttons-select-" + c + "s", action: function () { this.select.items(c) }, init: function (d) { var e = this; d.on("selectItems.dt.DT", function (g, f, k) { e.active(k === c) }) }
      }
    }); h(t).on("preInit.dt.dtSelect", function (a, b) { "dt" === a.namespace && m.select.init(new m.Api(b)) }); return m.select
});


/*!
 DataTables styling wrapper for Select
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-dt", "datatables.net-select"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); b && b.fn.dataTable || (b = require("datatables.net-dt")(a, b).$); b.fn.dataTable.select || require("datatables.net-select")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c, a, b, d) { return c.fn.dataTable });

