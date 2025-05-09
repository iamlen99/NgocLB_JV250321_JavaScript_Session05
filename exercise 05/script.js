let randomArr = [];
for (let i = 1; i <= 5; i++) {
  randomArr.push(Math.floor(Math.random() * 100));
}

let evenSum = 0;
let oddSum = 0;

for (let element of randomArr) {
  if (element % 2 === 0) {
    evenSum++;
  } else {
    oddSum++;
  }
}
console.log(randomArr);
console.log(`Tổng các số chẵn: ${evenSum}`);
console.log(`Tổng các số lẻ: ${oddSum}`);
