//// [ExportClassWithInaccessibleTypeInTypeParameterConstraint.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
var A;
(function(A) {
    var Point = function Point() {
        "use strict";
        _class_call_check(this, Point);
    };
    var Origin = A.Origin = {
        x: 0,
        y: 0
    };
    var Point3d = /*#__PURE__*/ function(Point) {
        "use strict";
        _inherits(Point3d, Point);
        var _super = _create_super(Point3d);
        function Point3d() {
            _class_call_check(this, Point3d);
            return _super.apply(this, arguments);
        }
        return Point3d;
    }(Point);
    A.Point3d = Point3d;
    var Origin3d = A.Origin3d = {
        x: 0,
        y: 0,
        z: 0
    };
    var Line = /*#__PURE__*/ function() {
        "use strict";
        function Line(start, end) {
            _class_call_check(this, Line);
            this.start = start;
            this.end = end;
        }
        Line.fromorigin2d = function fromorigin2d(p) {
            return null;
        };
        return Line;
    }();
    A.Line = Line;
})(A || (A = {}));
