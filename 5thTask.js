const list = [31, 10, 'chicken', 9, 'fish', 10];
const strs = list.filter(listStr => typeof(listStr) === 'string');
const tens = list.filter(listTens => listTens === 10);
console.log(strs);
console.log(tens);