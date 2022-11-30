import {SpaceShip} from '../js/SpaceShip';

export class AlienSpaceShip extends SpaceShip{
    wobble = 400;//Movement of alien to left and right
    counter = 0;//Controls how often alien moves
    startXPos;//Alien craft moves left and right of starting position

    constructor(imagePath, context, xPos, yPos){
        super(imagePath, context, xPos, yPos);//Call SpaceShip constructor
        this.startXPos = xPos;//Store start position
    }

    //Overrides draw method of SpaceShip
    draw(){
        this.counter++;
        if(this.counter % 10 === 0){//Changes position every ten re-draws
            let ranMove = this.wobble * (Math.random() - 0.5);//Calculate random movement
            this.xPos = this.startXPos + ranMove;//Movement is relative to start position
        }
        //Call SpaceShip draw method
        super.draw(this.image, this.xPos, this.yPos);
    }
}
