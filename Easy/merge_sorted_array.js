/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pointer1 = 0;
  let pointer2 = 0;

  const slicedNums1 = nums1.slice(0, m);

  while (pointer2 < n && pointer1 < m) {
    if (nums1[pointer1] > nums2[pointer2]) {
      slicedNums1.splice(pointer1, 0, nums2[pointer2]);
      pointer2++;
    } else {
      pointer1++;
    }
  }

  if (pointer2 < n) slicedNums1.push(...nums2.slice(pointer2, n));

  return slicedNums1;
};

module.exports = merge;
