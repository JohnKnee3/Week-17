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
