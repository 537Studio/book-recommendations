const com_box = document.querySelector(".com_box");

window.onload = function () {
  refreshCom();
  reCatch();
  if (localStorage.getItem("now") == "null") {
  } else {
    const accDiv = document.getElementById("accDiv");
    accDiv.innerHTML = "";
    accDiv.style.width = "250px";
    let user = document.createElement("p");
    user.setAttribute("class", "user");
    user.innerHTML =
      "欢迎你，<span>" +
      localStorage.getItem("now").charAt(0).toUpperCase() +
      "</span>" +
      localStorage.getItem("now");
    accDiv.appendChild(user);
    let exit_btn = document.createElement("a");
    exit_btn.setAttribute("href", "javascript:;");
    exit_btn.setAttribute("onclick", "exit_acc()");
    exit_btn.innerHTML = "退出登录";
    let del_btn = document.createElement("a");
    del_btn.setAttribute("href", "javascript:;");
    del_btn.setAttribute("onclick", "del_acc()");
    del_btn.innerHTML = "注销账户";
    accDiv.appendChild(exit_btn);
    accDiv.appendChild(del_btn);

    const comment = document.querySelector(".com_top");
    const com_area = comment.children[0];
    const com_count = comment.children[1];
    const com_btn = comment.children[2];
    const com_img = comment.children[3];
    const com_radio = comment.children[4];

    com_area.style.left = "180px";
    com_area.removeAttribute("readonly");

    com_count.style.right = "230px";

    com_btn.style.left = "698px";
    com_btn.style.cursor = "pointer";
    com_btn.setAttribute("onclick", "post_com()");

    com_img.innerHTML = "";

    com_radio.style.left = "340px";

    let com_user_icon = document.createElement("span");
    com_user_icon.classList.add("user_icon");
    com_user_icon.innerHTML = localStorage
      .getItem("now")
      .charAt(0)
      .toUpperCase();
    comment.appendChild(com_user_icon);
  }
  if (localStorage.getItem("now") == "root") {
    alert("你已登录超级管理员账户，拥有额外的权限，请勿随意操作！");
  }
};
