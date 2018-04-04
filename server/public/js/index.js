/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Prince(name, age) {
    this.gender = "male";
    this.kind = true;
    this.rich = true;
    this.name = name;
    this.age = age;

    console.log('this===>', this);
}
// Prince.prototype.toFrog=function(){
//   console.log("Prince "+this.name+" turned into a frog.");
// }

var ss = new Prince('nameaa', 222);
console.log(ss.age);

console.log('-------------------------------------------');

function Person(name) {
    this.name = name;
    //return 1;
    console.log('this===>', this);
    return { name: "cherry" };
}
var person = new Person("sheila");
console.log('person.name', person.name); //cherry
console.log('person', person); //Object {name: "cherry"}
console.log('-------------------------------------------');

//closure
{
    var foo = function foo() {
        console.log(a);
    };

    var bar = function bar() {
        var a = 3;
        foo();
    };

    var a = 2;
    foo();
}

{
    var bar2 = function bar2() {
        var a = 3;
        return function foo2() {
            console.log(a);
        };
    };

    var _a = 2;
    var aa = new bar2();
    aa();
}
console.log('-------------------------------------------');{
    var Point = function () {
        function Point(x, y) {
            _classCallCheck(this, Point);

            //this.x = x;
            this.y = y;
        }

        _createClass(Point, [{
            key: 'toString2',
            value: function toString2() {
                return '(' + this.x + ', ' + this.y + ')';
            }
        }]);

        return Point;
    }();

    var point = new Point('a1', 'a22');
    console.log(point.toString2());
    console.log(point.hasOwnProperty('x'));
}

{
    var cat = {};
    Object.getPrototypeOf(cat).sex = "Male";
    cat.__proto__.age = 3;
    cat.name = 'MiMi';
    cat['master'] = 'RK';

    console.log('cat-->', cat.name, cat.age, cat.master, cat.sex);
}

{
    var myClass = function () {
        function Me() {
            _classCallCheck(this, Me);
        }

        _createClass(Me, [{
            key: 'getMyName',
            value: function getMyName() {
                return Me.name;
            }
        }]);

        return Me;
    }();
    var init = new myClass();
    console.log(init.getMyName());
}

/***/ })
/******/ ]);