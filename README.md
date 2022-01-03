# JavaScript ES2022

## Array.prototype.at()

음수로도 배열의 요소를 가져올 수 있습니다.

```
const arr = [1, 2, 3, 4, 5]

console.log(arr.at(-1)) // 5
// console.log(arr[arr.length - 1]) // 5

console.log(arr.at(1)) // 1
console.log(arr[1]) // 1
```

---

## Object.hasOwn()

Object.hasOwn()은 Object.prototype.hasOwnProperty()의 대안으로 나오게 되었습니다.  
객체안에 상속받지 않은 프라퍼티가 존재하면 true, 아니면 false를 반환합니다.  
Object.create(null)로 객체를 생성하여 프로토타입이 없는 객체여도 Object.hasOwn()은 사용할 수 있습니다.  
객체안에서 hasOwnProperty를 오버라이딩 한 경우에도 Object.hasOwn()은 문제없이 사용할 수 있습니다.

```
const obj = {
  name: 'Yu',
  age: 26,
  hasOwnProperty() {},
  toString() {},
}

console.log(obj.toString) // [Function: toString]
console.log(Object.hasOwn(obj, 'toString')) // true
console.log(obj.hasOwnProperty('toString')) // undefined

```

## Regular Expression indices

정규표현식에 플래그 d를 붙이면 indices라는 값을 확인할 수 있습니다.  
시작 인덱스부터 마지막 인덱스 전까지 출력 해 줍니다.

```
const fruits = 'melon, watermelon, orange, apple'
const regex = /(melon)/dg

const matches = [...fruits.matchAll(regex)]
console.log(matches[0])

/*

[
  'melon',
  'melon',
  index: 0,
  input: 'melon, watermelon, orange, apple',
  groups: undefined,
  indices: [ [ 0, 5 ], [ 0, 5 ], groups: undefined ]
]

*/
```

## top-level await

상위 레벨에서 async 없이도 await을 사용할 수 있습니다.

```
import fetch from 'node-fetch'

const result = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  (res) => res.json()
)
console.log(result) // Promise { <pending> }

console.log('fetch 완료') // fetch 완료
```

```
import fetch from 'node-fetch'

const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  (res) => res.json()
);
console.log(result) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

console.log('fetch 완료') // fetch 완료
```

## private class fields

#을 이용하면 private한 프라퍼티와 메소드를 만들 수 있고 class 내부에서만 사용할 수 있습니다.

```
class Student {
  name
  age
  gender

  #code = 20102

  #getCode() {
    return this.#code
  }

  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  getNameWithStudentCode() {
    return {
      name: this.name,
      code: this.#getCode(),
    }
  }
  getCode() {
    return this.#code
  }
}

const s1 = new Student('yu', 26, 'male')

console.log(s1.#code) // SyntaxError: Private field '#code' must be declared in an enclosing class
console.log(s1.#getCode()) // SyntaxError: Private field '#getCode' must be declared in an enclosing class


const studentCode = s1.getCode()
console.log(studentCode) // 20102

const nameWithStudentCode = s1.getNameWithStudentCode()
console.log(nameWithStudentCode) // { name: 'yu', code: 20102 }
```

## static class fields

static을 이용하면 정적 프라퍼티와 메소드를, #을 이용하면 private하게 만들 수 있습니다.

```
class Circle {
  static #PI = 3.14;

  static #calculateArea(radius) {
    return Circle.#PI * radius * radius;
  }

  static calculateProperties(radius) {
    return {
      radius: radius,
      area: Circle.#calculateArea(radius),
    };
  }
}

console.log(Circle.calculateProperties(5)); // { radius: 5, area: 78.5 }

```
