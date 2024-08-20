class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Tạo đối tượng
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Kế thừa
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log("I am studying.");
  }
}

const student1 = new Student("Bob", 20, "A");
student1.greet(); // Kế thừa từ lớp Person
student1.study();

// Đa hình
class Animal {
  speak() {
    console.log("I can speak.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
