const {mouseenter, mouseleave} = require('../dist/index.min');

mouseenter('mouse-box-text', function (ev) {
    console.log('box1 mouseevter：', ev, this);
});

mouseleave('mouse-box-text', function (ev) {
    console.log('box1 mouseleave：', ev, this);
});
