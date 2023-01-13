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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me,
    followLoading = _useSelector.followLoading,
    unfollowLoading = _useSelector.unfollowLoading;
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (value) {
    return value.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, isFollowing ? "언팔로우" : "팔로우");
};
_s(FollowButton, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanN4Il0sIm5hbWVzIjpbIkZvbGxvd0J1dHRvbiIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidmFsdWUiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUNMO0FBQ3lCO0FBQ2E7QUFFcEUsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVksT0FBaUI7RUFBQTtFQUFBLElBQVhDLElBQUksUUFBSkEsSUFBSTtFQUMxQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsbUJBQStDQywrREFBVyxDQUN4RCxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFDdEI7SUFGT0MsRUFBRSxnQkFBRkEsRUFBRTtJQUFFQyxhQUFhLGdCQUFiQSxhQUFhO0lBQUVDLGVBQWUsZ0JBQWZBLGVBQWU7RUFHMUMsSUFBTUMsV0FBVyxHQUFHSCxFQUFFLGFBQUZBLEVBQUUsdUJBQUZBLEVBQUUsQ0FBRUksVUFBVSxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsS0FBSztJQUFBLE9BQUtBLEtBQUssQ0FBQ0MsRUFBRSxLQUFLYixJQUFJLENBQUNjLElBQUksQ0FBQ0QsRUFBRTtFQUFBLEVBQUM7RUFDN0UsSUFBTUUsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDdEMsSUFBSVAsV0FBVyxFQUFFO01BQ2ZSLFFBQVEsQ0FBQztRQUFFZ0IsSUFBSSxFQUFFQywrREFBZ0I7UUFBRUMsSUFBSSxFQUFFbkIsSUFBSSxDQUFDYyxJQUFJLENBQUNEO01BQUcsQ0FBQyxDQUFDO0lBQzFELENBQUMsTUFBTTtNQUNMWixRQUFRLENBQUM7UUFBRWdCLElBQUksRUFBRUcsNkRBQWM7UUFBRUQsSUFBSSxFQUFFbkIsSUFBSSxDQUFDYyxJQUFJLENBQUNEO01BQUcsQ0FBQyxDQUFDO0lBQ3hEO0VBQ0YsQ0FBQyxFQUFFLENBQUNKLFdBQVcsQ0FBQyxDQUFDO0VBQ2pCLE9BQ0UsTUFBQywyQ0FBTTtJQUFDLE9BQU8sRUFBRUYsYUFBYSxJQUFJQyxlQUFnQjtJQUFDLE9BQU8sRUFBRU8sYUFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZFTixXQUFXLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FDdEI7QUFFYixDQUFDO0FBQUMsR0FsQklWLFlBQVk7RUFBQSxRQUNDRyx1REFBVyxFQUNtQkMsdURBQVc7QUFBQTtBQUFBLEtBRnRESixZQUFZO0FBb0JsQkEsWUFBWSxDQUFDc0IsU0FBUyxHQUFHO0VBQ3ZCckIsSUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUN6QixDQUFDO0FBRWN6QiwyRUFBWSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Y2Q4N2U4YTllY2MxNWRjMTUyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5cbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXG4gICk7XG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodmFsdWUpID0+IHZhbHVlLmlkID09PSBwb3N0LlVzZXIuaWQpO1xuICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChpc0ZvbGxvd2luZykge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBVTkZPTExPV19SRVFVRVNULCBkYXRhOiBwb3N0LlVzZXIuaWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRk9MTE9XX1JFUVVFU1QsIGRhdGE6IHBvc3QuVXNlci5pZCB9KTtcbiAgICB9XG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxuICAgICAge2lzRm9sbG93aW5nID8gXCLslrjtjJTroZzsmrBcIiA6IFwi7YyU66Gc7JqwXCJ9XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9