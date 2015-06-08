ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

var keypress = require('keypress')
  , tty = require('tty');

var irobot = require('irobot');
var robot = new irobot.Robot('/dev/ttyUSB0',{baudrate: 115200});
//var robot = new irobot.Robot('/dev/ttyO0');
robot.on('ready', function () {
  console.log('READY FOR MASS DESTRUCTION!');
});

function goDowndegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('down');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function goUpdegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('up');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function turnLeftDegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function turnRightdegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('right');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function fire(){
	setTimeout(function(){ThunderConnector.command('fire');},0);
  stopTime = 400
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
if(key.name == "up"){
console.log("up");
goUpdegrees (15)
}
if (key.name == "down"){
console.log ("down");
goDowndegrees (15);
}

if (key.name == "left") {
console.log ("left")
turnLeftDegrees (15)
}

if (key.name == "right") {
console.log ("right")
turnRightdegrees (15)
}
if (key.name == "space") {
console.log ("fire")
fire (1)
}
if (key.name == 'w'){
  	console.log("forward");
  	//up(10);
    data = {left: 20, right: 20};
    robot.drive(data);
  } else if (key.name == 's'){
  	console.log("backward");
  	//down(10);
  	data = {left: -20, right: -20};
    robot.drive(data);
  } else if (key.name == 'd'){
  	console.log("right");
  	//turnRightDegrees(10);
  	data = {left: 40, right: 20};
    robot.drive(data);
  } else if (key.name == 'a'){
  	console.log("left");
  	//turnLeftDegrees(10);
  	data = {left: 20, right: 40};
    robot.drive(data);
  } else if (key.name == 'e'){
  	console.log("stop");
        data = {left: 0, right: 0};
    robot.drive(data);
  	//fire();
  }
   else if (key && key.ctrl && key.name == 'c') {
    console.log('EXIT');
    process.exit(0);
   // process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
