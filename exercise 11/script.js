let Arr = [];
for (let i = 1; i <= 10; i++) {
  Arr.push(Math.floor(Math.random() * 100));
}
console.log(Arr);
let outputArr = [];
for (let integer of Arr) {
  if (integer >= 10) {
    outputArr.push(integer);
  }
}
if (outputArr.length === 0) {
  console.log("Không có số nào lớn hơn 10");
} else {
  console.log(outputArr);
}
