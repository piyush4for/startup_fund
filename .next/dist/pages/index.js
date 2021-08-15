"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../etherium/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\course\\blockchain_project\\startupFund\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaign",
    value: function renderCampaign() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, "View Campaign"),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        //all that layout will pass through props.children in component Layout
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "Open Campaign"), _react2.default.createElement(_semanticUiReact.Button, {
          floated: "right",
          content: "Create Campaign",
          icon: "add circle",
          primary: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }), this.renderCampaign()))
      );
    }
  }], [{
    key: "getInitialProps",

    //yo use rendering in next use getInitialProps
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaign().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWduIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztxQ0FRYSxBQUNmO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDbEQ7O2tCQUFPLEFBQ0csQUFDUjt1Q0FBYSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsV0FBQSxFQUZSLEFBRVEsQUFDYjtpQkFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFGSixBQUFjLEFBUWQsT0FSYzs7MkNBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQO0FBQ0k7QUFDRjt3QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUVFO0FBRkY7QUFBQSwyQkFFRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FGRixBQUVFLEFBRUEsa0NBQUEsQUFBQzttQkFBRCxBQUNTLEFBQ1I7bUJBRkQsQUFFUyxBQUNSO2dCQUhELEFBR00sQUFDTDttQkFKRDs7c0JBQUE7d0JBSkYsQUFJRSxBQU9DO0FBUEQ7QUFDQyxpQkFSUCxBQUVFLEFBQ0UsQUFXRyxBQUFLLEFBSWI7Ozs7U0F0Q0Q7Ozs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0IsQUFBaEIsQUFBc0M7O21CQUF4RDtBO2lEQUVDLEVBQUUsVyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNYLEEsQUExQzRCOztrQkEwQzVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovY291cnNlL2Jsb2NrY2hhaW5fcHJvamVjdC9zdGFydHVwRnVuZCJ9