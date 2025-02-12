import { TextGame } from "./enginePackage/textEngine.js"
const gameHolder = document.getElementById("game-holder")
let height = 30
let width = 40

const game = new TextGame(gameHolder, width, height)