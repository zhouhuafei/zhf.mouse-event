const {mouseenter, mouseleave} = require('../dist/index.min');

mouseenter('.mouse-box', function (ev) {
    console.log('.mouse-box mouseenter：', ev, this);
});

mouseleave('.mouse-box', function (ev) {
    console.log('.mouse-box mouseleave：', ev, this);
});
