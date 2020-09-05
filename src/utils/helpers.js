export function getRandom() {
  var num = Math.floor(Math.random()*10) + 1;
  num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
  return num;
}