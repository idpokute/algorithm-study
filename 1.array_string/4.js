//
function solution(str1, str2) {
  if (str2.length !== str1.length) return false;

  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");

  return a === b;
}

console.log(solution("Tact Coa", "taco cat"));
