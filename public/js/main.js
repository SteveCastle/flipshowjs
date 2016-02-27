var socket = io();
socket.on('image', function(msg) {
    console.log(msg);
});

function ScrollHandler(e){
    if(e.deltaY>0){
        socket.emit('next', 1);
    }
    else{
        socket.emit('back', -1);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var canvas = document.getElementById("playFrame");
    var ctx = canvas.getContext("2d");
    canvas.addEventListener("mousewheel", ScrollHandler, false);

});


