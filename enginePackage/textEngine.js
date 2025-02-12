import { Vector } from "./vector.js"

export class TextGame{
    // Give a reference to the parent that will house the game space
    constructor(parent, width, height){
        this.size = new Vector(width, height)
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
        this.fill("0")
        this.update_screen()
    }

    set_background_color(color){
        this.screen.style.backgroundColor = color
    }

    set_text_color(color){
        this.screen.style.color = color
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
        for (let i = 0; i < this.size.y; i ++){
            rows.push( this.content [i].join('') )
        }
        this.screen.textContent = rows.join('')
    }


    get_value(pos){
        return this.content[ pos.y ][ pos.x ]
    }

    // Input should only be one character!
    set_value(pos, char){
        this.content [ pos.y ] [ pos.x ] = char
    }
}

