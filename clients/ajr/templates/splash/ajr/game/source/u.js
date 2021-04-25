// import * as THREE from '../../build/three.module.js';

export class Utilities {

    setUp(e) {
        this.e=e;
    }

    hitTest(a, b){
      var ab = a.getBounds();
      var bb = b.getBounds();
      return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------

    checkPlatformY(ob,actor){

        var p = this.e.ui.movery;

        if(this.e.u.hitTest(p, ob)==true){
          return true
        }else{
          return false
        }

    }

    checkPlatformX(ob,actor){

      var p = this.e.ui.moverx;

      if(this.e.u.hitTest(p, ob)==true){
        return true
      }else{
        return false
      }

    }

    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------

    checkPlatformYActor(ob,actor){

      var p = this.e.ui.movera;

      p.width = actor.width;
      p.height = actor.height;

      p.anchor.x = actor.anchor.x;
      p.anchor.y = actor.anchor.y;

      p.position.x = actor.position.x;
      p.position.y = actor.position.y-2;

      if(actor.yspeed!==null){
        p.position.y+=actor.yspeed;
      }
      
      if(this.e.u.hitTest(p, ob)==true){
        return true
      }else{
        return false
      }

    }
  
    checkPlatformXActor(ob,actor,sideSizeR,sideSizeL){

      var p = this.e.ui.movera;

      p.width = actor.width;
      p.height = actor.height;

      p.anchor.x = actor.anchor.x;
      p.anchor.y = actor.anchor.y;

      p.position.x = actor.position.x;
      p.position.y = actor.position.y-12;

      if(actor.xspeed!==null){
        p.position.x+=actor.xspeed;
      }
      
      if(this.e.u.hitTest(p, ob)==true){
        return true
      }else{
        return false
      }

    }
  
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // ---------------------------------------------------------

    vectorToScreenPos(ob, camera){
      
      var width = window.innerWidth;
      var height = window.innerHeight;
      var widthHalf = width / 2, heightHalf = height / 2;
    
      var vector = ob.geometry.vertices[0].clone();
      vector.applyMatrix4( ob.matrixWorld );
    
      var pos = vector.clone();
      // var pos = ob.position.clone();
    
      pos.project(camera);
      pos.x = ( pos.x * widthHalf ) + widthHalf;
      pos.y = - ( pos.y * heightHalf ) + heightHalf;
    
      var result = {x:pos.x-5, y:pos.y-5};
      
      return result;
    
    }
    
    lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    //-------------------

    getDistance(x1, y1, x2, y2) {
      var a = x1 - x2;
      var b = y1 - y2;
    
      var c = Math.sqrt(a * a + b * b);
      return c;
    }

    //-------------------

    shortAngleDist(a0,a1) {
      var max = Math.PI*2;
      var da = (a1 - a0) % max;
      return 2*da % max - da;
    }
  
    angleLerp(a0,a1,t) {
       return a0 + this.shortAngleDist(a0,a1)*t;
    }
  
    //-------------------

    ca(ang) {
      var pi = Math.PI;
      return ang * (pi/180);
    }
  
    ca2(ang){
      var pi = Math.PI;
      return ang * (180/pi);
    }
  
    //-------------------

    ran(num) {
      var num1 = Math.random() * num;
      var num2 = Math.floor(num1);
      
      return num2;
    }
    
    nran(num) {
      var num1 = Math.random() * (num*2);
      var num2 = Math.floor(num1-num);
      
      return num2;
    }

  
    getDistance(xA, yA, xB, yB) { 
      var xDiff = xA - xB; 
      var yDiff = yA - yB; 
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
  
  
    hslToHex(h, s, l) {
      h /= 360;
      s /= 100;
      l /= 100;
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return `0x${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
  
    rgbToHsl(r, g, b){
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        return [h*1000, s*1000, l*1000];
    }
  
    //---------------------------------------------------------------------------------------------
  
    //-----color tester-----------------------------------------------------------------------------------------
  
    testColors(){
  
      if(this.e.useColorChanger1===true){
  
        //-----change this--------------------
  
        this.changeOb1 = this.e.whiteMachine.material.color
  
        //-----change this--------------------
        
        if(this.e.setUpColorChanger1===false){
          
            this.hexColor = this.changeOb1.getHSL();
  
            document.getElementById("hueSlider1").value = this.hexColor.h*100;
            document.getElementById("satSlider1").value = this.hexColor.s*100;
            document.getElementById("briSlider1").value = this.hexColor.l*100;
  
            this.e.setUpColorChanger1=true;
        }
  
        var h = document.getElementById("hueSlider1").value;
        var s = document.getElementById("satSlider1").value;
        var l = document.getElementById("briSlider1").value;
        
        this.testColor1 = this.hslToHex(h, s, l);
        this.changeOb1.setHex(this.testColor1);
  
        document.getElementById("val1").value = this.testColor1;
  
      }
  
      if(this.e.useColorChanger2===true){
  
        //-----change this--------------------
  
        this.changeOb2 = this.e.testMe4.material.color
  
        //-----change this--------------------
        
        if(this.e.setUpColorChanger2===false){
          
            this.hexColor = this.changeOb2.getHSL();
  
            document.getElementById("hueSlider2").value = this.hexColor.h*100;
            document.getElementById("satSlider2").value = this.hexColor.s*100;
            document.getElementById("briSlider2").value = this.hexColor.l*100;
  
            this.e.setUpColorChanger2=true;
        }
  
        var h = document.getElementById("hueSlider2").value;
        var s = document.getElementById("satSlider2").value;
        var l = document.getElementById("briSlider2").value;
        
        this.testColor2 = this.hslToHex(h, s, l);
        this.changeOb2.setHex(this.testColor2);
  
        document.getElementById("val2").value = this.testColor2;
  
      }
  
      if(this.e.useColorChanger3===true){
  
        //-----change this--------------------
  
        this.changeOb3 = this.e.testMe5.material.color
  
        //-----change this--------------------
        
        if(this.e.setUpColorChanger3===false){
          
            this.hexColor = this.changeOb3.getHSL();
  
            document.getElementById("hueSlider3").value = this.hexColor.h*100;
            document.getElementById("satSlider3").value = this.hexColor.s*100;
            document.getElementById("briSlider3").value = this.hexColor.l*100;
  
            this.e.setUpColorChanger3=true;
        }
  
        var h = document.getElementById("hueSlider3").value;
        var s = document.getElementById("satSlider3").value;
        var l = document.getElementById("briSlider3").value;
        
        this.testColor3 = this.hslToHex(h, s, l);
        this.changeOb3.setHex(this.testColor3);
  
        document.getElementById("val3").value = this.testColor3;
      
      }
  
      if(this.e.useColorChanger4===true){
  
        var n = document.getElementById("slider4").value;
  
        //-----change this--------------------
  
        // this.e.water.material.metalness = n/100;
        this.e.windowGlass.material.opacity = this.e.u.ca(360*(n/100));
  
        //-----change this--------------------
  
        document.getElementById("val4").value = n/100;
  
      }
  
    }
  
    inc(el, type, amount){
      if(type==="opacity"){
          // console.log("op")
          var theOpacity = parseFloat(el.style.opacity);
          if(theOpacity==="" || isNaN(theOpacity)){
              theOpacity=0;
          }
          theOpacity+=amount;
          if(theOpacity>1){
              theOpacity=1;
          }
          if(theOpacity<0){
              theOpacity=0;
          }
          el.style.opacity = theOpacity+"";
          // console.log(theOpacity)
      }else if(type==="top"){
          
          var theTop = parseFloat(el.style.top);
  
          console.log(el.style.top)
  
          if(theTop==="" || isNaN(theTop)){
              theTop=0;
          }
          theTop+=amount;
          
          el.style.top = theTop+"";
          
      }
    }

    vectorToScreenPos(ob){
      
      var width = window.innerWidth;
      var height = window.innerHeight;
      var widthHalf = width / 2, heightHalf = height / 2;
    
      var vector = ob.geometry.vertices[0].clone();
      vector.applyMatrix4( ob.matrixWorld );
    
      var pos = vector.clone();
      // var pos = ob.position.clone();
    
      pos.project(camera);
      pos.x = ( pos.x * widthHalf ) + widthHalf;
      pos.y = - ( pos.y * heightHalf ) + heightHalf;
    
      var result = {x:pos.x-5, y:pos.y-5};
      
      return result;
    
    }

    toScreenPosition(obj, camera){
        
      var vector = new THREE.Vector3();

      var widthHalf = 0.5*this.e.renderer.getContext().canvas.width;
      var heightHalf = 0.5*this.e.renderer.getContext().canvas.height;

      obj.updateMatrixWorld();
      vector.setFromMatrixPosition(obj.matrixWorld);
      vector.project(camera);

      vector.x = ( vector.x * widthHalf ) + widthHalf;
      vector.y = - ( vector.y * heightHalf ) + heightHalf;

      return { 
          x: vector.x,
          y: vector.y
      };

    };

    removeFromArray(arr, ob) {
      
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
          if (arr[i] === ob) {
            //console.log(">>>>>>>>>" + ob.name);
             arr.splice(i, 1);
          }
        }
      }
    
    }
  
  }
  
  // export function removeFromArray(arr, ob) {
      
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] !== null) {
  //       if (arr[i] === ob) {
  //         //console.log(">>>>>>>>>" + ob.name);
  //          arr.splice(i, 1);
  //       }
  //     }
  //   }
  
  // }
  
  // export function vectorToScreenPos(ob){
      
  //   var width = window.innerWidth;
  //   var height = window.innerHeight;
  //   var widthHalf = width / 2, heightHalf = height / 2;
  
  //   var vector = ob.geometry.vertices[0].clone();
  //   vector.applyMatrix4( ob.matrixWorld );
  
  //   var pos = vector.clone();
  //   // var pos = ob.position.clone();
  
  //   pos.project(camera);
  //   pos.x = ( pos.x * widthHalf ) + widthHalf;
  //   pos.y = - ( pos.y * heightHalf ) + heightHalf;
  
  //   var result = {x:pos.x-5, y:pos.y-5};
    
  //   return result;
  
  // }
  
  // export function getDistance(x1, y1, x2, y2) {
  //   var a = x1 - x2;
  //   var b = y1 - y2;
  
  //   var c = Math.sqrt(a * a + b * b);
  //   return c;
  // }
  
  // export function inc(el, type, amount){
  //     if(type==="opacity"){
  //         // console.log("op")
  //         var theOpacity = parseFloat(el.style.opacity);
  //         if(theOpacity==="" || isNaN(theOpacity)){
  //             theOpacity=0;
  //         }
  //         theOpacity+=amount;
  //         if(theOpacity>1){
  //             theOpacity=1;
  //         }
  //         if(theOpacity<0){
  //             theOpacity=0;
  //         }
  //         el.style.opacity = theOpacity+"";
  //         // console.log(theOpacity)
  //     }else if(type==="top"){
          
  //         var theTop = parseFloat(el.style.top);
  
  //         console.log(el.style.top)
  
  //         if(theTop==="" || isNaN(theTop)){
  //             theTop=0;
  //         }
  //         theTop+=amount;
          
  //         el.style.top = theTop+"";
          
  //     }
  // }
  
  
  
  