//初始化
let info = {};
try {
  info = JSON.parse(localStorage.getItem("comment"));
} catch {}
if (info == null) {
  info = {};
}

if (localStorage.getItem("now") == null) {
  localStorage.setItem("now", null);
  info = {
    "2024/02/02 17:52:46": {
      name: "root",
      com: "123",
      score: "喜欢",
    },
    "2024/02/02 17:56:05": {
      name: "root",
      com: "321",
      score: "喜欢",
    },
    "2024/02/02 19:54:17": {
      name: "郑志亮",
      com: "我爱玩第五人格",
      score: "喜欢",
    },
    "2024/02/02 19:55:09": {
      name: "小明",
      com: "但是不妨换一个角度思考，正因为是白纸，所以可以画任何地图，一切都掌握在你自己手上。你很自由，充满了无限可能。这是很棒的事，我衷心祈祷你可以相信自己，无悔地燃烧自己",
      score: "喜欢",
    },
    "2024/02/02 19:56:11": {
      name: "abc",
      com: "好看爱看",
      score: "喜欢",
    },
  };
  localStorage.setItem("comment", JSON.stringify(info));
}

function post_com() {
  const com_area = document.querySelector(".com_top").firstElementChild;
  if (com_area.value == "") {
    alert("还没有输入内容捏(๑•̌.•๑)");
  } else {
    com_date = dayjs().format("YYYY/MM/DD HH:mm:ss");
    info[com_date] = {
      name: localStorage.getItem("now"),
      com: com_area.value,
      score: $("input[name=evaluation]:checked").val(),
    };
    localStorage.setItem("comment", JSON.stringify(info));
    //恢复初始样式
    com_area.value = "";
    $("input[name=evaluation]:first").prop("checked", "checked");
    refreshComDiv();
  }
}

function del_com(com_date) {
  if (
    localStorage.getItem("now") == info[com_date].name ||
    localStorage.getItem("now") == "root"
  ) {
    delete info[com_date];
    localStorage.setItem("comment", JSON.stringify(info));
    refreshComDiv();
  } else {
    alert("你不是评论发表人！");
  }
}

//刷新评论区
function refreshComDiv() {
  const com_box = document.querySelector(".com_box");
  com_box.innerHTML =
    '<h3>最新评论<span id="illustrate">(<i>说明...</i>)</span></h3>';
  com_box.innerHTML +=
    '<div class="illustrateDiv"><p>本页面采用localStorage技术保存记录，当您更换浏览器时，记录将会清除</p><p>当您首次加载页面时，页面会自动载入初始评论，这是正常现象</p><p>若您希望删除这些评论，可以登录root账户管理页面</p></div>';
  refreshCom();
  reCatch();
}
//刷新部分评论
function refreshCom() {
  let keyList = [];
  for (let val in info) {
    keyList.push(val);
  }
  keyList.reverse();
  len = keyList.length > 2 ? 3 : keyList.length;
  for (let i = 0; i < len; i++) {
    let main = document.createElement("div");

    let left = document.createElement("div");
    let user_icon = document.createElement("span");
    let userName = document.createElement("p");

    let right = document.createElement("div");
    let text = document.createElement("p");
    let score = document.createElement("span");
    let time = document.createElement("span");
    let del = document.createElement("span");

    // 分配内容
    user_icon.innerHTML = info[keyList[i]].name.charAt(0).toUpperCase();
    userName.innerHTML = info[keyList[i]].name;
    text.innerHTML = info[keyList[i]].com;
    score.innerHTML = "评价：" + info[keyList[i]].score;
    time.innerHTML = keyList[i];
    del.innerHTML = "删除";

    //分配class
    main.classList.add("main", "clean");
    left.classList.add("left");
    user_icon.classList.add("user_icon");
    userName.classList.add("com_userName");
    right.classList.add("right");
    text.classList.add("com_text");
    score.classList.add("com_score");
    time.classList.add("com_time");
    del.classList.add("com_del");

    //del
    del.setAttribute("onclick", `del_com('${keyList[i]}')`);

    //设置从属
    left.appendChild(user_icon);
    left.appendChild(userName);
    right.appendChild(text);
    right.appendChild(score);
    right.appendChild(time);
    right.appendChild(del);
    main.appendChild(left);
    main.appendChild(right);

    com_box.appendChild(main);
  }

  // 显示更多
  let com_more = document.createElement("div");
  com_more.classList.add("com_more");
  com_more.innerHTML = '<a href="forum.html">查看全部评论...>></a>';
  if (keyList.length != 0) {
    com_box.appendChild(com_more);
  } else {
    //没有评论
    let not_com = document.createElement("div");
    not_com.classList.add("not_com");
    not_com.innerHTML = "暂时还没有评论哦";
    com_box.appendChild(not_com);
  }
}

// textarea自适应高度
document
  .querySelector(".com_top")
  .firstElementChild.addEventListener("input", () => {
    const com_area = document.querySelector(".com_top").firstElementChild;
    const text_count_area = document.getElementById("text_count_now");

    count = com_area.value.length;
    text_count_area.innerHTML = count;

    com_area.scrollTop = 0;
    if (com_area.scrollHeight > 142) {
      com_area.style.height = "142px";
      com_area.style.height = com_area.scrollHeight + 5 + "px";

      //   text_count_area.parentElement.style.bottom =
      //     52 - (com_area.scrollHeight + 5 - 142) + 6 + "px";

      com_area.parentElement.style.height = "190px";
      com_area.parentElement.style.height =
        190 + (com_area.scrollHeight + 5 - 142) - 6 + "px";
    }
  });
