class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	greet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle;
	}

	jobGreet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Create an instance of Person and call greet
const person = new Person("Alice", 25);
person.greet();  // This will log: Hello, my name is Alice, I am 25 years old.

// Create an instance of Employee and call jobGreet
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // This will log: Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Log the Employee class
console.log(Employee);