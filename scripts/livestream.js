const livestreamVideo = document.getElementById('livestream-video');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        livestreamVideo.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: ", err);
    });