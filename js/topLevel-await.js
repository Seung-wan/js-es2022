// top-level에서 await을 사용할 수 있습니다.
import fetch from 'node-fetch';

const result = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  (res) => res.json()
);
console.log(result);

console.log('fetch 완료');
