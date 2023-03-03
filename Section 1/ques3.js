// Synchronous code
console.log("Starting");
const result = doSomething();
console.log(result);
console.log("Finished");

// Asynchronous code
console.log("Starting");
doSomethingAsync((result) => {
  console.log(result);
});
console.log("Finished");

function doSomething() {
  return "Result";
}

function doSomethingAsync(callback) {
  setTimeout(() => {
    callback("Result");
  }, 1000);
}