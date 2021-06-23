Webcam.set({
  height:250,
  width:360,
  image_format:'png',
  png_quality:90
});
Webcam.attach('#camera');

function capture_image() {
  Webcam.snap( function (data_uri) {
      document.getElementById("result").innerHTML = '<img id = "capture_image" src = "'+data_uri+'"/>'
  });
}

console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/egqeb1WkC/model.json",modelLoaded);

function modelLoaded() {
    console.log("model_loaded");
} 

function identify_image() {
  img = document.getElementById("capture_image");
  classifier.classify(img , gotResult);
} 
function gotResult(error,results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("Object").innerHTML = results[0].label;
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
  }

}