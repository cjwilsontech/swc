//// [derivedClassWithoutExplicitConstructor3.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
var Base = function Base(x) {
    "use strict";
    _class_call_check(this, Base), this.a = 1, this.a = x;
}, Derived = function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived(y, z) {
        var _this;
        return _class_call_check(this, Derived), (_this = _super.call(this, 2)).b = "", _this.b = y, _this;
    }
    return Derived;
}(Base), Derived2 = function(Derived) {
    "use strict";
    _inherits(Derived2, Derived);
    var _super = _create_super(Derived2);
    function Derived2() {
        var _this;
        return _class_call_check(this, Derived2), _this = _super.apply(this, arguments), _this.x = 1, _this.y = "hello", _this;
    }
    return Derived2;
}(Derived);
new Derived(), new Derived2(1), new Derived("", "");
var D2 = function(D) {
    "use strict";
    _inherits(D2, D);
    var _super = _create_super(D2);
    function D2() {
        var _this;
        return _class_call_check(this, D2), _this = _super.apply(this, arguments), _this.x = 2, _this.y = null, _this;
    }
    return D2;
}(function(Base) {
    "use strict";
    _inherits(D, Base);
    var _super = _create_super(D);
    function D(y, z) {
        var _this;
        return _class_call_check(this, D), (_this = _super.call(this, 2)).b = null, _this.b = y, _this;
    }
    return D;
}(Base));
new D2(), new D2(new Date()), new D2(new Date(), new Date());
