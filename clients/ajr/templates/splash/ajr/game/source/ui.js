import { gsap, Quart } from "./greensock/all.js";

export class UI {

    loadIt(e){

        console.log("try load")

        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this.isLoaded=false;

        this.loader = new PIXI.Loader();
        this.loader.reset();

        //----------------------------------------------------

        this.loader.add("frame", "/clients/ajr/templates/splash/ajr/game/source/img/frame.png");
        this.loader.add("blueColor", "/clients/ajr/templates/splash/ajr/game/source/img/blueColor.png");
        this.loader.add("faderColor", "/clients/ajr/templates/splash/ajr/game/source/img/faderColor.png");
        this.loader.add("noteUI", "/clients/ajr/templates/splash/ajr/game/source/img/noteUI.png");
        this.loader.add("vig", "/clients/ajr/templates/splash/ajr/game/source/img/vig.png");
        this.loader.add("button_right", "/clients/ajr/templates/splash/ajr/game/source/img/button_right.png");
        this.loader.add("button_left", "/clients/ajr/templates/splash/ajr/game/source/img/button_left.png");
        this.loader.add("button_jump", "/clients/ajr/templates/splash/ajr/game/source/img/button_jump.png");
        this.loader.add("button_shoot", "/clients/ajr/templates/splash/ajr/game/source/img/button_shoot.png");

        this.loader.add('brick', '/clients/ajr/templates/splash/ajr/game/source/img/brick.png');
        this.loader.add('quest', '/clients/ajr/templates/splash/ajr/game/source/img/quest.png');
        this.loader.add('quest2', '/clients/ajr/templates/splash/ajr/game/source/img/quest2.png');
        this.loader.add('ground', '/clients/ajr/templates/splash/ajr/game/source/img/ground.png');
        this.loader.add('ground2', '/clients/ajr/templates/splash/ajr/game/source/img/ground2.png');
        this.loader.add('ground3', '/clients/ajr/templates/splash/ajr/game/source/img/ground3.png');
        this.loader.add('block', '/clients/ajr/templates/splash/ajr/game/source/img/block.png');
        this.loader.add('castleBlock', '/clients/ajr/templates/splash/ajr/game/source/img/castleBlock.png');
        this.loader.add('castleCol', '/clients/ajr/templates/splash/ajr/game/source/img/castleCol.png');
        this.loader.add('castleDecL', '/clients/ajr/templates/splash/ajr/game/source/img/castleDecL.png');
        this.loader.add('castleDecR', '/clients/ajr/templates/splash/ajr/game/source/img/castleDecR.png');
        this.loader.add('castleColTop', '/clients/ajr/templates/splash/ajr/game/source/img/castleColTop.png');
        this.loader.add('castleWall', '/clients/ajr/templates/splash/ajr/game/source/img/castleWall.png');
        this.loader.add('flagPole', '/clients/ajr/templates/splash/ajr/game/source/img/flagPole.png');
        this.loader.add('pipe', '/clients/ajr/templates/splash/ajr/game/source/img/pipe.png');
        this.loader.add('questDone', '/clients/ajr/templates/splash/ajr/game/source/img/questDone.png');
        this.loader.add('boxBack', '/clients/ajr/templates/splash/ajr/game/source/img/boxBack.png');
        this.loader.add('note1', '/clients/ajr/templates/splash/ajr/game/source/img/note1.png');
        this.loader.add('note2', '/clients/ajr/templates/splash/ajr/game/source/img/note2.png');
        this.loader.add('okOrchestra', '/clients/ajr/templates/splash/ajr/game/source/img/okOrchestra.png');
        this.loader.add('koopa1', '/clients/ajr/templates/splash/ajr/game/source/img/inst/koopa1.png');
        this.loader.add('koopa2', '/clients/ajr/templates/splash/ajr/game/source/img/inst/koopa2.png');
        this.loader.add('turtle1', '/clients/ajr/templates/splash/ajr/game/source/img/inst/turtle1.png');
        this.loader.add('turtle2', '/clients/ajr/templates/splash/ajr/game/source/img/inst/turtle2.png');
        this.loader.add('brickBit', '/clients/ajr/templates/splash/ajr/game/source/img/brickBit.png');
        this.loader.add('fbHit', '/clients/ajr/templates/splash/ajr/game/source/img/fbHit.png');
        this.loader.add('cloud1', '/clients/ajr/templates/splash/ajr/game/source/img/cloud1.png');
        this.loader.add('cloud2', '/clients/ajr/templates/splash/ajr/game/source/img/cloud2.png');
        this.loader.add('cloud3', '/clients/ajr/templates/splash/ajr/game/source/img/cloud3.png');
        this.loader.add('cloudSingle', '/clients/ajr/templates/splash/ajr/game/source/img/cloudSingle.png');
        this.loader.add('fb1', '/clients/ajr/templates/splash/ajr/game/source/img/fb1.png');
        this.loader.add('fb2', '/clients/ajr/templates/splash/ajr/game/source/img/fb2.png');
        this.loader.add('fb3', '/clients/ajr/templates/splash/ajr/game/source/img/fb3.png');
        this.loader.add('fb4', '/clients/ajr/templates/splash/ajr/game/source/img/fb4.png');
        this.loader.add('star1', '/clients/ajr/templates/splash/ajr/game/source/img/star1.png');
        this.loader.add('star2', '/clients/ajr/templates/splash/ajr/game/source/img/star2.png');
        this.loader.add('star3', '/clients/ajr/templates/splash/ajr/game/source/img/star3.png');
        this.loader.add('star4', '/clients/ajr/templates/splash/ajr/game/source/img/star4.png');
        this.loader.add('star5', '/clients/ajr/templates/splash/ajr/game/source/img/star5.png');

        this.loader.add('deathSign', '/clients/ajr/templates/splash/ajr/game/source/img/deathSign.png');
        this.loader.add('cloudBack', '/clients/ajr/templates/splash/ajr/game/source/img/cloudBack.png');
        this.loader.add('skyPattern', '/clients/ajr/templates/splash/ajr/game/source/img/skyPattern.png');
        this.loader.add('forground', '/clients/ajr/templates/splash/ajr/game/source/img/forground.png');
        this.loader.add('bg_trees', '/clients/ajr/templates/splash/ajr/game/source/img/bg_trees.png');
        this.loader.add('bg_fenses', '/clients/ajr/templates/splash/ajr/game/source/img/bg_fenses.png');
        this.loader.add('bg_landscape', '/clients/ajr/templates/splash/ajr/game/source/img/bg_landscape.png');
        this.loader.add('bg_head', '/clients/ajr/templates/splash/ajr/game/source/img/bg_head.png');
        this.loader.add('bg_head2', '/clients/ajr/templates/splash/ajr/game/source/img/bg_head2.png');
        this.loader.add('blueGrad', '/clients/ajr/templates/splash/ajr/game/source/img/blueGrad.png');
        this.loader.add('bg_whiteClouds', '/clients/ajr/templates/splash/ajr/game/source/img/bg_whiteClouds.png');
        this.loader.add('bg_clouds', '/clients/ajr/templates/splash/ajr/game/source/img/bg_clouds.png');
        this.loader.add('bg_smallClouds', '/clients/ajr/templates/splash/ajr/game/source/img/bg_smallClouds.png');
        this.loader.add('bg_diagnals', '/clients/ajr/templates/splash/ajr/game/source/img/bg_diagnals.png');
        this.loader.add('bg_mountains', '/clients/ajr/templates/splash/ajr/game/source/img/bg_mountains.png');
        this.loader.add('bg_blueClouds', '/clients/ajr/templates/splash/ajr/game/source/img/bg_blueClouds.png');
        this.loader.add('bg_blueClouds2', '/clients/ajr/templates/splash/ajr/game/source/img/bg_blueClouds2.png');
        this.loader.add('bummerLandSign', '/clients/ajr/templates/splash/ajr/game/source/img/bummerLandSign.png');
        this.loader.add('castle', '/clients/ajr/templates/splash/ajr/game/source/img/castle.png');
        this.loader.add('flag', '/clients/ajr/templates/splash/ajr/game/source/img/flag.png');
        this.loader.add('splash1', '/clients/ajr/templates/splash/ajr/game/source/img/splash1gabe.png');
        this.loader.add('splash2', '/clients/ajr/templates/splash/ajr/game/source/img/splash2gabe.png');
        this.loader.add('blackArea', '/clients/ajr/templates/splash/ajr/game/source/img/blackArea.png');
        this.loader.add('startButton', '/clients/ajr/templates/splash/ajr/game/source/img/startButton.png');
        this.loader.add('selectMenu', '/clients/ajr/templates/splash/ajr/game/source/img/selectMenu.png');
        this.loader.add('selectMenu2', '/clients/ajr/templates/splash/ajr/game/source/img/selectMenu2.png');
        this.loader.add('gameOver', '/clients/ajr/templates/splash/ajr/game/source/img/gameOver.png');
        this.loader.add('ghost', '/clients/ajr/templates/splash/ajr/game/source/img/inst/ghost.png');
        this.loader.add('ghost2', '/clients/ajr/templates/splash/ajr/game/source/img/inst/ghost2.png');
        this.loader.add('thwomp', '/clients/ajr/templates/splash/ajr/game/source/img/thwomp.png');
        this.loader.add('gotNotes', '/clients/ajr/templates/splash/ajr/game/source/img/gotNotes.png');
        this.loader.add('turtleShell', '/clients/ajr/templates/splash/ajr/game/source/img/turtleShell.png');
        this.loader.add('stage1', '/clients/ajr/templates/splash/ajr/game/source/img/stage1.png');
        this.loader.add('stage2', '/clients/ajr/templates/splash/ajr/game/source/img/stage2.png');
        this.loader.add('stage3', '/clients/ajr/templates/splash/ajr/game/source/img/stage3.png');
        this.loader.add('lava', '/clients/ajr/templates/splash/ajr/game/source/img/lava.png');
        this.loader.add('virus', '/clients/ajr/templates/splash/ajr/game/source/img/virus.png');
        this.loader.add('virusShot', '/clients/ajr/templates/splash/ajr/game/source/img/virusShot.png');
        this.loader.add('virusShotDiag', '/clients/ajr/templates/splash/ajr/game/source/img/virusShotDiag.png');
        this.loader.add('virusBullet', '/clients/ajr/templates/splash/ajr/game/source/img/virusBullet.png');
        this.loader.add('vaccine', '/clients/ajr/templates/splash/ajr/game/source/img/vaccine.png');
        this.loader.add('sign', '/clients/ajr/templates/splash/ajr/game/source/img/sign.png');
        this.loader.add('blueHole', '/clients/ajr/templates/splash/ajr/game/source/img/blueHole.png');

        this.loader.add('hammerBro1', '/clients/ajr/templates/splash/ajr/game/source/img/inst/hammerBro1.png');
        this.loader.add('hammerBro2', '/clients/ajr/templates/splash/ajr/game/source/img/inst/hammerBro2.png');
        this.loader.add('hammerBro3', '/clients/ajr/templates/splash/ajr/game/source/img/inst/hammerBro3.png');
        this.loader.add('hammer', '/clients/ajr/templates/splash/ajr/game/source/img/inst/hammer.png');

        this.loader.add('p1_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_stance1.png');
        this.loader.add('p1_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_stance2.png');
        this.loader.add('p1_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_stance3.png');

        this.loader.add('p1_s_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_stance1.png');
        this.loader.add('p1_s_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_stance2.png');
        this.loader.add('p1_s_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_stance3.png');

        this.loader.add('p1_f_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_stance1.png');
        this.loader.add('p1_f_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_stance2.png');
        this.loader.add('p1_f_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_stance3.png');

        this.loader.add('p1_f_fireball', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_fireball.png');

        this.loader.add('p1_death', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_death.png');

        this.loader.add('p1_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_run1.png');
        this.loader.add('p1_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_run2.png');
        this.loader.add('p1_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_run3.png');

        this.loader.add('p1_s_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_run1.png');
        this.loader.add('p1_s_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_run2.png');
        this.loader.add('p1_s_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_run3.png');

        this.loader.add('p1_f_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_run1.png');
        this.loader.add('p1_f_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_run2.png');
        this.loader.add('p1_f_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_run3.png');

        this.loader.add('p1_f_jump', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_f_jump.png');

        this.loader.add('p1_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_jump.png');
        this.loader.add('p1_s_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_s_jump.png');

        this.loader.add('p1_jumpDown', '/clients/ajr/templates/splash/ajr/game/source/img/p1/p1_jumpDown.png');

        //----------------------------------------------------

        this.loader.add('p2_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_stance1.png');
        this.loader.add('p2_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_stance2.png');
        this.loader.add('p2_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_stance3.png');

        this.loader.add('p2_s_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_stance1.png');
        this.loader.add('p2_s_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_stance2.png');
        this.loader.add('p2_s_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_stance3.png');

        this.loader.add('p2_f_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_stance1.png');
        this.loader.add('p2_f_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_stance2.png');
        this.loader.add('p2_f_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_stance3.png');

        this.loader.add('p2_f_fireball', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_fireball.png');

        this.loader.add('p2_death', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_death.png');

        this.loader.add('p2_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_run1.png');
        this.loader.add('p2_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_run2.png');
        this.loader.add('p2_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_run3.png');

        this.loader.add('p2_s_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_run1.png');
        this.loader.add('p2_s_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_run2.png');
        this.loader.add('p2_s_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_run3.png');

        this.loader.add('p2_f_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_run1.png');
        this.loader.add('p2_f_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_run2.png');
        this.loader.add('p2_f_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_run3.png');

        this.loader.add('p2_f_jump', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_f_jump.png');

        this.loader.add('p2_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_jump.png');
        this.loader.add('p2_s_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_s_jump.png');

        this.loader.add('p2_jumpDown', '/clients/ajr/templates/splash/ajr/game/source/img/p2/p2_jumpDown.png');

        //----------------------------------------------------

        this.loader.add('p3_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_stance1.png');
        this.loader.add('p3_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_stance2.png');
        this.loader.add('p3_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_stance3.png');

        this.loader.add('p3_s_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_stance1.png');
        this.loader.add('p3_s_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_stance2.png');
        this.loader.add('p3_s_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_stance3.png');

        this.loader.add('p3_f_stance1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_stance1.png');
        this.loader.add('p3_f_stance2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_stance2.png');
        this.loader.add('p3_f_stance3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_stance3.png');

        this.loader.add('p3_f_fireball', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_fireball.png');

        this.loader.add('p3_death', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_death.png');

        this.loader.add('p3_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_run1.png');
        this.loader.add('p3_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_run2.png');
        this.loader.add('p3_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_run3.png');

        this.loader.add('p3_s_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_run1.png');
        this.loader.add('p3_s_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_run2.png');
        this.loader.add('p3_s_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_run3.png');

        this.loader.add('p3_f_run1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_run1.png');
        this.loader.add('p3_f_run2', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_run2.png');
        this.loader.add('p3_f_run3', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_run3.png');

        this.loader.add('p3_f_jump', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_f_jump.png');

        this.loader.add('p3_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_jump.png');
        this.loader.add('p3_s_jump1', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_s_jump.png');

        this.loader.add('p3_jumpDown', '/clients/ajr/templates/splash/ajr/game/source/img/p3/p3_jumpDown.png');

        //----------------------------------------------------

        this.loader.load((loader, resources) => {

            console.log("loaded1")

            //----------------------------------------------------

            this.frameText=resources.frame.texture;
            this.blueColorText=resources.blueColor.texture;
            this.faderColorText=resources.faderColor.texture;
            this.noteUIText=resources.noteUI.texture;
            this.vigText=resources.vig.texture;

            this.button_rightText=resources.button_right.texture;
            this.button_leftText=resources.button_left.texture;
            this.button_jumpText=resources.button_jump.texture;
            this.button_shootText=resources.button_shoot.texture;

            this.deathSignText=resources.deathSign.texture;
            this.brickText=resources.brick.texture;
            this.questText=resources.quest.texture;
            this.quest2Text=resources.quest2.texture;
            this.groundText=resources.ground.texture;
            this.ground2Text=resources.ground2.texture;
            this.ground3Text=resources.ground3.texture;
            this.blockText=resources.block.texture;
            this.castleBlockText=resources.castleBlock.texture;
            this.castleColText=resources.castleCol.texture;
            this.castleDecLText=resources.castleDecL.texture;
            this.castleDecRText=resources.castleDecR.texture;
            this.castleColTopText=resources.castleColTop.texture;
            this.castleWallText=resources.castleWall.texture;
            this.flagPoleText=resources.flagPole.texture;
            this.pipeText=resources.pipe.texture;
            this.questDoneText=resources.questDone.texture;
            this.boxBackText=resources.boxBack.texture;
            this.note1Text=resources.note1.texture;
            this.note2Text=resources.note2.texture;
            this.okOrchestraText=resources.okOrchestra.texture;
            this.koopa1Text=resources.koopa1.texture;
            this.koopa2Text=resources.koopa2.texture;
            this.turtle1Text=resources.turtle1.texture;
            this.turtle2Text=resources.turtle2.texture;
            this.brickBitText=resources.brickBit.texture;
            this.fbHitText=resources.fbHit.texture;
            this.cloud1Text=resources.cloud1.texture;
            this.cloud2Text=resources.cloud2.texture;
            this.cloud3Text=resources.cloud3.texture;
            this.cloudSingleText=resources.cloudSingle.texture;
            this.fb1Text=resources.fb1.texture;
            this.fb2Text=resources.fb2.texture;
            this.fb3Text=resources.fb3.texture;
            this.fb4Text=resources.fb4.texture;
            this.star1Text=resources.star1.texture;
            this.star2Text=resources.star2.texture;
            this.star3Text=resources.star3.texture;
            this.star4Text=resources.star4.texture;
            this.star5Text=resources.star5.texture;
            this.cloudBackText=resources.cloudBack.texture;
            this.skyPatternText=resources.skyPattern.texture;
            this.forgroundText=resources.forground.texture;
            this.bg_treesText=resources.bg_trees.texture;
            this.bg_fensesText=resources.bg_fenses.texture;
            this.bg_landscapeText=resources.bg_landscape.texture;
            this.bg_headText=resources.bg_head.texture;
            this.bg_head2Text=resources.bg_head2.texture;
            this.blueGradText=resources.blueGrad.texture;
            this.bg_whiteCloudsText=resources.bg_whiteClouds.texture;
            this.bg_cloudsText=resources.bg_clouds.texture;
            this.bg_smallCloudsText=resources.bg_smallClouds.texture;
            this.bg_diagnalsText=resources.bg_diagnals.texture;
            this.bg_mountainsText=resources.bg_mountains.texture;
            this.bg_blueCloudsText=resources.bg_blueClouds.texture;
            this.bg_blueClouds2Text=resources.bg_blueClouds2.texture;
            this.bummerLandSignText=resources.bummerLandSign.texture;
            this.blueHoleText=resources.blueHole.texture;
            this.castleText=resources.castle.texture;
            this.flagText=resources.flag.texture;
            this.blackAreaText=resources.blackArea.texture;
            this.splash1Text=resources.splash1.texture;
            this.splash2Text=resources.splash2.texture;
            this.startButtonText=resources.startButton.texture;
            this.selectMenuText=resources.selectMenu.texture;
            this.selectMenu2Text=resources.selectMenu2.texture;
            this.gameOverText=resources.gameOver.texture;
            this.ghostText=resources.ghost.texture;
            this.ghost2Text=resources.ghost2.texture;
            this.thwompText=resources.thwomp.texture;
            this.hammerBro1Text=resources.hammerBro1.texture;
            this.hammerBro2Text=resources.hammerBro2.texture;
            this.hammerBro3Text=resources.hammerBro3.texture;
            this.hammerText=resources.hammer.texture;
            this.gotNotesText=resources.gotNotes.texture;
            this.turtleShellText=resources.turtleShell.texture;
            this.stage1Text=resources.stage1.texture;
            this.stage2Text=resources.stage2.texture;
            this.stage3Text=resources.stage3.texture;
            this.lavaText=resources.lava.texture;
            this.virusText=resources.virus.texture;
            this.virusShotText=resources.virusShot.texture;
            this.virusShotDiagText=resources.virusShotDiag.texture;
            this.virusBulletText=resources.virusBullet.texture;
            this.vaccineText=resources.vaccine.texture;
            this.signText=resources.sign.texture;

            this.p1_stance1Text=resources.p1_stance1.texture;
            this.p1_stance2Text=resources.p1_stance2.texture;
            this.p1_stance3Text=resources.p1_stance3.texture;
            this.p1_s_stance1Text=resources.p1_s_stance1.texture;
            this.p1_s_stance2Text=resources.p1_s_stance2.texture;
            this.p1_s_stance3Text=resources.p1_s_stance3.texture;
            this.p1_f_stance1Text=resources.p1_f_stance1.texture;
            this.p1_f_stance2Text=resources.p1_f_stance2.texture;
            this.p1_f_stance3Text=resources.p1_f_stance3.texture;
            this.p1_f_fireballText=resources.p1_f_fireball.texture;
            this.p1_deathText=resources.p1_death.texture;
            this.p1_run1Text=resources.p1_run1.texture;
            this.p1_run2Text=resources.p1_run2.texture;
            this.p1_run3Text=resources.p1_run3.texture;
            this.p1_s_run1Text=resources.p1_s_run1.texture;
            this.p1_s_run2Text=resources.p1_s_run2.texture;
            this.p1_s_run3Text=resources.p1_s_run3.texture;
            this.p1_f_run1Text=resources.p1_f_run1.texture;
            this.p1_f_run2Text=resources.p1_f_run2.texture;
            this.p1_f_run3Text=resources.p1_f_run3.texture;
            this.p1_f_jumpText=resources.p1_f_jump.texture;
            this.p1_jump1Text=resources.p1_jump1.texture;
            this.p1_s_jump1Text=resources.p1_s_jump1.texture;
            this.p1_jumpDownText=resources.p1_jumpDown.texture;

            this.p2_stance1Text=resources.p2_stance1.texture;
            this.p2_stance2Text=resources.p2_stance2.texture;
            this.p2_stance3Text=resources.p2_stance3.texture;
            this.p2_s_stance1Text=resources.p2_s_stance1.texture;
            this.p2_s_stance2Text=resources.p2_s_stance2.texture;
            this.p2_s_stance3Text=resources.p2_s_stance3.texture;
            this.p2_f_stance1Text=resources.p2_f_stance1.texture;
            this.p2_f_stance2Text=resources.p2_f_stance2.texture;
            this.p2_f_stance3Text=resources.p2_f_stance3.texture;
            this.p2_f_fireballText=resources.p2_f_fireball.texture;
            this.p2_deathText=resources.p2_death.texture;
            this.p2_run1Text=resources.p2_run1.texture;
            this.p2_run2Text=resources.p2_run2.texture;
            this.p2_run3Text=resources.p2_run3.texture;
            this.p2_s_run1Text=resources.p2_s_run1.texture;
            this.p2_s_run2Text=resources.p2_s_run2.texture;
            this.p2_s_run3Text=resources.p2_s_run3.texture;
            this.p2_f_run1Text=resources.p2_f_run1.texture;
            this.p2_f_run2Text=resources.p2_f_run2.texture;
            this.p2_f_run3Text=resources.p2_f_run3.texture;
            this.p2_f_jumpText=resources.p2_f_jump.texture;
            this.p2_jump1Text=resources.p2_jump1.texture;
            this.p2_s_jump1Text=resources.p2_s_jump1.texture;
            this.p2_jumpDownText=resources.p2_jumpDown.texture;

            this.p3_stance1Text=resources.p3_stance1.texture;
            this.p3_stance2Text=resources.p3_stance2.texture;
            this.p3_stance3Text=resources.p3_stance3.texture;
            this.p3_s_stance1Text=resources.p3_s_stance1.texture;
            this.p3_s_stance2Text=resources.p3_s_stance2.texture;
            this.p3_s_stance3Text=resources.p3_s_stance3.texture;
            this.p3_f_stance1Text=resources.p3_f_stance1.texture;
            this.p3_f_stance2Text=resources.p3_f_stance2.texture;
            this.p3_f_stance3Text=resources.p3_f_stance3.texture;
            this.p3_f_fireballText=resources.p3_f_fireball.texture;
            this.p3_deathText=resources.p3_death.texture;
            this.p3_run1Text=resources.p3_run1.texture;
            this.p3_run2Text=resources.p3_run2.texture;
            this.p3_run3Text=resources.p3_run3.texture;
            this.p3_s_run1Text=resources.p3_s_run1.texture;
            this.p3_s_run2Text=resources.p3_s_run2.texture;
            this.p3_s_run3Text=resources.p3_s_run3.texture;
            this.p3_f_run1Text=resources.p3_f_run1.texture;
            this.p3_f_run2Text=resources.p3_f_run2.texture;
            this.p3_f_run3Text=resources.p3_f_run3.texture;
            this.p3_f_jumpText=resources.p3_f_jump.texture;
            this.p3_jump1Text=resources.p3_jump1.texture;
            this.p3_s_jump1Text=resources.p3_s_jump1.texture;
            this.p3_jumpDownText=resources.p3_jumpDown.texture;

            //----------------------------------------------------

            this.isLoaded=true;
            this.setUp(e)

            document.getElementById("mycanvas").style.opacity=1;
            document.getElementById("loading").style.opacity=0;
        });

    }

    setUp(e) {

        this.e=e;
        this.plats=[];
        this.theButs=[];
        this.playerMovementDelay=0;
        this.playerMovement=true;
        this.heightUp=0;
        this.upThresh=0;
        this.progress=0
        this.distanceFromRight=0;
        this.distanceFromTop=0;
        this.maxForward=0;
        this.forwardMovement=0;
        this.headHits=[];
        this.headHitBlock = null;
        this.animatedSprites=[];
        this.notes=[];
        this.actors=[];
        this.noteCount=0;
        this.noteShowCount=0;
        this.score=0;
        this.blinkTime=0;
        this.blinkCount=0;
        this.brickBits=[];
        this.starArray=[];
        this.growType="big";
        this.showFBAni=0;
        this.checkPoint=0;
        this.flagPole1 = null;
        this.flagPole2 = null;
        this.flagPole3 = null;
        this.flagPole4 = null;
        this.section=1
        this.useControls=true
        this.deathAction=""
        this.lives=3;
        this.deathCount=0;
        this.gameAction="splash"
        this.charNum=1;
        this.t = new Object();
        this.t.scExtra=1000;
        this.firstSelect=true
        this.speed=60;
        this.applyY=0;
        this.mcFix=1;
        this.mcFix2=1;
        this.virusShots=[];
        this.greyBricks=[];
        this.vaccine=null;
        this.virusShotAction="wait"
        this.virusShotCount=0;

        this.p1Alive=true;
        this.p2Alive=true;
        this.p3Alive=true;

        this.virusAction="set"
        this.virusCount=0;

        this.blockArray=[];

        this.pushPosition=0;
        this.pushBlock=0;
        this.maxBlockMade=0;
        this.gameCount=0;

        this.notesAction=""

        this.hammers=[];

        this.uiCanvas = document.getElementById('mycanvas');

        this.app = new PIXI.Application({
            view: this.uiCanvas,
            width: window.innerWidth,
            height: window.innerHeight,
            transparent: true,
			resolution: window.devicePixelRatio,
			appDensity: true
        });

        this.turtleShellAni = [this.turtleShellText,this.turtleShellText];
        this.stageAni1 = [this.stage1Text,this.stage1Text];
        this.stageAni2 = [this.stage2Text,this.stage3Text];

        // --- resize -------------------------------------------------------------------

        window.addEventListener('resize', (event) => {
            this.app.renderer.resize(this.e.screenWidth, this.e.screenHeight);
            this.playerMovementDelay=1;
        });

        // PIXI.BaseTexture.SCALE_MODE.DEFAULT = PIXI.BaseTexture.SCALE_MODE.NEAREST;
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        PIXI.settings.RESOLUTION = window.devicePixelRatio;

        // --- main -------------------------------------------------------------------

        this.mainCont = new PIXI.Container();
        this.mainCont.sortableChildren = true;
        this.app.stage.addChild(this.mainCont);

        this.blockCont = new PIXI.Container();
        this.blockCont.sortableChildren = true;
        this.mainCont.addChild(this.blockCont);

        this.blockCont._zIndex=55;

        this.cloudBackCont = new PIXI.Container();
        this.cloudBackCont.sortableChildren = true;
        this.mainCont.addChild(this.cloudBackCont);

        this.cloudBackCont._zIndex=95;

        //--- frame ----------------------------------------------------------------------------------

        this.frameCont = new PIXI.Container();
        this.frameCont.sortableChildren = true;
        this.app.stage.addChild(this.frameCont);

        this.selectCont = new PIXI.Container();
        this.selectCont.sortableChildren = true;
        this.frameCont.addChild(this.selectCont);

        this.selectCont._zIndex=55;

        this.frameTop = new PIXI.Sprite(this.frameText);
        this.frameTop.anchor.x = 0.5;
        this.frameTop.anchor.y = 0;
        this.frameTop.width = window.innerWidth;
        this.frameTop.scale.y=3;
        this.frameTop._zIndex = 70
        this.frameCont.addChild(this.frameTop);

        this.frameBot = new PIXI.Sprite(this.frameText);
        this.frameBot.anchor.x = 0.5;
        this.frameBot.anchor.y = 0;
        this.frameBot.width = window.innerWidth;
        this.frameBot.scale.y = -3;
        this.frameBot._zIndex = 70
        this.frameCont.addChild(this.frameBot);

        this.frameLeft = new PIXI.Sprite(this.frameText);
        this.frameLeft.anchor.x = 0;
        this.frameLeft.anchor.y = 0;
        this.frameLeft.width = window.innerHeight;
        this.frameLeft._zIndex = 60
        this.frameLeft.scale.y=3;
        this.frameLeft.opacity=1;
        this.frameLeft.rotation=this.e.u.ca(-90);
        this.frameCont.addChild(this.frameLeft);

        this.frameRight = new PIXI.Sprite(this.frameText);
        this.frameRight.anchor.x = 1;
        this.frameRight.anchor.y = 0;
        this.frameRight.width = window.innerHeight;
        this.frameRight._zIndex = 60
        this.frameRight.scale.y=3;
        this.frameRight.opacity=1;
        this.frameRight.rotation=this.e.u.ca(90);
        this.frameCont.addChild(this.frameRight);

        this.selectMenu = new PIXI.Sprite(this.selectMenuText);
        this.selectMenu.anchor.x = 0.5;
        this.selectMenu.anchor.y = 0.5;
        this.selectMenu._zIndex = 55
        this.selectMenu.scale.x=3;
        this.selectMenu.scale.y=3;
        this.selectMenu.alpha=1;
        this.selectMenu.position.x=0;
        this.selectMenu.position.y=0;
        this.selectCont.addChild(this.selectMenu);

        this.selectMenu2 = new PIXI.Sprite(this.selectMenu2Text);
        this.selectMenu2.anchor.x = 0.5;
        this.selectMenu2.anchor.y = 0.5;
        this.selectMenu2._zIndex = 55
        this.selectMenu2.scale.x=3;
        this.selectMenu2.scale.y=3;
        if(this.e.mobile===true){
            this.selectMenu2.alpha=0;
        }else{
            this.selectMenu2.alpha=1;
        }

        this.selectMenu2.position.x=0;
        this.selectMenu2.position.y=0;
        this.selectCont.addChild(this.selectMenu2);

        this.setUpAnimation();

        this.selectChar1 = new PIXI.Sprite(this.p2_stance2Text);
        this.selectChar1.anchor.x = 0.5;
        this.selectChar1.anchor.y = 0.5;
        this.selectChar1._zIndex = 57
        this.selectChar1.scale.x=4;
        this.selectChar1.scale.y=4;
        this.selectChar1.alpha=1;
        this.selectChar1.position.x=-180;
        this.selectChar1.position.y=-35;
        this.selectCont.addChild(this.selectChar1);
        this.selectChar1.ani = this.p3_stance;
        this.animatedSprites.push(this.selectChar1)

        this.selectChar1.on('mousedown', (event) => {
            this.charNum=3
            this.gameAction="selectChar"
            this.p1Alive=false
            this.selectChar1.alpha=.2;
            console.log("char1")
        })

        this.selectChar1.on('touchstart', (event) => {
            this.charNum=3
            this.p1Alive=false
            this.selectChar1.alpha=.2;
            this.gameAction="selectChar"
        })

        this.selectChar2 = new PIXI.Sprite(this.p1_stance1Text);
        this.selectChar2.anchor.x = 0.5;
        this.selectChar2.anchor.y = 0.5;
        this.selectChar2._zIndex = 57
        this.selectChar2.scale.x=4;
        this.selectChar2.scale.y=4;
        this.selectChar2.alpha=1;
        this.selectChar2.position.x=0;
        this.selectChar2.position.y=-35;
        this.selectCont.addChild(this.selectChar2);
        this.selectChar2.ani = this.p1_stance;
        this.animatedSprites.push(this.selectChar2)

        this.selectChar2.on('mousedown', (event) => {
            this.charNum=1
            this.p2Alive=false
            this.selectChar2.alpha=.2;
            this.gameAction="selectChar"
        })

        this.selectChar2.on('touchstart', (event) => {
            this.charNum=1
            this.p2Alive=false
            this.selectChar2.alpha=.2;
            this.gameAction="selectChar"
        })

        this.selectChar3 = new PIXI.Sprite(this.p3_stance3Text);
        this.selectChar3.anchor.x = 0.5;
        this.selectChar3.anchor.y = 0.5;
        this.selectChar3._zIndex = 57
        this.selectChar3.scale.x=4;
        this.selectChar3.scale.y=4;
        this.selectChar3.alpha=1;
        this.selectChar3.position.x=180;
        this.selectChar3.position.y=-35;
        this.selectCont.addChild(this.selectChar3);
        this.selectChar3.ani = this.p2_stance;
        this.animatedSprites.push(this.selectChar3)

        this.selectChar3.on('mousedown', (event) => {
            this.charNum=2
            this.p3Alive=false
            this.selectChar3.alpha=.2;
            this.gameAction="selectChar"
        })

        this.selectChar3.on('touchstart', (event) => {
            this.charNum=2
            this.p3Alive=false
            this.selectChar3.alpha=.2;
            this.gameAction="selectChar"
        })

        this.splash = new PIXI.Sprite(this.splash1Text);
        this.splash.anchor.x = 0.5;
        this.splash.anchor.y = 0.5;
        this.splash._zIndex = 50
        this.splash.scale.x=3;
        this.splash.scale.y=3;
        this.splash.alpha=1;
        this.splash.position.x=0;
        this.splash.position.y=-500;
        this.frameCont.addChild(this.splash);

        this.splashAni = [this.splash1Text,this.splash2Text];
        this.splash.ani = this.splashAni;
        this.splash.aniSpeed = .7;
        this.animatedSprites.push(this.splash);

        this.splash.interactive = true;
        this.splash.buttonMode = true;

        this.splash.on('mousedown', (event) => {
            this.gameAction="startPressed"
        })

        this.splash.on('touchstart', (event) => {
            this.gameAction="startPressed"
        })

        this.gotNotes = new PIXI.Sprite(this.gotNotesText);
        this.gotNotes.anchor.x = 0.5;
        this.gotNotes.anchor.y = 0.5;
        this.gotNotes._zIndex = 150
        this.gotNotes.scale.x=3;
        this.gotNotes.scale.y=3;
        this.gotNotes.alpha=0;
        this.gotNotes.position.x=0;
        this.gotNotes.position.y=0;
        this.frameCont.addChild(this.gotNotes);


        this.gameOver = new PIXI.Sprite(this.gameOverText);
        this.gameOver.anchor.x = 0.5;
        this.gameOver.anchor.y = 0.5;
        this.gameOver._zIndex = 150
        this.gameOver.scale.x=3;
        this.gameOver.scale.y=3;
        this.gameOver.alpha=0;
        this.gameOver.position.x=0;
        this.gameOver.position.y=0;
        this.frameCont.addChild(this.gameOver);

        this.gameOver.on('mousedown', (event) => {
          console.log("mousedown")
            location.reload();
        })

        this.gameOver.on('touchstart', (event) => {
            location.reload();
        })



        this.fader = new PIXI.Sprite(this.blueColorText);
        this.fader.anchor.x = 0.5;
        this.fader.anchor.y = 1;
        this.fader.width = window.innerWidth;
        this.fader._zIndex = 50
        this.fader.scale.y=3;
        this.fader.alpha=0;
        this.frameCont.addChild(this.fader);

        this.fader2 = new PIXI.Sprite(this.faderColorText);
        this.fader2.anchor.x = 0.5;
        this.fader2.anchor.y = 1;
        this.fader2._zIndex = 150
        this.fader2.alpha=1;
        this.frameCont.addChild(this.fader2);

        gsap.to( this.fader2, {alpha: 0, delay:1, duration: 2});

        this.noteCont = new PIXI.Container();
        this.noteCont.sortableChildren = true;
        this.frameCont.addChild(this.noteCont);

        this.noteCont.position.x=-100;

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/noteUI.png');
        this.noteImage = new PIXI.Sprite(this.noteUIText);
        this.noteImage.position.x = -103;
        this.noteImage.position.y = 0;
        this.noteImage.scale.x=3;
        this.noteImage.scale.y=3;
        this.noteCont.addChild(this.noteImage);

        this.noteUI = new PIXI.Text('00');
        this.noteUI.anchor.x = 0.5;
        this.noteUI.anchor.y = 0;
        this.noteUI._zIndex=65
        this.noteUI.style = new PIXI.TextStyle({
            align: "center",
            lineHeight: 20,
            fill: 0xffffff,
            fontSize: 64,
            fontFamily: "LankyTails"
        })
        this.noteUI.resolution = 2;
        this.noteCont._zIndex = 60
        this.noteCont.addChild(this.noteUI)

        this.scoreCont = new PIXI.Container();
        this.scoreCont.sortableChildren = true;
        this.frameCont.addChild(this.scoreCont);

        this.scoreUI = new PIXI.Text('000000');
        this.scoreUI.anchor.x = 0;
        this.scoreUI.anchor.y = 0;
        this.scoreUI._zIndex=65
        this.scoreUI.style = new PIXI.TextStyle({
            align: "left",
            lineHeight: 20,
            fill: 0xffffff,
            fontSize: 64,
            fontFamily: "LankyTails"
        })
        this.scoreUI.resolution = 2;
        this.scoreCont._zIndex = 60
        this.scoreCont.addChild(this.scoreUI)

        // Credits to the 8bit music artist

        this.creditCont = new PIXI.Container();
        this.creditCont.sortableChildren = true;
        this.frameCont.addChild(this.creditCont);

        this.credit = new PIXI.Text('8-Bit Renditions by RocketSurgery');
        this.credit.anchor.x = 0;
        this.credit.anchor.y = 0;
        this.credit._zIndex=35
        this.credit.style = new PIXI.TextStyle({
            align: "left",
            lineHeight: 0,
            fill: 0xffffff,
            fontSize: 34,
            fontFamily: "LankyTails"
        })
        this.credit.resolution = 2;
        this.credit.interactive = true;
        this.creditCont._zIndex = 60
        this.creditCont.addChild(this.credit)

        this.credit.on('mousedown', (event) => {
          console.log("mousedown")
            window.open("https://www.youtube.com/channel/UCCbgRAYmzITI5plV3V6nLfg", "_blank")
        })

        this.credit.on('touchstart', (event) => {
            window.open("https://www.youtube.com/channel/UCCbgRAYmzITI5plV3V6nLfg", "_blank")
        })

        // Gabe Mod Version

        this.versionCont = new PIXI.Container();
        this.versionCont.sortableChildren = true;
        this.frameCont.addChild(this.versionCont);

        this.version = new PIXI.Text('Gabe Mod v1.0');
        this.version.anchor.x = 0;
        this.version.anchor.y = 0;
        this.version._zIndex=35
        this.version.style = new PIXI.TextStyle({
            align: "right",
            lineHeight: 0,
            fill: 0xffffff,
            fontSize: 34,
            fontFamily: "LankyTails"
        })
        this.version.resolution = 2;
        this.versionCont._zIndex = 60
        this.versionCont.addChild(this.version)

        //--- vig ----------------------------------------------------------------------------------

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/vig.png');
        this.vig = new PIXI.Sprite(this.vigText);
        this.vig.anchor.x = .5;
        this.vig.anchor.y = 1;
        this.vig._zIndex = 50
        this.vig.alpha=.6;
        this.frameCont.addChild(this.vig);

        //--- buttons ----------------------------------------------------------------------------------

        this.buttonSize = 150;

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/button.png');
        this.leftBut = new PIXI.Sprite(this.button_leftText);
        this.leftBut.anchor.x = 0;
        this.leftBut.anchor.y = 1;
        this.leftBut.width = this.buttonSize;
        this.leftBut.height = this.buttonSize;
        this.leftBut._zIndex = 10
        this.frameCont.addChild(this.leftBut);
        this.leftBut.interactive = true;
        this.leftBut.buttonMode = true;

        this.leftBut.on('touchstart', (event) => {
            this.e.input.keyLeft=true;
        })

        this.leftBut.on('touchend', (event) => {
            this.e.input.keyLeft=false;
        })

        this.leftBut.on('touchendoutside', (event) => {
            this.e.input.keyLeft=false;
        })

        this.toucher = new PIXI.Sprite(this.buttonText);
        this.toucher.anchor.x = 0.5;
        this.toucher.anchor.y = 0.5;
        this.toucher.width = this.buttonSize;
        this.toucher.height = this.buttonSize;
        this.toucher._zIndex = 101
        // this.app.stage.addChild(this.toucher);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/button.png');
        this.rightBut = new PIXI.Sprite(this.button_rightText);
        this.rightBut.anchor.x = 0;
        this.rightBut.anchor.y = 1;
        this.rightBut.width = this.buttonSize;
        this.rightBut.height = this.buttonSize;
        this.rightBut._zIndex = 10
        this.frameCont.addChild(this.rightBut);
        this.rightBut.interactive = true;
        this.rightBut.buttonMode = true;
        this.theButs.push(this.rightBut)

        this.rightBut.on('touchstart', (event) => {
            this.e.input.keyRight=true;
        })

        this.rightBut.on('touchend', (event) => {
            this.e.input.keyRight=false;
        })

        this.rightBut.on('touchendoutside', (event) => {
            this.e.input.keyRight=false;
        })

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/button.png');
        this.shootBut = new PIXI.Sprite(this.button_shootText);
        this.shootBut.anchor.x = 1;
        this.shootBut.anchor.y = 1;
        this.shootBut.width = this.buttonSize;
        this.shootBut.height = this.buttonSize;
        this.shootBut._zIndex = 10
        this.frameCont.addChild(this.shootBut);
        this.shootBut.interactive = true;
        this.shootBut.buttonMode = true;

        this.shootBut.on('touchstart', (event) => {
            this.e.input.keySpace=true;
        })

        this.shootBut.on('touchend', (event) => {
            this.e.input.keySpace=false;
        })

        this.shootBut.on('touchendoutside', (event) => {
            this.e.input.keySpace=false;
        })

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/button.png');
        this.jumpBut = new PIXI.Sprite(this.button_jumpText);
        this.jumpBut.anchor.x = 1;
        this.jumpBut.anchor.y = 1;
        this.jumpBut.width = this.buttonSize*1.1;
        this.jumpBut.height = this.buttonSize*1.1;
        this.jumpBut._zIndex = 10
        this.frameCont.addChild(this.jumpBut);
        this.jumpBut.interactive = true;
        this.jumpBut.buttonMode = true;

        this.jumpBut.on('touchstart', (event) => {
            this.e.input.keyUp=true;
        })

        this.jumpBut.on('touchend', (event) => {
            this.e.input.keyUp=false;
        })

        this.jumpBut.on('touchendoutside', (event) => {
            this.e.input.keyUp=false;
        })

        this.fakeBKG = document.getElementById("bkg");


        // ------------------------------------------

        this.start();

        this.buildLevel();



    }



    resize(){

        // this.div=1/Math.round(window.devicePixelRatio)

        // this.hSize = 900;

        // this.appH = this.hSize;
        // this.appW = window.innerWidth*(this.hSize/window.innerHeight)

        // this.appFix = 900/window.innerWidth
        // this.appFix2 = window.innerWidth/900


        // this.frameCont.scale.x = this.appFix
        // this.frameCont.scale.y = this.appFix

        this.app.renderer.resize(this.e.screenWidth, this.e.screenHeight);
        // this.app.renderer.resize(this.appW, this.appH);

        // this.fixScale = this.e.screenWidth/this.app.renderer.width;
        // this.fixScale2 = this.app.renderer.width/this.e.screenWidth;

        this.fixScale = this.e.screenHeight/this.app.renderer.height;
        this.fixScale2 = this.app.renderer.height/this.e.screenHeight;

        if(this.app.renderer.height>1100){

            this.mcFix = 1.5;

        }else if(this.e.mobile===true){

            this.mcFix = .75;

        }else{

            this.mcFix = 1;
        }

        this.mcFix2 = 1/this.mcFix;

        if(this.mcFix === 2){
            this.mcMove=-window.innerWidth*.6;
        }else if(this.mcFix === 1.5){
            this.mcMove=-window.innerWidth/3;
        }else if(this.mcFix === .75){
            if(this.e.mobile===true){
                this.mcMove=window.innerWidth*.24;
            }else{
                this.mcMove=window.innerWidth*.12;
            }

        }else{
            this.mcMove=0;
        }


        this.mainCont.scale.x=this.mcFix;
        this.mainCont.scale.y=this.mcFix;
        // this.mainCont.position.x=333

        // this.fixScale = this.e.screenHeight/900;
        // this.fixScale2 = this.app.renderer.height/900;

        // this.fixScale = 1
        // this.fixScale2 = 1




        // console.log(this.app.renderer.height)

        // console.log(Math.round(window.devicePixelRatio)+" / "+this.fixScale2)

        //------------------------------------------------

        this.distanceFromTop = this.e.screenHeight + this.player.position.y;
        this.distanceFromRight = this.e.screenWidth;

        this.upThresh=this.e.screenHeight/5;
        this.gotNotes.position.y=-this.e.screenHeight/2;

        // this.heightUp = this.distanceFromTop-this.upThresh;
        this.heightUp = this.player.position.y+((window.innerHeight*this.fixScale2)-200);
        // this.heightUp=0;
        if(this.heightUp>0){
            this.heightUp=0
        }

        this.playerPosOnScreen = (this.player.position.x + this.mainCont.position.x);
        if(this.playerPosOnScreen>this.e.screenWidth*this.fixScale2){
            this.forwardMovement=this.playerPosOnScreen-(this.e.screenWidth*this.fixScale2);
        }

        //------------------------------------------------

        this.fgCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*1.25);

        this.blockCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-this.player.position.x;
        this.cloudBackCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-this.player.position.x;
        this.mainCont.position.y = Math.round((this.e.screenHeight)*this.fixScale2)-this.heightUp;
        this.mainCont.position.x = this.mcMove


        this.fensesCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.85);
        this.treeCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.825);
        this.landscapeCont.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.8);
        this.headCont.position.x = -2000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.7);
        this.headCont2.position.x = Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.65);
        this.whiteCloudCont.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.6);
        this.diagnalsCont.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.55);
        this.smallCloudCont.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.5);
        this.mountainCont.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.45);
        this.blueCloudsCont.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.4);
        this.blueCloudsCont2.position.x = -1000+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.3);
        this.sky.position.x = -1500+Math.round((this.e.screenWidth/2)*this.fixScale2)-(this.player.position.x*.1);

        this.whiteCloudCont.position.y = -50;
        this.headCont.position.y = -100;
        this.headCont2.position.y = -180;
        this.diagnalsCont.position.y = -180;
        this.mountainCont.position.y = -180;
        this.smallCloudCont.position.y = -250;
        this.blueCloudsCont.position.y = -300;
        this.blueCloudsCont2.position.y = -350;

        this.app.stage.scale.x = this.fixScale;
        this.app.stage.scale.y = this.fixScale;


        //--- frame positioning ---------------------------------------------

        this.frameCont.position.x = Math.round(this.e.screenWidth/2)*this.fixScale2;
        this.frameCont.position.y = Math.round(this.e.screenHeight)*this.fixScale2;

        this.frameTop.position.y = -Math.round(this.e.screenHeight)*this.fixScale2;
        this.frameTop.width = -Math.round(this.e.screenWidth)*this.fixScale2;

        this.frameBot.position.y = 0;
        this.frameBot.width = -Math.round(this.e.screenWidth)*this.fixScale2;

        this.frameLeft.position.x = -Math.round(this.e.screenWidth/2)*this.fixScale2;
        this.frameLeft.width = 5000;
        this.frameLeft.alpha = 1;

        this.frameRight.position.x = Math.round(this.e.screenWidth/2)*this.fixScale2;
        this.frameRight.width = 5000;
        this.frameRight.alpha = 1;

        this.fader.width = window.innerWidth*this.fixScale2;
        this.fader.height = window.innerHeight*this.fixScale2;
        this.fader.position.y=0;
        this.fader.position.x=0;

        this.fader2.width = window.innerWidth*this.fixScale2;
        this.fader2.height = window.innerHeight*this.fixScale2;
        this.fader2.position.y=0;
        this.fader2.position.x=0;

        //--- vig positioning ---------------------------------------------

        this.vig.width = window.innerWidth*this.fixScale2;
        this.vig.height = window.innerHeight*this.fixScale2;

        //--- mobile control positioning ---------------------------------------------

        var ex=10;

        this.leftBut.position.x = ((-this.e.screenWidth/2)*this.fixScale2)+ex;
        this.rightBut.position.x = (((-this.e.screenWidth/2)*this.fixScale2)+this.leftBut.width)+ex;

        this.shootBut.position.x = (((this.e.screenWidth/2)*this.fixScale2)-this.shootBut.width)-ex;
        this.jumpBut.position.x = (((this.e.screenWidth/2)*this.fixScale2))-ex+7;

        this.leftBut.position.y=-ex
        this.rightBut.position.y=-ex

        this.shootBut.position.y=-ex
        this.jumpBut.position.y=-ex+7

        if(this.e.mobile===false){
            this.leftBut.alpha=0;
            this.rightBut.alpha=0;
            this.shootBut.alpha=0;
            this.jumpBut.alpha=0;
        }

        //--- note cont ---------------------------------------------

        this.noteCont.position.x = ((this.e.screenWidth/2)-96)*this.fixScale2;
        this.noteCont.position.y = (-this.e.screenHeight+26)*this.fixScale2;

        this.scoreCont.position.x = ((-this.e.screenWidth/2)+26)*this.fixScale2;
        this.scoreCont.position.y = (-this.e.screenHeight+26)*this.fixScale2;

        this.creditCont.position.x = ((-this.e.screenWidth/2)+26)*this.fixScale2;
        this.creditCont.position.y = ((-this.e.screenHeight/16))*this.fixScale2;

        this.versionCont.position.x = ((this.e.screenWidth/2)-200)*this.fixScale2;
        this.versionCont.position.y = ((-this.e.screenHeight/16))*this.fixScale2;

        this.gameOver.position.y = ((-this.e.screenHeight/2))*this.fixScale2;

        this.splash.position.y = ((-this.e.screenHeight/2))*this.fixScale2;

        if(window.innerWidth>window.innerHeight){

            if(window.innerHeight*window.devicePixelRatio<380){
                this.splash.scale.x=1;
                this.splash.scale.y=1;
            }else if(window.innerHeight*window.devicePixelRatio<680){
                this.splash.scale.x=2;
                this.splash.scale.y=2;
            }else{
                this.splash.scale.x=3;
                this.splash.scale.y=3;
            }

        }else{

            if(window.innerWidth*window.devicePixelRatio<420){
                this.splash.scale.x=1;
                this.splash.scale.y=1;
            }else if(window.innerWidth*window.devicePixelRatio<840){
                this.splash.scale.x=2;
                this.splash.scale.y=2;
            }else{
                this.splash.scale.x=3;
                this.splash.scale.y=3;
            }

        }

        if(this.e.mobile===true){
            this.selectCont.position.y = ((-this.e.screenHeight/2)+this.t.scExtra+40)*this.fixScale2;

        }else{
            this.selectCont.position.y = ((-this.e.screenHeight/2)+this.t.scExtra)*this.fixScale2;

        }

    }

    start(){

        this.peakHeight=0;
        this.xspeed=0;
        this.yspeed=0;
        this.gravity=90;
        this.speedInc=3;
        this.maxSpeedX=12;
        this.maxSpeedY=12;
        this.jumpHeight=35;
        this.footDistance=20;
        this.playerHeight=120;
        this.jumping=false;

        this.big=false;
        this.fireball=false;
        this.fireballWait=0;

        this.keyRight=false;
        this.keyLeft=false;
        this.keyUp=false;
        this.keyDown=false;

        this.brickSize = 90;

        this.pauseTime=0;

        this.controlMode="block"

        this.playerWarp=true;

    }

    handleStars(){

        for(var i=0; i<this.starArray.length; i++){

            var ob = this.starArray[i];


            ob.count-=this.e.dt;
            if(ob.count<0){
                ob.count=6*ob.aniSpeed;
                // ob.count=.5;
                ob.aniCount=10;
                ob.curFrame=0;
                if(Math.abs(this.xspeed)>1 || Math.abs(this.yspeed)>1){
                    ob.position.x=this.player.position.x+this.e.u.nran(50)
                    if(this.big===true){
                        ob.position.y=this.player.position.y-this.e.u.ran(160)
                    }else{
                        ob.position.y=this.player.position.y-this.e.u.ran(100)
                    }
                }else{
                    ob.position.x=1000
                    ob.position.y=1000
                }

                // ob.position.x=this.player.position.x
                // ob.position.y=this.player.position.y
            }


        }

    }

    update(){

        // if(this.player.position.x>1500 && this.playerWarp===true){
        //     this.playerWarp=false;
        //     this.player.position.x=47900
        // }

        if(this.noteCount>=100){
            this.noteCount=0;
            this.notesAction="set"
            this.p1Alive=true;
            this.p2Alive=true;
            this.p3Alive=true;
            this.selectChar1.alpha=1;
            this.selectChar2.alpha=1;
            this.selectChar3.alpha=1;
            this.e.s.p("freeLife")
        }

        if(this.player!==undefined){
            if(this.player.position.x>60575 && this.deathAction!=="win" && this.deathAction!=="win2"){
                this.deathAction="win"
            }
        }

        if(this.notesAction==="set"){

            this.notesAction="wait";
            this.gotNotes.alpha=1;

        }else if(this.notesAction==="wait"){

            this.noteShowCount+=this.e.dt
            if(this.noteShowCount>3){
                this.noteShowCount=0;
                this.gotNotes.alpha=0;
                this.notesAction="";
            }

        }

        this.addSection(null, null)

        this.animate();
        this.animatePlayer()
        this.handleStars();
        this.virusControl();

        // console.log(this.gameAction)

        if(this.pauseTime<=0){

            this.actorControl();
            this.handleBrickBits();

        }else{

            this.pauseTime-=this.e.dt;

        }

        if(this.gameAction==="splash"){

            this.player.alpha=0;
            this.useControls=false;

        }else if(this.gameAction==="startPressed"){

            this.e.s.p("coin")

            this.splash.interactive = false;
            this.splash.buttonMode = false;

            gsap.to( this.splash, {alpha: 0, duration: .5, ease:Quart.out});
            gsap.to( this.credit, {alpha: 0, duration: .5, ease:Quart.out});
            gsap.to( this.version, {alpha: 0, duration: .5, ease:Quart.out});
            gsap.to( this.t, {scExtra: 0, duration: .5, ease:Quart.out});

            this.gameAction="fadeSplash"

        }else if(this.gameAction==="fadeSplash"){

            this.gameCount+=this.e.dt;
            if(this.gameCount>1){
                this.gameCount=0;
                this.gameAction="selectCharacter"
            }

        }else if(this.gameAction==="deathStuff"){

            this.selectCont.alpha=1;
            gsap.to( this.t, {scExtra: 0, duration: .5, ease:Quart.out});
            this.gameAction="selectCharacter"

        }else if(this.gameAction==="selectCharacter"){

            // console.log(this.t.scExtra)

            // this.selectCont.alpha=1;
            if(this.p1Alive===true){
                this.selectChar1.buttonMode=true;
                this.selectChar1.interactive=true;
            }
            if(this.p2Alive===true){
                this.selectChar2.buttonMode=true;
                this.selectChar2.interactive=true;
            }
            if(this.p3Alive===true){
                this.selectChar3.buttonMode=true;
                this.selectChar3.interactive=true;
            }

        }else if(this.gameAction==="selectChar"){

            this.e.s.p("coin")

            this.e.s.ms()

            if(this.firstSelect===false){

                this.deathAction="nextLife"
                this.gameAction=""

            }else{

                this.firstSelect=false
                this.gameAction="selectCharOut"

            }

            gsap.to( this.t, {scExtra: 1000, duration: 1, ease:Quart.out});

            // this.selectCont.alpha=0;
            this.selectChar1.buttonMode=false;
            this.selectChar1.interactive=false;
            this.selectChar2.buttonMode=false;
            this.selectChar2.interactive=false;
            this.selectChar3.buttonMode=false;
            this.selectChar3.interactive=false;



        }else if(this.gameAction==="selectCharOut"){

            this.gameCount+=this.e.dt;
            if(this.gameCount>1){

                this.selectCont.alpha=0;

                this.gameCount=0;
                this.gameAction="set"
            }

        }else if(this.gameAction==="set"){

            this.useControls=true;
            this.player.alpha=0;
            gsap.to( this.player, {alpha: 1, duration: 2, ease:Quart.out});
            this.gameAction="";

        }

        if(this.gameAction==="" && this.deathAction==""){

            this.leftBut.alpha=1;
            this.rightBut.alpha=1;
            this.jumpBut.alpha=1;
            if(this.fireball===true){
                this.shootBut.alpha=1;
            }else{
                this.shootBut.alpha=0;
            }

        }else{

            this.leftBut.alpha=0;
            this.rightBut.alpha=0;
            this.jumpBut.alpha=0;
            this.shootBut.alpha=0;

        }







        // --- score --------------------------------------------------------

        if(this.noteCount>=10){
            this.noteUI.text = this.noteCount;
        }else{
            this.noteUI.text = "0"+this.noteCount;
        }

        if(this.score===0){
            this.scoreUI.text = "000000"
        }else if(this.score<100){
            this.scoreUI.text = "0000"+this.score;
        }else if(this.score<1000){
            this.scoreUI.text = "000"+this.score;
        }else if(this.score<10000){
            this.scoreUI.text = "00"+this.score;
        }else if(this.score<100000){
            this.scoreUI.text = "0"+this.score;
        }else{
            this.scoreUI.text = this.noteCount;
        }


        // --- controls x --------------------------------------------------------

        // console.log(this.player.height)

        if(this.big===true){
            this.playerHeight=120;
        }else{
            this.playerHeight=60;
        }

        if(this.deathAction!=""){
            console.log(this.deathAction+" / "+this.player.position.y)
        }

        if(this.deathAction==="start"){

            this.e.s.p("die")

            this.e.s.mstp()

            this.deathAction="wait"

        }else if(this.deathAction==="fall"){

            this.e.s.p("die")

            this.e.s.mstp()

            this.deathAction="outWait"

        }else if(this.deathAction==="wait"){

            this.deathCount+=this.e.dt;
            if(this.deathCount>.5){
                this.deathCount=0;
                this.deathAction="up"
            }

        }else if(this.deathAction==="up"){

            gsap.to( this.player.position, {y: this.player.position.y-200, duration: .5, ease:Quart.out});
            gsap.to( this.player.position, {y: this.player.position.y+2000, delay: .5, duration: 3, ease:Quart.in});

            this.deathAction="down"

        }else if(this.deathAction==="down"){

            // this.deathCount+=this.e.dt;

            if(this.player.position.y>100 || this.deathCount>1.5){

                this.deathCount=0;
                this.deathAction="outWait"

            }

        }else if(this.deathAction==="outWait"){

            this.deathCount+=this.e.dt;
            if(this.deathCount>1){
                this.deathCount=0;
                this.deathAction="out"
            }

        }else if(this.deathAction==="out"){

            this.fader.alpha+=this.e.dt*5;
            if(this.fader.alpha>=1){
                this.fader.alpha=1
                if(this.p1Alive===true||this.p2Alive===true||this.p3Alive===true){
                    this.deathAction="waitForSelect"
                    this.gameAction="deathStuff"
                }else{
                    this.deathAction="gameover"
                    this.gameOver.interactive=true;
                    this.gameOver.buttonMode=true;
                    gsap.to( this.gameOver, {alpha: 1, duration: 2, ease:Quart.out});
                }

            }

        }else if(this.deathAction==="waitForSelect"){


        }else if(this.deathAction==="nextLife"){

            if(this.checkPoint===0){
                this.player.position.x=1000-1000;
                this.player.position.y=-200;
            }else if(this.checkPoint===1){
                this.player.position.x=this.flagPole1.position.x-1000
                this.player.position.y=this.flagPole1.position.y-100
            }else if(this.checkPoint===2){
                this.player.position.x=this.flagPole2.position.x-1000
                this.player.position.y=this.flagPole2.position.y-100
            }else if(this.checkPoint===3){
                this.player.position.x=this.flagPole3.position.x-1000
                this.player.position.y=this.flagPole3.position.y-100
            }else if(this.checkPoint===4){
                this.player.position.x=this.flagPole4.position.x-1000
                this.player.position.y=this.flagPole4.position.y-100
            }

            this.deathCount=0;
            this.deathAction="wait2"

        }else if(this.deathAction==="wait2"){

            this.player.position.y=-200;

            this.deathCount+=this.e.dt;
            if(this.deathCount>.5){
                this.deathCount=0;
                this.deathAction="wait3"

                this.mainCont.addChild(this.player);
                this.mainCont.removeChild(this.blockCont);
                this.blockCount=null;

                this.plats=[];

                for(var i=0; i<this.blockArray.length; i++){
                    if(this.blockArray[i]!==null && this.blockArray[i]!==undefined){
                        // this.blockArray[i].destroy()
                    }
                }

                this.hammers=[];
                this.actors=[];
                this.virusAction="wait"
                this.virusShotAction="wait"

                this.blockCont = new PIXI.Container();
                this.blockCont.sortableChildren = true;
                this.mainCont.addChild(this.blockCont);

                this.blockCont.addChild(this.player);

                this.backParts()

                this.pushPosition = this.player.position.x;

                this.blockCont._zIndex=55;
            }

        }else if(this.deathAction==="wait3"){

            this.player.position.y=-200;

            this.deathCount+=this.e.dt;
            if(this.deathCount>.2){
                this.player.position.x+=1000
                if(this.checkPoint===0){
                    this.addSection(0, 20)
                    this.player.position.y=-200;
                }else{
                    this.addSection(Math.round((this.player.position.x/this.brickSize)-30), Math.round((this.player.position.x/this.brickSize)+30))
                    this.player.position.y=-500
                    console.log("max? "+Math.round((this.player.position.x/this.brickSize)+30));
                    // this.maxBlockMade=Math.round((this.player.position.x/this.brickSize)+30);
                }
                if(this.checkPoint===1){
                    this.flagPole1.action="up"
                    this.flagPole1.flag.position.y-=420;
                }else if(this.checkPoint===2){
                    this.flagPole2.action="up"
                    this.flagPole2.flag.position.y-=420;
                }else if(this.checkPoint===3){
                    this.flagPole3.action="up"
                    this.flagPole3.flag.position.y-=420;
                }else if(this.checkPoint===4){
                    this.flagPole4.action="up"
                    this.flagPole4.flag.position.y-=420;
                }
                this.player.alpha=0;
                gsap.to( this.player, {alpha: 1, duration: 2, ease:Quart.out});
                gsap.to( this.fader, {alpha: 0, duration: .6, ease:Quart.out});
                this.deathCount=0;
                this.deathAction=""

                this.useControls=true;


                this.xspeed=0;
                this.big=false;
                this.fireball=false;
            }

        }else if(this.deathAction==="win"){

            this.fader.alpha=.5;
            this.deathAction="win2"

            gsap.to( this.fader, {alpha: 0, duration: .6, ease:Quart.out});
            this.player.position.x=60575;
            this.player.position.y=-150;
            this.mainCont.position.y=0;
            this.player.alpha=0;
            this.useControls=false;
            this.xspeed=0;
            this.yspeed=0;

            this.stage.ani=this.stageAni2;
            this.stage.aniCount=10;
            this.e.s.p("stageWon")

        }else if(this.deathAction==="win2"){

            // console.log(this.stage.curFrame)

        }

        if(this.pauseTime<=0 && this.useControls===true){

            // --- controls x --------------------------------------------------------
            // --- controls x --------------------------------------------------------
            // --- controls x --------------------------------------------------------
            // --- controls x --------------------------------------------------------
            // --- controls x --------------------------------------------------------

            if(this.playerMovementDelay>0){
                this.playerMovementDelay-=this.e.dt;
            }

            if(this.playerMovementDelay<=0 && this.playerMovement===true){

                if(this.e.input.keyRight===true){

                    // this.xspeed+=this.speedInc;
                    // if(this.xspeed>this.maxSpeedX){
                        this.xspeed=this.maxSpeedX;
                    // }

                }else if(this.e.input.keyLeft===true){

                    // this.xspeed-=this.speedInc;
                    // if(this.xspeed<-this.maxSpeedX){
                        this.xspeed=-this.maxSpeedX;
                    // }

                }else{

                    this.xspeed*=.75;

                }

                this.applyX=this.xspeed*this.e.dt*this.speed;

                // --- check platforms x --------------------------------------------------------
                // --- check platforms x --------------------------------------------------------
                // --- check platforms x --------------------------------------------------------
                // --- check platforms x --------------------------------------------------------
                // --- check platforms x --------------------------------------------------------

                this.moverx.position.x=this.player.position.x+(this.applyX);
                this.moverx.position.y=this.player.position.y;

                for(var i=0; i<this.plats.length; i++){

                    if(this.plats[i]!==null){

                        if( this.e.u.checkPlatformX(this.plats[i],this.player)===true ){

                            this.xspeed=0;

                        }

                    }

                }

                // --- controls y --------------------------------------------------------
                // --- controls y --------------------------------------------------------
                // --- controls y --------------------------------------------------------
                // --- controls y --------------------------------------------------------
                // --- controls y --------------------------------------------------------

                if(this.jumping===false && this.e.input.keyUp===true){
                    this.e.s.p("jump")
                    this.yspeed=-this.jumpHeight;
                    this.jumping=true;
                    this.peakHeight=this.player.position.y;
                }

                this.yspeed+=this.gravity*this.e.dt;
                this.applyY=this.yspeed*this.e.dt*this.speed;

                // if feet fall below floor

                if(this.player.position.y>100 && this.deathAction===""){
                    this.deathAction="fall"
                    this.useControls=false
                }

                if(this.jumping===true && this.yspeed<0){
                    if(this.player.position.y<this.peakHeight){
                        this.peakHeight=this.player.position.y;
                    }
                }

                // --- check platforms y --------------------------------------------------------
                // --- check platforms y --------------------------------------------------------
                // --- check platforms y --------------------------------------------------------
                // --- check platforms y --------------------------------------------------------
                // --- check platforms y --------------------------------------------------------

                this.movery.position.x=this.player.position.x;
                this.movery.position.y=this.player.position.y+(this.applyY);

                if(this.yspeed>0){

                    for(var i=0; i<this.plats.length; i++){

                        if(this.plats[i]!==null){

                            if( this.e.u.checkPlatformY(this.plats[i],this.player)===true ){

                                // has hit a platform, now place feet on ground

                                this.jumping=false;

                                for(var j=0; j<20; j++){

                                    this.yspeed=j;

                                    if( this.e.u.checkPlatformY(this.plats[i],this.player)===true ){

                                        this.player.position.y+=j;
                                        this.yspeed=0;
                                        j=20;

                                    }

                                }

                                this.yspeed=0;

                                i=10000;

                            }

                        }

                    }

                }else if(this.yspeed<0 && this.jumping===true && this.controlMode==="block"){

                    // --- hit head --------------------------------------------------------
                    // --- hit head --------------------------------------------------------
                    // --- hit head --------------------------------------------------------
                    // --- hit head --------------------------------------------------------
                    // --- hit head --------------------------------------------------------

                    this.hasHitHead=false;

                    for(var i=0; i<this.plats.length; i++){

                        if(this.plats[i]!==null){

                            if( this.e.u.checkPlatformY(this.plats[i])===true ){

                                this.yspeed=0;
                                this.hasHitHead=true;
                                this.headHits.push(this.plats[i])
                                console.log("hit "+i)

                            }

                        }

                    }

                    // --- has hit head --------------------------------------------------------

                    if(this.hasHitHead===true){

                        this.shortestDistanceBlock = 10000;
                        this.headHitBlock = null;

                        console.log("--------")

                        // --- find the closest brick --------------------------------------------------------

                        for(var i=0; i<this.headHits.length; i++){

                            if(this.player.scale===1){
                                this.extraHead=0;
                            }else{
                                this.extraHead=0;
                            }

                            var theDist = Math.abs(this.headHits[i].position.x - this.player.position.x + this.extraHead);

                            console.log(i+" / "+theDist)

                            if(theDist<this.shortestDistanceBlock){
                                this.shortestDistanceBlock = theDist;
                                this.headHitBlock = this.headHits[i];
                            }

                        }

                        // --- apply smash --------------------------------------------------------

                        if(this.headHitBlock!==null){
                            this.headSmash(this.headHitBlock)
                        }

                        this.headHits=[];

                    }

                }

                // --- apply --------------------------------------------------------

                this.player.position.x+=this.xspeed*this.e.dt*this.speed;
                this.player.position.y+=this.yspeed*this.e.dt*this.speed;

                // this.player.position.x+=this.xspeed
                // this.player.position.y+=this.yspeed

                // --- scale --------------------------------------------------------

                if(this.xspeed>0){
                    this.player.scale.x=1
                }else if(this.xspeed<0){
                    this.player.scale.x=-1
                }

                // --- fireball --------------------------------------------------------

                if(this.fireball===true){

                    if(this.e.input.mouseIsDown===true || this.e.input.keySpace===true){

                        if(this.fireballWait>.5){

                            this.fireballWait=0;

                            this.e.s.p("fireball")

                            this.fb = new PIXI.Sprite(this.fb1Text);
                            this.fb.position.x = this.player.position.x;
                            this.fb.position.y = this.player.position.y-70;
                            this.fb.anchor.x = .5;
                            this.fb.anchor.y = 1;
                            this.fb.scale.x = 2;
                            this.fb.scale.y = 2;
                            this.fb._zIndex = 80
                            this.fb.ani=this.fbAni;
                            this.fb.aniSpeed=.05;
                            this.animatedSprites.push(this.fb)
                            this.blockCont.addChild(this.fb);
                            this.fb.type="fireball"
                            this.fb.action="set"
                            if(this.playerAction==="stance"){
                                this.showFBAni=.1;
                            }

                            this.actors.push(this.fb)

                            console.log("fireball")

                        }

                    }

                    this.fireballWait+=this.e.dt;

                }

                // --- prevent going backward --------------------------------------------------------

                if(this.player.position.x<1000){
                    this.player.position.x=1000;
                }

            }

        }

        this.resize();

        this.handleBricks();
        this.hitTests();

        for(var i=0; i<this.plats.length; i++){

            if(this.plats[i]===null){
                this.plats.splice(i, 1);
            }

        }

    }

    buildLevel(){


        // console.log(this.e.level1)

        this.background()



        this.fbAni = [this.fb1Text,this.fb2Text,this.fb3Text,this.fb4Text];

        // ------------------------------------------



        this.starAni = [this.star1Text,this.star2Text,this.star3Text,this.star4Text,this.star5Text,this.clear,this.clear,this.clear,this.clear,this.clear,this.clear];

        for(var i=0; i<10; i++){

            this.star = new PIXI.Sprite(this.star1Text);
            this.star.anchor.x = .5;
            this.star.anchor.y = .5;
            this.star.scale.x=3
            this.star.scale.y=3
            this.star._zIndex = 40
            this.blockCont.addChild(this.star);
            this.star.count=i/10;

            this.animatedSprites.push(this.star)
            this.star.ani=this.starAni;
            this.star.aniSpeed=.1;

            this.starArray.push(this.star)

        }
        // this.cloudBackTexture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/cloudBack.png');
        this.cloudBack = new PIXI.Sprite(this.cloudBackText);
        this.cloudBack.anchor.x = 1;
        this.cloudBack.anchor.y = 1;
        this.cloudBack.scale.x=3
        this.cloudBack.scale.y=3
        this.cloudBack._zIndex = 140
        this.cloudBack.position.x=1000;
        this.cloudBackCont.addChild(this.cloudBack);

        this.plats.push(this.cloudBack);

    }

    addSection(ovStart, ovEnd){

        if(this.player.position.x>this.pushPosition){
            this.pushPosition = this.player.position.x;
        }

        this.pushBlock = Math.round(this.pushPosition/this.brickSize)+15

        if(this.pushBlock<this.maxBlockMade){
            this.pushBlock=this.maxBlockMade
        }

        if(ovStart!==null){

            var start = ovStart;
            var end = ovEnd

        }else{

            start = this.maxBlockMade;
            end = this.pushBlock

        }

        // console.log("---------make----------- "+this.pushBlock+" / "+this.maxBlockMade)

        for(var i=0; i<this.e.level1.allLevs.length; i++){

            var la = this.e.level1.allLevs[i];

            for(var j=start; j<end; j++){

                if(i===0){
                    // console.log("make "+j+" / "+this.maxBlockMade+" / "+ovEnd)
                }

                var ss = la.substring(j,j+1)

                this.makeBlock(ss, j, i)

                // console.log("make "+j)

            }

        }

        this.pushBlock = end;
        this.maxBlockMade = end;

        //-----------------------------------------

        this.backAmount=3000;

        for(var i=0; i<this.plats.length; i++){

            if(this.plats[i]!==null){

                if(this.player.position.x-this.plats[i].position.x>this.backAmount){

                    if(this.plats[i].boxBack!==null){
                        this.blockCont.removeChild(this.plats[i].boxBack)
                        this.plats[i].boxBack=null;
                    }

                    this.blockCont.removeChild(this.plats[i])
                    this.plats[i]=null;

                }

            }

        }

        this.cloudBack.position.x=this.pushPosition-this.backAmount+this.brickSize;

    }

    background(){

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/skyback.png');
        // this.sky = new PIXI.Sprite(this.texture);
        // this.sky.anchor.x = 0;
        // this.sky.anchor.y = 1;
        // this.sky.position.x = -1000;
        // this.sky._zIndex = 1
        // this.sky.scale.x = 300;
        // this.sky.scale.y = 3;
        // this.mainCont.addChild(this.sky);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/skyPattern.png');
        this.sky = new PIXI.TilingSprite(this.skyPatternText, 36*3, 720*3);
        this.sky._zIndex = 1
        this.sky.anchor.x = 0;
        this.sky.anchor.y = 1;
        this.sky.position.x = -1000;
        this.sky.width=10000;
        this.sky.height=720*3;
        this.sky.scale.x = 3;
        this.sky.scale.y = 3;
        this.mainCont.addChild(this.sky);

        this.fgCont = new PIXI.Container();
        this.fgCont.sortableChildren = true;
        this.mainCont.addChild(this.fgCont);

        this.fgCont._zIndex=60;
        this.fgCont.position.y=0;
        this.fgCont.position.x=0;

        for(var i=0; i<12; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/forground.png');
            this.forground = new PIXI.Sprite(this.forgroundText);
            this.forground.anchor.x = 0;
            this.forground.anchor.y = 1;
            this.forground.position.x = i*(680*3);
            this.forground.position.y = 0;
            this.forground.scale.x = 3;
            this.forground.scale.y = 3;
            this.fgCont.addChild(this.forground);

        }

        this.fensesCont = new PIXI.Container();
        this.fensesCont.sortableChildren = true;
        this.mainCont.addChild(this.fensesCont);

        this.fensesCont._zIndex=53;

        for(var i=0; i<4; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_fenses.png');
            this.bg_fenses = new PIXI.Sprite(this.bg_fensesText);
            this.bg_fenses.anchor.x = 0;
            this.bg_fenses.anchor.y = 1;
            this.bg_fenses.position.x = i*(1280*3);
            this.bg_fenses.position.y = 92;
            this.bg_fenses.scale.x = 3;
            this.bg_fenses.scale.y = 3;
            this.fensesCont.addChild(this.bg_fenses);

        }

        this.treeCont = new PIXI.Container();
        this.treeCont.sortableChildren = true;
        this.mainCont.addChild(this.treeCont);

        this.treeCont._zIndex=51;

        for(var i=0; i<4; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_landscape.png');
            this.bg_tree = new PIXI.Sprite(this.bg_treesText);
            this.bg_tree.anchor.x = 0;
            this.bg_tree.anchor.y = 1;
            this.bg_tree.position.x = i*(1280*3);
            this.bg_tree.position.y = 0;
            this.bg_tree.scale.x = 3;
            this.bg_tree.scale.y = 3;
            this.treeCont.addChild(this.bg_tree);

        }

        this.landscapeCont = new PIXI.Container();
        this.landscapeCont.sortableChildren = true;
        this.mainCont.addChild(this.landscapeCont);

        this.landscapeCont._zIndex=50;

        for(var i=0; i<4; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_landscape.png');
            this.bg_landscape = new PIXI.Sprite(this.bg_landscapeText);
            this.bg_landscape.anchor.x = 0;
            this.bg_landscape.anchor.y = 1;
            this.bg_landscape.position.x = i*(1280*3);
            this.bg_landscape.position.y = 92;
            this.bg_landscape.scale.x = 3;
            this.bg_landscape.scale.y = 3;
            this.landscapeCont.addChild(this.bg_landscape);

        }

        this.headCont = new PIXI.Container();
        this.headCont.sortableChildren = true;
        this.mainCont.addChild(this.headCont);

        this.headCont._zIndex=45;

        for(var i=0; i<4; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_head.png');
            this.bg_head = new PIXI.Sprite(this.bg_headText);
            this.bg_head.anchor.x = 0;
            this.bg_head.anchor.y = 1;
            this.bg_head.position.x = i*(1280*3);
            this.bg_head.position.y = 92;
            this.bg_head.scale.x = 3;
            this.bg_head.scale.y = 3;
            this.headCont.addChild(this.bg_head);

        }

        this.headCont2 = new PIXI.Container();
        this.headCont2.sortableChildren = true;
        this.mainCont.addChild(this.headCont2);

        this.headCont2._zIndex=43;

        for(var i=0; i<2; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_head2.png');
            this.bg_head2 = new PIXI.Sprite(this.bg_head2Text);
            this.bg_head2.anchor.x = 0;
            this.bg_head2.anchor.y = 1;
            this.bg_head2.position.x = i*(1920*3);
            this.bg_head2.position.y = 92;
            this.bg_head2.scale.x = 3;
            this.bg_head2.scale.y = 3;
            this.headCont2.addChild(this.bg_head2);

        }

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/blueColor.png');
        this.blueColor = new PIXI.Sprite(this.blueColorText);
        this.blueColor.anchor.x = 0;
        this.blueColor.anchor.y = 1;
        this.blueColor.width=10000;
        this.blueColor.height=10000;
        this.blueColor.position.x = 0;
        this.blueColor.position.y = 0;
        this.blueColor.alpha=0;
        this.blueColor._zIndex=37;
        this.mainCont.addChild(this.blueColor);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/blueGrad.png');
        this.blueGrad = new PIXI.Sprite(this.blueGradText);
        this.blueGrad.anchor.x = 0;
        this.blueGrad.anchor.y = 1;
        this.blueGrad.position.x = 0;
        this.blueGrad.position.y = 92;
        this.blueGrad.scale.x = 3;
        this.blueGrad.scale.y = 3;
        this.mainCont.addChild(this.blueGrad);

        this.whiteCloudCont = new PIXI.Container();
        this.whiteCloudCont.sortableChildren = true;
        this.mainCont.addChild(this.whiteCloudCont);

        this.whiteCloudCont._zIndex=40;

        for(var i=0; i<20; i++){


            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_whiteClouds.png');
            this.bg_whiteCloud = new PIXI.Sprite(this.bg_whiteCloudsText);
            this.bg_whiteCloud.anchor.x = 0;
            this.bg_whiteCloud.anchor.y = 1;
            this.bg_whiteCloud.position.x = i*(1280*3);
            this.bg_whiteCloud.position.y = 92;
            this.bg_whiteCloud.scale.x = 3;
            this.bg_whiteCloud.scale.y = 3;
            this.whiteCloudCont.addChild(this.bg_whiteCloud);

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_clouds.png');
            this.bg_whiteCloud = new PIXI.Sprite(this.bg_cloudsText);
            this.bg_whiteCloud.anchor.x = 0;
            this.bg_whiteCloud.anchor.y = 1;
            this.bg_whiteCloud.position.x = i*(1280*3);
            this.bg_whiteCloud.position.y = -292;
            this.bg_whiteCloud.scale.x = 3;
            this.bg_whiteCloud.scale.y = 3;
            this.whiteCloudCont.addChild(this.bg_whiteCloud);

        }

        this.smallCloudCont = new PIXI.Container();
        this.smallCloudCont.sortableChildren = true;
        this.mainCont.addChild(this.smallCloudCont);

        this.smallCloudCont._zIndex=37;

        for(var i=0; i<20; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_smallClouds.png');
            this.bg_smallClouds = new PIXI.Sprite(this.bg_smallCloudsText);
            this.bg_smallClouds.anchor.x = 0;
            this.bg_smallClouds.anchor.y = 1;
            this.bg_smallClouds.position.x = i*(1280*3);
            this.bg_smallClouds.position.y = 92;
            this.bg_smallClouds.scale.x = 3;
            this.bg_smallClouds.scale.y = 3;
            this.smallCloudCont.addChild(this.bg_smallClouds);

        }

        this.diagnalsCont = new PIXI.Container();
        this.diagnalsCont.sortableChildren = true;
        this.mainCont.addChild(this.diagnalsCont);

        this.diagnalsCont._zIndex=38;

        for(var i=0; i<20; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_diagnals.png');
            this.bg_diagnals = new PIXI.Sprite(this.bg_diagnalsText);
            this.bg_diagnals.anchor.x = 0;
            this.bg_diagnals.anchor.y = 1;
            this.bg_diagnals.position.x = i*(1280*3);
            this.bg_diagnals.position.y = 92;
            this.bg_diagnals.scale.x = 3;
            this.bg_diagnals.scale.y = 3;
            this.diagnalsCont.addChild(this.bg_diagnals);

        }

        this.mountainCont = new PIXI.Container();
        this.mountainCont.sortableChildren = true;
        this.mainCont.addChild(this.mountainCont);

        this.mountainCont._zIndex=35;

        for(var i=0; i<20; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_mountains.png');
            this.bg_mountains = new PIXI.Sprite(this.bg_mountainsText);
            this.bg_mountains.anchor.x = 0;
            this.bg_mountains.anchor.y = 1;
            this.bg_mountains.position.x = i*(1280*3);
            this.bg_mountains.position.y = 92;
            this.bg_mountains.scale.x = 3;
            this.bg_mountains.scale.y = 3;
            this.mountainCont.addChild(this.bg_mountains);

        }

        this.blueCloudsCont = new PIXI.Container();
        this.blueCloudsCont.sortableChildren = true;
        this.mainCont.addChild(this.blueCloudsCont);

        this.blueCloudsCont._zIndex=30;

        for(var i=0; i<20; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_blueClouds.png');
            this.bg_blueClouds = new PIXI.Sprite(this.bg_blueCloudsText);
            this.bg_blueClouds.anchor.x = 0;
            this.bg_blueClouds.anchor.y = 1;
            this.bg_blueClouds.position.x = i*(1280*3);
            this.bg_blueClouds.position.y = 92;
            this.bg_blueClouds.scale.x = 3;
            this.bg_blueClouds.scale.y = 3;
            this.blueCloudsCont.addChild(this.bg_blueClouds);

        }

        this.blueCloudsCont2 = new PIXI.Container();
        this.blueCloudsCont2.sortableChildren = true;
        this.mainCont.addChild(this.blueCloudsCont2);

        this.blueCloudsCont2._zIndex=28;

        for(var i=0; i<20; i++){

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bg_blueClouds2.png');
            this.bg_blueClouds2 = new PIXI.Sprite(this.bg_blueClouds2Text);
            this.bg_blueClouds2.anchor.x = 0;
            this.bg_blueClouds2.anchor.y = 1;
            this.bg_blueClouds2.position.x = i*(1280*3);
            this.bg_blueClouds2.position.y = 92;
            this.bg_blueClouds2.scale.x = 3;
            this.bg_blueClouds2.scale.y = 3;
            this.blueCloudsCont2.addChild(this.bg_blueClouds2);

        }

        this.backParts()

    }

    backParts(){


        this.moverx = new PIXI.Sprite(this.blueColorText);
        this.moverx.anchor.x = 0.5;
        this.moverx.anchor.y = 1;
        this.moverx.width = this.footDistance*2
        this.moverx.height = 90;
        this.moverx._zIndex=200
        this.moverx.alpha=0;
        this.blockCont.addChild(this.moverx);

        this.movery = new PIXI.Sprite(this.blueColorText);
        this.movery.anchor.x = 0.5;
        this.movery.anchor.y = 1;
        this.movery.width = this.footDistance*2
        this.movery.height = 90;
        this.movery._zIndex=200
        this.movery.alpha=0;
        this.blockCont.addChild(this.movery);

        this.movera = new PIXI.Sprite(this.blueColorText);
        this.movera.anchor.x = 0.5;
        this.movera.anchor.y = 1;
        this.movera.width = this.brickSize
        this.movera.height = this.brickSize;
        this.movera._zIndex=200
        this.movera.alpha=0;
        this.blockCont.addChild(this.movera);


        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/bummerLandSign.png');
        this.bummerLandSign = new PIXI.Sprite(this.bummerLandSignText);
        this.bummerLandSign.anchor.x = 0;
        this.bummerLandSign.anchor.y = 1;
        this.bummerLandSign.position.x = 2000;
        this.bummerLandSign.position.y = -90;
        this.bummerLandSign.scale.x = 3;
        this.bummerLandSign.scale.y = 3;
        this.blockCont.addChild(this.bummerLandSign);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/blackArea.png');
        this.blackBack = new PIXI.Sprite(this.blackAreaText);
        this.blackBack.anchor.x = 0;
        this.blackBack.anchor.y = 1;
        this.blackBack.position.x = 20000;
        this.blackBack.position.y = 0;
        this.blackBack._zIndex=1;
        this.blackBack.scale.x = 3;
        this.blackBack.scale.y = 3;
        this.blockCont.addChild(this.blackBack);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/blackArea.png');
        this.blackBack = new PIXI.Sprite(this.blackAreaText);
        this.blackBack.anchor.x = 0;
        this.blackBack.anchor.y = 1;
        this.blackBack.position.x = 45000;
        this.blackBack.position.y = 0;
        this.blackBack._zIndex=1;
        this.blackBack.scale.x = 3;
        this.blackBack.scale.y = 3;
        this.blockCont.addChild(this.blackBack);

        // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/castle.png');
        this.blackBack = new PIXI.Sprite(this.castleText);
        this.blackBack.anchor.x = 0;
        this.blackBack.anchor.y = 1;
        this.blackBack.position.x = 54630;
        this.blackBack.position.y = 0;
        this.blackBack._zIndex=1;
        this.blackBack.scale.x = 3;
        this.blackBack.scale.y = 3;
        this.blockCont.addChild(this.blackBack);

        this.stage = new PIXI.Sprite(this.stage1Text);
        this.stage.anchor.x = .5;
        this.stage.anchor.y = 1;
        this.stage.position.x = 60570;
        this.stage.position.y = 0;
        this.stage._zIndex=1;
        this.stage.scale.x = 3;
        this.stage.scale.y = 3;
        this.blockCont.addChild(this.stage);

        this.animatedSprites.push(this.stage)

        this.stage.ani=this.stageAni1;
        this.stage.aniSpeed=.3;

        this.stageBkg = new PIXI.Sprite(this.blueColorText);
        this.stageBkg.anchor.x = .5;
        this.stageBkg.anchor.y = 0;
        this.stageBkg.position.x = 60570;
        this.stageBkg.position.y = -130;
        this.stageBkg._zIndex=111;
        this.stageBkg.width = 1100;
        this.stageBkg.height = 44;
        this.stageBkg.alpha = 0;

        console.log("sky "+this.stageBkg)

        this.blockCont.addChild(this.stageBkg);

        this.plats.push(this.stageBkg)

        // --- virus ------------------------------------

        this.virusCont = new PIXI.Container();
        this.virusCont.sortableChildren = true;
        this.blockCont.addChild(this.virusCont);

        this.virusCont.position.x = 57690;
        this.virusCont.position.y = -600;
        this.virusCont._zIndex = 111;

        this.virusCont.startX = this.virusCont.position.x;
        this.virusCont.startY = this.virusCont.position.y;

        this.virusSprite = new PIXI.Sprite(this.virusText);
        this.virusSprite.anchor.x = .5;
        this.virusSprite.anchor.y = .5;
        this.virusSprite._zIndex = 12;
        this.virusSprite.scale.x = 3;
        this.virusSprite.scale.y = 3;
        this.virusCont.addChild(this.virusSprite)

        this.virusHit = new PIXI.Sprite(this.blueColorText);
        this.virusHit.anchor.x = .5;
        this.virusHit.anchor.y = .5;
        this.virusHit._zIndex = 32;
        this.virusHit.width = 200;
        this.virusHit.height = 300;
        this.virusHit.alpha = 0;
        this.virusCont.addChild(this.virusHit)

        this.virusHit2 = new PIXI.Sprite(this.blueColorText);
        this.virusHit2.anchor.x = .5;
        this.virusHit2.anchor.y = .5;
        this.virusHit2._zIndex = 32;
        this.virusHit2.width = 300;
        this.virusHit2.height = 200;
        this.virusHit2.alpha = 0;
        this.virusCont.addChild(this.virusHit2)

        this.virusShotT = new PIXI.Sprite(this.virusShotText);
        this.virusShotT.anchor.x = .5;
        this.virusShotT.anchor.y = .5;
        this.virusShotT._zIndex = 21;
        this.virusShotT.scale.x = 3;
        this.virusShotT.scale.y = 3;
        this.virusShotT.position.y = -186;
        this.virusShotT.rotation = this.e.u.ca(90);
        this.virusShotT.alpha = 0;
        this.virusShotT.name="T"
        this.virusCont.addChild(this.virusShotT)

        this.virusShotL = new PIXI.Sprite(this.virusShotText);
        this.virusShotL.anchor.x = .5;
        this.virusShotL.anchor.y = .5;
        this.virusShotL._zIndex = 21;
        this.virusShotL.scale.x = 3;
        this.virusShotL.scale.y = 3;
        this.virusShotL.position.x = -186;
        this.virusShotL.rotation = 0;
        this.virusShotL.alpha = 0;
        this.virusShotL.name="L"
        this.virusCont.addChild(this.virusShotL)

        this.virusShotB = new PIXI.Sprite(this.virusShotText);
        this.virusShotB.anchor.x = .5;
        this.virusShotB.anchor.y = .5;
        this.virusShotB._zIndex = 21;
        this.virusShotB.scale.x = 3;
        this.virusShotB.scale.y = 3;
        this.virusShotB.position.y = 186;
        this.virusShotB.rotation = this.e.u.ca(-90);
        this.virusShotB.alpha = 0;
        this.virusShotB.name="B"
        this.virusCont.addChild(this.virusShotB)

        this.virusShotR = new PIXI.Sprite(this.virusShotText);
        this.virusShotR.anchor.x = .5;
        this.virusShotR.anchor.y = .5;
        this.virusShotR._zIndex = 21;
        this.virusShotR.scale.x = 3;
        this.virusShotR.scale.y = 3;
        this.virusShotR.position.x = 186;
        this.virusShotR.rotation = this.e.u.ca(180);
        this.virusShotR.alpha = 0;
        this.virusShotR.name="R"
        this.virusCont.addChild(this.virusShotR)

        this.virusShotTL = new PIXI.Sprite(this.virusShotDiagText);
        this.virusShotTL.anchor.x = .5;
        this.virusShotTL.anchor.y = .5;
        this.virusShotTL._zIndex = 21;
        this.virusShotTL.scale.x = 3;
        this.virusShotTL.scale.y = 3;
        this.virusShotTL.position.x = -130;
        this.virusShotTL.position.y = -130;
        this.virusShotTL.alpha = 0;
        this.virusShotTL.name="TL"
        this.virusCont.addChild(this.virusShotTL)

        this.virusShotTR = new PIXI.Sprite(this.virusShotDiagText);
        this.virusShotTR.anchor.x = .5;
        this.virusShotTR.anchor.y = .5;
        this.virusShotTR._zIndex = 21;
        this.virusShotTR.scale.x = -3;
        this.virusShotTR.scale.y = 3;
        this.virusShotTR.position.x = 130;
        this.virusShotTR.position.y = -130;
        this.virusShotTR.alpha = 0;
        this.virusShotTR.name="TR"
        this.virusCont.addChild(this.virusShotTR)

        this.virusShotBL = new PIXI.Sprite(this.virusShotDiagText);
        this.virusShotBL.anchor.x = .5;
        this.virusShotBL.anchor.y = .5;
        this.virusShotBL._zIndex = 21;
        this.virusShotBL.scale.x = 3;
        this.virusShotBL.scale.y = -3;
        this.virusShotBL.position.x = -130;
        this.virusShotBL.position.y = 130;
        this.virusShotBL.alpha = 0;
        this.virusShotBL.name="BL"
        this.virusCont.addChild(this.virusShotBL)

        this.virusShotBR = new PIXI.Sprite(this.virusShotDiagText);
        this.virusShotBR.anchor.x = .5;
        this.virusShotBR.anchor.y = .5;
        this.virusShotBR._zIndex = 21;
        this.virusShotBR.scale.x = -3;
        this.virusShotBR.scale.y = -3;
        this.virusShotBR.position.x = 130;
        this.virusShotBR.position.y = 130;
        this.virusShotBR.alpha = 0;
        this.virusShotBR.name="BR"
        this.virusCont.addChild(this.virusShotBR)

    }

    makeBlock(ss, x, y){

        if(ss==="0"){

        }else if(ss==="b"){

            this.block = new PIXI.Sprite(this.brickText);
            this.block.type="brick";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="c"){

            this.block = new PIXI.Sprite(this.questText);
            this.block.type="quest";
            this.block.questPrize="coin";

            this.block.ani = [this.questText,this.quest2Text];
            this.block.aniSpeed = .5;
            this.animatedSprites.push(this.block)

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="m"){

            this.block = new PIXI.Sprite(this.questText);
            this.block.type="quest";
            this.block.questPrize="mushroom";

            this.block.ani = [this.questText,this.quest2Text];
            this.block.aniSpeed = .5;
            this.animatedSprites.push(this.block)

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="@"){

            this.block = new PIXI.Sprite(this.hammerBro1Text);
            this.block.type="hammerBro";
            this.block.action="set";

            this.hammerBroThrow = [this.hammerBro3Text,this.hammerBro3Text];
            this.hammerBroWalk = [this.hammerBro1Text,this.hammerBro2Text];
            this.block.ani = this.hammerBroWalk;
            this.block.aniSpeed = .25;
            this.animatedSprites.push(this.block)

            this.block.scale.x=4;
            this.block.scale.y=4;

            this.actors.push(this.block)
            this.setUpActor(this.block, x, y)

        }else if(ss==="k"){

            this.block = new PIXI.Sprite(this.koopa1Text);
            this.block.type="koopa";
            this.block.action="set";

            this.block.ani = [this.koopa1Text,this.koopa2Text];
            this.block.aniSpeed = .25;
            this.animatedSprites.push(this.block)

            this.block.width=this.brickSize;
            this.block.height=39*3;

            this.actors.push(this.block)
            this.setUpActor(this.block, x, y)

        }else if(ss==="l"){

            console.log("l found")

            this.block = new PIXI.Sprite(this.turtle1Text);
            this.block.type="koopaJumper"
            this.block.action="set";


            this.block.ani = [this.turtle1Text,this.turtle2Text];
            this.block.aniSpeed = .25;
            this.animatedSprites.push(this.block)

            this.block.scale.x=2;
            this.block.scale.y=2;

            this.actors.push(this.block)
            this.setUpActor(this.block, x, y)

            this.block.anchor.x=.5;

        }else if(ss===","){

            this.ghostAni = [this.ghostText,this.ghost2Text];

            this.block = new PIXI.Sprite(this.ghostText);
            this.block.type="ghost";
            this.block.action="set";

            this.block.ani = this.ghostAni;

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.animatedSprites.push(this.block);
            this.block.aniSpeed=.25

            this.actors.push(this.block)
            this.setUpActor(this.block, x, y)

        }else if(ss==="!"){

            this.thwompCont = new PIXI.Container();
            this.thwompCont.sortableChildren = true;
            this.blockCont.addChild(this.thwompCont);
            this.thwompCont.type="thwomp";
            this.thwompCont.action="set";

            this.thwompSprite = new PIXI.Sprite(this.thwompText);

            this.thwompSprite.anchor.x=.5
            this.thwompSprite.anchor.y=.5

            this.thwompSprite.scale.x=3
            this.thwompSprite.scale.y=3

            this.thwompHit = new PIXI.Sprite(this.blueColorText);

            this.thwompCont.hit=this.thwompHit

            this.thwompHit.width=240
            this.thwompHit.height=360

            this.thwompHit.anchor.x=.5
            this.thwompHit.anchor.y=.5

            this.thwompHit.alpha=0;

            this.thwompCont.addChild(this.thwompHit);
            this.thwompCont.addChild(this.thwompSprite);

            this.actors.push(this.thwompCont)

            this.thwompCont.position.x = (x*this.brickSize)+(this.brickSize*.5);
            this.thwompCont.position.y = -y*this.brickSize-3;

            this.thwompCont._zIndex = 100
            this.blockCont.addChild(this.thwompCont);

            this.thwompCont.count = 0;
            this.thwompCont.count2 = 0;
            this.thwompCont.startY = this.thwompCont.position.y;
            this.thwompCont.startX = this.thwompCont.position.x;

        }else if(ss==="n"){

            this.block = new PIXI.Sprite(this.note1Text);
            this.block.type="note";

            this.block.ani = [this.note1Text,this.note2Text];
            this.block.aniSpeed = .5;
            this.animatedSprites.push(this.block)

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.notes.push(this.block);

        }else if(ss==="g"){

            this.block = new PIXI.Sprite(this.groundText);
            this.block.type="ground";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)

        }else if(ss==="("){

            this.block = new PIXI.Sprite(this.ground2Text);
            this.block.type="ground";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)

        }else if(ss===")"){

            this.block = new PIXI.Sprite(this.ground3Text);
            this.block.type="ground";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)

        }else if(ss==="f"){

            this.block = new PIXI.Sprite(this.flagPoleText);
            this.block.type="flagPole";
            this.block.action="wait";

            this.block.scale.x=3;
            this.block.scale.y=3;

            this.setUpBlock(this.block, x, y)

            this.block.anchor.x=0;
            this.block.anchor.y=1;
            this.block.position.y+=this.brickSize;

            // this.texture = PIXI.Texture.from('/clients/ajr/templates/splash/ajr/game/source/img/flag.png');
            this.flag = new PIXI.Sprite(this.flagText);
            this.flag.anchor.x = 0;
            this.flag.anchor.y = .5;
            this.flag.position.x = this.block.position.x+52;
            this.flag.position.y = this.block.position.y-22;
            this.flag.scale.x = 3;
            this.flag.scale.y = 3;
            this.flag._zIndex=60
            this.blockCont.addChild(this.flag);

            this.actors.push(this.block)

            this.block.flag=this.flag;

            if(this.block.position.x<20000){
                this.block.flagNum=1
                this.flagPole1 = this.block;
            }else if(this.block.position.x<25000){
                this.block.flagNum=2
                this.flagPole2 = this.block;
            }else if(this.block.position.x<46000){
                this.block.flagNum=3
                this.flagPole3 = this.block;
            }else if(this.block.position.x<49000){
                this.block.flagNum=4
                this.flagPole4 = this.block;
            }



        }else if(ss==="u"){

            this.block = new PIXI.Sprite(this.cloud1Text);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="i"){

            this.block = new PIXI.Sprite(this.cloud2Text);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="a"){

            console.log("first part "+x)

        }else if(ss==="o"){

            this.block = new PIXI.Sprite(this.cloud3Text);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="y"){

            this.block = new PIXI.Sprite(this.cloudSingleText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        }else if(ss==="x"){

            this.block = new PIXI.Sprite(this.blockText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.makeBoxBack(this.block, x, y)

        // }else if(ss==="&"){

        //     this.block = new PIXI.Sprite(this.deathSignText);
        //     this.block.type="deathSign";

        //     this.block.width=this.brickSize;
        //     this.block.height=this.brickSize;

        //     this.setUpBlock(this.block, x, y)
        //     // this.makeBoxBack(this.block, x, y)

        }else if(ss==="$"){

            this.block = new PIXI.Sprite(this.blueHoleText);
            this.block.type="blueHole";

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

            this.block.width=this.brickSize*3
            this.block.height=this.brickSize*2;


            this.block.anchor.x=.5;
            this.block.anchor.y=1;

            this.block.position.y=0;
            this.block.position.x+=this.brickSize*.5;


        }else if(ss==="*"){

            this.block = new PIXI.Sprite(this.vaccineText);
            this.block.type="vaccine";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize*2;

            this.vaccine = this.block

            this.setUpBlock(this.block, x, y)

            this.block.anchor.y=1;

        }else if(ss==="~"){

            this.block = new PIXI.Sprite(this.lavaText);
            this.block.type="lava";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.actors.push(this.block)

        }else if(ss==="+"){

            this.block = new PIXI.Sprite(this.signText);
            this.block.type="sign";

            this.block.width=this.brickSize*3;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)

        }else if(ss==="v"){

            this.block = new PIXI.Sprite(this.castleBlockText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="V"){

            this.block = new PIXI.Sprite(this.castleBlockText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            this.greyBricks.push(this.block)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="d"){

            this.block = new PIXI.Sprite(this.castleColText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="h"){

            this.block = new PIXI.Sprite(this.castleColTopText);
            this.block.type="block";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss===";"){

            this.block = new PIXI.Sprite(this.castleWallText);
            this.block.type="castleWall";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="["){

            this.block = new PIXI.Sprite(this.castleDecLText);
            this.block.type="castleWall";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="]"){

            this.block = new PIXI.Sprite(this.castleDecRText);
            this.block.type="castleWall";

            this.block.width=this.brickSize;
            this.block.height=this.brickSize;

            this.setUpBlock(this.block, x, y)
            // this.makeBoxBack(this.block, x, y)

        }else if(ss==="p"){

            this.block = new PIXI.Sprite(this.pipeText);
            this.block.type="pipe";

            this.block.width=55*3;
            this.block.height=69*3;

            this.setUpBlock(this.block, x, y+(1.3))

        }

        if(this.block!==null){
            this.blockArray.push(this.block)
        }

    }

    setUpActor(ob,x,y){

        ob.anchor.x = 0;
        ob.anchor.y = 1;
        ob.position.x = x*this.brickSize;
        ob.position.y = -y*this.brickSize-3;

        ob._zIndex = 60
        this.blockCont.addChild(ob);

        ob.count = 0;
        ob.count2 = 0;
        ob.startY = ob.position.y;
        ob.startX = ob.position.x;

    }

    setUpBlock(ob,x,y){

        ob.anchor.x = 0;
        ob.anchor.y = 0;
        ob.position.x = x*this.brickSize;
        ob.position.y = -y*this.brickSize;

        ob._zIndex = 60
        this.blockCont.addChild(ob);

        if(ob.type!=="deathSign" && ob.type!=="blueHole" && ob.type!=="sign" && ob.type!=="note" && ob.type!=="flagPole" && ob.type!=="castleWall" && ob.type!=="lava" && ob.type!=="vaccine"){
            this.plats.push(ob);
        }

        ob.action = "none"
        ob.bounceAction = "none"
        ob.count = 0;
        ob.count2 = 0;
        ob.startY = ob.position.y;
        ob.startX = ob.position.x;



    }

    makeBoxBack(ob,x,y){
        this.boxBack = new PIXI.Sprite(this.boxBackText);
        this.boxBack.position.x = ob.position.x-12;
        this.boxBack.position.y = ob.position.y-12;
        this.boxBack.scale.x=3;
        this.boxBack.scale.y=3;
        this.boxBack._zIndex = 5
        this.blockCont.addChild(this.boxBack);

        ob.boxBack = this.boxBack;
    }

    hitTests(){

        for(var i=0; i<this.notes.length; i++){

            if(this.notes[i]!==null){

                // console.log(i+" / "+this.notes[i].action)

                var ob = this.notes[i];

                if(this.e.u.hitTest(this.playerHit,ob)===true && ob.action==="none"){
                    ob.action="noteMove"
                    this.e.s.p("coin")
                }

                if(ob.action==="noteMove"){

                    console.log("noteMove")

                    this.noteCount+=1;
                    this.score+=200;

                    ob.xspeed=this.e.u.nran(10);
                    ob.yspeed=this.e.u.nran(10);

                    ob.action="noteMove2"

                }else if(ob.action==="noteMove2"){

                    ob.position.x+=ob.xspeed*this.e.dt*40;
                    ob.position.y+=ob.yspeed*this.e.dt*40;
                    ob.alpha-=this.e.dt;

                    if(ob.alpha<=0){
                        ob.action="destroy"
                    }

                }else if(ob.action==="destroy"){

                    this.blockCont.removeChild(ob);
                    ob.action=""

                }


            }

        }

    }

    handleBrickBits(){

        for(var i=0; i<this.brickBits.length; i++){

            if(this.brickBits[i]!==null){

                var ob = this.brickBits[i];

                ob.yspeed+=this.gravity*this.e.dt*5;
                if(ob.yspeed>116){
                    ob.yspeed=116;
                }

                ob.position.x+=ob.xspeed*this.e.dt*10;
                ob.position.y+=ob.yspeed*this.e.dt*10;
                ob.rotation+=ob.xspeed*this.e.dt;

                if(ob.position.y>100){
                    this.blockCont.removeChild(ob)
                    this.brickBits[i]=null;
                }

            }

        }


    }

    handleBricks(){

        for(var i=0; i<this.plats.length; i++){

            if(this.plats[i]!==null){

                var ob = this.plats[i];

                if(ob.action==="none"){

                    //

                }else if(ob.action==="coin"){

                    this.coin = new PIXI.Sprite(this.note1Text);

                    this.coin.width=this.brickSize;
                    this.coin.height=this.brickSize;
                    this.coin.position.x = ob.position.x;
                    this.coin.position.y = ob.position.y;
                    this.coin._zIndex=80;

                    this.blockCont.addChild(this.coin)

                    this.noteCount+=1;

                    gsap.to( this.coin, {y: this.coin.position.y-200, duration: 1, ease:Quart.out});
                    gsap.to( this.coin, {alpha: 0, delay: .8, duration: .2, ease:Quart.out});

                    ob.action="coinUp";

                }else if(ob.action==="coinUp"){

                    ob.action="coinUp";

                }else if(ob.action==="mushroom"){

                    console.log("mush")

                    if(this.big===false){

                        this.mushroom = new PIXI.Sprite(this.okOrchestraText);

                        this.mushroom.width=this.brickSize;
                        this.mushroom.height=this.brickSize;
                        this.mushroom.anchor.x=.5;
                        this.mushroom.anchor.y=1;
                        this.mushroom.position.x = ob.position.x+(this.brickSize/2);
                        this.mushroom.position.y = ob.position.y+this.brickSize;
                        this.mushroom._zIndex=30;
                        this.mushroom.type="mushroom";
                        this.mushroom.action="set";

                        this.e.s.p("powerupAppears")

                        this.blockCont.addChild(this.mushroom)

                        this.actors.push(this.mushroom)

                        ob.action="mushroomUp";

                    }else{

                        this.flower = new PIXI.Sprite(this.okOrchestraText);

                        this.flower.width=this.brickSize;
                        this.flower.height=this.brickSize;
                        this.flower.anchor.x=.5;
                        this.flower.anchor.y=1;
                        this.flower.position.x = ob.position.x+(this.brickSize/2);
                        this.flower.position.y = ob.position.y+this.brickSize;
                        this.flower._zIndex=30;
                        this.flower.type="flower";
                        this.flower.action="set";

                        this.e.s.p("powerupAppears")

                        this.blockCont.addChild(this.flower)

                        this.actors.push(this.flower)

                        ob.action="flowerUp";

                    }


                }else if(ob.action==="brickDestroy"){

                    this.bb1 = new PIXI.Sprite(this.brickBitText);
                    this.bb1.width=this.brickSize/2;
                    this.bb1.height=this.brickSize/2;
                    this.bb1.anchor.x=.5;
                    this.bb1.anchor.y=.5;
                    this.bb1.position.x = ob.position.x+(this.brickSize/4);
                    this.bb1.position.y = ob.position.y+(this.brickSize/4);
                    this.bb1._zIndex=90;
                    this.bb1.type="brickBit";
                    this.bb1.action="set";
                    this.bb1.xspeed=-100;
                    this.bb1.yspeed=-200;
                    this.blockCont.addChild(this.bb1)

                    this.bb2 = new PIXI.Sprite(this.brickBitText);
                    this.bb2.width=this.brickSize/2;
                    this.bb2.height=this.brickSize/2;
                    this.bb2.anchor.x=.5;
                    this.bb2.anchor.y=.5;
                    this.bb2.position.x = ob.position.x+(this.brickSize/4)+(this.brickSize/2);
                    this.bb2.position.y = ob.position.y+(this.brickSize/4);
                    this.bb2._zIndex=90;
                    this.bb2.type="brickBit";
                    this.bb2.action="set";
                    this.bb2.xspeed=100;
                    this.bb2.yspeed=-200;
                    this.blockCont.addChild(this.bb2)

                    this.bb3 = new PIXI.Sprite(this.brickBitText);
                    this.bb3.width=this.brickSize/2;
                    this.bb3.height=this.brickSize/2;
                    this.bb3.anchor.x=.5;
                    this.bb3.anchor.y=.5;
                    this.bb3.position.x = ob.position.x+(this.brickSize/4);
                    this.bb3.position.y = ob.position.y+(this.brickSize/4)+(this.brickSize/2);
                    this.bb3._zIndex=90;
                    this.bb3.type="brickBit";
                    this.bb3.action="set";
                    this.bb3.xspeed=-100;
                    this.bb3.yspeed=-100;
                    this.blockCont.addChild(this.bb3)

                    this.bb4 = new PIXI.Sprite(this.brickBitText);
                    this.bb4.width=this.brickSize/2;
                    this.bb4.height=this.brickSize/2;
                    this.bb4.anchor.x=.5;
                    this.bb4.anchor.y=.5;
                    this.bb4.position.x = ob.position.x+(this.brickSize/4)+(this.brickSize/2);
                    this.bb4.position.y = ob.position.y+(this.brickSize/4)+(this.brickSize/2);
                    this.bb4._zIndex=90;
                    this.bb4.type="brickBit";
                    this.bb4.action="set";
                    this.bb4.xspeed=100;
                    this.bb4.yspeed=-100;
                    this.blockCont.addChild(this.bb4)

                    ob.position.y=1000;

                    this.brickBits.push(this.bb1);
                    this.brickBits.push(this.bb2);
                    this.brickBits.push(this.bb3);
                    this.brickBits.push(this.bb4);

                }else if(ob.action==="destroy"){

                    this.blockCont.removeChild(ob);

                }

                if(ob.bounceAction==="brickBounce"){

                    gsap.to( ob, {y: ob.startY-20, delay: 0, duration: .125});
                    gsap.to( ob, {y: ob.startY, delay: .125, duration: .125});
                    ob.count2=0;
                    ob.bounceAction="brickBouncing"

                }else if(ob.bounceAction==="brickBouncing"){

                    ob.count2+=this.e.dt;
                    if(ob.count2>.25){
                        ob.count2=0;
                        ob.bounceAction="none"
                    }

                }

            }

        }

    }

    headSmash(ob){

        if(ob.type==="brick"){

            if(this.big===false){
                ob.bounceAction="brickBounce"
                this.e.s.p("bump")
            }else{
                ob.action="brickDestroy"
                this.e.s.p("breakblock")
                this.score+=50;

                if(ob.boxBack!==null){
                    ob.boxBack.alpha=0;
                }

            }

        }else if(ob.type==="quest"){

            if(this.big===false){
                ob.bounceAction="brickBounce"
            }else{
                ob.bounceAction="brickBounce"
            }

            if(ob.questPrize==="coin"){
                ob.action = "coin"
                this.e.s.p("coin")
            }else if(ob.questPrize==="mushroom"){
                ob.action = "mushroom"
            }


            ob.type="questDone";
            ob.texture=this.questDoneText;

            this.e.u.removeFromArray(this.animatedSprites,ob)

            console.log(ob)

        }else if(ob.type==="questDone"){

            //nothing
            this.e.s.p("bump")

        }

    }

    setUpAnimation(){

        //------------------------------------------------

        this.p1_f_fireball = [this.p1_f_fireballText,this.p1_f_fireballText];

        this.p1_stance = [this.p1_stance1Text,this.p1_stance2Text,this.p1_stance3Text,this.p1_stance2Text];
        this.p1_s_stance = [this.p1_s_stance1Text,this.p1_s_stance2Text,this.p1_s_stance3Text,this.p1_s_stance2Text];
        this.p1_f_stance = [this.p1_f_stance1Text,this.p1_f_stance2Text,this.p1_f_stance3Text,this.p1_f_stance2Text];

        this.p1_grow = [this.p1_s_stance2Text,this.p1_stance2Text];
        this.p1_grow_fb = [this.p1_stance2Text,this.p1_f_stance2Text];

        this.p1_death = [this.p1_deathText,this.p1_deathText];

        this.p1_run = [this.p1_run1Text,this.p1_run2Text,this.p1_run3Text,this.p1_run2Text];
        this.p1_s_run = [this.p1_s_run1Text,this.p1_s_run2Text,this.p1_s_run3Text,this.p1_s_run2Text];
        this.p1_f_run = [this.p1_f_run1Text,this.p1_f_run2Text,this.p1_f_run3Text,this.p1_f_run2Text];

        this.p1_f_jump = [this.p1_f_jumpText,this.p1_f_jumpText];
        this.p1_jump = [this.p1_jump1Text,this.p1_jump1Text];
        this.p1_jumpDown = [this.p1_jumpDown1Text,this.p1_jumpDown1Text];
        this.p1_s_jump = [this.p1_s_jump1Text,this.p1_s_jump1Text];

        //------------------------------------------------

        this.p2_f_fireball = [this.p2_f_fireballText,this.p2_f_fireballText];

        this.p2_stance = [this.p2_stance1Text,this.p2_stance2Text,this.p2_stance3Text,this.p2_stance2Text];
        this.p2_s_stance = [this.p2_s_stance1Text,this.p2_s_stance2Text,this.p2_s_stance3Text,this.p2_s_stance2Text];
        this.p2_f_stance = [this.p2_f_stance1Text,this.p2_f_stance2Text,this.p2_f_stance3Text,this.p2_f_stance2Text];

        this.p2_grow = [this.p2_s_stance2Text,this.p2_stance2Text];
        this.p2_grow_fb = [this.p2_stance2Text,this.p2_f_stance2Text];

        this.p2_death = [this.p2_deathText,this.p2_deathText];

        this.p2_run = [this.p2_run1Text,this.p2_run2Text,this.p2_run3Text,this.p2_run2Text];
        this.p2_s_run = [this.p2_s_run1Text,this.p2_s_run2Text,this.p2_s_run3Text,this.p2_s_run2Text];
        this.p2_f_run = [this.p2_f_run1Text,this.p2_f_run2Text,this.p2_f_run3Text,this.p2_f_run2Text];

        this.p2_f_jump = [this.p2_f_jumpText,this.p2_f_jumpText];
        this.p2_jump = [this.p2_jump1Text,this.p2_jump1Text];
        this.p2_jumpDown = [this.p2_jumpDown1Text,this.p2_jumpDown1Text];
        this.p2_s_jump = [this.p2_s_jump1Text,this.p2_s_jump1Text];

        //------------------------------------------------

        this.p3_f_fireball = [this.p3_f_fireballText,this.p3_f_fireballText];

        this.p3_stance = [this.p3_stance1Text,this.p3_stance2Text,this.p3_stance3Text,this.p3_stance2Text];
        this.p3_s_stance = [this.p3_s_stance1Text,this.p3_s_stance2Text,this.p3_s_stance3Text,this.p3_s_stance2Text];
        this.p3_f_stance = [this.p3_f_stance1Text,this.p3_f_stance2Text,this.p3_f_stance3Text,this.p3_f_stance2Text];

        this.p3_grow = [this.p3_s_stance2Text,this.p3_stance2Text];
        this.p3_grow_fb = [this.p3_stance2Text,this.p3_f_stance2Text];

        this.p3_death = [this.p3_deathText,this.p3_deathText];

        this.p3_run = [this.p3_run1Text,this.p3_run2Text,this.p3_run3Text,this.p3_run2Text];
        this.p3_s_run = [this.p3_s_run1Text,this.p3_s_run2Text,this.p3_s_run3Text,this.p3_s_run2Text];
        this.p3_f_run = [this.p3_f_run1Text,this.p3_f_run2Text,this.p3_f_run3Text,this.p3_f_run2Text];

        this.p3_f_jump = [this.p3_f_jumpText,this.p3_f_jumpText];
        this.p3_jump = [this.p3_jump1Text,this.p3_jump1Text];
        this.p3_jumpDown = [this.p3_jumpDown1Text,this.p3_jumpDown1Text];
        this.p3_s_jump = [this.p3_s_jump1Text,this.p3_s_jump1Text];

        //------------------------------------------------

        this.player = new PIXI.Container();
        this.player.sortableChildren = true;
        this.blockCont.addChild(this.player);
        this.player._zIndex = 80

        this.playerSprite = new PIXI.Sprite(this.p1_stance1Text);
        this.playerSprite.anchor.x = 0.5;
        this.playerSprite.anchor.y = 1;
        this.playerSprite.scale.x = 3;
        this.playerSprite.scale.y = 3;
        this.player.addChild(this.playerSprite);

        this.playerHit = new PIXI.Sprite(this.blueColorText);
        this.playerHit.anchor.x = 0.5;
        this.playerHit.anchor.y = 1;
        this.playerHit.alpha=0;
        this.playerHit.width = 60;
        this.playerHit.height = 150;
        this.player.addChild(this.playerHit);

        this.animatedSprites.push(this.playerSprite);
        this.playerSprite.aniSpeed = .2;

        this.player.position.x=1000;
        this.player.position.y=-100;

        //------------------------------------------------

        this.playerAction = "stance"

    }

    animatePlayer(){

        if(this.charNum===1){

            this.p_f_fireball = this.p1_f_fireball

            this.p_stance = this.p1_stance
            this.p_s_stance = this.p1_s_stance
            this.p_f_stance = this.p1_f_stance

            this.p_grow = this.p1_grow
            this.p_grow_fb = this.p1_grow_fb

            this.p_death = this.p1_death

            this.p_run = this.p1_run
            this.p_s_run = this.p1_s_run
            this.p_f_run = this.p1_f_run

            this.p_f_jump = this.p1_f_jump
            this.p_jump = this.p1_jump
            this.p_jumpDown = this.p1_jumpDown
            this.p_s_jump = this.p1_s_jump

        }else if(this.charNum===2){

            this.p_f_fireball = this.p2_f_fireball

            this.p_stance = this.p2_stance
            this.p_s_stance = this.p2_s_stance
            this.p_f_stance = this.p2_f_stance

            this.p_grow = this.p2_grow
            this.p_grow_fb = this.p2_grow_fb

            this.p_death = this.p2_death

            this.p_run = this.p2_run
            this.p_s_run = this.p2_s_run
            this.p_f_run = this.p2_f_run

            this.p_f_jump = this.p2_f_jump
            this.p_jump = this.p2_jump
            this.p_jumpDown = this.p2_jumpDown
            this.p_s_jump = this.p2_s_jump

        }else if(this.charNum===3){

            this.p_f_fireball = this.p3_f_fireball

            this.p_stance = this.p3_stance
            this.p_s_stance = this.p3_s_stance
            this.p_f_stance = this.p3_f_stance

            this.p_grow = this.p3_grow
            this.p_grow_fb = this.p3_grow_fb

            this.p_death = this.p3_death

            this.p_run = this.p3_run
            this.p_s_run = this.p3_s_run
            this.p_f_run = this.p3_f_run

            this.p_f_jump = this.p3_f_jump
            this.p_jump = this.p3_jump
            this.p_jumpDown = this.p3_jumpDown
            this.p_s_jump = this.p3_s_jump

        }

        if(this.big===true){
            this.playerHit.height = 150;
        }else{
            this.playerHit.height = 100;
        }

        if(this.blinkTime>0){

            this.blinkTime-=this.e.dt;

            this.blinkCount+=this.e.dt;
            if(this.blinkCount>.1){
                if(this.playerSprite.alpha===1){
                    this.playerSprite.alpha=0;
                }else{
                    this.playerSprite.alpha=1;
                }
            }

        }else{

            this.playerSprite.alpha=1;

        }

        if(this.pauseTime>0){

            console.log(this.growType)

            if(this.growType==="big"){
                this.playerSprite.ani = this.p_grow;
            }else{
                this.playerSprite.ani = this.p_grow_fb;
            }

            this.playerSprite.aniSpeed = .05;

        }else if(this.deathAction!==""){

            this.playerSprite.ani = this.p_death;

        }else{

            if(this.jumping===false){

                // console.log(this.e.input.keyRight+" / "+this.e.input.keyLeft)s

                if(this.showFBAni>0){

                    if(this.playerAction!=="fireball"){
                        this.playerSprite.aniCount=10;
                    }
                    this.playerAction="fireball"
                    this.showFBAni-=this.e.dt;

                }else if(this.e.input.keyRight===false && this.e.input.keyLeft===false){

                    if(this.playerAction!=="stance"){
                        this.playerSprite.aniCount=10;
                    }
                    this.playerAction="stance"

                }else{

                    if(this.playerAction!=="run"){
                        this.playerSprite.aniCount=10;
                    }
                    this.playerAction="run"

                }

            }else{
                if(this.playerAction!=="jump"){
                    this.playerSprite.aniCount=10;
                }
                this.playerAction="jump"
            }

            if(this.playerAction==="fireball"){

                this.playerSprite.ani = this.p_f_fireball;

            }else if(this.playerAction==="stance"){

                if(this.big===true){
                    if(this.fireball===true){
                        this.playerSprite.ani = this.p_f_stance;
                    }else{
                        this.playerSprite.ani = this.p_stance;
                    }
                }else{
                    this.playerSprite.ani = this.p_s_stance;
                }

                this.playerSprite.aniSpeed = .2;

            }else if(this.playerAction==="run"){

                if(this.big===true){
                    if(this.fireball===true){
                        this.playerSprite.ani = this.p_f_run;
                    }else{
                        this.playerSprite.ani = this.p_run;
                    }
                }else{
                    this.playerSprite.ani = this.p_s_run;
                }
                this.playerSprite.aniSpeed = .06;

            }else if(this.playerAction==="jump"){

                if(this.big===true){
                    if(this.fireball===true){
                        this.playerSprite.ani = this.p_f_jump;
                    }else{
                        this.playerSprite.ani = this.p_jump;
                    }

                }else{
                    this.playerSprite.ani = this.p_s_jump;
                }
                this.playerSprite.aniSpeed = .08;

            }

        }


    }

    virusControl(){

        if(this.virusCont!==null){

            var v = this.virusCont;

            var vR = this.virusShotR;
            var vT = this.virusShotT;
            var vL = this.virusShotL;
            var vB = this.virusShotB;
            var vTL = this.virusShotTL;
            var vTR = this.virusShotTR;
            var vBL = this.virusShotBL;
            var vBR = this.virusShotBR;

            // console.log(this.virusAction)

            if(this.virusAction==="set"){

                this.viursCount=0;
                this.virusShootCount=0;

                this.virusAction="wait"

            }else if(this.virusAction==="wait"){

                if(Math.abs(this.player.position.x-this.virusCont.position.x)<800){

                    this.virusAction="newAttack"

                }

            }else if(this.virusAction==="newAttack"){

                this.virusArray = [vR, vL, vT, vB, vTL, vTR, vBL, vBR];
                // this.virusArray = [vTL,vBL, vBR];

                this.allShots = [];

                for(var i=0; i<this.virusArray.length; i++){
                    this.virusArray[i].alpha=0;
                }

                gsap.to( v.position, {x: v.startX+this.e.u.nran(100), y: v.startY+this.e.u.nran(100), duration: .75, ease:Quart.out});

                this.removeNum = this.e.u.ran(this.virusArray.length);
                this.virusShot1 = this.virusArray[this.removeNum];
                this.virusShot1.alpha=1;
                this.e.u.removeFromArray(this.virusArray, this.virusArray[this.removeNum]);
                this.allShots.push(this.virusShot1)

                this.removeNum = this.e.u.ran(this.virusArray.length);
                this.virusShot2 = this.virusArray[this.removeNum];
                this.virusShot2.alpha=1;
                this.e.u.removeFromArray(this.virusArray, this.virusArray[this.removeNum]);
                this.allShots.push(this.virusShot2)

                this.removeNum = this.e.u.ran(this.virusArray.length);
                this.virusShot3 = this.virusArray[this.removeNum];
                this.virusShot3.alpha=1;
                this.e.u.removeFromArray(this.virusArray, this.virusArray[this.removeNum]);
                this.allShots.push(this.virusShot3)

                console.log(this.virusShot1.name+" / "+this.virusShot2.name+" / "+this.virusShot3.name)

                this.virusAction="attack"

            }else if(this.virusAction==="attack"){

                this.virusCount+=this.e.dt;

                if(this.virusCount>.75 && this.deathAction===""){

                    this.virusShootCount+=this.e.dt;
                    if(this.virusShootCount>.2){

                        console.log("shoot")

                        this.e.s.p("fireworks")

                        for(var i=0; i<this.allShots.length; i++){

                            var s = this.allShots[i];

                            var foundShot = false;
                            var shot = null;

                            for(var j=0; j<this.virusShots.length; j++){
                                if(this.virusShots[j]!==null){
                                    if(this.virusShots[j].action==="off"){
                                        foundShot=true
                                        shot=this.virusShots[j];
                                    }
                                }
                            }

                            if(foundShot===false){
                                shot = new PIXI.Sprite(this.virusBulletText);
                                this.virusShots.push(shot)
                                console.log("new shot")
                            }else{
                                console.log("old shot")
                            }

                            shot.scale.x=3;
                            shot.scale.y=3;
                            shot.anchor.x=.5;
                            shot.anchor.y=.5;
                            shot.position.x = this.virusCont.position.x+s.position.x;
                            shot.position.y = this.virusCont.position.y+s.position.y;
                            shot._zIndex=110;
                            shot.alpha=1;
                            shot.action="set";
                            this.blockCont.addChild(shot)


                            console.log("v "+this.allShots[i].name)

                            this.shotSpeed=500;

                            if(this.allShots[i].name==="L"){

                                shot.xspeed=-this.shotSpeed;
                                shot.yspeed=0;

                            }else if(this.allShots[i].name==="R"){

                                shot.xspeed=this.shotSpeed;
                                shot.yspeed=0;

                            }else if(this.allShots[i].name==="T"){

                                shot.xspeed=0;
                                shot.yspeed=-this.shotSpeed;

                            }else if(this.allShots[i].name==="B"){

                                shot.xspeed=0;
                                shot.yspeed=this.shotSpeed;

                                // ------------------------------

                            }else if(this.allShots[i].name==="TL"){

                                shot.xspeed=-this.shotSpeed;
                                shot.yspeed=-this.shotSpeed;

                            }else if(this.allShots[i].name==="BL"){

                                shot.xspeed=-this.shotSpeed;
                                shot.yspeed=this.shotSpeed;

                            }else if(this.allShots[i].name==="TR"){

                                shot.xspeed=this.shotSpeed;
                                shot.yspeed=-this.shotSpeed;

                            }else if(this.allShots[i].name==="BR"){

                                shot.xspeed=this.shotSpeed;
                                shot.yspeed=this.shotSpeed;

                            }

                        }

                        this.virusShootCount=0;
                    }



                }

                if(this.virusCount>3){

                    this.virusCount=0;
                    this.virusAction="newAttack"

                }

                if(this.vaccine!==null){
                    console.log(Math.round(this.player.position.x)+" / "+Math.round(this.vaccine.position.x))
                    if(this.player.position.x>this.vaccine.position.x){
                        this.virusAction="setDeath"
                    }
                }


            }else if(this.virusAction==="setDeath"){

                this.useControls=false;
                this.virusAction="bricks"
                this.virusCount=0;
                this.vaccine.alpha=0;
                gsap.killTweensOf(this.vaccine);

                for(var i=0; i<this.virusShots.length; i++){

                    this.virusShots[i].position.y=1000;
                    this.virusShots[i].action="off"

                }

            }else if(this.virusAction==="bricks"){

                this.virusCount+=this.e.dt;

                if(this.virusCount>=.5){

                    this.virusCount=0;
                    this.virusAction="down"
                    this.e.s.p("bowserFall")

                    for(var i=0; i<this.greyBricks.length; i++){

                        this.greyBricks[i].position.y=100;

                    }



                }

            }else if(this.virusAction==="down"){

                this.virusCont.position.y+=this.e.dt*1000;
                if(this.virusCont.position.y>200){
                    this.virusAction="go"
                }

            }else if(this.virusAction==="go"){

                this.useControls=true;

            }

            if(this.e.u.hitTest(this.playerHit,this.virusHit) || this.e.u.hitTest(this.playerHit,this.virusHit2)){

                this.useControls=false;
                if(this.deathAction===""){
                    this.deathAction="start"
                }

            }


        }

        for(var i=0; i<this.virusShots.length; i++){

            if(this.virusShots[i]!==null){

                var v = this.virusShots[i];

                if(v.action==="set"){

                    v.count=0;
                    v.action="go"

                }else if(v.action==="go"){

                    v.position.x+=v.xspeed*this.e.dt;
                    v.position.y+=v.yspeed*this.e.dt;

                    v.count+=this.e.dt;
                    if(v.count>3 && v.isFirstShot===false || v.count>10 && v.isFirstShot===true){

                        v.count=0;
                        v.alpha=0;
                        v.position.y=1000;
                        v.action="off"

                    }

                    if(this.e.u.hitTest(this.playerHit,v)){

                        if(this.big===true && v.isFirstShot===true){
                            this.pauseTime=1;
                            this.big=false;
                            this.fireball=false;
                            this.blinkTime=3;
                            this.e.s.p("powerdown")
                        }else{
                            console.log("death")
                            this.useControls=false;
                            if(this.deathAction===""){
                                this.deathAction="start"
                            }

                        }

                    }

                }

            }

        }

        if(this.virusShotAction==="wait"){

            if(this.player.position.x>49000){

                this.virusShotAction="fire"

            }

        }else if(this.virusShotAction==="fire"){

            if(this.player.position.x>54500){

                this.virusShotLim=2;

            }else{

                this.virusShotLim=2;

            }

            if(this.player.position.x>56500){

                this.virusShotAction="off"

            }

            this.virusShotCount+=this.e.dt;
            if(this.virusShotCount>this.virusShotLim){

                this.virusShotCount=0;

                var foundShot = false;
                var shot = null;

                for(var j=0; j<this.virusShots.length; j++){
                    if(this.virusShots[j]!==null){
                        if(this.virusShots[j].action==="off"){
                            foundShot=true
                            shot=this.virusShots[j];
                        }
                    }
                }

                if(foundShot===false){
                    shot = new PIXI.Sprite(this.virusBulletText);
                    this.virusShots.push(shot)
                    console.log("new shot")
                }else{
                    console.log("old shot")
                }

                shot.scale.x=3;
                shot.scale.y=3;
                shot.anchor.x=.5;
                shot.anchor.y=.5;
                shot.position.x = this.player.position.x+1300;
                shot.isFirstShot=true;

                if(this.player.position.x>54500){

                    shot.position.y = -270-this.e.u.ran(400);

                }else{

                    shot.position.y = -360-this.e.u.ran(400);

                }

                shot.xspeed=-700
                shot.yspeed=0
                shot._zIndex=110;
                shot.alpha=1;
                shot.action="set";
                this.blockCont.addChild(shot)

                this.e.s.p("fireworks")

            }

        }
        // this.virusShotCount=0;)


    }

    actorControl(){

        // console.log(this.actors.length)

        for(var i=0; i<this.actors.length; i++){

            if(this.actors[i]!==null){

                var ac = this.actors[i];

                // --- mushroom -------------------------------------------------------
                // --- mushroom -------------------------------------------------------
                // --- mushroom -------------------------------------------------------
                // --- mushroom -------------------------------------------------------
                // --- mushroom -------------------------------------------------------
                // --- mushroom -------------------------------------------------------

                if(ac.type==="mushroom"){

                    if(ac.action==="set"){

                        ac.xspeed=6;
                        ac.yspeed=0;
                        ac.count=0;
                        ac.action="mushroomUp";

                    }else if(ac.action==="mushroomUp"){

                        gsap.to( ac, {y: ac.position.y-this.brickSize-10, duration: 1, ease:Quart.out});

                        ac.action="mushroomUpWait";

                    }else if(ac.action==="mushroomUpWait"){

                        ac.count+=this.e.dt;
                        if(ac.count>1){
                            ac.count=0;
                            ac.action="mushroomWalk";
                        }

                    }else if(ac.action==="mushroomWalk"){

                        ac.yspeed+=this.gravity*this.e.dt;
                        if(ac.yspeed>12){
                            ac.yspeed=12
                        }

                        for(var k=0; k<this.plats.length; k++){

                            // --- yspeed -----------------------------------------------

                            if(this.plats[k]!==null){

                                if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                    for(var j=0; j<20; j++){

                                        ac.yspeed=j;

                                        if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                            ac.position.y+=j;
                                            ac.yspeed=0;
                                            j=20;

                                        }

                                    }

                                    ac.yspeed=0;

                                    k=10000;

                                }

                            }

                            // --- xspeed -----------------------------------------------


                        }

                        for(var k=0; k<this.plats.length; k++){

                            if(this.plats[k]!==null){

                                if( this.e.u.checkPlatformXActor(this.plats[k],ac,this.brickSize,0)===true ){

                                    ac.xspeed=-ac.xspeed;

                                }

                            }

                        }

                        // --- yspeed -----------------------------------------------

                        ac.position.x+=ac.xspeed;
                        ac.position.y+=ac.yspeed;

                        // --- hittest -----------------------------------------------

                        if(this.e.u.hitTest(this.actors[i],this.player)===true){

                            this.big=true;
                            this.pauseTime=1;
                            this.blockCont.removeChild(ac);
                            this.growType="big"
                            this.e.s.p("powerup")
                            this.score+=500;

                        }

                    }

                }

                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------
                // --- flower -------------------------------------------------------

                if(ac.type==="flower"){

                    if(ac.action==="set"){

                        ac.xspeed=0;
                        ac.yspeed=0;
                        ac.count=0;
                        ac.action="flowerUp";

                    }else if(ac.action==="flowerUp"){

                        gsap.to( ac, {y: ac.position.y-this.brickSize-10, duration: 1, ease:Quart.out});

                        ac.action="flowerUpWait";

                    }else if(ac.action==="flowerUpWait"){

                        ac.count+=this.e.dt;
                        if(ac.count>1){
                            ac.count=0;
                            ac.action="flowerDone";
                        }

                    }else if(ac.action==="flowerDone"){

                        if(this.e.u.hitTest(ac,this.player)===true){

                            if(this.big===false){
                                this.big=true;
                                this.pauseTime=1;
                                this.blockCont.removeChild(ac);
                                // ac=null;
                                this.growType="big"
                                this.e.s.p("powerup")
                                this.score+=500;
                            }else{
                                this.big=true;
                                this.fireball=true;
                                this.pauseTime=1;
                                this.blockCont.removeChild(ac);
                                this.growType="fb"
                                // ac=null;
                                this.e.s.p("powerup")
                                this.score+=500;
                            }

                        }
                    }

                }

                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------
                // --- koopa -------------------------------------------------------

                if(ac.type==="koopa" || ac.type==="koopaJumper" || ac.type==="ghost" || ac.type==="thwomp" || ac.type==="hammerBro" || ac.type==="hammer"){

                    if(ac.type==="hammer"){
                        // console.log(ac.position.x+" / "+ac.position.y)
                    }

                    if(this.deathAction!==""){

                    }else if(ac.action==="set"){

                        ac.xspeed=-3;
                        ac.yspeed=0;
                        ac.count=0;
                        ac.maxYspeed=12;
                        ac.alive=true;
                        ac.action="wait";
                        if(ac.type==="koopaJumper"){
                            ac.xspeed=-5;
                            ac.bounce=true;
                            ac.maxYspeed=25;
                        }else if(ac.type==="ghost"){
                            ac.xspeed=0;
                            ac.ghostAction="first"
                            ac.ghostCount=0
                            ac.anchor.x=.5
                        }else if(ac.type==="thwomp"){
                            ac.xspeed=0;
                            ac.thwompAction="wait"
                            ac.thwompCount=0
                            ac.action="walk";
                            // console.log("set thwomp")
                        }else if(ac.type==="hammerBro"){
                            ac.xspeed=1;
                            ac.hbAction="wait"
                            ac.hbCount=0
                            ac.hbLim=1
                            ac.hammers=0
                            ac.action="walk";
                            console.log("set hb")
                            ac.hammerWaitRan=8;
                        }else if(ac.type==="hammer"){
                            ac.hAction="reset"
                            ac.xspeed=-1;
                            ac.yspeed=-20;
                            ac.hCount=0;
                            ac.action="walk"
                            ac.maxYspeed=9;
                            ac.hammerWaitRan=8;
                        }

                    }else if(ac.action==="wait"){

                        if(ac.position.x - this.player.position.x < 1200){
                            ac.action="walk"
                        }

                    }else if(ac.action==="walk"){

                        ac.yspeed+=this.gravity*this.e.dt;
                        if(ac.yspeed>ac.maxYspeed){
                            ac.yspeed=ac.maxYspeed
                        }

                        if(ac.type==="koopaJumper"){
                            if(ac.xspeed>0){
                                ac.scale.x=-2;
                            }else{
                                ac.scale.x=2;
                            }

                        }

                        if(ac.type==="ghost" || ac.type==="thwomp"){

                            ac.yspeed=0

                        }else if(ac.type==="hammer"){

                            //

                        }else{

                            // check for actor head hit

                            for(var k=0; k<this.plats.length; k++){

                                if(this.plats[k]!==null){

                                    if(ac.bounce===true && ac.yspeed<0){

                                        if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                            ac.yspeed=0;


                                        }

                                    }

                                    // --- yspeed -----------------------------------------------

                                    if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                        if(ac.bounce===true){

                                            ac.yspeed=-24;

                                        }else{

                                            for(var j=0; j<20; j++){

                                                ac.yspeed=j;

                                                if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                                    ac.position.y+=j;
                                                    ac.yspeed=0;
                                                    j=20;

                                                }

                                            }

                                            ac.yspeed=0;

                                        }

                                        k=10000;

                                    }

                                }

                                // --- xspeed -----------------------------------------------


                            }

                        }


                        if(ac.type==="ghost"){

                            this.ghostSpeed = 1
                            ac.xspeed=0
                            ac.yspeed=0

                            // console.log(ac.ghostAction)

                            if(ac.ghostAction==="first"){

                                gsap.to( ac.position, {y: ac.startY-20, duration: .3, repeat: -1, yoyo: true, ease: Quart.inOut});
                                gsap.to( ac.position, {x: ac.startX-350, duration: this.ghostSpeed, ease: Quart.inOut});
                                ac.ghostAction="firstWait"
                                ac.ghostCount=0

                            }else if(ac.ghostAction==="firstWait"){

                                ac.ghostCount+=this.e.dt;
                                if(ac.ghostCount>1){
                                    ac.ghostCount=0
                                    ac.ghostAction="back"
                                }

                            }else if(ac.ghostAction==="back"){

                                ac.scale.x=-3;
                                gsap.to( ac.position, {x: ac.startX+350, duration: this.ghostSpeed*2, ease: Quart.inOut});
                                ac.ghostAction="waitBack"
                                ac.ghostCount=0

                            }else if(ac.ghostAction==="waitBack"){

                                ac.ghostCount+=this.e.dt;
                                if(ac.ghostCount>this.ghostSpeed*2){
                                    ac.ghostCount=0
                                    ac.ghostAction="forward"
                                }

                            }else if(ac.ghostAction==="forward"){

                                ac.scale.x=3;
                                gsap.to( ac.position, {x: ac.startX-350, duration: this.ghostSpeed*2, ease: Quart.inOut});
                                ac.ghostAction="waitForward"

                            }else if(ac.ghostAction==="waitForward"){

                                ac.ghostCount+=this.e.dt;
                                if(ac.ghostCount>this.ghostSpeed*2){
                                    ac.ghostCount=0
                                    ac.ghostAction="back"
                                }

                            }

                            // if(ac.xspeed<0){
                            //     if(ac.position.x<ac.startX-400){
                            //         ac.xspeed=-ac.xspeed;
                            //     }
                            // }else{
                            //     if(ac.position.x>ac.startX+400){
                            //         ac.xspeed=-ac.xspeed;
                            //     }
                            // }

                        }else if(ac.type==="thwomp"){

                            ac.xspeed=0;
                            ac.yspeed=0;

                            // console.log(ac.thwompAction)

                            if(ac.thwompAction==="wait"){

                                if(Math.abs(ac.position.x-this.player.position.x)<250){
                                    ac.thwompAction="down"
                                }

                            }else if(ac.thwompAction==="down"){

                                gsap.to( ac.position, {y: ac.startY+480, duration: .2, ease: Quart.out});
                                ac.thwompAction="delay"
                                ac.thwompCount=0

                            }else if(ac.thwompAction==="delay"){

                                ac.thwompCount+=this.e.dt;
                                if(ac.thwompCount>1.5){
                                    ac.thwompCount=0;
                                    gsap.to( ac.position, {y: ac.startY, duration: 2, ease: Quart.out});
                                    ac.thwompAction="up"
                                }

                            }else if(ac.thwompAction==="up"){

                                ac.thwompCount+=this.e.dt;
                                if(ac.thwompCount>2){
                                    ac.thwompCount=0;
                                    ac.thwompAction="wait"
                                }

                            }

                        }else if(ac.type==="hammerBro"){

                            if(ac.hbAction==="wait"){

                                ac.ani=this.hammerBroWalk;

                                ac.hbCount+=this.e.dt;
                                if(ac.hbCount>ac.hbLim){
                                    ac.hbCount=0;
                                    ac.hbLim=this.e.u.ran(90)/100;
                                    ac.hammers+=1;
                                    if(ac.hammers>=ac.hammerWaitRan){
                                        ac.hammers=0
                                        ac.hbLim=1.5;
                                        ac.hammerWaitRan=this.e.u.ran(6)+6
                                    }
                                    ac.aniCount=10
                                    ac.hbAction="throw"
                                }


                            }else if(ac.hbAction==="throw"){

                                ac.ani=this.hammerBroThrow;

                                var hammerFound=false;

                                for(var b=0; b<this.hammers.length; b++){
                                    if(this.hammers[b]!==null){
                                        if(this.hammers[b].hAction==="off"){
                                            this.hammers[b].hAction="reset"
                                            this.hammers[b].action="walk"
                                            this.hammer = this.hammers[b];
                                            hammerFound=true;
                                        }
                                    }
                                }

                                if(hammerFound===false){
                                    this.hammer = new PIXI.Sprite(this.hammerText);
                                    this.hammers.push(this.hammer)
                                    this.actors.push(this.hammer);
                                    this.blockCont.addChild(this.hammer)
                                }


                                this.hammer.scale.x=3;
                                this.hammer.scale.y=3;
                                this.hammer.anchor.x=.5;
                                this.hammer.anchor.y=.5;
                                this.hammer.position.x = ac.position.x
                                this.hammer.position.y = ac.position.y-(this.brickSize/2)
                                this.hammer._zIndex=180;
                                this.hammer.type="hammer";
                                this.hammer.action="set";
                                this.hammer.hAction="reset";
                                this.hammer.yspeed=-20;
                                this.hammer.xspeed=this.e.u.ran(14)+2;



                                ac.hbAction="throwWait"

                            }else if(ac.hbAction==="throwWait"){

                                ac.ani=this.hammerBroThrow;

                                ac.hbCount+=this.e.dt;
                                if(ac.hbCount>.05){
                                    ac.hbCount=0;
                                    ac.hbAction="wait"
                                    ac.aniCount=10
                                }

                            }

                            if(ac.position.x<ac.startX-200){
                                ac.xspeed=1
                            }else if(ac.position.x>ac.startX+200){
                                ac.xspeed=-1
                            }

                        }else if(ac.type==="hammer"){

                            // if(i===1){
                                // console.log(ac.hAction+" "+ac.position.y)
                            // }

                            if(ac.hAction==="reset"){

                                ac.hAction="throw"

                            }else if(ac.hAction==="throw"){

                                ac.rotation-=this.e.dt*10;

                                if(ac.position.y>100){

                                    ac.hAction="off"

                                }

                            }else if(ac.hAction==="off"){

                            }

                        }else{

                            for(var k=0; k<this.plats.length; k++){

                                if(this.plats[k]!==null){

                                    if( this.e.u.checkPlatformXActor(this.plats[k],ac,this.brickSize,0)===true ){

                                        ac.xspeed=-ac.xspeed;

                                    }

                                }

                            }

                        }

                        // --- yspeed -----------------------------------------------

                        ac.position.x+=(ac.xspeed*this.e.dt*this.speed)
                        ac.position.y+=(ac.yspeed*this.e.dt*this.speed)

                        // --- hittest -----------------------------------------------

                        if(ac.type==="thwomp"){

                            if(this.e.u.hitTest(this.actors[i].hit,this.playerHit)===true && this.actors[i].alive===true && this.blinkTime<=0){

                                if(this.big===true){

                                    this.pauseTime=1;
                                    this.big=false;
                                    this.fireball=false;
                                    this.blinkTime=3;
                                    this.e.s.p("powerdown")

                                }else{

                                    this.useControls=false;
                                    if(this.deathAction===""){
                                        this.deathAction="start"
                                    }

                                }

                            }

                        }else{

                            if(this.e.u.hitTest(this.actors[i],this.playerHit)===true && this.actors[i].alive===true){

                                if(this.yspeed>0 && ac.type!=="ghost" && ac.type!=="hammer"){

                                    if(ac.type==="koopaJumper"){
                                        ac.action="koopaFall"
                                        ac.xspeed=20;
                                        ac.yspeed=-500;
                                        ac.scale.x=2
                                        ac.scale.y=-2
                                        ac.anchor.y=.5;
                                        ac.aniCount=10;
                                        // ac.ani=this.turtleShellAni;
                                    }else{
                                        gsap.to( ac.scale, {y: 0, duration: .2});
                                        ac.action="koopaDeath"
                                    }

                                    ac.alive=false;

                                    this.yspeed=-20;
                                    this.e.s.p("stomp")
                                    this.score+=200;

                                }else{

                                    if(this.blinkTime<=0) {

                                        if(this.big===true){
                                            this.pauseTime=1;
                                            this.big=false;
                                            this.fireball=false;
                                            this.blinkTime=3;
                                            this.e.s.p("powerdown")
                                        }else{
                                            console.log("death")
                                            this.useControls=false;
                                            if(this.deathAction===""){
                                                this.deathAction="start"
                                            }

                                        }

                                    }

                                }

                            }
                        }


                        if(ac.type!=="thwomp"){

                            for(var k=0; k<this.actors.length; k++){

                                if(this.actors[k]!==null){

                                    if(this.actors[k].type==="fireball"){

                                        if(this.e.u.hitTest(ac,this.actors[k])===true){

                                            ac.alive=false;
                                            ac.action="koopaFall"
                                            ac.xspeed=20;
                                            ac.yspeed=-500;
                                            this.e.s.p("stomp")
                                            this.score+=200;
                                            ac.scale.y*=-1
                                            ac.anchor.y=0
                                            this.blockCont.removeChild(this.actors[k])

                                            gsap.killTweensOf(ac.position);
                                            this.actors[k].position.y=1000;

                                            this.fbHit = new PIXI.Sprite(this.fbHitText);
                                            this.fbHit.scale.x=3;
                                            this.fbHit.scale.y=3;
                                            this.fbHit.anchor.x=.5;
                                            this.fbHit.anchor.y=.5;
                                            this.fbHit.position.x = ac.position.x+(this.brickSize/2)
                                            this.fbHit.position.y = ac.position.y-(this.brickSize/2)
                                            this.fbHit._zIndex=80;
                                            this.fbHit.type="fbHit";
                                            this.fbHit.action="set";
                                            this.actors.push(this.fbHit);

                                            this.blockCont.addChild(this.fbHit)

                                        }

                                    }

                                }

                            }

                        }

                    }else if(ac.action==="koopaFall"){

                        ac.yspeed+=this.gravity*this.e.dt*20;

                        ac.position.y+=ac.yspeed*this.e.dt;
                        ac.position.x+=ac.xspeed*this.e.dt;

                    }

                }

                // --- fireball -------------------------------------------------------
                // --- fireball -------------------------------------------------------
                // --- fireball -------------------------------------------------------
                // --- fireball -------------------------------------------------------
                // --- fireball -------------------------------------------------------

                if(ac.type==="flagPole"){

                    if(ac.action==="none"){

                        if(this.e.u.hitTest(ac,this.playerHit)===true){

                            gsap.to( ac.flag, {y: ac.flag.position.y-420, duration: 1});
                            ac.action="up"
                            this.e.s.p("flagpole")

                            this.checkPoint = ac.flagNum;
                            console.log("checkPoint: "+this.checkPoint)

                        }

                    }

                }


                // --- fireball -------------------------------------------------------

                if(ac.type==="fireball"){

                    if(ac.action==="set"){

                        if(this.player.scale.x>0){
                            ac.xspeed=25;
                        }else{
                            ac.xspeed=-25;
                        }

                        ac.yspeed=10;
                        ac.count=0;
                        ac.bounce=true;
                        ac.bounceAmount=ac.yspeed*1.5;
                        ac.alive=true;
                        ac.action="fireballMove";

                    }else if(ac.action==="fireballMove"){

                        ac.yspeed+=this.gravity*this.e.dt;
                        if(ac.yspeed>18){
                            ac.yspeed=18
                        }

                        for(var k=0; k<this.plats.length; k++){

                            if(this.plats[k]!==null){

                                if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                    for(var j=0; j<20; j++){

                                        ac.yspeed=j;

                                        if( this.e.u.checkPlatformYActor(this.plats[k],ac)===true ){

                                            ac.position.y+=j;
                                            ac.yspeed=0;
                                            j=20;

                                        }

                                    }

                                    ac.yspeed=-ac.bounceAmount;

                                    k=10000;

                                }

                            }

                        }

                        for(var k=0; k<this.plats.length; k++){

                            if(this.plats[k]!==null){

                                if( this.e.u.checkPlatformXActor(this.plats[k],ac,10,10)===true ){

                                    this.fbHit = new PIXI.Sprite(this.fbHitText);
                                    this.fbHit.scale.x=3;
                                    this.fbHit.scale.y=3;
                                    this.fbHit.anchor.x=.5;
                                    this.fbHit.anchor.y=.5;
                                    this.fbHit.position.x = ac.position.x+(ac.xspeed*this.e.dt*this.speed)
                                    this.fbHit.position.y = ac.position.y+ac.yspeed
                                    this.fbHit._zIndex=80;
                                    this.fbHit.type="fbHit";
                                    this.fbHit.action="set";
                                    this.actors.push(this.fbHit);

                                    this.e.s.p("bump")
                                    this.blockCont.addChild(this.fbHit)
                                    this.blockCont.removeChild(ac)
                                    ac.action="none"
                                    k=10000;


                                }

                            }

                        }

                        // --- yspeed -----------------------------------------------

                        ac.position.x+=ac.xspeed;
                        ac.position.y+=ac.yspeed;

                    }

                }

                // --- fireball hit -------------------------------------------------------

                if(ac.type==="fbHit"){

                    if(ac.action==="set"){

                        ac.count=0;
                        ac.action="out"

                    }else if(ac.action==="out"){

                        ac.count+=this.e.dt;
                        if(ac.count>.05){
                            ac.count=0
                            ac.scale.x=2;
                            ac.scale.y=2;
                            ac.action="small"
                        }

                    }else if(ac.action==="small"){

                        ac.count+=this.e.dt;
                        if(ac.count>.05){

                            this.blockCont.removeChild(ac)
                            ac.action="off"
                        }

                    }

                }

                // --- lava -------------------------------------------------------

                if(ac.type==="lava"){

                    if(this.e.u.hitTest(this.player,ac)===true && this.deathAction===""){

                        this.useControls=false;
                        if(this.deathAction===""){
                            this.deathAction="start"
                        }

                    }

                }

            }

        }

    }

    animate(){

        for(var i=0; i<this.animatedSprites.length; i++){

            if(this.animatedSprites!==null){

                var a = this.animatedSprites[i];

                if(a.aniCount===undefined){
                    a.aniCount=0;
                    a.curFrame=0;
                }

                if(a.aniSpeed===undefined){
                    a.aniSpeed=.25;
                }

                if(a.ani===undefined){
                    a.ani=[];
                }

                a.aniCount+=this.e.dt;
                if(a.aniCount>a.aniSpeed){

                    // console.log(this.playerAction)

                    a.aniCount=0;
                    a.curFrame+=1;
                    if(a.curFrame>=a.ani.length){
                        a.curFrame=0;
                    }

                    a.texture = a.ani[a.curFrame];

                }

            }

        }

    }
}
