const fruits = 'melon, watermelon, orange, apple';
const regex = /(melon)/dg;

const matches = [...fruits.matchAll(regex)];
console.log(matches[0]);

console.log(fruits[5]);
