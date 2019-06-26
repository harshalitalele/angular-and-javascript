/*var sum = (function() {
  return function add(arr) {
    var sum = 0;
    for(var i in arr) {
      sum += arr[i];
    }
    return sum;
  };
} ());*/
function sum(arr) {
  var sum = 0;
  for(var i in arr) {
    sum += arr[i];
  }
  return sum;
}
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // expose as amd module
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // expose as commonjs module
    module.exports = factory();
  } else {
    root.sum = factory();
  }
} (this, function () {
  return sum;
}));
