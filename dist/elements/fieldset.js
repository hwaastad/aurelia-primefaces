'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var FieldSetConmponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(FieldSetConmponent, [{
        key: 'legend',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'toggleable',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'toggleDuration',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'collapsed',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'onBeforeToggle',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'onAfterToggle',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function FieldSetConmponent(element) {
        _classCallCheck(this, _FieldSetConmponent);

        _defineDecoratedPropertyDescriptor(this, 'legend', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'toggleable', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'toggleDuration', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'collapsed', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'onBeforeToggle', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'onAfterToggle', _instanceInitializers);

        this.element = element;
        this.initialized = false;
    }

    _createDecoratedClass(FieldSetConmponent, [{
        key: 'attached',
        value: function attached() {
            var _this = this;

            $(this.element.children[0]).puifieldset({
                toggleable: this.toggleable,
                toggleDuration: this.toggleDuration,
                collapsed: this.collapsed,
                beforeToggle: this.onBeforeToggle ? function (event, collapsed) {
                    _this.onBeforeToggle({ 'originalEvent': event, 'collapsed': collapsed });
                } : null,
                afterToggle: this.onAfterToggle ? function (event, collapsed) {
                    _this.onAfterToggle({ 'originalEvent': event, 'collapsed': collapsed });
                } : null,
                enhanced: true
            });
            this.initialized = true;
        }
    }, {
        key: 'propertyChanged',
        value: function propertyChanged(property, newValue, oldValue) {
            if (this.initialized) {
                $(this.element).puifieldset('option', property, newValue);
            }
        }
    }, {
        key: 'detached',
        value: function detached() {
            $(this.element.children[0]).puifieldset('destroy');
            this.initialized = false;
        }
    }], null, _instanceInitializers);

    var _FieldSetConmponent = FieldSetConmponent;
    FieldSetConmponent = (0, _aureliaFramework.inject)(Element)(FieldSetConmponent) || FieldSetConmponent;
    FieldSetConmponent = (0, _aureliaFramework.customElement)('p-fieldset')(FieldSetConmponent) || FieldSetConmponent;
    return FieldSetConmponent;
})();

exports.FieldSetConmponent = FieldSetConmponent;
//# sourceMappingURL=fieldset.js.map
