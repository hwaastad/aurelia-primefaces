import {inject, customAttribute,bindable} from 'aurelia-framework';

@customAttribute('p-button')
@inject(Element)
export class ButtonDirective {
  @bindable icon: string;
  @bindable iconPos: string=undefined;
  @bindable disabled: boolean;

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
