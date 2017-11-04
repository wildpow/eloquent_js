/* numbers divisible by 3 = Fizz
  numbers divisible by 5 = Buzz
  numbers divisible by 3 and 5 = FizzBuzz
  All other numbers = just the number
  loop from 1 to 100
  */

  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
