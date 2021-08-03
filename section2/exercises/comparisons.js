/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numberTeachers equal stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers equal stringTeachers?", numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("Is numberStudents greater than or equal to 20", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("Is numberStudents greater than or equal to 21", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("Is numberStudents less than or equal to 20", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("Is numberStudents less than or equal to 21", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
/*  The code first compare what's inside the parentheses. Since 4 is less than 9 and I used a comparison operator, then
it would return the boolean value to be true.  Console.log would print out the expression as true.
*/


var books = 3;
console.log(4 < books);
// YOU DO: Explain.

// The code was first written as console.logs, if console.logs then nothing would print out and get an error message.

/*  The code first creates a variable named books and has the value of 3.
The code then evaluates what is inside the parentheses. Since variable value of books is equal to 3,
so the expression would evaluate if 4 is less than 3. The boolean value would be false, since 4
is greater than 3. Console.log would print out the expression as false.
*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.

/* The code creates two variable named friends and siblings. They have the value of 6 and 2, respectively.  The code
compares what's inside the parentheses. Since variable value of friends is equal to 6 and variable value of
siblings is equal to 2, so the expression would evaluate if 6 is greater than 2. The boolean value would be true,
since 6 is greater than 2. Console.log would print out the expression as true.
*/


var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.

/*  The code creates two variable named attendees and meals. They have the value of 9 and 8, respectively. The code then compares
what's inside the parentheses. Since variable value of attendees is equal to 9 and variable value of meals is equal to 8, the
expression would evaluate if 9 is not equal to 8. The boolean value would be true, since 9 is not 8.
Console.log would print out the expression as true.
*/


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park

console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy

console.log(lovesToPlay && age);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/* The answer would be false. Since lovesToPlay has the boolean value of true and age
has the value of number 1. Since true is not equal to 1. Console.log would print false.
*/
//The answer that print out was 1, please see below for further explaining.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

/*Yes, I did. However, the last question printed outsomething I didn't expect. Now I understand since
the value of A cannot be coerced into false, it returns 2nd variable value which is the age value number 1.
*/
