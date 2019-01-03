let player = {
  hp: 100,
  dmg: 10
}

let enemy = {
  hp: 110,
  dmg: 10
}

//arrow-button fire-arrow-button rain-of-arrow-button cold-arrow-button

let attack1 =  document.getElementById('attack1');
let attack2 = document.getElementById('attack2');
let attack3 = document.getElementById('attack3');
let attack4 = document.getElementById('attack4');

  const attackFunction1 = () => {
    let messageToPlayer = document.getElementById('msgToPlayer');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    printToScreen();
      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;
      messageToPlayer.innerText = "Opponent is about to strike";
      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";
      //setTimeout(() => )

  }
  const attackFunction2 = () => {
    let messageToPlayer = document.getElementById('msgToPlayer');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    printToScreen();
      attack1.disabled = true;
      /*attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;*/
      messageToPlayer.innerText = "Opponent is about to strike";
      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";
      //setTimeout(() => )
  }
  const attackFunction3 = () => {
    let messageToPlayer = document.getElementById('msgToPlayer');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    printToScreen();
      attack1.disabled = true;
      /*attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;*/
      messageToPlayer.innerText = "Opponent is about to strike";
      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";
      //setTimeout(() => )

  }
  const attackFunction4 = () => {
    let messageToPlayer = document.getElementById('msgToPlayer');

    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    console.log(playerAttack);
    enemy.hp -= playerAttack;
    printToScreen();
      attack1.disabled = true;
      attack2.disabled = true;
      attack3.disabled = true;
      attack4.disabled = true;

      //messageToPlayer.innerText = "Opponent strike you for "+ motståndare.skada +" damage";

      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg);
        player.hp -= enemyAttack;
        messageToPlayer.innerText = "Your opponent strikes you for "+ enemyAttack +" damage!";
        console.log(enemyAttack);
          printToScreen();
          attack1.disabled = false;
          attack2.disabled = false;
          attack3.disabled = false;
          attack4.disabled = false;
      }, 1500 );

  }


const printToScreen = () => {
  document.getElementById('enemy-hp').innerText =
  enemy.hp;

  document.getElementById('player-hp').innerText =
  player.hp;
}

printToScreen();
