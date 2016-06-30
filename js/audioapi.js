var tracks = [{
                id: 1,
                name: "The Hardkiss - Hurricane",
                length: "03:42",
                src : "audio/01.mp3"
            }, {
                id: 2,
                name: "The Hardkiss - Shadows Of Time",
                length: "04:06",
                src : "audio/02.mp3"
            }, {
                id: 3,
                name: "The Hardkiss - Tell Me Brother",
                length: "04:03",
                src : "audio/03.mp3"
            }, {
                id: 4,
                name: "The Hardkiss - Under The Sun",
                length: "03:38",
                src : "audio/04.mp3"
            }, {
                id: 5,
                name: "The Hardkiss - Prirva",
                length: "02:54",
                src : "audio/05.mp3"
            }];
         

var audio = new Audio();
audio.controls = true;
audio.autoplay = false;
audio.volume = 0.15;
document.getElementById("create-audio").appendChild(audio);

var contextClass = new window.AudioContext; 
var source;   
var analyser;
var index = 0;
    
window.addEventListener('load', function(e) {
    loadAudio(index);
    source = contextClass.createMediaElementSource(audio);
    analyser = contextClass.createAnalyser()
    source.connect(analyser);
    analyser.connect(contextClass.destination);
    
    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    visualization(bufferLength);
    contextClass.currentTime
        
}, false);

document.getElementById('btnNext').onclick = function() {
    if (index < tracks.length - 1) {
        ++index;
        loadAudio (index);
    }
    else {
        index = 0;
        loadAudio (index);
    }
}

document.getElementById('btnPrev').onclick = function() {
    if (index > 0) {
        --index;
        loadAudio(index);
    }
    else {
        index = tracks.length - 1;
        loadAudio(index);
    }
}

function loadAudio(index) {
    audio.src = tracks[index].src;
    audio.autoplay = true;
    document.getElementById("npTitle").innerHTML = tracks[index].name;
}

audio.addEventListener('timeupdate',function(){
    var currentTime = Math.floor(audio.currentTime);
    var duration = Math.floor(audio.duration);
    if(currentTime == duration && index < tracks.length - 1) {
        ++index;
        loadAudio(index);
    }
}, false);

	


