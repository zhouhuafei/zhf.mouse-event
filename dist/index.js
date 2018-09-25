'use strict';

var getDomArray = require('zhf.get-dom-array');
var isDomParent = require('zhf.is-dom-parent');

function fn(dom, cb, relatedTarget) {
    var isSelf = relatedTarget === dom; // 是否是自身
    var isChild = isDomParent(dom, relatedTarget); // 是否是子级
    if (!(isSelf && isChild)) {
        // 如不是自身或者是子级，则触发。
        cb && cb.call(dom, dom);
    }
}

module.exports = {
    mouseenter: function mouseenter(el, cb) {
        var dom = getDomArray(el)[0];
        dom.addEventListener('mouseover', function (ev) {
            fn(dom, cb, ev.relatedTarget);
        });
    },
    mouseleave: function mouseleave(el, cb) {
        var dom = getDomArray(el)[0];
        dom.addEventListener('mouseout', function (ev) {
            fn(dom, cb, ev.relatedTarget);
        });
    }
};