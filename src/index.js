const getDomArray = require('zhf.get-dom-array');
const isDomParent = require('zhf.is-dom-parent');

function isEnterOrLeave(dom, relatedTarget) {
    const isSelf = relatedTarget === dom; // 是否是自身
    const isChild = isDomParent(dom, relatedTarget); // 是否是子级
    return !isSelf && !isChild;
}

module.exports = {
    isEnterOrLeave,
    mouseenter(el, cb) {
        const dom = getDomArray(el)[0];
        dom.addEventListener('mouseover', function (ev) {
            if (isEnterOrLeave(dom, ev.relatedTarget) && typeof cb === 'function') {
                cb && cb.call(dom, ev);
            }
        });
    },
    mouseleave(el, cb) {
        const dom = getDomArray(el)[0];
        dom.addEventListener('mouseout', function (ev) {
            if (isEnterOrLeave(dom, ev.relatedTarget) && typeof cb === 'function') {
                cb && cb.call(dom, ev);
            }
        });
    },
};
