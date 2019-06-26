/*var arr-addition = (function() {
  return function add(arr) {
    var arr-addition = 0;
    for(var i in arr) {
      arr-addition += arr[i];
    }
    return arr-addition;
  };
} ());*/
function Add(arr) {
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
    alert("arr-addition method found in module.exports");
  } else {
    alert("arr-addition method found in root.arr-addition");
    root.Add = factory();
  }
} (this, function () {
  alert("arr-addition method found in this, function");
  return Add;
}));
