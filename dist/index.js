'use strict';

var getDomArray = require('zhf.get-dom-array');
var isDomParent = require('zhf.is-dom-parent');

function isEnterOrLeave(dom, relatedTarget) {
    var isSelf = relatedTarget === dom; // 是否是自身
    var isChild = isDomParent(dom, relatedTarget); // 是否是子级
    return !isSelf && !isChild;
}

module.exports = {
    isEnterOrLeave: isEnterOrLeave,
    mouseenter: function mouseenter(el, cb) {
        var dom = getDomArray(el)[0];
        dom.addEventListener('mouseover', function (ev) {
            if (isEnterOrLeave(dom, ev.relatedTarget) && typeof cb === 'function') {
                cb && cb.call(dom, ev);
            }
        });
    },
    mouseleave: function mouseleave(el, cb) {
        var dom = getDomArray(el)[0];
        dom.addEventListener('mouseout', function (ev) {
            if (isEnterOrLeave(dom, ev.relatedTarget) && typeof cb === 'function') {
                cb && cb.call(dom, ev);
            }
        });
    }
};