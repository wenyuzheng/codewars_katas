/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let p = 0;
//   if (nums.length === 1) return true;

//   //   nums = removeTrailingZeros(nums);

//   while (p < nums.length) {
//     if (p === nums.length - 1) return true;
//     if (nums[p] === 0) return false;
//     p += nums[p];
//   }
//   return true;
// };

// var canJump = function (nums) {
//   if (nums.length === 1) return true;

//   //   nums = removeTrailingZeros(nums);
//   let p = 0;
//   let step = 0;
//   while (p < nums.length) {
//     if (p === nums.length - 1) return true;
//     if (nums[p] === 0) return false;
//     step = nums[p + 1] - nums[p];
//     if (step > 0) {
//       p += step;
//     } else {
//       p += nums[p];
//     }
//     console.log({ p, step });
//   }
//   //   for (let i = 0; i < nums.length; ) {
//   //     if ()
//   //     const step = nums[i + 1] - nums[i];
//   //     if (step > 0) {
//   //       i += step;
//   //     } else {
//   //       i += nums[i];
//   //     }
//   //   }
//   return true;
// };

// const removeTrailingZeros = (nums) => {
//   while (nums[nums.length - 1] === 0 && nums[nums.length - 2] === 0) {
//     nums = nums.slice(0, -2);
//   }
//   return nums;
// };

const canJump = (nums, i = 0, index = nums.length - 1) => {
  if (index <= 0) return nums[0] >= i;
  return canJump(nums, nums[index] >= i ? 1 : i + 1, index - 1);
};

module.exports = { canJump };
