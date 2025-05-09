let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
console.log(numbers);
let input = prompt("Nhập vào một số nguyên bất kì");

while (input === null || input.trim() === "" || !Number.isInteger(+input)) {
  input = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
}
let randomInteger = +input;
let count = 0;
for (let element of numbers) {
  if (randomInteger === element) {
    count++;
  }
}

if (count === 0) {
  console.log(`Số ${randomInteger} không tồn tại trong mảng`);
} else {
  console.log(`Số ${randomInteger} xuất hiện ${count} lần trong mảng`);
}
