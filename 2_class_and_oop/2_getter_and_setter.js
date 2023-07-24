/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// getter는 함수가 아니라 프로퍼티다! 그래서 ()를 붙이지 않는다.
console.log(yuJin.nameAndYear);

// setter도 마찬가지로 함수가 아니라 프로퍼티다! 그래서 ()를 붙이지 않는다. 프로퍼티에 값을 할당하듯이 사용한다.
// 근데 immutable programming을 지향하기 때문에 setter를 잘 안쓰긴 함
yuJin.setName = "장원영";
console.log(yuJin);

class IdolModel2 {
  // #name; // private field
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);
