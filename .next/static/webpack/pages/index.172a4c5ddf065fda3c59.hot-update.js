webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.jsx":
/*!*************************************!*\
  !*** ./components/FollowButton.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
  _jsxFileName = "D:\\source\\infearn\\node_bird\\front\\components\\FollowButton.jsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FollowButton = function FollowButton(_ref) {
  _s();
  var post = _ref.post;
  var dispatch = useDispatch();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me,
    followLoading = _useSelector.followLoading,
    unfollowLoading = _useSelector.unfollowLoading;
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (value) {
    return value.id === post.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"]
      });
    }
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : "팔로우");
};
_s(FollowButton, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", true, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});
_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);
var _c;
$RefreshReg$(_c, "FollowButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanN4Il0sIm5hbWVzIjpbIkZvbGxvd0J1dHRvbiIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidmFsdWUiLCJpZCIsIm9uQ2xpY2tCdXR0b24iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBQ0w7QUFDWTtBQUNVO0FBRXBELElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZLE9BQWlCO0VBQUE7RUFBQSxJQUFYQyxJQUFJLFFBQUpBLElBQUk7RUFDMUIsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLEVBQUU7RUFDOUIsbUJBQStDQywrREFBVyxDQUN4RCxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFDdEI7SUFGT0MsRUFBRSxnQkFBRkEsRUFBRTtJQUFFQyxhQUFhLGdCQUFiQSxhQUFhO0lBQUVDLGVBQWUsZ0JBQWZBLGVBQWU7RUFHMUMsSUFBTUMsV0FBVyxHQUFHSCxFQUFFLGFBQUZBLEVBQUUsdUJBQUZBLEVBQUUsQ0FBRUksVUFBVSxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsS0FBSztJQUFBLE9BQUtBLEtBQUssQ0FBQ0MsRUFBRSxLQUFLYixJQUFJLENBQUNhLEVBQUU7RUFBQSxFQUFDO0VBQ3hFLElBQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ3RDLElBQUlOLFdBQVcsRUFBRTtNQUNmUixRQUFRLENBQUM7UUFBRWUsSUFBSSxFQUFFQywrREFBZ0JBO01BQUMsQ0FBQyxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLE9BQ0UsTUFBQywyQ0FBTTtJQUFDLE9BQU8sRUFBRVYsYUFBYSxJQUFJQyxlQUFnQjtJQUFDLE9BQU8sRUFBRU0sYUFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZFTCxXQUFXLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FDdEI7QUFFYixDQUFDO0FBQUMsR0FoQklWLFlBQVk7RUFBQSxRQUUrQkksdURBQVc7QUFBQTtBQUFBLEtBRnRESixZQUFZO0FBa0JsQkEsWUFBWSxDQUFDbUIsU0FBUyxHQUFHO0VBQ3ZCbEIsSUFBSSxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUN6QixDQUFDO0FBRWN0QiwyRUFBWSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzJhNGM1ZGRmMDY1ZmRhM2M1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxuICApO1xuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHZhbHVlKSA9PiB2YWx1ZS5pZCA9PT0gcG9zdC5pZCk7XG4gIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFVORk9MTE9XX1JFUVVFU1QgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XG4gICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=