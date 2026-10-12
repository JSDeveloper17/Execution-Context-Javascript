let name = "John";

function displayName() {
  console.log(name);
}

function test() {
  let name = "David";
  displayName();
}

test(); // John
