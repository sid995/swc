import * as swcHelpers from "@swc/helpers";
(function() {
    for(var _len = arguments.length, _tmp = new Array(_len), _key = 0; _key < _len; _key++)_tmp[_key] = arguments[_key];
    var __tmp = swcHelpers.slicedToArray(_tmp, 2);
    __tmp[0], __tmp[1];
}).apply(void 0, swcHelpers.toConsumableArray(new FooIteratorIterator));
var Bar = function() {
    "use strict";
    swcHelpers.classCallCheck(this, Bar);
}, Foo = function(Bar1) {
    "use strict";
    swcHelpers.inherits(Foo, Bar1);
    var _super = swcHelpers.createSuper(Foo);
    function Foo() {
        return swcHelpers.classCallCheck(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(Bar), _iterator = Symbol.iterator, FooIterator = function() {
    "use strict";
    function FooIterator() {
        swcHelpers.classCallCheck(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    return _proto.next = function() {
        return {
            value: new Foo,
            done: !1
        };
    }, _proto[_iterator] = function() {
        return this;
    }, FooIterator;
}(), _iterator1 = Symbol.iterator, FooIteratorIterator = function() {
    "use strict";
    function FooIteratorIterator() {
        swcHelpers.classCallCheck(this, FooIteratorIterator);
    }
    var _proto = FooIteratorIterator.prototype;
    return _proto.next = function() {
        return {
            value: new FooIterator,
            done: !1
        };
    }, _proto[_iterator1] = function() {
        return this;
    }, FooIteratorIterator;
}();
