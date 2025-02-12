export class Vector{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    sum(other){
        return new Vector (this.x + other.x, this.y + other.y)
    }

    sub(other){
        return new Vector (this.x - other.x, this.y - other.y)
    }

    mult(val){
        return new Vector(this.x * val, this.y * val)
    }
}