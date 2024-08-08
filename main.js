
//error 

//error

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;

if (content== "Take My Selfie") {

    console.log("Take My Selfie");

    speak();
}}

var camera = document.getElementById("camera");

function speak() {

    var synth = window.speechSynthesis;

    var speakdata = "Taking Your Selfie In 5 Seconds";

    var utterthis = new SpeechSynthesisUtterance(speakdata);

    Webcam.attach(camera);

    synth.speak(utterthis);

    setTimeout(function()
    {
        takesnapshot();
        save();
    },5000);

    

}

Webcam.set({
    width: 360,
    height: 250,
    fps: 240,
    image_format: 'jpeg',  // image format (may be jpeg or png)
    jpeg_quality: 100      // jpeg image quality from 0 (worst) to 100 
});

camera = document.getElementById("camera");

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click();
}