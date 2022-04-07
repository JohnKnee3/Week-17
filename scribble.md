# 17.1.1

Interesting Video trying to explain Async functions.

# 17.1.2

Learned about how a stack is last in first out and how pop and push satisfy that.
Also learned how a queue is first in first out and how push and shift satisfy that.
Also met three new terms beyond "push" which I already knew added to the end of an array.
"Pop" removes from the end of an array.
"Unshift" adds to the start of an array.
"Shift" removes from the end of the array.

# 17.1.3

Followed step by step how function calls work. How they get added to the top of the stack, then get resolved and popped off to resolve what is below it.

# 17.1.4

Learned about async functions using settimeout as my async model. The biggest thing I learned is that the event loop will not allow any aync functions in until all sync lines have finished. Even if the async function was set to a zero second timeout it still had to wait for every other synch lin of code to fire off first.

# 17.2.2

Introduced to the idea of returning functions. In this example we did this

function counter() {
let count = 0;
return function() {
return count++;
}
}

const increment = counter();
increment(); //=> 0

Which makes is so when we call the variable increment as a function it goes in and grabs the next highest number. These are called closures which are triggered by the return statment in front of the unamed function.

# 17.2.3

We mat factory function as opposed to OOP.

const tiger = function() {
const noise = 'roar';
return {
sound: function() {
console.log(noise);
},
}
}

const tigger = tiger();
tigger.sound(); //=> "roar"

This is an example of a factory function. For the most part they look like plain old javascript. One of the big takeaways is that it eleminates the use of the word .this which can cause problems. We also made this factory fuanction.

const chiller = (state) => ({
chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`)
})

const caller = (state) => ({
call: () => console.log(`I am calling ${state.number}`)
})

const browserInternet = (state) => ({
browse: () => state.url
})

caller({number: '411'}).call() //=> I am calling 411

This was fairly dense but lets you touch the boject within the function and pass in the information needed to display the related console log.

const chillinator = (temp) => {
let state = {
temp,
number: 311,
url: 'google.com'
}
return { ...chiller(state), ...caller(state), ...browserInternet(state) }
}

We also tacked this on to the code and added in the call chillinator(20).chill(); to show the temp of 20 that we pass in or chillinator(20).call(); to refernce the 311 we added to the object.

# 17.2.4

Some crazy things you can do with Closures.

const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
let count = 0;

return function () {
count++;
this.textContent = `Clicks: ${count}`;
};
};

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", clickHandler());
}

This lets you create an unliited amount of buttons that all get referenced in a for loop. This was fiarly confusing and I may need to reread or ask in class to ry and fully understand.

# 17.3.2

Introduced the % (remainder operator) to solve this

const isEven = (num) => {
if (num % 2 === 0) {
return true;
} else {
return false;
}
};

var number = isEven(22);
console.log(number);

They also showed how a for loop could do it but it would take longer.

const isEven = (num) => {
let even = true;

for (let i = 0; i < num; i++) {
even = !even;
}

return even;
};

var number = isEven(22);
console.log(number);

# 17.3.3

Introduced rucursion where they gave us an array and used this to find it

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
let middle = Math.floor((left + right) / 2);

// range overlapped, so never found number
if (left > right) {
return -1;
} else if (num === arr[middle]) {
return middle;
} else if (num < arr[middle]) {
// call again with a new right value
return binarySearch(arr, num, left, middle - 1);
} else {
// call again with a new left value
return binarySearch(arr, num, middle + 1, right);
}
};

// set initial left and right values on first call
console.log(binarySearch(data, 38, 0, data.length - 1));

The gist is that it takes 0+8/2=4 for middle which is the reference for the array spot and checks that against the number. If the number matches the array spot we are done. If it is less than then we minus 1 from the array spot and run it again which in this case we do changing middle to 3. It this gets the 0+3/2=1 and checks again. This time the number we passed in is greater than the array spot so we change left to 1 and send right back in as 3 that it came in as boefre middle ruined it. Then we get 3+1/2=2 and this array spot will match our number. I was unable to figure this out on my own and it took me a while to even figure out what was going on here once the answer was revealed.

# 17.3.4

Introduced the basic concepts of Big O. O(1) is a function like the remainder that wil never increase in time regardless of size. O(log n) is a function like the binary search that will scale well with size because it divides things in half. O(n) is a function that scales poorly with size because this is just a basic for loop that walks through each step of the array one step at a time.

# 17.3.5

Ran our first benchmark tests. We were able to see how a binary function can be more effecient when referncing the end of an array. It didn't really increase in time when the array grew while linear functions doubled. A linear fnction did win however if it wanted something from the front of the array. The one major limitation of binary functions is that in these examples the data would have to be sorted in numerical order or it would not work while a linear function would just keep checking untill there was a match regardless of order.

# 17.4.2 & 17.4.3

Used bubble sort and quick sort to solve sorting issues. Here is an exampe of both.

const bubbleSort = (arr) => {
let sorted = false;

while (!sorted) {
sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      // compare current element to next
      if (arr[i] > arr[i + 1]) {
        // swap using a third temp variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // flag as not sorted to run loop again
        sorted = false;
      }
    }

}

return arr;
};

const quickSort = (arr) => {
// don't quick-sort a small array; just return it immediately
if (arr.length <= 1) {
return arr;
}

// use first index as the pivot point
const pivot = arr[0];
const left = [];
const right = [];

// start at index 1 to ignore pivot
for (let i = 1; i < arr.length; i++) {
// push into different arrays based on value compared to pivot
if (arr[i] <= pivot) {
left.push(arr[i]);
} else {
right.push(arr[i]);
}
}
console.log("array", arr);
console.log("pivot", pivot);
console.log("left Array", left);
console.log("right Array", right);

// merge the sorted arrays and pivot together
return quickSort(left).concat(pivot, quickSort(right));
};

// export along with bubble sort
module.exports = { bubbleSort, quickSort };

Quick sort is a bit more confusing seeing as how the final swap are lost on me. But quick sort scales way better and is way faster than bubble sort.

# 17.5.2

Had us pseudocdoe 2 different ways to perform the Fibonacci sequence.
