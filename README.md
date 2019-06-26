# angular-and-javascript

This sample Angular7 application uses a very simple javascript library to add numbers of a string like '1,2,3,4,5'.
My custom javascript library will return the value 5(1+2+3+4+5) for this  example.

### How to use js library in Angular application::

1. Create a folder with the name that you want this library to be identified in your application at any desired location inside app folder
    (I have created ```arr-addition``` folder inside ```/src/app```)
2. Add your js library file inside this folder (I have added ```arr-addition.js```)
3. Create a package.json file inside this same folder
4. Add this object in package.json file

```markdown
{
  "name": "arr-addition",
  "version": "1.0.0",
  "main": "arr-addition.js"
}
```
5. Now write import statement in your .ts file as ->
```
import * as libRef from 'path_to_library_folder';
```
6. If your library is not returning a javaScript module, you need to add this code in javaScript file
```
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // expose as amd module
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // expose as commonjs module
    module.exports = factory();
  } else {
    root.addArrValues = factory();
  }
} (this, function () {
  return addArrValues;
}));
```

### Demo:

Check the working example [here](https://harshalitalele.github.io/angular-and-javascript/)

