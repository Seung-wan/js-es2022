/// #을 이용하면 private한 프라퍼티와 메소드를 만들 수 있고 class 내부에서만 사용할 수 있습니다.
class Student {
  name;
  age;
  gender;

  #code = 20102;

  #getCode() {
    return this.#code;
  }

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getNameWithStudentCode() {
    return {
      name: this.name,
      code: this.#getCode(),
    };
  }
  getCode() {
    return this.#code;
  }
}

const s1 = new Student('yu', 26, 'male');

// console.log(s1.#code);
console.log(s1.#getCode());

const studentCode = s1.getCode();
console.log(studentCode);

const nameWithStudentCode = s1.getNameWithStudentCode();
console.log(nameWithStudentCode);
