var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    Recognition.start();
}

Recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript.toLowerCase();
    console.log(event);

    console.log(Content);
    if(Content =="selfie")
    {
        console.log("tirando selfie --- ");
        speak();
    }

}
function speak() {
    var synth = window.speechSynthesis;

    speakData="tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speakData)

    synth.speak(utterThis);

    Webcam.attach(cam);

    setTimeout(function()
    {
        imgid="selfie2";
        takeSelfie();
        speakData="tirando sua selfie em 10 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis);
        save();
    }, 5000);
    setTimeout(function()
    {
        imgid="selfie3";
        takeSelfie();
        speakData="tirando sua selfie em 15 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData)
        synth.speak(utterThis);
        save();
    }, 10000);
    setTimeout(function()
    {
        imgid="selfie4";
        takeSelfie();
        save();
    }, 15000);
    
    
    
}

cam = document.getElementById("cam");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
})

function takeSelfie() 
{
    Webcam.snap(function(data_uri) { 
        if(imgid==selfie2) {
                 document.getElementById("result1").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        } 
        if(imgid==selfie3) {
            document.getElementById("result2").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
   }
   if(imgid==selfie4) {
    document.getElementById("result3").innerHTML = '<img id="selfie4" src="'+data_uri+'"/>';
}
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src ;
    link.href = image;
    link.click();
}