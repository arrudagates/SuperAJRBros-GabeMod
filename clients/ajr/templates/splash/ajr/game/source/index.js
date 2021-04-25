
import { Engine } from "./engine.js";
import { UI } from "./ui.js";
import { Utilities } from "./u.js";
import { Resize } from "./resize.js";
import { Sounds } from "./sounds.js";
import { Hub } from "./hub.js";
import { Loader } from "./loader.js";
import { Level1 } from "./level1.js";
import { Input } from "./input.js";
import { Particles } from "./particles.js";

//------------------------------------------------------------

var ui = new UI();
var utilities = new Utilities();
var resize = new Resize();
var loader = new Loader();
var sounds = new Sounds();
var hub = new Hub();
var level1 = new Level1();
var input = new Input();
var particles = new Particles();

var engine = new Engine(
  "",
  false,
  ui,
  utilities,
  resize,
  loader,
  sounds,
  hub,
  level1,
  input,
  particles
);

ui.loadIt(engine);
// ui.setUp(engine);
utilities.setUp(engine);
resize.setUp(engine);
loader.setUp(engine);
sounds.setUp(engine);
hub.setUp(engine);
level1.setUp(engine);
input.setUp(engine);
particles.setUp(engine);

function update() {
  engine.update();
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
