// critical code / key code
// localStorage.setItem("now", name_);

const mask = document.getElementById("mask");
function closeDiv() {
  mask.style.display = "none";

  // mask.firstElementChild.style.display = "none";
  // mask.lastElementChild.style.display = "none";
  //下面的代码实现了以上的功能，但当存在多个子元素时，下面的代码能更好的完成任务

  // 通过 Array.from 将 "mask" 元素的所有子元素转换为数组
  Array.from(mask.children).forEach((child) => {
    // 对每个子元素，将其 display 样式设置为 "none"，从而隐藏它们
    child.style.display = "none";
  });

  document.getElementById("name").value = "";
  document.getElementById("pwd").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("userPwd").value = "";
}

document.getElementById("close1").addEventListener("click", closeDiv);
function sign_in() {
  mask.style.display = "flex";
  mask.lastElementChild.style.display = "block";
}
function check_dl() {
  let name_ = document.getElementById("name").value;
  let pwd = document.getElementById("pwd").value;
  if (name_ == "" || pwd == "") {
    alert("内容不能为空！");
    return false;
  } else {
    if (localStorage.getItem(name_) == pwd) {
      localStorage.setItem("now", name_);
      return true;
    } else {
      alert("用户不存在或密码错误");
      return false;
    }
  }
}

document.getElementById("close2").addEventListener("click", closeDiv);
function sign_up() {
  mask.style.display = "flex";
  mask.firstElementChild.style.display = "block";
}
function check_zc() {
  let userName = document.getElementById("userName").value;
  let userPwd = document.getElementById("userPwd").value;
  if (userName == "" || userPwd == "") {
    alert("内容不能为空！");
    return false;
  } else if (localStorage.getItem(userName) != null) {
    alert("当前账户已存在！");
    return false;
  } else {
    localStorage.setItem(userName, userPwd);
    localStorage.setItem("now", userName);
    return true;
  }
}

function close_and_sign(num) {
  closeDiv();
  num == 0 ? sign_up() : sign_in();
}

function exit_acc() {
  localStorage.setItem("now", null);
  location.reload();
}

function del_acc() {
  if (confirm("真的要注销账户吗？")) {
    localStorage.removeItem(localStorage.getItem("now"));
    localStorage.setItem("now", null);
    location.reload();
  }
}
