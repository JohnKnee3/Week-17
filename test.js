function foo() {
  setTimeout(() => {
    console.log("bar");
  }, 0);

  console.log("foo");
  console.log("baz");
}

foo();
