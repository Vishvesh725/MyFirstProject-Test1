// Accessing the microphone and converting speech to text
const startRecordingButton = document.getElementById('start-recording');
const transcriptElement = document.getElementById('transcript');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    transcriptElement.textContent = transcript;
};

startRecordingButton.addEventListener('click', () => {
    recognition.start();
});

// Accessing the camera and capturing a photo
const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');

navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing the camera: ", error);
    });

captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
});