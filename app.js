// DOM - Document Object Model

// console.log(document); // Là 1 object bao bọc lấy file html

// 2. HTML selector
// id
// let app = document.getElementById("app");
// console.log(app);

// // Classname
// let divs = document.getElementsByClassName("div-1"); // Trả về 1 mảng
// console.log(divs);
// console.log(divs[0]);
// console.log(divs[1]);

// // Tagname:

// let divList = document.getElementsByTagName("div");
// console.log(divList);

// querySeletor và querySeletorAll cho phép chúng ta lấy thẻ thông quá dạng

// querySeletor
// (id - "#id", classname  - ".classname", tagname - "div" )
// Sử dụng querySelector để lấy tham chiếu đến phần tử p có lớp "myClass"
// const element = document.querySelector(".myClass");
// console.log(element);

// querySeletorAll
// const elements = document.querySelectorAll(".Element");
// console.log(elements);

// 3. Properties (Thuộc tính)
// 3. Text and content
// let app = document.getElementById("app");
// Ở trong id app bọc thêm 1 thẻ b vào

// console.log(app.innerHTML); // lấy ra toàn bộ nội dung là html có trong thẻ
// console.log(app.innerText); // Chỉ lấy ra nội dung là chữ có trong thẻ
// console.log(app.textContent); // Chỉ lấy ra nội dung là chữ có trong thẻ

// So sánh giữa innerText và textContent
// "innerText" là một thuộc tính không chuẩn và chỉ được hỗ trợ trên một số trình duyệt
// Nó trả về và đặt nội dung văn bản của phần tử, giống như nhìn thấy trên trình duyệt.
// Nếu một phần tử hoặc các phần tử con của nó được đánh dấu ẩn bằng CSS (display: none)
// hoặc bị ảnh hưởng bởi một số thuộc tính CSS khác, "innerText" sẽ không lấy
// hoặc hiển thị nội dung của các phần tử ẩn đó.
// "innerText" tự động loại bỏ các thẻ HTML và chỉ lấy phần tử văn bản thuần túy.

// "textContent" là một thuộc tính chuẩn và được hỗ trợ trên hầu hết các trình duyệt
// Nó trả về và đặt toàn bộ nội dung văn bản của phần tử,
// bao gồm cả văn bản của các phần tử con và các phần tử ẩn không ảnh hưởng bởi CSS.
// "textContent" không xử lý các thẻ HTML và trả về một chuỗi văn bản thô, bao gồm cả các thẻ HTML.

// app.innerHTML = "<i>Heyyyy</i>";
// app.innerText = "<i>Heyyyy</i>";
// app.textContent = "<i>Heyyyy</i>";

// Style
// Cách viết style trong css: background-color => JS: backgroundColor (camelCase)
let app = document.getElementById("app");
console.log(app.style);
app.style.backgroundColor = "pink";

// Children, parentElement
let ulList = document.getElementById("list");
console.log(ulList);

// Để gọi được tập hợp các con có trong ul
console.log(ulList.children[0]);
console.log(ulList.children[1]);
console.log(ulList.children[2]);

// Để truy cập phần tử cha
console.log(ulList.children[0].parentElement);

// => Việc sử dụng Children, parentElement giúp di chuyển các cấp và gắn các sự kiện cho cha or con

// Classlist, id
// Để lấy ra thuộc tính id của phần tử
console.log(ulList.id);

// Lấy ra thuộc tính classlist
// Thêm classlist cho thẻ ul
console.log(ulList.classList);

// Thêm class
ulList.classList.add("cl4");
// Xóa class
ulList.classList.remove("cl1");
console.log(ulList.classList);

// Methods
// remove(), appendChild()
// docment.createElement()

// remove
const li = ulList.children[2];
console.log(li);
li.remove(); // sẽ xóa đi phần tử số 3

// appendChild
const liParent = ulList.children[1].parentElement;
console.log(liParent);

const newLi = document.createElement("li");
console.log(newLi);
// Tạo ra thẻ li, nhưng thẻ li này đang chưa được gắn vào nơi nào
// => sử dụng appendChild
liParent.appendChild(newLi);
newLi.innerHTML = "Xin chào mọi người";

//
