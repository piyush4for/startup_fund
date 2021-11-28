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

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x3d00cC40b2e3c0D345b3AEC4D5FD11D3bc11DfAA'); //Tell web3 that a deployed copy of the campaignFactory exists
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJleHBvcnREZWZhdWx0RGVjbGFyYXRpb24iLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFTOzs7O0FBRVQsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUMxQixLQUFBLEFBQUssTUFBTSwwQkFERSxBQUNiLEFBQTJCLFlBRC9CLEFBQWlCLEFBRWIsQUFHSiwrQ0FWQTtrQkFVQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRjovY291cnNlL2Jsb2NrY2hhaW5fcHJvamVjdC91cGdyYWRlZF9zdGFydHVwX2Z1bmQvc3RhcnR1cF9mdW5kIn0=