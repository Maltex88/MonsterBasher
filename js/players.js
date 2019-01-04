
//global function
let player;
let enemy;
//let reset_btn;
let kick_btn = document.querySelector('#attack-btn');
let shield_btn = document.querySelector('#shield-btn');

//PLAYER CONSTRUCTOR
        function Players(health, kick_power){
        this.health = health;
        this.kick_power = kick_power;
        }
 player = new Players(10,undefined);
 // enemy constructor
function Enemies (health,kick_power){
        this.health = health;
        this.kick_power = kick_power;

}

enemy = new Enemies(10,undefined);
 console.log(player);


 reset = () => {


};


 PlayerAttack = () => {
         let randomize = Math.floor(Math.random()*3);
         enemy.health -= randomize;
         console.log(randomize);

                if(enemy.health < 0.5){
                console.log('You won!');
                //
                // disable kick button here
                // show start fight button
                //reset game
                //reset player ability
                                  }



       //console.log(health);
       //console.log(power);

};

 PlayerDefend = () => {



};

 //reset_btn.addEventListener('click', reset );

 kick_btn.addEventListener('click', PlayerAttack);

 shield_btn.addEventListener('click', PlayerDefend);


