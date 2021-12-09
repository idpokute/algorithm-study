// a를 b로 바꾸기 위해 뒤집어야하는 비트의 개수
function diff(a, b) {
  let xor = a ^ b; // 다른 비트만 1로 바뀐다.

  let cnt = 0;
  // 이제 xor의 1인 비트만 count
  for (let c = xor; c != 0; c = c >> 1) {
    cnt += c & 1;
  }
  // 다음 방법은 최적화된 방법
  // for (let c = xor; c != 0;c = c & (c - 1)) {
  //   cnt++;
  // }
  return cnt;
}

console.log(diff(0b1110, 0b1000));
