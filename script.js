var tab_run =  ["images/alex_run/run1.png", "images/alex_run/run2.png", "images/alex_run/run3.png", 
"images/alex_run/run4.png", "images/alex_run/run5.png", "images/alex_run/run6.png", 
"images/alex_run/run7.png", "images/alex_run/run8.png", "images/alex_run/run9.png", 
"images/alex_run/run10.png", "images/alex_run/run11.png", "images/alex_run/run12.png", 
"images/alex_run/run13.png", "images/alex_run/run14.png", "images/alex_run/run15.png", "images/alex_run/run16.png", ]

function init()
{
    canvas = document.getElementById("my-app");
    canvas.width = document.body.clientWidth; 
    canvas.height = document.body.clientHeight; 
    canvasW = canvas.width;
    canvasH = canvas.height;

}
window.onload = function() {
    init();
    window.addEventListener('resize', init());
    var myAudio = document.createElement("audio");
    myAudio.loop = true;
    myAudio.src = "./music/music/theme5.mp3";
    myAudio.play();
    var runfr = 0
    var canvas = document.querySelector("#my-app");
    var ctx = canvas.getContext("2d");
    
    var mnl = document.getElementById("mnl");
    var mnb1 = document.getElementById("mnb1");
    var mnb2 = document.getElementById("mnb2");
    var mnb3 = document.getElementById("mnb3");
    ctx.drawImage(mnl, document.body.clientWidth - mnl.width +200, 0, 500, 500 * mnl.height / mnl.width)
    ctx.drawImage(mnb1, document.body.clientWidth - mnb1.width +150, mnl.height - 100, 400, 450 * mnb1.height / mnb1.width)
    ctx.drawImage(mnb2, document.body.clientWidth - mnb2.width +200, mnl.height + 50, 300, 450 * mnb2.height / mnb2.width)
    ctx.drawImage(mnb3, document.body.clientWidth - mnb3.width +200, mnl.height + mnb1.height + 40, 300, 450 * mnb3.height / mnb3.width)

    //hero frame rate scipt
    
    // window.setInterval(function frate (){
        //     var img = document.getElementById("alex");
        //     img.setAttribute("src", tab_run[runfr])
        //     if(runfr != 0){
        //         ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     }
        //     ctx.drawImage(img, 100, 100);
        //     runfr++
        //     if(runfr == 16){
        //         runfr = 0
        //     }
            
        // }, 60);
        

  };
