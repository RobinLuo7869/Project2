var portName = '/dev/Serial0';
var options = {
    baudRate: 9600
};
var serial;
var rectColor = 100;
var rectSize = 100;

var inData;

function setup() {
  createCanvas(800, 40);
  serial = new p5.SerialPort(document.location.hostname); 
  serial.open(portName, options); 
  serial.on('list', printList);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  
}



function draw() {
  background("#000000");
  fill("#44AAFF")
  noStroke();
    rect(0, 0, rectSize, 40);
}


function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function serialEvent() {
  inData = serial.readLine();
  console.log(inData);
  rectSize = inData;
}

function printList(portList) {
  // portList is an array of serial port names:
  for (var i = 0; i < portList.length; i++) {
    console.log(i + ' ' + portList[i]);
  }
}