import './howler/howler.js';
import { gsap } from "./greensock/all.js";

export class Engine {
    constructor(
        skipTo,
        showOutput,
        ui,
        utilities,
        resize,
        loader,
        sounds,
        hub,
        level1,
        input,
        particles

    ) {

        //----------------------------------------------------------------------------------
        //---scripts---------------------------------------------------------------------------
        //----------------------------------------------------------------------------------

        this.skipTo = skipTo;
        this.showOutput = showOutput;
        this.ui = ui;
        this.u = utilities;
        this.resize = resize;
        this.loader = loader;
        this.s = sounds;
        this.hub = hub;
        this.level1 = level1;
        this.input = input;
        this.particles = particles;

        this.input.setUp();
        this.level1.setUp();

        //----------------------------------------------------------------------------------
        //---vars---------------------------------------------------------------------------
        //----------------------------------------------------------------------------------

        this.action = "start";
        this.count = 0;

        this.mouse = new Object;
        this.mouse.x=0;
        this.mouse.y=0;
        this.touch = new Object;

        this.soundOn=true;
        this.fps=0;
        this.saveFps=[];

        this.lastTime=0;

        this.mobile = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
            this.mobile = true;
        }

        this.feedback = document.getElementById("feedback");


    }

    update(){

        if(this.mobile===true){
            // this.screenWidth = screen.width;
            // this.screenHeight = screen.height;
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        }else{
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        }


        //---fps--------------------------------------------------------------------------------------------------------------

        if(!this.lastCalledTime) {
            this.lastCalledTime = Date.now();
            this.fps = 0;
            return;
        }
        this.delta = (Date.now() - this.lastCalledTime)/1000;
        this.lastCalledTime = Date.now();
        this.fps = 1/this.delta;

        this.saveFps.push(this.fps);

        if(this.saveFps.length>=20){

            this.allFps = 0

            for(var i=0; i<this.saveFps.length; i++){

                this.allFps+=this.saveFps[i]

            }

            this.fps2 = this.allFps/20;
            this.saveFps=[];

            // console.log(this.fps2)

        }

        if(this.ui.player!==undefined){
            // this.feedback.innerHTML = Math.round(this.ui.player.position.x)+" / "+this.ui.player.position.y+" / "+Math.round(this.ui.player.position.x/this.ui.brickSize);
            // this.feedback.innerHTML = this.ui.player.position.y + " / "+ ((window.innerHeight*this.ui.fixScale2)+this.ui.player.position.y)+" / "+(window.innerHeight*this.ui.fixScale2);
            // this.feedback.innerHTML = this.ui.app.renderer.width +" / "+window.innerWidth+" / "+(window.innerWidth*window.devicePixelRatio);
            // this.feedback.innerHTML = Math.round(this.fps2)
        }

        //-----------------------------------

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);

        //-----------------------------------

        var currentTime = new Date().getTime();
        this.dt = (currentTime - this.lastTime) / 1000;
        if (this.dt > 1) {
            this.dt = 0;
        }
        this.lastTime = currentTime;

        // console.log(this.dt)

        //-----------------------------------

        if(this.ui.isLoaded===true){

            this.ui.update()
            this.input.update()

        }

    }
}
