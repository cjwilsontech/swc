//// [taggedTemplateWithConstructableTag01.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _tagged_template_literal } from "@swc/helpers/_/_tagged_template_literal";
function _templateObject() {
    var data = _tagged_template_literal([
        "Hello world!"
    ]);
    return _templateObject = function() {
        return data;
    }, data;
}
!function CtorTag() {
    "use strict";
    _class_call_check(this, CtorTag);
}(_templateObject());
