"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require("../routes");

var _campaign = require("../etherium/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\course\\blockchain_project\\upgraded_startupfund\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex(props) {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call(this, props));

    _this.state = {
      items: null,
      summary: null
    };
    return _this;
  }

  //yo use rendering in next use getInitialProps


  (0, _createClass3.default)(CampaignIndex, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var c, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                c = (0, _campaign2.default)(this.props.campaigns[0]);
                _context.next = 3;
                return _promise2.default.all(this.props.campaigns.map(function (campaign, i) {
                  return (0, _campaign2.default)(_this2.props.campaigns[i]).methods.getSummary().call();
                }));

              case 3:
                summary = _context.sent;

                this.setState({ summary: summary });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderCampaign",
    value: function renderCampaign() {
      var _this3 = this;

      // used items, card blah blah for semantic-ui-react desgin of Card group item
      var Summary = void 0;
      var items = this.props.campaigns.map(function (address, i) {
        if (_this3.state.summary) Summary = _this3.state.summary[i];else Summary = { "5": "null", "7": "null" };
        return {
          key: i,
          image: _react2.default.createElement("img", { src: Summary[7], style: { width: 150 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          header: Summary[5],
          meta: address,
          description: _react2.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, "View Campaign"))),
          //fluid is some design shit
          fluid: true,
          style: { overflowWrap: 'break-word' }
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
            lineNumber: 58
          }
        }, _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Open Campaign"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          floated: "right",
          content: "Create Campaign",
          icon: "add circle",
          primary: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }))), this.renderCampaign()))
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedCampaign().call();

              case 2:
                campaigns = _context2.sent;
                return _context2.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsInN1bW1hcnkiLCJjIiwiY2FtcGFpZ25zIiwiYWxsIiwibWFwIiwiY2FtcGFpZ24iLCJpIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic2V0U3RhdGUiLCJTdW1tYXJ5IiwiYWRkcmVzcyIsImtleSIsImltYWdlIiwid2lkdGgiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FtcGFpZ24iLCJnZXREZXBsb3llZENhbXBhaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjt5Q0FDSjs7eUJBQUEsQUFBWSxPQUFNO3dDQUFBOztvSkFBQSxBQUNWLEFBQ047O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtlQUpjLEFBRWhCLEFBQWEsQUFFRjtBQUZFLEFBQ1g7V0FHSDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7bUJBUVE7QSxvQkFBSSx3QkFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFUsQUFBcEIsQUFBUyxBQUFxQjs7eUNBQ2xCLEFBQVEsU0FBSSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFVBQUQsQUFBVyxHQUFYO3lCQUFpQix3QkFBUyxPQUFBLEFBQUssTUFBTCxBQUFXLFVBQXBCLEFBQVMsQUFBcUIsSUFBOUIsQUFBa0MsUUFBbEMsQUFBMEMsYUFBM0QsQUFBaUIsQUFBdUQ7QSxBQUE3RyxBQUFZLGlCQUFBLENBQVo7O21CQUFoQjtBLG1DQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FHQzttQkFDZjs7QUFDQTtVQUFJLGVBQUosQUFDQTtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsR0FBTSxBQUNyRDtZQUFJLE9BQUEsQUFBSyxNQUFULEFBQWUsU0FBUyxVQUFVLE9BQUEsQUFBSyxNQUFMLEFBQVcsUUFBN0MsQUFBd0IsQUFBVSxBQUFtQixRQUNoRCxVQUFVLEVBQUMsS0FBRCxBQUFNLFFBQVEsS0FBeEIsQUFBVSxBQUFtQixBQUNsQzs7ZUFBTyxBQUNELEFBQ0o7d0RBQVksS0FBSyxRQUFWLEFBQVUsQUFBUSxJQUFJLE9BQVEsRUFBQyxPQUEvQixBQUE4QixBQUFPO3dCQUFyQzswQkFGRixBQUVFLEFBQ1A7QUFETztXQUFBO2tCQUNDLFFBSEgsQUFHRyxBQUFRLEFBQ2hCO2dCQUpLLEFBSUMsQUFDTjt1Q0FBYSxjQUFBOzt3QkFBQTswQkFBQSxBQUNYO0FBRFc7QUFBQSxXQUFBLGtCQUNYLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0U7QUFERjs2QkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFQQyxBQUtRLEFBQ1gsQUFDRSxBQUdKO0FBQ0E7aUJBWEssQUFXRSxBQUNQO2lCQUFPLEVBQUMsY0FaVixBQUFPLEFBWUUsQUFBZSxBQUV6QjtBQWRRLEFBQ0w7QUFKSixBQUFjLEFBbUJkLE9BbkJjOzsyQ0FtQlAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQO0FBQ0U7QUFDQTt3QkFBQSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLEFBQUM7bUJBQUQsQUFDVSxBQUNSO21CQUZGLEFBRVUsQUFDUjtnQkFIRixBQUdPLEFBQ0w7bUJBSkY7O3NCQUFBO3dCQUpOLEFBRUUsQUFDRSxBQUNFLEFBU0g7QUFURztBQUNFLG1CQVJaLEFBRUUsQUFDRSxBQWFHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7Ozt1QkF6RHlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQixBQUFoQixBQUFzQzs7bUJBQXhEO0E7a0RBRUMsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRFgsQSxBQXZFNEI7O2tCQXVFNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJGOi9jb3Vyc2UvYmxvY2tjaGFpbl9wcm9qZWN0L3VwZ3JhZGVkX3N0YXJ0dXBmdW5kIn0=