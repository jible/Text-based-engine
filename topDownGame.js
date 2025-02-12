import { TextGame } from "./enginePackage/textEngine.js";
import { Vector } from "./enginePackage/vector.js";

class Tile{
    constructor(){
        this.floor = null
        this.object = null
    }
}

class Map{
    constructor(size){
        this.size = size
        this.l = []
        for (let i = 0; i < size.y; i ++){
            for (let j = 0; j < size.x; j ++){
                this.l[ ( i * this.size.x) + j] = new Tile()
            }
        }
    }

    checkBounds(pos){
        return (
            pos.x >= 0 && pos.x < this.size.x &&
            pos.y >= 0 && pos.y <= this. size.y
        )
    }
    
    fill(char){
        for (let i = 0; i < this.l.length(); i ++){
            this.l[i].floor = char
        }
    }

    get(pos){
        if ( ! this.checkBounds(pos) ) { return null }
        return this.l[ ( pos.y * this.size.x) + pos.x]
    }
    set_floor(pos, value){
        if ( ! this.checkBounds(pos) ) { return null }
        this.l[ ( pos.y * this.size.x) + pos.x].floor = value
    }
    set_obj(pos, value){
        if ( ! this.checkBounds(pos) ) { return null }
        this.l[ ( pos.y * this.size.x) + pos.x].object = value
    }
}

class GridObj{
    constructor(map, pos, char){
        if (map.get(pos).char){
            console.error("cant add player to populated tile")
        }
        this.map = map
        this.pos = pos
        this.char = char
    }

    set(pos){
        if (map.get(pos).char){
            console.error("cant add player to populated tile")
        }
        this.map.set_obj(this.pos, null)
        this.pos = pos
        this.map.set_obj(this.pos, this)
    }
}


class TopDownGame{
    constructor(parent, screenWidth, screenHeight, worldWidth, worldHeight){
        // Centering camera at center
        this.cameraPos = new Vector(0,0)
        this.screenSize = new Vector(screenWidth, screenHeight)
        this.worldSize = new Vector(worldWidth, worldHeight)
        this.engine = new TextGame(parent, screenWidth, screenHeight)
        this.map = new Map(this.worldSize)
    }

    render(){
        let offset = new Vector(Math.floor(this.screenSize.x /2), Math.floor(this.screenSize.y /2) )
        let topLeft = this.cameraPos.sub(offset)
        for ( let i = topLeft.y; i < this.screenSize.y; i++ ){
            for ( let j = topLeft.x; j < this.screenSize.x; j++ ){
                let mapPos = new Vector ( topLeft.x + j, topLeft.y  + i)
                let camPos = new Vector (j , i)
                let currentTile = this.map.get(mapPos)
                let value = (currentTile.obj && currentTile.obj.char) || currentTile.floor || 0
                this.engine.set( camPos, value )
            }

        }

    }
    configureWithMap(tileMap){
        for (let i = 0; i < this.worldSize.y; i ++){
            for (let j = 0; j < this.worldSize.x; j ++){
                
            }
        }
    }
}

class TopDownWorld{
    
}