// make the same string using
// add, remove or swap once.
function solution(a, b) {
  // If difference of two strings are more than one, it means more than one command.
  if (Math.abs(a.length - b.length) > 1) return false;

  let arr1 = a.split("");
  let arr2 = b.split("");
  let cnt = 0;

  let i = 0;
  let j = 0;

  while (true) {
    if (cnt >= 2) break;
    if (i > a.lenght || j > b.length) break;

    if (arr1[i] !== arr2[j]) {
      cnt++;

      if (arr1.length >= arr2.length) i++;
      if (arr1.length <= arr2.length) j++;
    } else {
      i++;
      j++;
    }
  }

  return cnt < 2;
}

console.log(solution("pales", "bake"));
