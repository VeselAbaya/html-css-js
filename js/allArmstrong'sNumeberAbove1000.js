function tripleArmstrongNumbers() {
  let ret = new Array();
  
  for (let i = 1; i != 10; ++i) {
    for (let j = 0; j != 10; ++j) {
      for (let k = 0; k != 10; ++k) {
        let perhapsArmstrong = i.toString() + j.toString() + k.toString();
        if (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3) == perhapsArmstrong) { ret.push(perhapsArmstrong); } 
      }
    }
  }
  
  return ret;
}

function main() {
  console.log(tripleArmstrongNumbers().toString().concat(" There are all Armstrong numbers lower then 1000"));
}

main();