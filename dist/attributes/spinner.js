'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var SpinnerDirective = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SpinnerDirective, [{
        key: 'step',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'min',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'max',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'prefix',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'suffix',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'disabled',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'value',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function SpinnerDirective(element) {
        _classCallCheck(this, _SpinnerDirective);

        _defineDecoratedPropertyDescriptor(this, 'step', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'prefix', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'suffix', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

        this.element = element;
    }

    _createDecoratedClass(SpinnerDirective, [{
        key: 'bind',
        value: function bind() {
            $(this.element).puispinner({
                step: this.step,
                min: this.min,
                max: this.max,
                prefix: this.prefix,
                suffix: this.suffix
            });
            this.initialized = true;
        }
    }, {
        key: 'stepChanges',
        value: function stepChanges(newValue, oldValue) {
            console.log('change...');
        }
    }, {
        key: 'valueChanged',
        value: function valueChanged(newValue, oldValue) {
            console.log('change model...');
        }
    }, {
        key: 'detached',
        value: function detached() {
            $(this.element).puispinner('destroy');
            this.initialized = false;
        }
    }], null, _instanceInitializers);

    var _SpinnerDirective = SpinnerDirective;
    SpinnerDirective = (0, _aureliaFramework.inject)(Element)(SpinnerDirective) || SpinnerDirective;
    SpinnerDirective = (0, _aureliaFramework.customAttribute)('p-spinner')(SpinnerDirective) || SpinnerDirective;
    return SpinnerDirective;
})();

exports.SpinnerDirective = SpinnerDirective;
//# sourceMappingURL=spinner.js.map
