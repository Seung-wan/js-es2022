// static을 이용하면 정적 프라퍼티와 메소드를, #을 이용하면 private하게 만들 수 있습니다.
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

console.log(Circle.calculateProperties(5));
