'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // used this to create new instance of web3 that uses the provider from metamask
//given to web page

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //we are on server or user is not running metamask
    var provider = new _web2.default.providers.HttpProvider(
    //totally fine to share this key
    'https://rinkeby.infura.io/v3/8eca61ae2a994437b4b6c199d9772b3f');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQUxBO0FBQ0E7O0FBTUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTJELGFBQWEsQUFDaEU7QUFDQTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDbkM7QUFIRCxPQUdPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixBQUNoQztBQUNBO0FBRkosQUFBaUIsQUFJakI7V0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRjovY291cnNlL2Jsb2NrY2hhaW5fcHJvamVjdC91cGdyYWRlZF9zdGFydHVwX2Z1bmQvc3RhcnR1cF9mdW5kIn0=