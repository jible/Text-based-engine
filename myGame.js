import { TextGame } from "./enginePackage/textEngine.js"
const gameHolder = document.getElementById("game-holder")
let height = 10
let width = 10

const game = new TextGame(gameHolder, height, width)