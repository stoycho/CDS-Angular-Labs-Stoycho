var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName) {
        this.userName = userName;
    }
    Person.prototype.greet = function () {
        console.log("Hi from " + this.userName);
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(userName, skills) {
        var _this = _super.call(this, userName) || this;
        _this.userName = userName;
        _this.skills = skills;
        return _this;
    }
    Developer.prototype.saySkills = function () {
        console.log(this.skills);
    };
    return Developer;
}(Person));
var ada = new Person('Ada');
ada.greet();
var dev1 = new Developer('Pesho', ['Java', 'Python']);
dev1.greet();
// Java, Python
function doSomethingWithDev(dev) {
    dev.saySkills();
}
// doSomethingWithDev(ada);
