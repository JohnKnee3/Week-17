count = 5;

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const increment = counter();
console.log(increment()); //=> 0
console.log(increment());
console.log(increment());
