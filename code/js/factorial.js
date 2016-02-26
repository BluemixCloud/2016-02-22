var a = factorial(5);
console.log('the factorial of 5 is', a); // 120

// write the code to compute factorial
// ...

function factorial(n){
    if(n === 0) return 1;
    
    var total = 1;
    for(var i = 1; i <= n; i++){
        total *= i;
    }
    
    return total;
}

module.exports = factorial;
