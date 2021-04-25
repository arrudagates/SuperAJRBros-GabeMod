// import * as THREE from '../../build/three.module.js';

export class Input {
    setUp(e) {

        this.e = e;

        this.keyRight = false;
        this.keyLeft = false;
        this.keyUp = false;
        this.keyDown = false;
        this.keySpace = false;
        this.mouseIsDown = false;

        console.log("add listeners")

        document.addEventListener("keydown", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                this.keyRight = true;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = true;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = true;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = true;

            } else if (event.key === " ") {

                this.keySpace = true;

            } else if (event.key === "1" ) {

                // // this.e.ui.player.position.x=21000;
                // this.e.ui.player.position.y=-500;

            }else if (event.key === "2" ) {

                // this.e.ui.player.position.x=56900;
                // this.e.ui.player.position.x=47900;
                // this.e.ui.player.position.y=-500;

            }else if (event.key === "3" ) {

                // this.e.ui.player.position.x=58500;
                // this.e.ui.player.position.y=-500;

            }

        });

        document.addEventListener("keyup", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                this.keyRight = false;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = false;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = false;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = false;

            } else if (event.key === " " ) {

                this.keySpace = false;

            }

        });

        document.addEventListener("mousedown", event => {

            this.mouseIsDown=true;

        })

        document.addEventListener("mouseup", event => {

            this.mouseIsDown=false;

        })

        document.addEventListener("mousemove", event => {

            // console.log(this.e.mouse)

            // this.e.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            // this.e.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.e.mouse.x = event.clientX
            this.e.mouse.y = event.clientY

        });

        //---touchstart--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchstart", evt => {

            for (var i = 0; i < evt.touches.length; i++) {
                var found = false;

                //only add the touch if it is not listed yet, prevent doubles

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (evt.touches[i].identifier === this.ongoingTouches[j].identifier) {
                        found = true;
                    }

                }

                if (found === false) {
                    this.ongoingTouches.push(evt.touches[i]);
                }
            }

        });

        //---touchstart--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchmove", evt => {

            var touches = evt.changedTouches;

            // for (var i = 0; i < evt.touches.length; i++) {

                for (i = 0; i < touches.length; i++) {
                    for (var j = 0; j < e.ongoingTouches.length; j++) {
                      if (touches[i].identifier === e.ongoingTouches[j].identifier) {
                        // e.ongoingTouches.splice(j, 1, touches[i]);
                        this.ongoingTouches[j].pageX=touches[i].clientX
                        this.ongoingTouches[j].pageY=touches[i].clientY
                      }
                    }
                  }

                // this.e.touch.x=evt.touches[i].clientX
                // this.e.touch.y=evt.touches[i].clientY

                // for (var j = 0; j < this.ongoingTouches.length; j++) {

                //     if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                //         this.ongoingTouches.splice(j, 1);
                //         this.ongoingTouches.push(evt.touches[i]);
                //     }

                    // if (evt.touches[i].identifier === this.ongoingTouches[j].identifier) {
                    //     this.ongoingTouches[j].pageX=evt.touches[i].clientX
                    //     this.ongoingTouches[j].pageY=evt.touches[i].clientY
                    // }

                // }

            // }

        });

        //---touchend--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchend", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }
                }
            }

        });

        //---touchcancel--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchcancel", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }

                }

            }

        });

    }

    update(){

        // this.e.feedback.innerHTML = this.ongoingTouches.length;

        if(this.ongoingTouches.length>0){
            this.e.touch.x=this.ongoingTouches[0].pageX
            this.e.touch.y=this.ongoingTouches[0].pageY

            // this.e.feedback.innerHTML += this.ongoingTouches[0].pageX
        }

        // console.log("dd")
        this.e.ui.toucher.position.x = this.e.touch.x*this.e.ui.fixScale2
        this.e.ui.toucher.position.y = this.e.touch.y*this.e.ui.fixScale2

        for(var i=0; i<this.ongoingTouches.length; i++){

            if(this.ongoingTouches[i]!==null){

                var t = this.ongoingTouches[i];

                for(var j=0; j<this.e.ui.theButs; j++){

                    var b = this.e.ui.theButs[j]
                    var bp = this.e.ui.theButs[j].position

                    if(i.x>bp.x && i.x<bp.x && i.y>bp.y && i.y<bp.y){
                        // this.e.feedback.innerHTML+=" "+b.name
                    }

                }

            }

        }

    }






}
