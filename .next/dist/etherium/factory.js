'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _babelTypes = require('babel-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x2B0a7A5B31CA1D3af842b46A4d1dAd262339eE49'); //Tell web3 that a deployed copy of the campaignFactory exists
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJleHBvcnREZWZhdWx0RGVjbGFyYXRpb24iLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFTOzs7O0FBRVQsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUMxQixLQUFBLEFBQUssTUFBTSwwQkFERSxBQUNiLEFBQTJCLFlBRC9CLEFBQWlCLEFBRWIsQUFHSiwrQ0FWQTtrQkFVQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRjovY291cnNlL2Jsb2NrY2hhaW5fcHJvamVjdC9zdGFydHVwRnVuZCJ9