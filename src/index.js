export function configure(config){
  config.aurelia.use.globalResources('./api/message');
  config.aurelia.use.globalResources('./api/selectitem');
  config.aurelia.use.globalResources('./attributes/button');
  config.aurelia.use.globalResources('./attributes/inputtext');
  config.aurelia.use.globalResources('./attributes/inputtextarea');
  config.aurelia.use.globalResources('./attributes/password');
  config.aurelia.use.globalResources('./attributes/spinner');
  config.aurelia.use.globalResources('./elements/panel');
  config.aurelia.use.globalResources('./elements/fieldset');
  config.aurelia.use.globalResources('./elements/inputswitch');
}
