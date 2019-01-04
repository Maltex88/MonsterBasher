let player = {
  hp: 100,
  dmg: 10,
  Abillity1: "Arrow",
  Abillity2: "Fire Arrow",
  Abillity3: "Lightning Arrow",
  Abillity4: "Cold Arrow"
}
let enemy = {
  hp: 110,
  dmg: 10
}


let attackFunction1 = 0;
let attackFunction2 = 0;
let attackFunction3 = 0;
let attackFunction4 = 0;

startFight.innerText = "" + "Go into Battle!!" + "";


const startFightFunction = () => {

  fightBox.hidden = false;
  startFight.innerText = "" + "Run Away!" + "";
  let attack1 =  document.getElementById('attack1');
  let attack2 = document.getElementById('attack2');
  let attack3 = document.getElementById('attack3');
  let attack4 = document.getElementById('attack4');


  attack1.innerText = ""+ player.Abillity1 +"";
  attack2.innerText = ""+ player.Abillity2 +"";
  attack3.innerText = ""+ player.Abillity3 +"";
  attack4.innerText = ""+ player.Abillity4 +"";


  attackFunction1 = () => {
    let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
    let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
    //Give the player attack information, maybe later make a combatlog?

    //Players Combat starts
    let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
    //hits the target, change the + 5 for more or less dmg abilitys
    enemy.hp -= playerAttack;
    messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
    printToScreen();
    if (isGameOver(enemy.hp)){
      document.getElementById('enemy-hp').innerText = 0;
      messageToPlayerAttacked.innerText = "You have slain the enemy!";
      whenGameIsOver();
    }
      attackDisable();
    //Players Combat ends

    //enemy combat start
      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 50);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "Your opponent strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          if (isGameOver(player.hp)){
            document.getElementById('player-hp').innerText = 0;
            messageToPlayerAttacked.innerText = "You have died in battle!";

          }
          attackEnable();
      }, 500 /*valu to change time it takes for combat*/);

  }
   attackFunction2 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity2 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = 0;
       messageToPlayerAttacked.innerText = "You have slain the enemy!";
       whenGameIsOver();
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 50);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "Your opponent strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText = 0;
             messageToPlayerAttacked.innerText = "You have died in battle!";

           }
           attackEnable();
       }, 500 /*valu to change time it takes for combat*/);

  }
   attackFunction3 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity3 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = 0;
       messageToPlayerAttacked.innerText = "You have slain the enemy!";
       whenGameIsOver();
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 50);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "Your opponent strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText = 0;
             messageToPlayerAttacked.innerText = "You have died in battle!";

           }
           attackEnable();
       }, 500 /*valu to change time it takes for combat*/);


  }
   attackFunction4 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike your opponent with your " + player.Abillity4 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = 0;
       messageToPlayerAttacked.innerText = "You have slain the enemy!";
       whenGameIsOver();
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 50);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "Your opponent strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText = 0;
             messageToPlayerAttacked.innerText = "You have died in battle!";

           }
           attackEnable();
       }, 500 /*valu to change time it takes for combat*/);


  }


};


const attackDisable = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = true;
  }
};

const attackEnable = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = false;
  }
};


   //let attack1 =  document.getElementById('attack1');




const isGameOver = (hp) => {
  return hp <= 0;
}
const whenGameIsOver = () => {
  return
  fightBox.hidden = false;
  attack1.disabled = false;
  attack2.disabled = false;
  attack3.disabled = false;
  attack4.disabled = false;

};

const printToScreen = () => {
  document.getElementById('enemy-hp').innerText =
  enemy.hp;

  document.getElementById('player-hp').innerText =
  player.hp;
}

printToScreen();
/*Write out new value of enemy and player*/
