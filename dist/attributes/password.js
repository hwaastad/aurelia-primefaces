'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var PasswordAttribute = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(PasswordAttribute, [{
        key: 'promptLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'weakLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'goodLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'strongLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return undefined;
        },
        enumerable: true
    }, {
        key: 'inline',
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
    }], null, _instanceInitializers);

    function PasswordAttribute(element) {
        _classCallCheck(this, _PasswordAttribute);

        _defineDecoratedPropertyDescriptor(this, 'promptLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'weakLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'goodLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'strongLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'inline', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

        this.element = element;
    }

    _createDecoratedClass(PasswordAttribute, [{
        key: 'attached',
        value: function attached() {
            $(this.element).puipassword({
                promptLabel: this.promptLabel,
                weakLabel: this.weakLabel,
                goodLabel: this.goodLabel,
                strongLabel: this.strongLabel,
                inline: this.inline
            });
        }
    }, {
        key: 'detached',
        value: function detached() {
            $(this.element).puipassword('destroy');
        }
    }], null, _instanceInitializers);

    var _PasswordAttribute = PasswordAttribute;
    PasswordAttribute = (0, _aureliaFramework.inject)(Element)(PasswordAttribute) || PasswordAttribute;
    PasswordAttribute = (0, _aureliaFramework.customAttribute)('p-password')(PasswordAttribute) || PasswordAttribute;
    return PasswordAttribute;
})();

exports.PasswordAttribute = PasswordAttribute;
//# sourceMappingURL=password.js.map
