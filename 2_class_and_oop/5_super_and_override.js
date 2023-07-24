/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래 / 춤
  part;

  constructor(name, year, part) {
    // 부모 클래스의 생성자를 호출해야 한다. IdolModel()과 같은 역할을 한다.
    super(name, year);
    this.part = part;
  }

  // method overriding
  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
  }
}

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());

const yuJin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yuJin);
console.log(yuJin.sayHello());
