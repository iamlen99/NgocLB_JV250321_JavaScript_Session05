let input = prompt("Nhập vào dãy số bất kỳ:");
while (input === null || input.trim() === "") {
  input = prompt("Bạn chưa nhập gì cả, hãy nhập dãy số bất kì");
}

if (!Number.isInteger(+input)) {
  console.log("Dãy không hợp lệ");
} else {
  let result = input.split("").reverse().join("");
  console.log(result);
}
