// @target: es5
class C {
    bar(...rest) {}
    foo(x, ...rest) {}
    constructor(name, ...rest){}
}
class D {
    bar(...rest) {}
    foo(x, ...rest) {}
    constructor(...rest){}
}
