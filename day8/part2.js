module.exports = function (nums) {
    nums = nums.pop().split(' ');
    var meta = i => {
        let value = 0;
        let kids = [0];
        let child = i + 2;
        for (let j=0;j<nums[i];j++) {
            let data = meta(child);
            child = data[0];
            kids.push(data[1]);
        }
        let k = child;
        let limit = child + parseInt(nums[i+1]);
        while (k < limit) {
            value += child === i + 2 ? parseInt(nums[k]) : (kids[nums[k]] || 0);
            k++;
        }
        return [k, value];
    };
    return meta(0)[1];
};
