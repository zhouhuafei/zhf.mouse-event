const getDomArray = require('zhf.get-dom-array');
const isDomParent = require('zhf.is-dom-parent');

function fn(dom, cb, relatedTarget) {
    const isSelf = relatedTarget === dom; // 是否是自身
    const isChild = isDomParent(dom, relatedTarget); // 是否是子级
    console.log(isSelf, isChild);
    if (!isSelf && !isChild) { // 如不是自身或者是子级，则触发。
        cb && cb.call(dom, dom);
    }
}

module.exports = {
    mouseenter(el, cb) {
        const dom = getDomArray(el)[0];
        dom.addEventListener('mouseover', function (ev) {
            fn(dom, cb, ev.relatedTarget);
        });
    },
    mouseleave(el, cb) {
        const dom = getDomArray(el)[0];
        dom.addEventListener('mouseout', function (ev) {
            fn(dom, cb, ev.relatedTarget);
        });
    },
};
