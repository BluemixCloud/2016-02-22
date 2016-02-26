function factorial(n){
  var total = 1;
  for(var i = 1; i <= n; i++){
    total *= i;
  }
  return total;
}

function volume(a, b, c){
  return a * b * c;
}

function largest(numbers){
  var max = 0;
  numbers.forEach(function(n){
    if(n > max)
      max = n;
  });
  return max;
}

function isPrime(n){
  var upper = Math.ceil(Math.sqrt(n));
  for(var i = 2; i <= upper; i++){
    if(n%i === 0) return false;
  }
  return true;
}

exports.factorial = factorial;
exports.volume = volume;
exports.largest = largest;
exports.isPrime = isPrime;
