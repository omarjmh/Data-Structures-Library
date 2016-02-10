var a = [0,12,13,0,1,3,0,0,-1];
var b = [0,1,0];
var c = [100,0,4,200,0,1,0,3,2];

var l = console.log;

var bubbleSort = function(array) {
  array.forEach(function(a, i) {
    var first = a;
    var second = array[i + 1];
    if (second && first > second) {
      array[i] = second;
      array[i + 1] = first;
      l(array)
      bubbleSort(array);
    }
  })
};


/*
  for (var i = 0; i < array.length; i++) {
    var first = array[i];
    var second = array[i + 1];
    if (first > second) {
      array[i] = second;
      array[i + 1] = first;
      bubbleSort(array);
    } 
  }
 */
var arr = [5,2,3,4,1];
l(bubbleSort(arr))
l(arr)
