// problem: Print prime numbers from 1 to 50

// 5
// 4 % 2 = 0 so not a prime
// 13
// x = 5
// x %

const isPrime = (number) => {
  if(number <= 1){
    return false;
  }

  for(let i = 2; i < number; i++){
    if(number % i === 0){
      //console.log(`${number} is not a prime number because it is divisible by ${i}`);
      return false;
    } else {
     // console.log(`${number} not divisible by ${i}`);
    }
  }

  return true;
}

var primeSum = 0;
var x = 100;

do {
  for(i=0; i <= x; i++){
    if(isPrime(i)){
      primeSum += i
      console.log(`${i} is a prime number`);
    }
  }
  x+=1;
} while(
  !isPrime(primeSum)
)

console.log(`Sum of prime number from 1 to - ${x} is ${primeSum} and it is ${isPrime(primeSum) ? 'prime' : 'not prime'}`);
//console.log(`Sum of all prime number is ${primeSum} and it is ${isPrime(primeSum) ? 'prime' : 'not prime'}`);



// problem
// find a number(X) that is greator then 100
// and sum of all prime number from 1 to X is also a prime number
// print the sum of all prime number from 1 to X and X

const isEven = (n) => n % 2 === 0;


