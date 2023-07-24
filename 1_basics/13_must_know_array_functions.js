/**
 * Array Methods
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
console.log(iveMembers.push("코드팩토리")); // push() 함수는 배열의 길이를 반환한다.. 배열은 변경된다.
console.log(iveMembers);

console.log("----------------");
// pop()
console.log(iveMembers.pop()); // pop() 함수는 배열의 마지막 요소를 반환한다. 배열은 변경된다.
console.log(iveMembers);

console.log("----------------");
// shift()
console.log(iveMembers.shift()); // shift() 함수는 배열의 첫번째 요소를 반환한다. 배열은 변경된다.
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift("안유진")); // unshift() 함수는 배열의 길이를 반환한다. 배열은 변경된다.
console.log(iveMembers);

console.log("----------------");

// splice()
console.log(iveMembers.splice(0, 3)); // splice() 함수는 삭제된 요소를 반환한다. 배열은 변경된다. 얘는 시작 인덱스에서 몇 개 만큼 잘라올지
console.log(iveMembers);

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat("코드팩토리")); // concat() 함수는 새로운 배열을 반환한다. 배열은 변경되지 않는다.
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3)); // slice() 함수는 새로운 배열을 반환한다. 배열은 변경되지 않는다. 얘는 시작 인덱스에서 끝 인덱스 전까지 잘라온다
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log("--------------");
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});

// numbers.sort((a, b) => a - b); // 오름차순
// numbers.sort((a, b) => b - a); // 내림차순

console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
console.log("--------------");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

numbers = [1, 8, 7, 6, 3];

// filter() : 조건에 맞는 요소들만 반환
console.log(numbers.filter((x) => x % 2 === 0));

// find() : 조건에 맞는 요소를 하나만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() : 조건에 맞는 요소의 인덱스를 하나만 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() : 배열의 모든 요소를 하나의 값으로 축약해서 반환
// (prev, next) 이전 값과 다음 값을 받아서 처리, 초기값을 설정할 수 있다. 여기서는 0
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
