// Rotate array to 90deg
function solution(arr) {
  let answer = Array.from({ length: arr.length }, (v) => {
    return Array.from({ length: arr.length }, (v) => 0);
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      answer[j][arr.length - i - 1] = arr[i][j];
    }
  }

  console.log(answer);
}

const str = [
  ["a", 2, 3, 4, "b"],
  [2, "x", 4, 5, 1],
  [3, 4, "y", 1, 2],
  [4, 5, 1, "z", 3],
  ["d", 1, 2, 3, "c"],
];

console.log(solution(str));
