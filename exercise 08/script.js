let randomArr = [];
for (let i = 1; i <= 10; i++) {
  randomArr.push(Math.floor(Math.random() * 10));
}
console.log("Mảng ban đầu: ", randomArr);

let ascendingArray = randomArr.sort();
console.log("Mảng tăng dần: ", ascendingArray);

let j = 0;
while (j < ascendingArray.length - 1) {
  if (ascendingArray[j] === ascendingArray[j + 1]) {
    ascendingArray.splice(j, 1);
  } else {
    j++;
  }
}
console.log("Mảng mong muốn: ", ascendingArray);
