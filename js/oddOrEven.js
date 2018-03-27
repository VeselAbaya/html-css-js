function main() {
  let numbers = window.prompt("Enter some number(s) with a space", "1 2 3 ...").split(' ').map(x => parseInt(x, 10));
  for (i in numbers) {
    if (numbers[i] % 2 == 0) { console.log(numbers[i].toString().concat(" is even")); }
    else { console.log(numbers[i].toString().concat(" is odd")); }
  }
}

main();
