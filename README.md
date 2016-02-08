# aurelia-primefaces

Aurelia wrapper for [PrimeUI](http://www.primefaces.org/primeui/).

## This project is still under development and not ready to be used in any way


### List of current implementations
#### Attributes
* p-button
* p-inputtext
* p-inputtextarea
* p-password
* p-spinner

#### Elements
* p-panel
* p-inputswitch
* p-fieldset

### Install

1. In your project install the plugin via `jspm` with following command

```
  $ jspm install github:hwaastad/aurelia-primefaces@develop
```

2. Add needed styles an javascripts in index.html

  ```html
  <link rel="stylesheet" href="jspm_packages/bower/primeui@3.0.1/themes/cupertino/theme.css">
  <link rel="stylesheet" href="jspm_packages/bower/fontawesome@4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="jspm_packages/bower/primeui@3.0.1/primeui-min.css">
  <script src="jspm_packages/bower/jquery@2.2.0/dist/jquery.min.js"></script>
  <script src="jspm_packages/bower/jqueryui@1.11.4/jquery-ui.min.js"></script>
  <script src="jspm_packages/bower/primeui@3.0.1/primeui-min.js"></script>
  ...
```

3. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install the plugin
      .plugin('hwaastad/aurelia-primefaces');

    aurelia.start().then(a => a.setRoot());
  }
   ```
4. Demo project not yet available


See online [Demo](https://github.com/hwaastad/aurelia-primefaces-demo.git)
