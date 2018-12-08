module.exports = function (nums) {
    nums = nums.pop().split(' ');
    var total = 0;
    var meta = i => {
        let child = i + 2;
        for (let j=0;j<nums[i];j++) {
            child = meta(child);
        }
        let k = child;
        let limit = child + parseInt(nums[i+1]);
        while (k < limit) {
            total += parseInt(nums[k]);
            k++;
        }
        return k;
    };
    meta(0);
    return total;
};
