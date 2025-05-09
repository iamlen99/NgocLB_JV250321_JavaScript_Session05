let Arr = [];
for (let i = 1; i <= 10; i++) {
  let input;
  do {
    input = prompt(`Nhập phần tử thứ ${i}`);
    if (input === null || input.trim() === "") {
      alert("Bạn chưa nhập gì!");
      continue;
    }
    if (!Number.isInteger(+input)) {
      alert("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại");
      continue;
    }
    if (Arr.includes(+input)) {
      alert("Phần tử này đã tồn tại trong mảng, xin hãy nhập lại:");
      continue;
    }
    break;
  } while (true);

  Arr.push(+input);
}
console.log(Arr);

let max = Arr[0];
let maxIndex = 0;
for (let Index in Arr) {
  if (max < Arr[Index]) {
    max = Arr[Index];
    maxIndex = +Index + 1;
  }
}
console.log(`Số lớn nhất: ${max} `);
console.log(`Vị trí: ${maxIndex} `);
