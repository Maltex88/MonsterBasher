let startFight;
let fromTownToBattle;
let toTownFromBattle;
let playerNav;
let enemysHp;
let nextlvl = 100; //If you want to raise exp needed for lvl , raise this.
/*Player / enemy Object*/
let player = {
  name: "",
  class: "",
  hp: 100,
  dmg: 40,
  Abillity1: "",
  Abillity2: "",
  Abillity3: "",
  items: {},
  lvl: 1, //fixa ett lvlup system..
  exp: 0,
  enemysKilled: 0,
}
let enemy = {
  name: "",
  hp: 0,
  dmg: 0,
  exp: 0,
  lvlBracket: 0,
  enemyAbillity1: "",
  enemyAbillity2: "",
  enemyAbillity3: "",
  enemyAbillity4: "",
  armor: "",
  resistens: "",
  loot: [], //loot system, random 1-100
}

/*Player / enemy Object*/

/*click functions to load at start*/
$(document).ready(() => {


  spellTapInventory = document.getElementById('spellTapInventory')
  startFight = document.getElementById('startFight');
  fromTownToBattle = document.getElementById('fromTownToBattle')
  toTownFromBattle = document.getElementById('toTownFromBattle')
  logout = document.getElementById('log-out-btn')
  playerNav = document.getElementById('playerNav')
  backToSpell = document.getElementById('Back')
  /*testing inventory*/
  hpPot = document.getElementById('inventoryHp')
  manaPot = document.getElementById('inventoryMana')
  back = document.getElementById('Back')
  useItem = document.getElementById('inventory5')
  /*testing inventory*/
  /*testing*/
  playerLvl = document.getElementById('lvl')
  playerName = document.getElementById('characterBioName')
  playerClass = document.getElementById('class')
  monstersKilled = document.getElementById('monstersKilled')
  startFight.innerText = "" + "Go into Battle!!" + "";

  $('#createCharacter').click(function(){
    player.name = $("#inputName").val();
    charactersNameMeny.hidden = true;
    charactersclassMeny.hidden = false;
    selectedName.innerText = "The name of our Hero is " + player.name + ", now select your class! "
  });
  $('#selectCharacterClassWarrior').click(function(){
    selectedClass.innerText = "You have selected the way of the Warrior, " + player.name + ""
    document.getElementById("playerImg").src = "picture/knight_idle.gif";
    player.class = "Warrior";
    player.Abillity1 = "Hack";
    player.Abillity2 = "Slash";
    player.Abillity3 = "Slam";
    player.items = "Items";
    startFight.hidden = false;
    goToTown.hidden = false;
    enemysHp = enemy.hp;
  });
  $('#selectCharacterClassMage').click(function(){
    selectedClass.innerText = "You have selected the wise Mage"
    document.getElementById("playerImg").src = "picture/ozz.gif";
    player.class = "Mage";
    player.Abillity1 = "Fire boll";
    player.Abillity2 = "Ice Blast";
    player.Abillity3 = "Lightning bolt";
    player.items = "Items";
    startFight.hidden = false;
    goToTown.hidden = false;

  });
  $('#selectCharacterClassArcher').click(function(){
    selectedClass.innerText = "You have selected the agile Archer"
    document.getElementById("playerImg").src = "picture/Hunter.gif";
    player.class = "Archer";
    player.Abillity1 = "Flame Arrow";
    player.Abillity2 = "Stun Arrow";
    player.Abillity3 = "Piercing Arrow";
    player.items = "Items";
    startFight.hidden = false;
    goToTown.hidden = false;


  });
  $('#goToTown, #toTownFromBattle').click(function(){
    charCreateAndBattle.hidden = true;
    $('#playerNav').show();
    playerName.innerText = ""+ player.name +"";
    playerLvl.innerText = "Lvl: "+ player.lvl +"";
    playerClass.innerText = "Class: "+ player.class +"";
    monstersKilled.innerText = "Enemys killed: "+ player.enemysKilled +""

  });

  $('#Back').click(function(){
    spellsShow();
    itemsHide();

  });
  $('#attack1').click(function(){
    msgToPlayer();
    enemyAttacked1();
     isThisAWarrior();

      if (isGameOver(enemy.hp)){
        enemyKilled();
        playerLvlUp();
        whenGameIsOver();
        fightMoreEnemys();
        return;
      }


    attackDisable();
    setTimeout(() => {

      enemyAttack();

        if (isGameOver(player.hp)){
          thePlayerHaveDied();
          whenGameIsOver();
          return;
        }

      attackEnable();
      }, 1500);
  });
  $('#attack2').click(function(){
    msgToPlayer();
    enemyAttacked2();
    isThisAWarrior();
      if (isGameOver(enemy.hp)){
        enemyKilled();
        playerLvlUp();
        whenGameIsOver();
        fightMoreEnemys();
        items.hidden = true;
        return;
      }
    attackDisable();
    setTimeout(() => {
      enemyAttack();
        if (isGameOver(player.hp)){
          thePlayerHaveDied();
          whenGameIsOver();
          return;
        }
      attackEnable();
      }, 1500);
  });
  $('#attack3').click(function(){
    msgToPlayer();
    enemyAttacked3();
    isThisAWarrior();
      if (isGameOver(enemy.hp)){
        enemyKilled();
        playerLvlUp();
        whenGameIsOver();
        fightMoreEnemys();
        items.hidden = true;
        return;
      }
    attackDisable();
    setTimeout(() => {
      enemyAttack();
        if (isGameOver(player.hp)){
          thePlayerHaveDied();
          whenGameIsOver();
          return;
        }
      attackEnable();
      }, 1500);
  });
  $('#items').click(function(){
    spellsHidden();
    itemsShow();
    console.log(enemysHp)
    console.log(enemy);
    newFight.hidden = true;
    toTownFromBattle.hidden = true;
    logout.hidden = true;

  });
  $('#startFight, #newFight, #fromTownToBattle').click(function(){
    spellsShow();
    itemsHide();
    battleChanges();
    attackEnable();
    monsterMakerMadness();
    printToScreen();
});

function isThisAWarrior(){
  if(player.class === "Warrior") {
    return warriorMoves();
}
}
function warriorMoves(){
        document.getElementById("playerImg").src = "picture/knight_attack.gif";
        document.getElementById('player').id = 'playerMove';
  if(player.calss = "warrior"){
      setTimeout(() => {
          document.getElementById("playerImg").src = "picture/knight_idle.gif";
          document.getElementById('playerMove').id = 'player';
        }, 1000)
      }
}
  printToScreen();
})
/*click functions to load at start*/

/*functions*/
/*display element functions*/
let battleChanges = () => {
  charCreateAndBattle.hidden = false;
  msgToPlayeradvancing.innerText = "";
  msgToPlayerAttacked.innerText = "";
  msgToPlayerAttack.innerText = "";
  selectedClass.innerText = "";
  newFight.hidden = true;
  goToTown.hidden = true;
  playerNav.hidden = true;
  charactersclassMeny.hidden = true;
  charactersNameMeny.hidden = true;
  startFight.hidden = true;
  toTownFromBattle.hidden = true;
  contanierHidden.hidden = false;
  let attack1 =  document.getElementById('attack1');
  let attack2 = document.getElementById('attack2');
  let attack3 = document.getElementById('attack3');
  let items = document.getElementById('items');
  attack1.innerText = ""+ player.Abillity1 +"";
  attack2.innerText = ""+ player.Abillity2 +"";
  attack3.innerText = ""+ player.Abillity3 +"";
  items.innerText = ""+ player.items +"";
}
let spellsHidden = () => {
  attack1.hidden = true;
  attack2.hidden = true;
  attack3.hidden = true;
  items.hidden = true;

}
let spellsShow = () => {
  attack1.hidden = false;
  attack2.hidden = false;
  attack3.hidden = false;
  items.hidden = false;
  logout.hidden = true;
}
let itemsHide = () => {
  manaPot.hidden = true;
  hpPot.hidden = true;
  useItem.hidden = true;
  back.hidden = true;
  logout.hidden = true;
}
let itemsShow = () => {
  manaPot.hidden = false
  hpPot.hidden = false
  useItem.hidden = false
  back.hidden = false
  logout.hidden = true;
}
let combatDone = () => {
  newFight.hidden = false;
  attack1.hidden = true;
  attack2.hidden = true;
  attack3.hidden = true;
  back.hidden = true;
  items.hidden = true;
  logout.hidden = false;
  toTownFromBattle.hidden = false;
}
let enemyAttack = () => {
  let enemyAttack = Math.floor(Math.random()  * enemy.dmg + 5);
  player.hp -= enemyAttack;
  msgToPlayerAttacked.innerText = "The "+ enemy.name +" strikes you for "+ enemyAttack +" damage!";
  printToScreen();
  /*display element functions*/
} //calculates enemy attack
let playerLvlUp = () => {
  if (player.exp >= nextlvl) {
    player.lvl+=Math.floor(player.exp/nextlvl);// if xp is 1000, two levels up
    player.exp=player.exp%100
    nextlvl += 100;
    msgToPlayeradvancing.innerText = "You have reached lvl: "+ player.lvl +"";
  }
};  //calculates player lvlup and type it in msgToPlayeradvancing
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
      Image: "url('picture/Bash_bransh_monster.gif')",
       name: "Rotten rot",
       hp: 15,
       dmg: 10,
       exp: 50,
       Abillity1: "Bite",
       Abillity2: "Claw",
       Abillity3: "Pounch",
       Abillity4: "Flee"
   },
   {
      name: "Bear",
      hp: 15,
      dmg: 10,
      exp: 75,
      Abillity1: "Bite",
      Abillity2: "Claw",
      Abillity3: "Bear Slap",
      Abillity4: "Flee"
  },
  {
     name: "Hawk",
     hp: 15,
     dmg: 20,
     exp: 30,
     Abillity1: "Peck",
     Abillity2: "Dive",
     Abillity3: "Grip",
     Abillity4: "Flee"
  },
  {
     name: "Spider",
     Image: "url('picture/spoooder.gif')",
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

    document.getElementById("enermy").style.backgroundImage = rand.Image;
    enemy.name = rand.name;
    enemy.hp = rand.hp;
    enemy.dmg = rand.dmg;
    enemy.exp = rand.exp
    enemy.enemyAbillity1 = rand.enemyAbillity1
    enemy.enemyAbillity2 = rand.enemyAbillity2
    enemy.enemyAbillity3 = rand.enemyAbillity3
    enemy.enemyAbillity4 = rand.enemyAbillity4

     enemysHp = enemy.hp;
}; //list of monsters , save enemy as a random monster with given stats
let enemyAttacked1 = () => {
  let playerAttack = Math.floor(Math.random()  * player.dmg + 5); //maybe make a function that calculates player dmg based on class.
  enemy.hp -= playerAttack;
  messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity1 + " ability and did "+ playerAttack +" damage!"
  printToScreen();
} //attack function spell 1
let enemyAttacked2 = () => {
  let playerAttack = Math.floor(Math.random()  * player.dmg + 5); //maybe make a function that calculates player dmg based on class.
  enemy.hp -= playerAttack;
  messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity2 + " ability and did "+ playerAttack +" damage!"
  printToScreen();
} //attack function spell 2
let enemyAttacked3 = () => {
  let playerAttack = Math.floor(Math.random()  * player.dmg + 5); //maybe make a function that calculates player dmg based on class.
  enemy.hp -= playerAttack;
  messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity3 + " ability and did "+ playerAttack +" damage!"
  printToScreen();
} //attack function spell 3
let enemyAttacked4 = () => {
  let playerAttack = Math.floor(Math.random()  * player.dmg + 5); //maybe make a function that calculates player dmg based on class.
  enemy.hp -= playerAttack;
  messageToPlayerAttack.innerText = "You strike the "+ enemy.name +" with your " + player.Abillity4 + " ability and did "+ playerAttack +" damage!"
  printToScreen();
} //attack function spell 4
let enemyKilled = () => {
  player.exp += enemy.exp;
  player.enemysKilled += 1;
  document.getElementById('enemy-hp').innerText = enemy.name +" "+ "0" +" Hp";
  messageToPlayerAttacked.innerText = "You have slain the "+ enemy.name +", the "+ enemy.name +" was worth " + enemy.exp +" experience points";
  enemysHp = 0;
  /*kod här */
  combatDone();


}; //when enemy dies , give player exp and display msg
let msgToPlayer = () => {
  messageToPlayerAttack = document.getElementById('msgToPlayerAttack');
  messageToPlayerAttacked = document.getElementById('msgToPlayerAttacked');
} //information to the player thru combatlog
let attackDisable = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = true;
  }
}; //disble attack buttons
let attackEnable = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = false;
  }
};
let thePlayerHaveDied = () => {
  document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";
  messageToPlayerAttacked.innerText = "You have died in battle!";
} //enables attack buttons
let isGameOver = (hp) => {
  return hp <= 0;
};
let whenGameIsOver = () => {
  var disableAllButtons = document.querySelectorAll('[id^="attack"]');
  for (var i = 0; i < disableAllButtons.length; i++) {
    disableAllButtons[i].disabled = true;
}
};
let fightMoreEnemys = () => {

   monsterMakerMadness();

}; //fight another random enemy
const printToScreen = () => {


  document.getElementById('enemy-hp').innerText =
  enemy.name +" "+ enemy.hp +" Hp";

  document.getElementById('player-hp').innerText =
  player.name +" Lvl "+ player.lvl +" "+ player.class +" "+ player.hp  +" Hp";


  if (isGameOver(player.hp))
    document.getElementById('player-hp').innerText =  player.name +" "+ "0" +" Hp";

  if (isGameOver(enemy.hp))
    document.getElementById('enemy-hp').innerText =  enemy.name +" "+ "0" +" Hp";
};
/*functions*/
