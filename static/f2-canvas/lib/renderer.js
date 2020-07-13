'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitterMin = require('./EventEmitter.min.js');

var _EventEmitterMin2 = _interopRequireDefault(_EventEmitterMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CAPITALIZED_ATTRS_MAP = {
  fontSize: 'FontSize',
  opacity: 'GlobalAlpha',
  lineDash: 'LineDash',
  textAlign: 'TextAlign'
};

/**
 * wxapp textAlign align 可选值为 left|center|right
 * 标准canvas textAlign align 可选值为 left|center|right|start|end
 */
var TEXT_ALIGN_MAP = {
  'start': 'left',
  'end': 'right'
};

var Renderer = function (_EventEmitter) {
  _inherits(Renderer, _EventEmitter);

  function Renderer(wxCtx) {
    _classCallCheck(this, Renderer);

    var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this));

    var self = _this;
    self.ctx = wxCtx;
    self.style = {}; // just mock
    self._initContext(wxCtx);
    return _this;
  }

  _createClass(Renderer, [{
    key: 'getContext',
    value: function getContext(type) {
      if (type === '2d') {
        return this.ctx;
      }
    }
  }, {
    key: '_initContext',
    value: function _initContext(wxCtx) {
      Object.keys(CAPITALIZED_ATTRS_MAP).map(function (style) {
        Object.defineProperty(wxCtx, style, {
          set: function set(value) {
            if (style == "textAlign") {
              value = TEXT_ALIGN_MAP[value] ? TEXT_ALIGN_MAP[value] : value;
            }
            var name = 'set' + CAPITALIZED_ATTRS_MAP[style];
            wxCtx[name](value);
          }
        });
      });
    }
  }]);

  return Renderer;
}(_EventEmitterMin2.default);

exports.default = Renderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyLmpzIl0sIm5hbWVzIjpbIkNBUElUQUxJWkVEX0FUVFJTX01BUCIsImZvbnRTaXplIiwib3BhY2l0eSIsImxpbmVEYXNoIiwidGV4dEFsaWduIiwiVEVYVF9BTElHTl9NQVAiLCJSZW5kZXJlciIsInd4Q3R4Iiwic2VsZiIsImN0eCIsInN0eWxlIiwiX2luaXRDb250ZXh0IiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsInZhbHVlIiwibmFtZSIsIkV2ZW50RW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QjtBQUM1QkMsWUFBVSxVQURrQjtBQUU1QkMsV0FBUyxhQUZtQjtBQUc1QkMsWUFBVSxVQUhrQjtBQUk1QkMsYUFBVztBQUppQixDQUE5Qjs7QUFPQTs7OztBQUlBLElBQU1DLGlCQUFpQjtBQUNyQixXQUFTLE1BRFk7QUFFckIsU0FBTztBQUZjLENBQXZCOztJQUtxQkMsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFFBQU1DLFlBQU47QUFDQUEsU0FBS0MsR0FBTCxHQUFXRixLQUFYO0FBQ0FDLFNBQUtFLEtBQUwsR0FBYSxFQUFiLENBSmlCLENBSUE7QUFDakJGLFNBQUtHLFlBQUwsQ0FBa0JKLEtBQWxCO0FBTGlCO0FBTWxCOzs7OytCQUVVSyxJLEVBQU07QUFDZixVQUFJQSxTQUFTLElBQWIsRUFBbUI7QUFDakIsZUFBTyxLQUFLSCxHQUFaO0FBQ0Q7QUFDRjs7O2lDQUVZRixLLEVBQU87QUFDbEJNLGFBQU9DLElBQVAsQ0FBWWQscUJBQVosRUFBbUNlLEdBQW5DLENBQXVDLGlCQUFTO0FBQzlDRixlQUFPRyxjQUFQLENBQXNCVCxLQUF0QixFQUE2QkcsS0FBN0IsRUFBb0M7QUFDbENPLGVBQUssb0JBQVM7QUFDWixnQkFBSVAsU0FBUyxXQUFiLEVBQTBCO0FBQ3hCUSxzQkFBUWIsZUFBZWEsS0FBZixJQUF3QmIsZUFBZWEsS0FBZixDQUF4QixHQUFnREEsS0FBeEQ7QUFDRDtBQUNELGdCQUFNQyxPQUFPLFFBQVFuQixzQkFBc0JVLEtBQXRCLENBQXJCO0FBQ0FILGtCQUFNWSxJQUFOLEVBQVlELEtBQVo7QUFDRDtBQVBpQyxTQUFwQztBQVNELE9BVkQ7QUFXRDs7OztFQTNCbUNFLHlCOztrQkFBakJkLFEiLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vRXZlbnRFbWl0dGVyLm1pbi5qcydcblxuY29uc3QgQ0FQSVRBTElaRURfQVRUUlNfTUFQID0ge1xuICBmb250U2l6ZTogJ0ZvbnRTaXplJyxcbiAgb3BhY2l0eTogJ0dsb2JhbEFscGhhJyxcbiAgbGluZURhc2g6ICdMaW5lRGFzaCcsXG4gIHRleHRBbGlnbjogJ1RleHRBbGlnbicsXG59O1xuXG4vKipcbiAqIHd4YXBwIHRleHRBbGlnbiBhbGlnbiDlj6/pgInlgLzkuLogbGVmdHxjZW50ZXJ8cmlnaHRcbiAqIOagh+WHhmNhbnZhcyB0ZXh0QWxpZ24gYWxpZ24g5Y+v6YCJ5YC85Li6IGxlZnR8Y2VudGVyfHJpZ2h0fHN0YXJ0fGVuZFxuICovXG5jb25zdCBURVhUX0FMSUdOX01BUCA9IHtcbiAgJ3N0YXJ0JzogJ2xlZnQnLFxuICAnZW5kJzogJ3JpZ2h0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3Iod3hDdHgpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuY3R4ID0gd3hDdHg7XG4gICAgc2VsZi5zdHlsZSA9IHt9OyAvLyBqdXN0IG1vY2tcbiAgICBzZWxmLl9pbml0Q29udGV4dCh3eEN0eCk7XG4gIH1cblxuICBnZXRDb250ZXh0KHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJzJkJykge1xuICAgICAgcmV0dXJuIHRoaXMuY3R4O1xuICAgIH1cbiAgfVxuXG4gIF9pbml0Q29udGV4dCh3eEN0eCkge1xuICAgIE9iamVjdC5rZXlzKENBUElUQUxJWkVEX0FUVFJTX01BUCkubWFwKHN0eWxlID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3eEN0eCwgc3R5bGUsIHtcbiAgICAgICAgc2V0OiB2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHN0eWxlID09IFwidGV4dEFsaWduXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gVEVYVF9BTElHTl9NQVBbdmFsdWVdID8gVEVYVF9BTElHTl9NQVBbdmFsdWVdIDogdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWUgPSAnc2V0JyArIENBUElUQUxJWkVEX0FUVFJTX01BUFtzdHlsZV07XG4gICAgICAgICAgd3hDdHhbbmFtZV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19