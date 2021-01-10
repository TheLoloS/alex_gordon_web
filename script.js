var tab_run =  ["images/alex_run/run1.png", "images/alex_run/run2.png", "images/alex_run/run3.png", 
"images/alex_run/run4.png", "images/alex_run/run5.png", "images/alex_run/run6.png", 
"images/alex_run/run7.png", "images/alex_run/run8.png", "images/alex_run/run9.png", 
"images/alex_run/run10.png", "images/alex_run/run11.png", "images/alex_run/run12.png", 
"images/alex_run/run13.png", "images/alex_run/run14.png", "images/alex_run/run15.png", "images/alex_run/run16.png", ]
function init()
{
    canvas = document.getElementById("my-app");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

}
window.onload = function() {
    init();
    window.addEventListener('resize', init());
    var myAudio = document.createElement("audio");
    myAudio.loop = true;
    myAudio.src = "./music/music/menu.mp3";
    myAudio.play();
    var runfr = 0
    var canvas = document.querySelector("#my-app");
    var ctx = canvas.getContext("2d");
        window.setInterval(function frate (){
            var img = document.getElementById("alex");
            img.setAttribute("src", tab_run[runfr])
            if(runfr != 0){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(img, 100, 100);
            runfr++
            if(runfr == 16){
                runfr = 0
            }
            
        }, 60);
  };
