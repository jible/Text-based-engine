import { TextGame } from "./enginePackage/textEngine.js"
import { TopDownGame } from "./topDownGame.js"
import { Vector } from "./enginePackage/vector.js"
import { GridObj } from "./topDownGame.js"

const gameHolder = document.getElementById("game-holder")
let height = 20
let width = 20

let tilemap = [
    [ 'a','a','a','a','a',],
    [ 'a','a','a','a','a',],
    [ 'a','a','e','a','a',],
    [ 'a','a','a','a','a',],
    [ 'a','a','a','a','a',],
]


const gameA = new TopDownGame(gameHolder, width, height, 5, 5)
gameA.configureWithMap(tilemap)
gameA.render()

let playerA = new GridObj(gameA.map,new Vector(0,0), '0')
gameA.render()

document.addEventListener('keypress', function(event) {
    if(event.key == 'w') {
        playerA.movev( new Vector(0,-1) )
        gameA.render()

    }
    if(event.key == 'a') {
        playerA.movev( new Vector(-1,0) )
        gameA.render()

    }
    if(event.key == 's') {
        playerA.movev( new Vector(0,1) )
        gameA.render()

    }
    if(event.key == 'd') {
        playerA.movev( new Vector(1,0) )
        gameA.render()

    }
});


const gameB = new TopDownGame(gameHolder, width, height, 5, 5)
gameB.configureWithMap(tilemap)
gameB.render()

let playerB = new GridObj(gameB.map,new Vector(0,0), 'E')
gameB.render()

document.addEventListener('keypress', function(event) {
    if(event.key == 'w') {
        gameB.moveCamerav( new Vector(0,-1) )
        gameB.render()

    }
    if(event.key == 'a') {
        gameB.moveCamerav( new Vector(-1,0) )
        gameB.render()

    }
    if(event.key == 's') {
        gameB.moveCamerav( new Vector(0,1) )
        gameB.render()

    }
    if(event.key == 'd') {
        gameB.moveCamerav( new Vector(1,0) )
        gameB.render()

    }
});