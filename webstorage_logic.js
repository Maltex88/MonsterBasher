
let save_btn = document.getElementById('save-game-btn');
let load_btn = document.getElementById('load-game-btn');
let player_obj_state;
let enemy_obj_state;
let saved_char_btn = document.getElementById('btn-saved-char');


function saveData(){
       window.localStorage.setItem('playerObject',JSON.stringify(player));
       window.localStorage.setItem('EnemyObject', JSON.stringify(enemy));
    }

    //  <button id="btn-saved-char">Play as <span id="saved-char-name"></span></button>




function load_last_session(){
     player_obj_state  = JSON.parse(localStorage.getItem('playerObject'));
     enemy_obj_state  = JSON.parse(localStorage.getItem('EnemyObject'));
     document.getElementById('player-hp').innerText = player_obj_state.name +" Lvl "+ player_obj_state.lvl +" "+ player_obj_state.class +" "+ player_obj_state.hp  +" Hp";
     player.name = player_obj_state.name;
     player.class = player_obj_state.class;
     player.hp = player_obj_state.hp;
     player.dmg = player_obj_state.dmg;
     player.Abillity1 = player_obj_state.Abillity1;
     player.Abillity2 = player_obj_state.Abillity2;
     player.Abillity3 = player_obj_state.Abillity3;
     player.Abillity4 = player_obj_state.Abillity4;
     player.lvl = player_obj_state.lvl;
     player.exp = player_obj_state.exp;
     player.img = player_obj_state.img;

}


saved_char_btn.addEventListener('click' , play_as_saved_char);

function play_as_saved_char() {
    player_obj_state  = JSON.parse(localStorage.getItem('playerObject'));
    enemy_obj_state  = JSON.parse(localStorage.getItem('EnemyObject'));

    //  saved_char_name.innerText = player_obj_state.name;

    //console.log('test');

}

/**
 *
 *
 * let player = {
  name: "",
  class: "",
  hp: 100,
  dmg: 40,
  Abillity1: "",
  Abillity2: "",
  Abillity3: "",
  Abillity4: "",
  lvl: 1, //fixa ett lvlup system..
  exp: 0,
  img: ''

};
 *    let player_his =  document.getElementById('player-hp').innerText = player_obj_state.name +" Lvl "+ player_obj_state.lvl +" "+ player_obj_state.class +" "+ player_obj_state.hp  +" Hp";
 * <span id="player-hp">jk Lvl 1 Warrior 100 Hp</span>
 *
 *
 *
 *
 *
 * for( let i=0;  i < player_obj_state.length; i++){
        let save_key = player_obj_state.key(i);
        console.log(save_key + ': ' + player_obj_state.getItem(save_key));
    }




 * for(let key in enemy_obj_state ){
        if(enemy_obj_state .hasOwnProperty(key)){
            console.log(key + ' here is enemy');
        }
    }
 for(let key in player_obj_state ){
        if(player_obj_state.hasOwnProperty( key)){
            console.log(player_obj_state[key])

        }
    }
 * **/
