import { Vector } from "./vector.js"

export class TextGame{
    // Give a reference to the parent that will house the game space
    constructor(parent, height, width){
        this.size = new Vector(height, width)
        this.screen = document.createElement("pre")
        this.screen.id = "game-screen"
        this.content = []
        for (let i = 0; i < height; i ++){
            this.content [i] = []
            for (let j = 0; j < width; j++){
                this.content[i].push(" ")
            }
            this.content[i].push("\n")
        }
        parent.appendChild(this.screen)
        this.set_value(new Vector(5,5), "2")
        this.fill("0")
        this.update_screen()
    }

    fill(char){
        for (let i = 0; i < this.size.y; i ++){
            for (let j = 0; j < this.size.x; j++){
                this.content[i][j] = (char)
            }
        }
    }

    update_screen(){
        let rows = []
        for (let i = 0; i < this.size.x; i ++){
            rows.push( this.content [i].join('') )
        }
        this.screen.textContent = rows.join('')
    }


    get_value(pos){
        return this.content[ pos.y ][ pos.x ]
    }

    // Input should only be one character!
    set_value(pos, char){
        this.content [pos.y] [ pos.x] = char
    }
}

