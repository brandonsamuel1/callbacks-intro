function findWaldo(arr, found) {
  arr.forEach(function(item, index) {
    if (arr[index] === "Waldo") {
      found(index);   // execute callback
    }
  })
}

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
//   console.log("Found Waldo at index " + i + "!")
// });

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!")
});