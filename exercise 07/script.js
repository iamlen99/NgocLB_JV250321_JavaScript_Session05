let randomArr = [];
for (let i = 1; i <= 10; i++) {
  randomArr.push(Math.floor(Math.random() * 10));
}
console.log("Mảng ban đầu: ", randomArr);
console.log("Mảng mong muốn: ", randomArr.sort());
