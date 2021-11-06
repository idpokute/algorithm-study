// string comnpression
// only letters a-zA-Z
function solution(str) {
  let answer = [];
  str = str.split("");
  str.push("1"); // add any number to detect last item in the while loop.

  let prev = str[0];
  let i = 1;
  let cnt = 1;
  while (i < str.length) {
    if (prev === str[i]) {
      cnt++;
    } else {
      answer.push(prev);
      answer.push(cnt);
      prev = str[i];
      cnt = 1;
    }
    i++;
  }

  answer = answer.join("");
  if (answer.length > str.length - 1) answer = str.join("");

  return answer;
}

console.log(solution("aabcccccaaa"));
