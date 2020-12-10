// TODO: write your code here
import sum from './basic/basic';

console.log('worked');

console.log(sum([1, 2]));

function test() {
  const result = sum([1, 2]);

  if (result !== 3) console.error('ОШИБКА, Тест не прошел');
}

window.test = test;
