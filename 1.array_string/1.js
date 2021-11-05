// Is Unique
function solution(str) {
  let tmp = new Map();
  str.split("").map((value) => {
    tmp.set(value, 0);
  });
  return tmp.size === str.length;
}

const str = "asdf";

console.log(solution(str));
