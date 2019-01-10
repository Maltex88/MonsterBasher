const SAVE_ = 'save';

let state1 = {
    player:player,
    enemy:enemy,
};
console.log(state1);


function save(state) {
    console.log('save');
    localStorage.setItem(SAVE_, JSON.stringify(state));
}

function load() {
    return JSON.parse(localStorage.getItem(SAVE_));
}


/***
localStorage.setItem('dude', 'Jeff Lebowski');

let val = localStorage.getItem('dude');
let GameState = {
    // player object here
} ;
//var player = { x: 4, y: 3 };
//var score = 10;
//It's relatively easy to save these variables with localStorage.


function save() {
    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('score', JSON.stringify(score));
}
// load
function load() {
    player = JSON.parse(localStorage.getItem('player'));
    score = JSON.parse(localStorage.getItem('score'));
}***/