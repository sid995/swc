// @target: es5
class Foo {
}
class Foo2 {
}
class C {
    // Computed properties
    [""]() {
        return new Foo;
    }
    [""]() {
        return new Foo2;
    }
}
