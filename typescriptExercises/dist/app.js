"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log("Hello WorasaaasadDd");
        return 0;
    };
    return Startup;
}());
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book = new Book();
var myFuncNormal = function (str1, str2, str3) {
    return [str1, str2, str3];
};
var myFuncUpper = function (str1, str2, str3) {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["a", "b", "c"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(myFuncNormal);
f2(myFuncUpper);
Startup.main();
//# sourceMappingURL=app.js.map