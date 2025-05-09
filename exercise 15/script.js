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

    break;
  } while (true);

  Arr.push(+input);
}

if (+n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (+n === 0) {
  console.log("Mảng không có phần tử nào");
} else if (+n === 1) {
  console.log("Mảng chỉ có 1 phần tử nên không có số lớn thứ 2");
} else {
  console.log(Arr);

  let max = -Infinity;
  let max2 = -Infinity;

  for (let num of Arr) {
    if (max < num) {
      max2 = max;
      max = num;
    } else if (max2 < num && num !== max) {
      max2 = num;
    }
  }

  console.log(`Số lớn thứ 1 trong mảng: ${max}`);
  if (max2 === -Infinity) {
    console.log("Không có số lớn thứ 2 do các phần tử đều giống nhau");
  } else {
    console.log(`Số lớn thứ 2 trong mảng: ${max2}`);
  }
}
