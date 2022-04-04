// const buttonEl = document.getElementById("my-button");
const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
  let count = 0;

  return function () {
    count++;
    this.textContent = `Clicks: ${count}`;
  };
};

// buttonEl.addEventListener("click", clickHandler());
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}

// const containerEl = document.getElementById("container");

// const clickHandler = function (event) {
//   if (event.target.matches("button")) {
//     event.target.textContent = "Clicked!";
//   }
// };

// containerEl.addEventListener("click", clickHandler);
