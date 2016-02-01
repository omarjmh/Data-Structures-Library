var a = [0,12,13,0,1,3,0,0,-1];
var b = [0,1,0];
var c = [100,0,4,200,0,1,0,3,2];

var l = console.log;

var moveZeroes = function(nums) {
    var zeros = nums.filter(function(a) {return a === 0;});
    var other = nums.filter(function(a) {return a !== 0;});
    var t =  other.concat(zeros);
    return t;
};

var moveZeroesInPlace = function(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    var first = nums[i];
    var next = nums[i + 1];
    if (first === 0 && first !== next) {
      nums[i] = next;
      nums[i + 1] = first;
      moveZeroesInPlace(nums);
    }
  }
  return nums;
}
l(moveZeroesInPlace(a));
l(moveZeroesInPlace(b));
l(moveZeroesInPlace(c));
