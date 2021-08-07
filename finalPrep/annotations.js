// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//create a function named buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
//create a variable named greeting to be a string that uses interpolation to include name
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//create a variable named demographics to be an array that contains parameter name and age
  var demographics = [name, age];
//create a variable named powerSaying to be a string and concatenate parameter specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// create a object named builtBear with 6 key-values pair
  var builtBear = {
    // the key is basicInfo and value is demographics
    basicInfo: demographics,
    // the key is clothes and value is clothes
    clothes: clothes,
    // the key is exterior and value is fur
    exterior: fur,
    // the key is cost and value is 49.99
    cost: 49.99,
    // the key is sayings and value is an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // the key is isCuddly and value is ture
    isCuddly: true,
  };
// return object builtBear
  return builtBear
}
// first call of function buildABear with 5 parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// another call of function buildABear with 5 new parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//create function fizzBuzz with three parameters
function fizzBuzz(num1, num2, range) {
//create a for loop, create a variable i, when i becomes larger than range, loop stops.
  for (var i = 0; i <= range; i++) {
    //create conditional if statement,  using logical operator "and" to make sure i modulo num 1 and num2 must be equal exactly zero
    if (i % num1 === 0 && i % num2 === 0) {
      // if above condition is true, print "fizzbuzz"
      console.log('fizzbuzz');
     // create conditional statement if i modulo num1 is exactly equal to zero
    } else if (i % num1 === 0) {
      // if above conditional is true, print "fizz"
      console.log('fizz');
      // create conditional statement if i modulo num2 is exactly equal to zero
    } else if (i % num2 === 0) {
      // if above conditional is true, print "buzz"
      console.log('buzz');
      // every thing else not included in the above 3 scenarios
    } else {
      // if above conditional is true, print i
      console.log(i);
    }
  }
}
// first call of function fizzBuzz with 3 parameter
fizzBuzz(3, 5, 100);
// another call of function fizzBuzz with 3 new parameters
fizzbuzz(5, 8, 400);
