let loop = true;
let Arr = [];
while (loop) {
  let choice = +prompt(`================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
 	==========================================
  	Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      Arr = [];
      let n = prompt("Nhập số phần tử của mảng:");
      while (n === null || n.trim() === "" || !Number.isInteger(+n) || +n < 1) {
        n = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
      }
      for (let i = 1; i <= n; i++) {
        let element = prompt(`Nhập giá trị của phần tử thứ ${i}`);
        while (
          element === null ||
          element.trim() === "" ||
          !Number.isInteger(+element) ||
          +element < 0
        ) {
          element = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
        }
        Arr.push(+element);
      }
      break;

    case 2:
      console.log(Arr);
      break;

    case 3:
      if (Arr.length === 0) {
        console.log("Mảng chưa có phần tử nào!");
        break;
      }
      let evenArr = [];
      let evenSum = 0;
      for (let integer of Arr) {
        if (integer % 2 === 0) {
          evenArr.push(integer);
          evenSum += integer;
        }
      }
      console.log("Các phần tử chẵn là: ", evenArr);
      console.log(`Tổng các phần tử chẵn là: ${evenSum}`);
      break;

    case 4:
      if (Arr.length === 0) {
        console.log("Mảng chưa có phần tử nào!");
        break;
      }
      let max = Arr[0];
      let min = Arr[0];

      for (i = 0; i < Arr.length; i++) {
        if (max < Arr[i]) {
          max = Arr[i];
        }
        if (min > Arr[i]) {
          min = Arr[i];
        }
      }
      console.log(`Giá trị lớn nhất trong mảng là: ${max}`);
      console.log(`Giá trị nhỏ nhất trong mảng là: ${min}`);
      break;

    case 5:
      if (Arr.length === 0) {
        console.log("Mảng chưa có phần tử nào!");
        break;
      }
      let primeArr = [];
      let primeSum = 0;
      for (let num of Arr) {
        let isPrime = true;
        if (num < 1) {
          isPrime = false;
        } else {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              isPrime = false;
              break;
            }
          }
        }
        if (isPrime) {
          primeArr.push(num);
          primeSum += num;
        }
      }
      if (primeArr.length === 0) {
        console.log("Trong mảng không có số nguyên tố nào");
      } else {
        console.log("Các phần tử là số nguyên tố trong mảng:", primeArr);
        console.log(`Tổng các số nguyên tố: ${primeSum}`);
      }
      break;

    case 6:
      if (Arr.length === 0) {
        console.log("Mảng chưa có phần tử nào!");
        break;
      }
      let input = prompt("Nhập số bất kỳ: ");
      while (
        input === null ||
        input.trim() === "" ||
        !Number.isInteger(+input)
      ) {
        input = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
      }
      let randomNumber = +input;
      let count = 0;
      for (let num of Arr) {
        if (num === randomNumber) {
          count++;
        }
      }
      if (count === 0) {
        console.log(`Số ${randomNumber} không tồn tại trong mảng đã nhập`);
      } else {
        console.log(`Trong mảng có ${count} số ${randomNumber} `);
      }
      break;

    case 7:
      if (Arr.length === 0) {
        console.log("Mảng chưa có phần tử nào!");
        break;
      }
      let index = prompt("Nhập vị trí bạn muốn thêm phần tử: ");
      while (
        index === null ||
        index.trim() === "" ||
        !Number.isInteger(+index) ||
        index < 1 ||
        index > Arr.length
      ) {
        index = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
      }

      let input2 = prompt("Nhập phần tử muốn thêm: ");
      while (
        input2 === null ||
        input2.trim() === "" ||
        !Number.isInteger(+input2)
      ) {
        input2 = prompt("Giá trị bạn nhập không hợp lệ, xin hãy nhập lại:");
      }
      Arr.splice(+index - 1, 0, +input2);
      break;

    case 8:
      loop = false;
      break;

    default:
  }
}
