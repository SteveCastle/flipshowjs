var socket = io();
socket.on('image', function(msg, buffer) {
    var data = new Uint32Array(buffer);
    var img = new Blob(data, {type: 'image/jpeg'});
    console.log(msg, img);
});

function ScrollHandler(e){
    if(e.deltaY>0){
        socket.emit('next', true);
        console.log('next');
    }
    else{
        socket.emit('back', true);
        console.log('back');
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var canvas = document.getElementById("playFrame");
    var ctx = canvas.getContext("2d");
    canvas.addEventListener("mousewheel", ScrollHandler, false);

});


