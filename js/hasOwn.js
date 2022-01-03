// Object.hasOwn()은 Object.prototype.hasOwnProperty()의 대안으로 나오게 되었습니다.
// 객체안에 상속받지 않은 프라퍼티가 존재하면 true, 아니면 false를 반환합니다.
// Object.create(null)로 객체를 생성하여 프로토타입이 없는 객체여도 Object.hasOwn()은 사용할 수 있습니다.
// 객체안에서 hasOwnProperty를 오버라이딩 한 경우에도 Object.hasOwn()은 문제없이 사용할 수 있습니다.

const obj = {
  name: 'Yu',
  age: 26,
  hasOwnProperty() {},
  toString() {},
};

console.log(obj.toString);
console.log(Object.hasOwn(obj, 'toString')); // false
console.log(obj.hasOwnProperty('toString'));
