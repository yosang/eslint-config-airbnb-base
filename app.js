console.log('hello world');

function getKey(k) {
  return `a key named ${k}`;
}

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};

console.log(obj);
