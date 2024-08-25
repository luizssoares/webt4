const displayedImage = document.querySelector(".displayed-img");   
const thumbBar = document.querySelector(".thumb-bar");             

const btn = document.querySelector("button"); 
const telaDeFundo = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const images = ["pic01.jpg", "pic02.jpg", "pic03.jpg", "pic04.jpg", "pic05.jpg"];

/* Looping through images */

function trocaImg(event) {
  displayedImage.src = event.target.src;
}

for (var i = 0; i < images.length; i++) {
  var image = images[i];
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/" + image);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", trocaImg);
}

/* Wiring up the Darken/Lighten button */

  function escurecerOuClarear () {
    const classeDoBotao = btn.getAttribute("class");

      if (classeDoBotao === "dark") {
        btn.setAttribute("class","light");
        btn.textContent = "Claro";
        telaDeFundo.style.backgroundColor = "rgba(0,0,0,0.5)";
      } else {
        btn.setAttribute("class","dark");
        btn.textContent = "Escuro";
        telaDeFundo.style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
