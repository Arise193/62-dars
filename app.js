"use strict";
// class Person {
//     firstname: string;
//     age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(firstname: string, age: number) {
//         this.firstname = firstname;
//         this.age = age;
//     }
//     greet() {
//         return `Hello,${this.firstname}!`;
//     }
// }
// const person = new Person('Muhammad', 26, 'Uzbek');
// person.setAge(10);
// console.log(person.age); // ❌ Runtime error
// console.log(person.getAge()); // ✅ 10
// person.setAge(-10);
// console.log(person.getAge()); // ✅ 0
// class Person {
//     public firstname: string;
//     protected nationality: string;
//     private age: number;
//     constructor(firstname: string, age: number, nationality: string) {
//         this.firstname = firstname;
//         this.age = age;
//         this.nationality = nationality;
//     }
//     public getAge(): number {
//         return this.age;
//     }
//     public setAge(age: number): void {
//         if (age < 0) {
//             this.age = 0;
//         } else {
//             this.age = age;
//         }
//     }
// }
// const person = new Person('Muhammad', 26, 'Uzbek');
// person.setAge(10);
// console.log(person.age); // ❌ Runtime error
// console.log(person.getAge()); // ✅ 10
// person.setAge(-10);
// console.log(person.getAge()); // ✅ 0
// class Engineer extends Person {
//     public technologies: string[];
//     constructor(firstname: string, age: number, technologies: string[]) {
//         super(firstname, age);
//         this.technologies = technologies;
//     }
//     getName() {
//         return `Hello! I am an engineer and my name is${this.firstname}`;
//     }
// }
const engineer = new Engineer('Muhammad', 26, ['JS', 'Python']);
const scientist = new Scientist('Alex', 45, ['NLP']);
const people = [engineer, scientist];
for (const p of people) {
    console.log(p.getName());
}
//# sourceMappingURL=app.js.map