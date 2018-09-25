(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('jsonToArray', function () {
    /**
     * @description 鼠标事件
     * @param {Object} json - json格式的对象{}
     * */
    function jsonToArray(json = {}) {
        const arr = [];
        if (json instanceof Array) {
            json.forEach(function (v, i) {
                arr.push({key: i, value: v});
            });
        } else {
            Object.keys(json).forEach(function (attr) {
                arr.push({key: attr, value: json[attr]});
            });
        }
        return arr;
    }

    return jsonToArray;
});
