var portName = '/dev/Serial0';
var options = {
    baudRate: 9600
};
var serial;
var rectColor = 100;
var rectSize = 100;

var canvas;
var h1;
var p;
var button;
var input;
var nameF;

var data;

function setup() {
    canvas = createCanvas(300, 20);
    canvas.position(50, 620)
    h1 = createElement('h3', 'Water Level');
    h1.position(50, 550);
    text = p = createP("testing");
    p.position(120, 580);

    button = createButton("Change")
    button.position(50, 660);

    input = createInput('type something')
    input.position(160, 660);


    serial = new p5.SerialPort();
    serial.open(portName, options);
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
    var data = serial.read();
    console.log(data， data);
    rectSize = data;
}

function printList(portList) {
  // portList is an array of serial port names:
  for (var i = 0; i < portList.length; i++) {
    console.log(i + ' ' + portList[i]);
  }
}
