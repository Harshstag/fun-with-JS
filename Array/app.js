// var n = 4;
// var recFactorial = function (n) {
//   if (n > 0) {
//     return n * recFactorial(n - 1);
//   } else {
//     return 1;
//   }
// };
// console.log(recFactorial(n));

// let n = 6;
// function fab(n) {
//   let n1 = 0;
//   let n2 = 1;
//   let nextTerm;
//   for (let i = 1; i <= n; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// console.log(fab(n));

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
//function to print the array
function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) {
    // document.write(arr[i] + " ");
    // document.write("<br>");
    console.log(arr[i]);
  }
}
let arr = [12, 31, 25, 8, 32, 17];
let n = arr.length;
// printArray(arr, n);
insertionSort(arr, n);
printArray(arr, n);
