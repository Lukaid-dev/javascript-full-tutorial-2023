/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  // new를 사용하지 않고 생성자 함수를 호출하면 this는 global 객체를 가리킨다.
  // 이를 방지하기 위해 new.target을 사용하여 new를 사용하지 않고 생성자 함수를 호출하면
  // 생성자 함수를 호출하여 객체를 생성한다.
  if (!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2);
// console.log(global.name);

// Arrow function으로는 생성자 함수를 만들 수 없다.
const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const yuJin3 = new IdolModelArrow("안유진", 2003);
