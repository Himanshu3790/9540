Webcam.set({
  height: 300,
  width: 350,
  image_format: 'png',
  png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
  webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML = "<img id='captured_face' src=" + data_uri + ">"
  });
}


console.log("ml5 version " , ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hIQnOSfMW/model.json");
