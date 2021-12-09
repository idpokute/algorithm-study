function decToBin(num) {
  if (num >= 1 || num <= 0) {
    return "error";
  }

  let answer = ".";

  while (num > 0) {
    if (answer.length - 1 >= 32) {
      answer = "overflow";
      break;
    }
    num *= 2;
    if (num >= 1) {
      answer += "1";
      num -= 1;
    } else {
      answer += "0";
    }
  }

  return answer;
}

console.log(decToBin(0.625));
// console.log(decToBin(0.125));
// console.log(decToBin(0.135));
