import {inject, customAttribute,bindable} from 'aurelia-framework';
import 'jquery-ui';
import 'primeui';

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
  @bindable icon: String;
  @bindable iconPos: String;
  @bindable disabled: Boolean;

  initialized: Boolean;

  constructor(element){
    this.element=element;
    this.initialized=false;
  }

  bind(){
    $(this.element).puibutton({
      icon: this.icon,
      iconPos:this.iconPos,
    });
    this.initialized=true;
  }

  detached() {
    $(this.element).puibutton('destroy');
    this.initialized=false;
  }

}
