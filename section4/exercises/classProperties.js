/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

// class is in PascalCase!
class Dog {

  }

var poddle = new Dog();
console.log(poddle);

var akita = new Dog();
console.log(akita);

// Prompt 2: Snack

class Snack {

}

var oreo = new Snack();
console.log(oreo);

var yogurt = new Snack();
console.log(yogurt);


// Prompt 3: Shirt

class Shirt {

}

var blackShirt= new Shirt();
console.log(blackShirt);

var greenShirt = new Shirt();
console.log(greenShirt)

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class DogInfo {
  constructor() {
    this.name = "Jessica";
    this.type = "poodle";
    this.age = 1 ;
  }
}

var poddle = new DogInfo();
console.log(poddle);

// Prompt 2: Snack

class SnackItem {
  constructor() {
  this.name = "oreo";
  this.taste = "sweet";
  this.color = "black";
}
}
var oreo = new SnackItem();
console.log(oreo);

// Prompt 3: Shirt

class ShirtInfo{
  constructor(){
    this.color = "green";
    this.condition = "new";
    this.size = "medium";
  }
}
var greenShirt = new ShirtInfo();
console.log(greenShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

//Prompt 1: Dog

class DogBasicInfo {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
  }
}

var poddle = new DogBasicInfo("Jessica", "poodle", 1);
console.log(poddle);
var akita = new DogBasicInfo("Jade", "akita", 5);
console.log(akita);

// Prompt 2: Snack
class SnackItemInfo{
  constructor(name,taste,color){
    this.name = name;
    this.taste = taste;
    this.color = color;
  }
}
var oreo = new SnackItemInfo ("oreo", "sweet", "black");
console.log(oreo);
var cheese = new SnackItemInfo ("cheese", "savory", "white")
console.log(cheese)
// Prompt 3: Shirt

class ShirtBasicInfo {
  constructor(color, condition, size){
    this.color = color;
    this.condition = condition;
    this.size = size;
  }
}
var greenShirt = new ShirtBasicInfo( "green", "new", "medium");
console.log(greenShirt);
var blackShirt = new ShirtBasicInfo( "black", "old", "large");
console.log(blackShirt);
