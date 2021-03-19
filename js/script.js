//Home Typewriter
var a = 0;
var txt = 'Continuous Assessment #1'; //Text will be typed when page titles are clicked
var speed = 80;

function homeWriter() {
  if (a < txt.length) {
    document.getElementById("home").innerHTML += txt.charAt(a);
    a++;
    setTimeout(homeWriter, speed);
  }
}

// //HTML Typewriter
var b = 0;
var txt2 = 'Hyper-Text Markup Language';
var speed2 = 80;

function htmlWriter() {
  if (b < txt2.length) {
    document.getElementById("html").innerHTML += txt2.charAt(b);
    b++;
    setTimeout(htmlWriter, speed2);
  }
}

//CSS Typewriter
var c = 0;
var txt3 = 'Cascading Style Sheets';
var speed3 = 80;

function cssWriter() {
  if (c < txt3.length) {
    document.getElementById("css").innerHTML += txt3.charAt(c);
    c++;
    setTimeout(cssWriter, speed3);
  }
}

//JavaScript Typeriter
var d = 0;
var txt4 = 'I can do more than just print "Hello World" to the screen';
var speed4 = 80;

function jsWriter() {
  if (d < txt4.length) {
    document.getElementById("js").innerHTML += txt4.charAt(d);
    d++;
    setTimeout(jsWriter, speed4);
  }
}

//Light Bulb Example
function lightOff() {
    document.getElementById("light-bulb").src='images/light-off.gif';
  }
function lightOn() {
    document.getElementById("light-bulb").src='images/light-on.gif';
  }