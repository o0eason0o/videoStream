(function() {
    var video = document.querySelector('video');
    var getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia)
    getUserMedia.call(navigator, {
        audio: true,
        video: true
    }, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function() {
            video.play();
        }
    }, console.log.bind(console));
})()
