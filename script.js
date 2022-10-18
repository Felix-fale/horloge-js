const horloge = function () {
  let date = new Date();
  // console.log(date);

  let heures = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();

  // console.log(secondes);

  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let affichage = heures + ":" + minutes + ":" + secondes;
  // console.log(affichage);
  document.querySelector("#horloge").innerText = affichage;
};

window.setInterval(horloge, 1000);
