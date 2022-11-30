import {SpaceShip} from '../js/SpaceShip';

export class Missile extends SpaceShip{
    speed = 50;//Speed of missile
    inAir=false;//Is missile in flight?
    startYPos = 600;//Starting y position of missile (x never changes)

    //Launches the missile if it is not currently in the air.
    launch(){
        if(!this.inAir)
            this.yPos = this.startYPos;
        this.inAir = true;
    }

    //Overrides draw method of SpaceShip
    draw(){
        if(this.inAir){
            this.yPos -= this.speed;
            if(this.yPos <=0){
                this.inAir = false;
                this.yPos = this.startYPos;
            }
        }
        super.draw(this.image, this.xPos, this.yPos);
    }
}

