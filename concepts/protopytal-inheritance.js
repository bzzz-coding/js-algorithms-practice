// Prototypal Inheritance
let animal = {
  kingdom: 'Animal'
};

let dog = Object.create(animal); // animal is the prototype of dog
dog.sound = 'bark';

let topper = Object.create(dog) // dog is the prototype of topper


console.log(dog.kingdom); // Animal
console.log(topper.kingdom); // Animal
console.log(topper.sound); // bark
console.log(animal); // { kingdom: 'Animal' }
console.log(dog); // { sound: 'bark' }
console.log(topper); // {}

topper.sound = 'woof!'

console.log(topper.sound); // woof!
console.log(topper); // { sound: 'woof!' }
console.log(dog); // { sound: 'bark' }


// Classical Inheritance

class Animal {
  constructor() {
    this.kingdom = 'Animal';
  }
}

class Dog extends Animal {
  constructor() {
    super();
    this.sound = 'bark';
  }
}

let grant = new Dog();
console.log(grant.kingdom); // Animal
console.log(grant.sound); // bark



let circle = {
  radius: 5
};
// We can calculate the area and the circumference of the circle from its radius:
circle.area = function () {
  var radius = this.radius;
  return Math.PI * radius * radius;
};

circle.circumference = function () {
  return 2 * Math.PI * this.radius;
};
// Now I want to create another circle of radius 10. One way to do this would be:
let circle2 = {
  radius: 10,
  area: circle.area,
  circumference: circle.circumference
};

console.log(circle2);
console.log(circle2.area());
console.log(circle2.circumference());

// However JavaScript provides a better way - delegation. The Object.create function is used to do this:
let circle3 = Object.create(circle);
circle3.radius = 20;
console.log(circle3);
console.log(circle3.area());
console.log(circle3.circumference());


// In fact you can combine all of this into a single object literal as follows:
let circle4 = {
  radius: 5,
  create: function (radius) {
      let circle = Object.create(this);
      circle.radius = radius;
      return circle;
  },
  area: function () {
      let radius = this.radius;
      return Math.PI * radius * radius;
  },
  circumference: function () {
      return 2 * Math.PI * this.radius;
  }
};

let circle5 = circle4.create(2);

console.log(circle5);
console.log(circle5.area());
console.log(circle5.circumference());