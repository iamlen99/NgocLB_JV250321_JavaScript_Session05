let Arr = [];
let n;
do {
  n = prompt("Nhập số phần tử của mảng:");
  if (n === null || n.trim() === "") {
    alert("Bạn chưa nhập gì!");
  }
  if (!Number.isInteger(+n)) {
    alert("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại");
  }
} while (n === null || n.trim() === "" || !Number.isInteger(+n));

for (let i = 1; i <= +n; i++) {
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

if (+n === 0) {
  console.log("Mảng không có phần tử");
} else if (+n < 0) {
  console.log("Số lượng phần tử không hợp lệ");
} else {
  console.log(Arr);

  let count = 0;
  for (let integer of Arr) {
    if (integer < 0) {
      count++;
    }
  }
  console.log(`Số lượng số nguyên âm trong mảng: ${count}`);
}
