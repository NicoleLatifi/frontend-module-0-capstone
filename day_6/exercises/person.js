/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  constructor (name, age, color) {
    this.name = name;
    this.age = age;
    this.hair = color;
  }
  ageOneYear() {
    this.age = this.age + 1;
  }
  grayHair() {
    this.hair = "gray";
  }
}

var nicole = new Person ("Nicole", 30, "brown");

console.log(nicole.name);
console.log(nicole.age);
console.log(nicole.hair);

nicole.ageOneYear();
nicole.grayHair();

console.log(nicole.name);
console.log(nicole.age);
console.log(nicole.hair);
