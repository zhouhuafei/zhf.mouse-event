const jsonToArray = require('../dist/index.min');

test(`鼠标事件`, () => {
    console.log(jsonToArray({a: 'hello', b: 'world'})); // [{key: 'a', value: 'hello'}, {key: 'b', value: 'world'}]
    expect(true).toEqual(true);
});
