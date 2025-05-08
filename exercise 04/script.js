let input = prompt("Nhập dãy số bất kỳ:");
while (input === null || input.trim() === "") {
  input = prompt("Bạn chưa nhập gì cả, hãy nhập dãy số bất kỳ");
}

if (!Number.isInteger(+input) || input < 0) {
  console.log("Dãy số không hợp lệ");
} else {
  let inputArr = input.split("");
  let max = inputArr[0];
  for (let element of inputArr) {
    if (max < element) {
      max = element;
    }
  }
  console.log(`${max} là số lớn nhất trong dãy số`);
}
