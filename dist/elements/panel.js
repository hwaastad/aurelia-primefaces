'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var PanelComponent = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(PanelComponent, [{
    key: 'header',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'toggleable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'toggleduration',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'toggleorientation',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return undefined;
    },
    enumerable: true
  }, {
    key: 'closable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'closeduration',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'collapsed',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onbeforecollapse',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onaftercollapse',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onbeforeexpand',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onafterexpand',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onbeforeclose',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onafterclose',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function PanelComponent(element) {
    _classCallCheck(this, _PanelComponent);

    _defineDecoratedPropertyDescriptor(this, 'header', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'toggleable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'toggleduration', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'toggleorientation', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'closable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'closeduration', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'collapsed', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onbeforecollapse', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onaftercollapse', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onbeforeexpand', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onafterexpand', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onbeforeclose', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onafterclose', _instanceInitializers);

    this.element = element;
    this.initialized = false;
  }

  _createDecoratedClass(PanelComponent, [{
    key: 'attached',
    value: function attached() {
      var _this = this;

      $(this.element.children[0]).puipanel({
        title: this.header,
        toggleable: this.toggleable,
        toggleDuration: this.toggleduration,
        toggleOrientation: this.toggleorientation,
        collapsed: this.collapsed,
        closable: this.closable,
        closeDuration: this.closeduration,
        beforeCollapse: this.onbeforecollapse ? function (event) {
          _this.onbeforecollapse(event);
        } : null,
        afterCollapse: this.onaftercollapse ? function (event) {
          _this.onaftercollapse(event);
        } : null,
        beforeExpand: this.onbeforeexpand ? function (event) {
          _this.onbeforeexpand(event);
        } : null,
        afterExpand: this.onafterexpand ? function (event) {
          _this.onafterexpand(event);
        } : null,
        beforeClose: this.onbeforeclose ? function (event) {
          _this.onbeforeclose(event);
        } : null,
        afterClose: this.onafterclose ? function (event) {
          _this.onafterclose(event);
        } : null,
        enhanced: true
      });
      this.initialized = true;
    }
  }, {
    key: 'detached',
    value: function detached() {
      $(this.element.children[0]).puipanel('destroy');
      this.initialized = false;
    }
  }], null, _instanceInitializers);

  var _PanelComponent = PanelComponent;
  PanelComponent = (0, _aureliaFramework.inject)(Element)(PanelComponent) || PanelComponent;
  PanelComponent = (0, _aureliaFramework.customElement)('p-panel')(PanelComponent) || PanelComponent;
  return PanelComponent;
})();

exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.js.map
