// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.
function solution(arr) {
  let answer = [];

  // find the pos of 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        answer.push([i, j]);
      }
    }
  }

  for (let val of answer) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (val[0] === i || val[1] === j) arr[i][j] = 0;
      }
    }
  }

  return arr;
}

const arr = [
  [1, 0, 2, 4, 5, 6],
  [1, 1, 3, 2, 5, 1],
  [0, 2, 3, 4, 5, 0],
  [4, 2, 3, 4, 5, 2],
  [4, 2, 1, 2, 3, 2],
];

console.log(solution(arr));
