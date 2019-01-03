let spelare = {
  hp: 100,
  skada: 10
}

let motståndare = {
  hp: 110,
  skada: 10
}

//arrow-button fire-arrow-button rain-of-arrow-button cold-arrow-button

let arrow1 = 0;
let arrow2 = 0;
let arrow3 = 0;
let arrow4 = 0;

  const pil = () => {
    arrow1 = document.getElementById('arrow');
    arrow2 = document.getElementById('fire');
    arrow3 = document.getElementById('rain');
    arrow4 = document.getElementById('cold');

    let spelareAttack = Math.floor(Math.random()  * spelare.skada + 5);
    console.log(spelareAttack);
    motståndare.hp -= spelareAttack;
    printToScreen();
      arrow1.disabled = true;
      arrow2.disabled = true;
      arrow3.disabled = true;
      arrow4.disabled = true;

  }
  const eld = () => {
    arrow1 = document.getElementById('arrow');
    arrow2 = document.getElementById('fire');
    arrow3 = document.getElementById('rain');
    arrow4 = document.getElementById('cold');

    let spelareAttack = Math.floor(Math.random()  * spelare.skada);
    console.log(spelareAttack);
    motståndare.hp -= spelareAttack;
    printToScreen();
      arrow1.disabled = true;
      arrow2.disabled = true;
      arrow3.disabled = true;
      arrow4.disabled = true;

  }
  const regn = () => {
    arrow1 = document.getElementById('arrow');
    arrow2 = document.getElementById('fire');
    arrow3 = document.getElementById('rain');
    arrow4 = document.getElementById('cold');

    let spelareAttack = Math.floor(Math.random()  * spelare.skada );
    console.log(spelareAttack);
    motståndare.hp -= spelareAttack;
    printToScreen();
      arrow1.disabled = true;
      arrow2.disabled = true;
      arrow3.disabled = true;
      arrow4.disabled = true;

  }
  const köld = () => {
    arrow1 = document.getElementById('arrow');
    arrow2 = document.getElementById('fire');
    arrow3 = document.getElementById('rain');
    arrow4 = document.getElementById('cold');

    let spelareAttack = Math.floor(Math.random()  * spelare.skada );
    console.log(spelareAttack);
    motståndare.hp -= spelareAttack;
    printToScreen();
      arrow1.disabled = true;
      arrow2.disabled = true;
      arrow3.disabled = true;
      arrow4.disabled = true;


  }


const printToScreen = () => {
  document.getElementById('motståndarens-hälsa').innerText =
  motståndare.hp;

  document.getElementById('din-hälsa').innerText =
  spelare.hp;
}

printToScreen();
