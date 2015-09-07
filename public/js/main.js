var socket = io();
socket.on('image', function(msg, buffer) {
    console.log(msg, buffer);
});

function ScrollHandler(e){
    if(e.deltaY>0){
        console.log('Scrolled Forward');
    }
    else{
        console.log('Scrolled Back');
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var canvas = document.getElementById("playFrame");
    var ctx = canvas.getContext("2d");
    canvas.addEventListener("mousewheel", ScrollHandler, false);

});


