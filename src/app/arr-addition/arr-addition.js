function addArrValues(arr) {
  var sum = 0;
  for(var i in arr) {
    sum += parseFloat(arr[i]);
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
    root.addArrValues = factory();
  }
} (this, function () {
  return addArrValues;
}));
