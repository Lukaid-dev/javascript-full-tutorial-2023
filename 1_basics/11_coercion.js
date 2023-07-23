/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + "";
console.log(typeof test, test);

console.log("98" + "2");
console.log(98 * 2);
console.log("98" - 2);

console.log("------------");
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0.99"), parseInt("0.99")); // 정수로 변환시에는 소수점 이하를 버린다.
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1"); // 단항 연산자를 사용한 숫자 타입 변환, 얘도 명시적 변환임

console.log("-------------------_");
/**
 * Boolean 타입으로의 변환
 */
console.log(!!"asdkfjhalksdfjasdfx");

console.log(!!"");

console.log(!!0);
console.log(!!"0");
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * Falsy한 값
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 4) false
 *
 * Truthy한 값
 * 1) 빈 객체
 * 2) 빈 배열
 * 3) 빈 함수
 * 4) 빈 문자열
 * 5) 0이 아닌 숫자
 * 6) true
 *
 * 모두 false를 반환한다.
 */
