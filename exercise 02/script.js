let numbers = [2, 5, 7, 4, 1, 8, 6];
let input = prompt("Mời bạn nhập vào một số bất kỳ:");
while (input === null || input.trim() === "" || !Number.isInteger(+input)) {
  input = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
}
let randomNumber = +input;

let result = numbers.includes(randomNumber);
console.log(result);

console.log(`${result ? "Bingo" : "Chúc bạn may mắn lần sau"}`);
