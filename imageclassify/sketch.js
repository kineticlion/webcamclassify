let mobilenet;
let webcam;
let result;
const handleMobileNet = async () => {
  result = await mobilenet.predict();
  handleMobileNet();
};

function setup() {
  createCanvas(640, 480);
  webcam = createCapture(VIDEO);
  webcam.hide();
  mobilenet = ml5.imageClassifier("MobileNet", webcam, handleMobileNet);
}

function draw() {
  fill(0);
  textAlign(CENTER);
  image(webcam, 0, 0);
  rect(0, height - 50, width, height);
  fill(255);
  if (result) text(result[0].label, width / 2, height - 20);
}
