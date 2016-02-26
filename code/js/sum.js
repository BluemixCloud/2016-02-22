var a = sum([3,5,7,9]);
console.log('the sum of', [3,5,7,9], 'is', a);

function sum(nums){
    console.log("nums:", nums);
    var total = 0;
    for(var i = 0; i < nums.length; i++){
        console.log('i:', i, 'nums[i]:', nums[i]);
        total += nums[i];
    }
    return total;
}
