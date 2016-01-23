'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

require('jquery-ui');

require('primeui');

var ButtonDirective = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(ButtonDirective, [{
    key: 'icon',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'iconPos',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'disabled',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ButtonDirective(element) {
    _classCallCheck(this, _ButtonDirective);

    _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'iconPos', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

    this.element = element;
    this.initialized = false;
  }

  _createDecoratedClass(ButtonDirective, [{
    key: 'bind',
    value: function bind() {
      $(this.element).puibutton({
        icon: this.icon,
        iconPos: this.iconPos
      });
      this.initialized = true;
    }
  }, {
    key: 'detached',
    value: function detached() {
      $(this.element).puibutton('destroy');
      this.initialized = false;
    }
  }], null, _instanceInitializers);

  var _ButtonDirective = ButtonDirective;
  ButtonDirective = (0, _aureliaFramework.inject)(Element)(ButtonDirective) || ButtonDirective;
  ButtonDirective = (0, _aureliaFramework.customAttribute)('p-button')(ButtonDirective) || ButtonDirective;
  return ButtonDirective;
})();

exports.ButtonDirective = ButtonDirective;
//# sourceMappingURL=buttion.js.map
