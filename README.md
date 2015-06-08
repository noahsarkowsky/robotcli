# robotcli
Code for controlling both the irobot and the missile thunder connector from your keyboard
For final project use final.js file

I created this final project for my software development class. 

Code Examples:
function goUpdegrees(degrees){
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('up');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}
process.stdin.on('keypress', function (ch, key) {
if(key.name == "up"){
console.log("up");
goUpdegrees (15)
}


To run code in Putty use command: sudo node final.js

License: MIT