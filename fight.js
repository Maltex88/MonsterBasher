let player = {
  name: "Sven svensson", //gör playername till input från där man anger ett character name
  class: "Archer", //gör en playerclass som ger denna ett value
  hp: 100,
  dmg: 40,
  Abillity1: "Arrow",
  Abillity2: "Fire Arrow",
  Abillity3: "Lightning Arrow", //gör abilitys baserat på character pick
  Abillity4: "Cold Arrow",
  characterlvl: 0, //fixa ett lvlup system..
  characterExp: 0,
}
let enemy = {
  name: "",
  hp: 0,
  dmg: 0,
  lvlBracket: 0,
  enemyAbillity1: "",
  enemyAbillity2: "",
  enemyAbillity3: "",
  enemyAbillity4: "",
  armor: "",
  resistens: "",
  loot: [], //loot system, random 1-100
}

let monsterMakerMadness = () => {
  let monsterList = [
     {
        name: "Rat",
        hp: 15,
        dmg: 5,
        exp: 5,
        Abillity1: "Bite",
        Abillity2: "Claw",
        Abillity3: "Tail Whip",
        Abillity4: "Flee"
    },
    {
       name: "Tiger",
       hp: 100,
       dmg: 10,
       exp: 50,
       Abillity1: "Bite",
       Abillity2: "Claw",
       Abillity3: "Pounch",
       Abillity4: "Flee"
   },
   {
      name: "Bear",
      hp: 250,
      dmg: 10,
      exp: 75,
      Abillity1: "Bite",
      Abillity2: "Claw",
      Abillity3: "Bear Slap",
      Abillity4: "Flee"
  },
  {
     name: "Hawk",
     hp: 50,
     dmg: 20,
     exp: 30,
     Abillity1: "Peck",
     Abillity2: "Dive",
     Abillity3: "Grip",
     Abillity4: "Flee"
  },
  {
     name: "Spider",
     hp: 5,
     dmg: 5,
     exp: 5,
     Abillity1: "Bite",
     Abillity2: "Claw",
     Abillity3: "Tail Whip",
     Abillity4: "Flee"
  },

  ];
  let rand = monsterList[Math.floor(Math.random() * monsterList.length)];

  //for(i = 0; i < monsterList.length; i++)
    enemy.name = rand.name;
    enemy.hp = rand.hp;
    enemy.dmg = rand.dmg;
    enemy.enemyAbillity1 = rand.enemyAbillity1
    enemy.enemyAbillity2 = rand.enemyAbillity2
    enemy.enemyAbillity3 = rand.enemyAbillity3
    enemy.enemyAbillity4 = rand.enemyAbillity4
};


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
    messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
    printToScreen();
    if (isGameOver(enemy.hp)){
      document.getElementById('enemy-hp').innerText = enemy.name +" "+ "0" +" Hp";;
      messageToPlayerAttack.innerText = "You have slain the "+ enemy.name +"";
      whenGameIsOver();
      msgToPlayerAttacked.innerText = "";
      return;
    }
      attackDisable();
    //Players Combat ends

    //enemy combat start
      setTimeout(() => {
        let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 5);
        player.hp -= enemyAttack;
        msgToPlayerAttacked.innerText = "The "+ enemy.name +" strikes you for "+ enemyAttack +" damage!";

          printToScreen();
          if (isGameOver(player.hp)){
            document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";
            messageToPlayerAttacked.innerText = "You have died in battle!";

            whenGameIsOver();
            return;
          }
          attackEnable();
      }, 1500 /*valu to change time it takes for combat*/);

}
   attackFunction2 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = enemy.name +" "+ "0" +" Hp";;
       messageToPlayerAttack.innerText = "You have slain the "+ enemy.name +"";
       whenGameIsOver();
       msgToPlayerAttacked.innerText = "";
       return;
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 5);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "The "+ enemy.name +" strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";
             messageToPlayerAttacked.innerText = "You have died in battle!";

             whenGameIsOver();
             return;
           }
           attackEnable();
       }, 1500 /*valu to change time it takes for combat*/);


  }
   attackFunction3 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = enemy.name +" "+ "0" +" Hp";;
       messageToPlayerAttack.innerText = "You have slain the "+ enemy.name +"";
       whenGameIsOver();
       msgToPlayerAttacked.innerText = "";
       return;
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 5);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "The "+ enemy.name +" strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";
             messageToPlayerAttacked.innerText = "You have died in battle!";

             whenGameIsOver();
             return;
           }
           attackEnable();
       }, 1500 /*valu to change time it takes for combat*/);


  }
   attackFunction4 = () => {
     let messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
     let messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
     //Give the player attack information, maybe later make a combatlog?

     //Players Combat starts
     let playerAttack = Math.floor(Math.random()  * player.dmg + 5);
     //hits the target, change the + 5 for more or less dmg abilitys
     enemy.hp -= playerAttack;
     messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
     printToScreen();
     if (isGameOver(enemy.hp)){
       document.getElementById('enemy-hp').innerText = enemy.name +" "+ "0" +" Hp";;
       messageToPlayerAttack.innerText = "You have slain the "+ enemy.name +"";
       whenGameIsOver();
       msgToPlayerAttacked.innerText = "";
       return;
     }
       attackDisable();
     //Players Combat ends

     //enemy combat start
       setTimeout(() => {
         let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 5);
         player.hp -= enemyAttack;
         msgToPlayerAttacked.innerText = "The "+ enemy.name +" strikes you for "+ enemyAttack +" damage!";

           printToScreen();
           if (isGameOver(player.hp)){
             document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";
             messageToPlayerAttacked.innerText = "You have died in battle!";

             whenGameIsOver();
             return;
           }
           attackEnable();
       }, 1500 /*valu to change time it takes for combat*/);


  }


};

/*Disables/Enables buttons after you/enemy strike*/
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
/*Disables/Enables buttons after you/enemy strike*/


/*If enemy or player hp 0 or less, game over*/
const isGameOver = (hp) => {
  return hp <= 0;
}

/*iN PROGRESS..*/
const whenGameIsOver = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = true;
}
};



/*iN PROGRESS..*/
const printToScreen = () => {

  document.getElementById('enemy-hp').innerText =
  enemy.name +" "+ enemy.hp +" Hp";

  document.getElementById('player-hp').innerText =
  player.name +" "+ player.hp  +" Hp";


  if (isGameOver(player.hp)){
    document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";

  }
  if (isGameOver(enemy.hp)){
    document.getElementById('enemy-hp').innerText =  enemy.name +" "+ "0" +" Hp";

  }


};
monsterMakerMadness();
printToScreen();
/*Write out new value of enemy and player*/
