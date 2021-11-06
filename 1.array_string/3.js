function solution(str) {
  return str.split("").reduce((prev, curr) => {
    return prev + (curr === " " ? "%20" : curr);
  }, "");
}

console.log(solution("hello world! mr john smith"));
