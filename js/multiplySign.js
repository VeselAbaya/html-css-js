function sgn(a) {
  return a < 0 ? -1 : 1;
}

function multSgn(arr) {
  let ret = 1;
  for (i in arr) { ret *= sgn(arr[i]); }
  return ret;
}

function main() {
  let numbers = window.prompt("Enter some number(s) with a space", "1 2 3 ...").split(' ').map(x => parseInt(x, 10));
  alert("The sign is ".concat(multSgn(numbers) == 1 ? "+" : "-"));
}

main();
// 1 2 3 -2 -4 -1 2 3