/**
 *这段代码主要做了以下几件事：
 *1. 初始化页面上的两个按钮和它们控制的div元素。
 *2. 为more_reason_btn按钮添加点击事件，使其能够展开或隐藏reasonDiv。
 *3. 定义一个reCatch函数，用于为illustrate_btn按钮添加点击事件，使其能够控制illustrateDiv的显示和隐藏动画。
 *4. 定义illustrate_btnClick函数，用于处理illustrate_btn的点击事件，实现div的展开和收缩动画。
 */

const more_reason_btn =
  document.getElementById("more_reason").firstElementChild;
const reasonDiv = document.getElementById("reasonDiv");

// 当用户点击此按钮时，它的父元素将被隐藏（设置为"none"），同时reasonDiv的高度将被设置为379px以显示内容
more_reason_btn.addEventListener("click", () => {
  more_reason_btn.parentElement.style.display = "none";
  reasonDiv.style.height = "379px";
});

// 声明两个变量，用于后续存储按钮和要操作的div的引用
let illustrate_btn;
let illustrateDiv;

// 获取页面上的元素，并为illustrate_btn添加点击事件监听器
function reCatch() {
  illustrate_btn = document.getElementById("illustrate").firstElementChild;
  illustrateDiv = document.querySelector(".illustrateDiv");
  illustrate_btn.addEventListener("click", illustrate_btnClick);
}

// illustrate_btnClick点击事件
function illustrate_btnClick() {
  // 检查illustrateDiv的当前高度是否为空或设置为"0px"
  if (illustrateDiv.style.height == "" || illustrateDiv.style.height == "0px") {
    illustrateDiv.style.width = "500px";
    setTimeout(() => {
      illustrateDiv.style.height = "135px";
    }, 600);
  } else {
    // 如果illustrateDiv的高度不是0px，则将其高度设置为0
    illustrateDiv.style.height = "0";
    setTimeout(() => {
      illustrateDiv.style.width = "0";
    }, 700);
  }
}
