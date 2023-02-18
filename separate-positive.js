// add whatever parameters you deem necessary

// accepts an array of non-zero integers.

// Separate the positive integers to the left and the negative integers to the right.
//  The positive numbers and negative numbers need not be in sorted order.
//  The problem should be done in place (in other words, do not build a copy of the input array).

function separatePositive(nums) {
    // loop through. figure out if numbers are positive or negative
    // if positive, move to the left, if negative move to the right

    // make sure all positives on the left, all negatives on the right

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] < 0 && nums[end] > 0) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;

            start++;
            end--;
        } else {
            if (nums[start] > 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return nums;
}
