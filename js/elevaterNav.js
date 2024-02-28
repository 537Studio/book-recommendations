const dtDiv = document.querySelector(".elevaterNav");
const dtList = document.querySelectorAll(".elevaterNav li");

const main = document.querySelector(".container").offsetTop;
const introHei = document.querySelector(".introduction").offsetTop + main;
const authorInfoHei = document.querySelector(".author_info").offsetTop + main;
const moreBookHei = document.querySelector(".more_book").offsetTop + main;
const reasonHei = document.querySelector(".reason").offsetTop + main;
const commnetHei = document.querySelector(".comment").offsetTop + main;
// 以上的数组
positionList = [introHei, authorInfoHei, moreBookHei, reasonHei, commnetHei];

function dtPos() {
  const scrollTop = document.documentElement.scrollTop;
  const nowColor = document.querySelector(".elevaterNav .eleText-orange");
  dtDiv.style.top = `${scrollTop + 140}px`;
  if (scrollTop >= introHei - 300) {
    dtDiv.style.opacity = 1;
    dtDiv.style.visibility = "visible";
  } else {
    dtDiv.style.opacity = 0;
    dtDiv.style.visibility = "hidden";
  }

  if (nowColor) {
    nowColor.classList.remove("eleText-orange");
  }
  if (scrollTop >= commnetHei) {
    dtList[5].classList.add("eleText-orange");
  } else if (scrollTop >= reasonHei) {
    dtList[4].classList.add("eleText-orange");
  } else if (scrollTop >= moreBookHei) {
    dtList[3].classList.add("eleText-orange");
  } else if (scrollTop >= authorInfoHei) {
    dtList[2].classList.add("eleText-orange");
  } else if (scrollTop >= introHei - 300) {
    dtList[1].classList.add("eleText-orange");
  }
}
window.addEventListener("scroll", dtPos);

dtList[0].addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

//非要用事件委托or中间有穿插的话，可以使用自定义属性做if
for (let i = 1; i < dtList.length; i++) {
  dtList[i].addEventListener("click", (e) => {
    console.log(e);
    document.documentElement.scrollTop = positionList[i - 1];
  });
}
