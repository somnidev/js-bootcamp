"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var name = 'Jen';
console.log(name);

var Hangman = /*#__PURE__*/function () {
  function Hangman() {
    _classCallCheck(this, Hangman);
  }

  _createClass(Hangman, [{
    key: "myMethod",
    value: function myMethod() {
      return 'Testing hangman';
    }
  }]);

  return Hangman;
}();

var hangman = new Hangman();
console.log(hangman.myMethod());