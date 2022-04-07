const numbers = [
  41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24,
];

const mostDuplicates = (arr) => {
  let mostValue;
  let mostCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }

    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

// console.log(mostDuplicates(numbers));

const optimizedDuplicates = (arr) => {
  const map = {};

  // first for loop would go here

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  }
  let mostValue;
  let mostCount = 0;

  // second loop would go here
  for (const value in map) {
    if (map[value] > mostCount) {
      mostCount = map[value];
      mostValue = value;
    }
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

// console.log(optimizedDuplicates(numbers));

module.exports = { mostDuplicates, optimizedDuplicates };
