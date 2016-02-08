'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _apiSelectitem = require('../api/selectitem');

var InputSwitchComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(InputSwitchComponent, [{
        key: 'onLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return 'On';
        },
        enumerable: true
    }, {
        key: 'offLabel',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return 'Off';
        },
        enumerable: true
    }, {
        key: 'checked',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function InputSwitchComponent(element) {
        _classCallCheck(this, _InputSwitchComponent);

        _defineDecoratedPropertyDescriptor(this, 'onLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'offLabel', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

        this.element = element;
    }

    _createDecoratedClass(InputSwitchComponent, [{
        key: 'attached',
        value: function attached() {
            var _this = this;

            setTimeout(function () {
                _this.inputSwitchElement = $(_this.element.children[0]).find('> .ui-helper-hidden-accessible > input');
                _this.inputSwitchElement.puiswitch({
                    checked: _this.checked,
                    enhanced: true,
                    change: function change(event, ui) {
                        _this.stopNgOnChangesPropagation = true;
                        /* this.checkedChange.next(ui.checked);
                         if (this.onChange) {
                             this.onChange.next({ originalEvent: event, checked: ui.checked });
                         }*/
                    }
                });
                _this.initialized = true;
            }, 10);
        }
    }, {
        key: 'detached',
        value: function detached() {
            this.inputSwitchElement.puiswitch('destroy');
            this.initialized = false;
            this.inputSwitchElement = null;
        }
    }], null, _instanceInitializers);

    var _InputSwitchComponent = InputSwitchComponent;
    InputSwitchComponent = (0, _aureliaFramework.inject)(Element)(InputSwitchComponent) || InputSwitchComponent;
    InputSwitchComponent = (0, _aureliaFramework.customElement)('p-inputswitch')(InputSwitchComponent) || InputSwitchComponent;
    return InputSwitchComponent;
})();

exports.InputSwitchComponent = InputSwitchComponent;
//# sourceMappingURL=inputswitch.js.map
