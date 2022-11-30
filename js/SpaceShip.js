export class SpaceShip{
    image;//HTML image. Used to draw spaceship
    context;//Canvas context
    xPos;//x location of spaceship
    yPos;//y location of spaceship

    constructor(imagePath, context, xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.image = new Image();
        this.image.src = imagePath;
        this.context = context;
    }

    //Draws the spaceship on canvas
    draw(){
        this.context.drawImage(this.image, this.xPos, this.yPos);
    }

    //Returns true if this spaceship contains another spaceship
    contains(spaceShip){
        if( (spaceShip.xPos >= this.xPos && 
                spaceShip.xPos <= this.xPos + this.image.width)
            && (spaceShip.yPos >= this.yPos && 
                spaceShip.yPos <= this.yPos + this.image.height) ){
                return true;
        }
        return false;
    }
}

