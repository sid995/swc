import * as swcHelpers from "@swc/helpers";
import regeneratorRuntime from "regenerator-runtime";
function f() {
    return _f.apply(this, arguments);
}
function _f() {
    _f = // @target: es5
    // @lib: es5,es2015.promise
    // @filename: a.ts
    swcHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _f.apply(this, arguments);
}
// @filename: b.ts
function g() {}
