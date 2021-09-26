/*!
 * React-Lazily-Component - 为React设计的组件懒加载方法，支持jsx和tsx。
 * git+https://github.com/hai2007/react-lazily-component.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.0
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sun Sep 26 2021 16:53:09 GMT+0800 (中国标准时间)
 */
import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var index = (function (lazyFunction) {
  // 然后一个组件，这里组件就是辅助显示懒加载组件的
  return /*#__PURE__*/function (_React$Component) {
    _inherits(MyComponent, _React$Component);

    var _super = _createSuper(MyComponent);

    function MyComponent() {
      var _this;

      _classCallCheck(this, MyComponent);

      _this = _super.call(this);
      _this.state = {
        YourComponent: null
      };
      return _this;
    }
    /**
     * 组件装载完毕以后，调用这个钩子，
     * 然后这个钩子就执行懒加载函数，返回一个promise，
     * 在真正的组件返回以后，再挂载即可。
     */


    _createClass(MyComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        /**
         * lazyFunction其实就是
         *      ()=>import('./xxx.jsx')
         * 这样的一个promise，
         * 通过then获取真正的组件
         */
        lazyFunction().then(function (module) {
          // 获取以后，设置
          _this2.setState({
            YourComponent: module["default"]
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var YourComponent = this.state.YourComponent;

        if (YourComponent) {
          /*
           判断组件是否存在，如果存在，渲染
           此外，为什么会有下面这条语句：
          {...this.props}
           如果用懒加载组件的地方写了属性，这里如果没有这句，会获取不到
          */
          return /*#__PURE__*/React.createElement(YourComponent, this.props);
        } else {
          return null;
        }
      }
    }]);

    return MyComponent;
  }(React.Component);
});

export default index;
