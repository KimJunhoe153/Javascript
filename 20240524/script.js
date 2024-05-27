// const container = document.querySelector(".container");
// console.log;
// const divArray = document.querySelectorAll("div");
// divArray.forEach((div) => console.log(div));
// const cardArray = document.querySelectorAll(".namecard");
// cardArray /
//   forEach((card) => {
//     card.addEventListener("click", () => {});
//   });

var container = document.querySelector(".container");
var namecard = document.querySelectorAll(".namecard");
namecard.addEventListener("mousemove", function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  var rotateY = (-1 / 5) * x + 20;
  var rotateX = (4 / 30) * y - 20;

  namecard.style = `background-position : ${x / 5 + y / 5}%; filter : opacity(${
    x / 200
  }) brightness(1.2)`;

  container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener("mouseout", function () {
  namecard.style = "filter : opacity(0)";
  container.style =
    "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
});
