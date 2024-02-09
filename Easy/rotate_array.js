/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  const arr1 = nums.splice(nums.length - k);
  nums.unshift(...arr1);

  return nums;
};

module.exports = rotate;
