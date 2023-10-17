const card = document.getElementById("card");
const like = document.querySelector("i");

card.addEventListener("dblclick", function () {
  like.style.transform = "scale(1)";
  like.style.opacity = "0.8";

  setTimeout(function () {
    like.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    like.style.transform = "scale(0)";
  }, 2000);
});
