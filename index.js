const Benchmark = require("benchmark");
const { bubbleSort } = require("./sort");

const numbers = [];
for (let i = 0; i < 40000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite();

suite
  .add("bubble sort", function () {
    const testArray = [...numbers];

    bubbleSort(testArray);
  })
  .add("quick sort", function () {
    const testArray = [...numbers];

    quickSort(testArray);
  })
  .on("complete", function () {
    this.forEach((result) =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();
