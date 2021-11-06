// str1 is original version. str2 is rotated version
function solution(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1 === str2) return true;

    str2 = str2.split("");
    str2.push(str2.shift());
    str2 = str2.join("");
  }

  return false;
}

console.log(solution("waterbottle", "erbottlewat"));
