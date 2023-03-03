//Callback function

function doSomethingAsync(callback) {
  setTimeout(() => {
    callback("Result");
  }, 1000);
}

doSomethingAsync((result) => {
  console.log(result);
});


//Using promises

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result");
    }, 1000);
  });
}

doSomethingAsync().then((result) => {
  console.log(result);
});