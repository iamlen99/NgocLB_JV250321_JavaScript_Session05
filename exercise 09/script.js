let loop = true;
let Arr = [];
while (loop) {
  let choice = +prompt(`MENU
1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát
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
        Arr.push(element);
      }

      break;
    case 2:
      console.log(Arr);
      break;
    case 3:
      let newElement = prompt("Nhập phần tử muốn thêm:");
      Arr.push(newElement);
      break;
    case 4:
      let updateIndex = +prompt("Nhập vị trí bạn muốn sửa phần tử: ");
      let updateElement = prompt("Nhập phần tử thay thế: ");
      Arr.splice(updateIndex - 1, 1, updateElement);
      break;
    case 5:
      let deleteIndex = +prompt("Nhập vị trí bạn muốn xóa phần tử: ");
      Arr.splice(deleteIndex - 1, 1);
      break;
    case 6:
      loop = false;
      break;
    default:
  }
}
