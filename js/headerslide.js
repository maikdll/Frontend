window.addEventListener("scroll", function(){
    var header = document.querySelector(".nav");
    var banner = document.querySelector(".banner");

    const scrollPosition = window.scrollY;

    header.classList.toggle("scrolled", scrollPosition > 0);
    if (scrollPosition > 150) {
        banner.classList.add("banner--scroll");
      } else {
        banner.classList.remove('banner--scroll');
      }


})


function changeColor(color) {
  var image = document.getElementById("shoe-image");
  if (color === "white") {
      image.src = "img/air-max-97-herrenschuh-nsRddC-PhotoRoom.png-PhotoRoom.png";
  } else if (color === "black") {
      image.src = "img/air-max-97-black-PhotoRoom.png-PhotoRoom.png";
  }
}


function changeColor2(color) {
  var image = document.getElementById("shoe-image2");
  if (color === "white2") {
      image.src = "img/air-max-plus-herrenschuh-GvD2Ns-PhotoRoom.png-PhotoRoom.png";
  } else if (color === "black2") {
      image.src = "img/air-max-plus-herrenschuh-SzVGZR-PhotoRoom.png-PhotoRoom.png";
  }
}



