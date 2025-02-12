import { TextGame } from "./enginePackage/textEngine.js"
import { TopDownGame } from "./topDownGame.js"
import { Vector } from "./enginePackage/vector.js"

const gameHolder = document.getElementById("game-holder")
let height = 100
let width = 100

let tilemap = [
    [ 'a','a','a','a','a',],
    [ 'a','a','a','a','a',],
    [ 'a','a','e','a','a',],
    [ 'a','a','a','a','a',],
    [ 'a','a','a','a','a',],
]


const game = new TopDownGame(gameHolder, width, height, 5, 5)
game.configureWithMap(tilemap)
game.render()


document.addEventListener('keypress', function(event) {
    if(event.key == 'w') {
        game.moveCamerav( new Vector(0,-1) )
    }
    if(event.key == 'a') {
        game.moveCamerav( new Vector(-1,0) )
    }
    if(event.key == 's') {
        game.moveCamerav( new Vector(0,1) )
    }
    if(event.key == 'd') {
        game.moveCamerav( new Vector(1,0) )
    }
});