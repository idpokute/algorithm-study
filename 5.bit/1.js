function updateBit(n, m, i, j) {
  console.log("n: ", (n >>> 0).toString(2));
  console.log("m: ", (m >>> 0).toString(2));
  console.log("i: ", i);
  console.log("j: ", j);

  let allOnes = ~0;
  let left = allOnes << (j + 1);
  let right = (1 << (i + 1)) - 1;
  let sum = left | right;
  sum = sum & n;
  m <<= i;
  return sum | m;
}

// 1110 1001
//    1 01
// ---------
// 1111 0101

console.log((updateBit(0b11101001, 0b101, 2, 4) >>> 0).toString(2));
