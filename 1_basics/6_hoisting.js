/**
 * Hoisting
 */
// console.log("Hello");
// console.log("World");
// console.log("----------");

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = "코드팩토리";
// console.log(name);

// var는 hoisting이 발생한다. 그렇다면 let과 const는 hoisting이 발생하지 않을까?
// let과 const 또한 hoisting이 발생한다. 다만, let과 const는 var과 다르게, ReferenceError: Cannot access 'yuJin' before initialization 에러가 발생한다.

console.log(yuJin);
let yuJin = "안유진";

// console.log(yuJin);
// const yuJin = "안유진";
