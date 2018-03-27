function takeData() {
  let input = ["Name: 89", "Name1: 90"];//window.prompt("Enter date in this format", "Name: score; Name: score; ...").split('; ');
  let data = new Object();
  
  for (let i = 0; i != input.length; ++i) { 
    let nameScore = input[i].split(": ");
    data[nameScore[0].toString()] = parseInt(nameScore[1], 10);
  }
  
  return data;
}

function main() {
  let data = takeData();
  for (name in data) {
    if (data[name] < 60) { data[name] = "F"; }
    else if (data[name] < 70) { data[name] = "D"; }
    else if (data[name] < 80) { data[name] = "C"; }
    else if (data[name] < 90) { data[name] = "B"; }
    else if (data[name] <= 100) { data[name] = "A"; }
  }
  
  console.log(data);
}

main();