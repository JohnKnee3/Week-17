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
