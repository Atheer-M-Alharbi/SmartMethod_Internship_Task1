
window.SpeechRecognition = window.webkitSpeechRecognition;

const speechRecognize = new SpeechRecognition();
speechRecognize.lang = 'ar-SA';
speechRecognize.continuous = true;
speechRecognize.interimResults = true;

click_to_start.addEventListener('click',function(){

    speechRecognize.start();
    speechRecognize.onresult = e => {
        const transcript = Array.from(e.results)
            .map(e => e[0])
            .map(e => e.transcript)
            .join('')

        document.getElementById("Text_area").innerHTML = transcript;
        console.log(transcript);
    };

    click_to_stop.addEventListener('click',function(){
      speechRecognize.stop();
    })

})
