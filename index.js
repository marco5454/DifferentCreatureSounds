var animalCount = document.querySelectorAll(".box").length;

console.log(animalCount);

for (var x = 0; x < animalCount; x++) {
  document.querySelectorAll(".btn")[x].addEventListener("click", function () {
    var initialSound = this.innerHTML;

    switch (initialSound) {
      case "meow":
        var catSounds = new Audio("animalSounds/cat.wav");
        catSounds.play();
        break;

      case "grr":
        var beastSounds = new Audio("animalSounds/beast.wav");
        beastSounds.play();
        break;

      case "zz":
        var beeSounds = new Audio("animalSounds/bee.wav");
        beeSounds.play();
        break;

      case "drr":
        var dragonSounds = new Audio("animalSounds/dragon.wav");
        dragonSounds.play();
        break;

      case "aw":
        var dogSounds = new Audio("animalSounds/dog.wav");
        dogSounds.play();
        break;

      case "me":
        var goatSounds = new Audio("animalSounds/goat.wav");
        goatSounds.play();
        break;

      case "kr":
        var hamsterSounds = new Audio("animalSounds/hamster.wav");
        hamsterSounds.play();
        break;

      case "mm":
        var monsterSounds = new Audio("animalSounds/monster.wav");
        monsterSounds.play();
        break;

      default:
        alert("No data found");
    }
  });
}
