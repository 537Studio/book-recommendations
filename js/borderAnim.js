$(document).ready(function () {
  // 获取HTML元素的引用
  const $div = $("#excerpts");
  const $divSon = $("#excerpts_main");
  const $divBef = $("#borderanimBef");
  const $divAft = $("#borderanimAft");

  const $coverDiv = $("#banner_right");
  let $cover = $("#cover");

  // 监听'div'元素上的动画结束事件
  $div.on("animationend", function () {
    // 动画结束后的操作
    $divBef.css({ opacity: 1, top: "-5px" });
    $divAft.css({ opacity: 1, bottom: "-5px" });
    $divSon.css({ opacity: 1 });
  });

  // 监听'cover'元素上的动画结束事件
  $cover.on("animationend", function () {
    // 动画结束后的操作
    // 移除旧的封面元素
    $cover.empty();
    // 创建新的封面元素
    $cover = $("<img>")
      .attr("src", "img/book.jpg") // 可能存在路径硬编码问题
      .css({ width: "300px", height: "419px" })
      .addClass("cover");
    // 将新封面添加到封面容器中
    $coverDiv.append($cover);
  });

  // 监听鼠标进入'div'元素事件
  $div.on("mouseenter", function () {
    // 鼠标进入时的操作
    $divBef.css({ width: "calc(100% + 9px)", height: "calc(100% + 9px)" });
    $divAft.css({ width: "calc(100% + 9px)", height: "calc(100% + 9px)" });
  });

  // 监听鼠标离开'div'元素事件
  $div.on("mouseleave", function () {
    // 鼠标离开时的操作
    $divBef.css({ width: "20px", height: "20px" });
    $divAft.css({ width: "20px", height: "20px" });
  });
});

// const div = document.getElementById("excerpts");
// const divSon = document.getElementById("excerpts_main");
// const divBef = document.getElementById("borderanimBef");
// const divAft = document.getElementById("borderanimAft");

// const coverDiv = document.getElementById("banner_right");
// let cover = document.getElementById("cover");

// div.addEventListener("animationend", () => {
//   divBef.style.opacity = 1;
//   divBef.style.top = "-5px";
//   divAft.style.opacity = 1;
//   divAft.style.bottom = "-5px";
//   divSon.style.opacity = 1;
// });

// cover.addEventListener("animationend", () => {
//   coverDiv.removeChild(cover);
//   cover = document.createElement("img");
//   cover.src = "img/book.jpg";
//   cover.style.width = "300px";
//   cover.style.height = "419px";
//   cover.classList.add("cover");
//   coverDiv.appendChild(cover);
// });

// div.addEventListener("mouseenter", () => {
//   divBef.style.width = "calc(100% + 9px)";
//   divBef.style.height = "calc(100% + 9px)";
//   divAft.style.width = "calc(100% + 9px)";
//   divAft.style.height = "calc(100% + 9px)";
// });

// div.addEventListener("mouseleave", () => {
//   divBef.style.width = "20px";
//   divBef.style.height = "20px";
//   divAft.style.width = "20px";
//   divAft.style.height = "20px";
// });

// ===================================================优化后原生
// // 获取HTML元素的引用
// const div = document.getElementById("excerpts");
// const divSon = document.getElementById("excerpts_main");
// const divBef = document.getElementById("borderanimBef");
// const divAft = document.getElementById("borderanimAft");

// const coverDiv = document.getElementById("banner_right");
// let cover = document.getElementById("cover");

// // 定义函数以重用代码
// const setElementStyles = (element, styles) => {
//   Object.assign(element.style, styles);
// };

// // 监听'div'元素上的动画结束事件
// div.addEventListener("animationend", () => {
//   // 动画结束后的操作
//   setElementStyles(divBef, { opacity: 1, top: "-5px" });
//   setElementStyles(divAft, { opacity: 1, bottom: "-5px" });
//   setElementStyles(divSon, { opacity: 1 });
// });

// // 监听'cover'元素上的动画结束事件
// cover.addEventListener("animationend", () => {
//   // 动画结束后的操作
//   // 移除旧的封面元素
//   coverDiv.removeChild(cover);
//   // 创建新的封面元素
//   cover = document.createElement("img");
//   // 设置新封面的属性
//   cover.src = "img/book.jpg"; // 可能存在路径硬编码问题
//   setElementStyles(cover, { width: "300px", height: "419px" });
//   cover.classList.add("cover");
//   // 将新封面添加到封面容器中
//   coverDiv.appendChild(cover);
// });

// // 定义函数以处理鼠标进入和离开事件
// const handleMouseEnter = () => {
//   // 鼠标进入时的操作
//   setElementStyles(divBef, { width: "calc(100% + 9px)", height: "calc(100% + 9px)" });
//   setElementStyles(divAft, { width: "calc(100% + 9px)", height: "calc(100% + 9px)" });
// };

// const handleMouseLeave = () => {
//   // 鼠标离开时的操作
//   setElementStyles(divBef, { width: "20px", height: "20px" });
//   setElementStyles(divAft, { width: "20px", height: "20px" });
// };

// // 监听鼠标进入'div'元素事件
// div.addEventListener("mouseenter", handleMouseEnter);

// // 监听鼠标离开'div'元素事件
// div.addEventListener("mouseleave", handleMouseLeave);

// flag = true;
// div.addEventListener("mouseenter", () => {
//   divAft.addEventListener("animationend", () => {
//     flag = true;
//   });
//   if (flag) {
//     divBef.style.animation = "borderWid 3s forwards";
//     divAft.style.animation = "borderWid 3s forwards";
//   }
//   flag = false;
// });

// div.addEventListener("mouseleave", () => {
//   divAft.addEventListener("animationend", () => {
//     divBef.style.animation = "reborderWid 3s";
//     divAft.style.animation = "reborderWid 3s";
//   });
// });
