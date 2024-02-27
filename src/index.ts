export {};

// EXAMPLE 1 - Declare a function with an Object return type in TypeScript

// ✅ named function
function getObj(): { name: string; age: number } {
  return { name: 'Bobby Hadz', age: 30 };
}

// ✅ arrow function
const getObj2 = (): { name: string; age: number } => {
  return { name: 'Bobby Hadz', age: 30 };
};

// ---------------------------------------------------

// // EXAMPLE 2 - Class method or interface examples

// // ✅ class method
// class A {
//   getObj(): { name: string; age: number } {
//     return { name: 'Bobby Hadz', age: 30 };
//   }
// }

// // ✅ Using interface
// interface Person {
//   name: string;
//   age: number;
// }
// function getObj3(): Person {
//   return { name: 'Bobby Hadz', age: 30 };
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Declare a function with an Object return type using an index signature

// interface Person {
//   name: string;
//   age: number;
//   [key: string]: any; // 👈️ index signature
// }

// function getObj3(): Person {
//   return {
//     name: 'Bobby Hadz',
//     age: 30,
//     country: 'Chile',
//     city: 'Santiago',
//   };
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Declare a function with an Array return type in TypeScript

// // ✅ Named function returning an array of strings
// function getArr(): string[] {
//   return ['bobby', 'hadz', 'com'];
// }

// // ✅ Arrow function returning an array of numbers
// const getArr2 = (): number[] => {
//   return [1, 2, 3];
// };

// ---------------------------------------------------

// // EXAMPLE 5 - Use a union to type functions returning mixed-type arrays

// function getArr(): (string | number)[] {
//   return ['bobby', 1, 'hadz', 2];
// }

// ---------------------------------------------------

// // EXAMPLE 6 - Function returning an array of objects in TypeScript

// type Person = {
//   name: string;
//   age: number;
// };

// function getArr3(name: string, age: number): Person[] {
//   return [{ name, age }];
// }

// ---------------------------------------------------

// // EXAMPLE 7 - Using an index signature to type a function returning an array of objects

// type Person = {
//   name: string;
//   age: number;
//   [key: string]: any; // 👈️ index signature
// };

// function getArr3(name: string, age: number): Person[] {
//   return [{ name, age, city: 'Santiago' }];
// }

// ---------------------------------------------------

// // EXAMPLE 8 - Declare a function with a Tuple return type in TypeScript

// // ✅ Named function returning a tuple
// function getTuple(): [number, number] {
//   return [5, 10];
// }

// // ✅ Arrow function returning a tuple
// const getTuple2 = (): [string, string] => {
//   return ['bobby', 'hadz'];
// };

// // ✅ Using a type
// type Numbers = [number, number];

// function getTuple4(): Numbers {
//   return [10, 10];
// }

// ---------------------------------------------------

// // EXAMPLE 9 - Declare a function with a Readonly return type in TypeScript

// function getArr(): Readonly<string[]> {
//   return ['bobby', 'hadz', 'com'];
// }

// function getObj(): Readonly<{ name: string }> {
//   return { name: 'Bobby Hadz' };
// }
