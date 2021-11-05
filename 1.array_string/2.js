function solution(str1, str2) {
  let answer = false;
  if (str1.length > str2.length) {
    answer = str1.includes(str2);
  } else {
    answer = str2.includes(str1);
  }
  return answer;
}

const str1 = "hello world!";
const str2 = "hello";

console.log(solution(str1, str2));
