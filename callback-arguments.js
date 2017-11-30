function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

// function actionWhenFound() {
//   console.log("Found him!");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
  console.log("Found Waldo at index " + i + "!")
});