let mobilenet;
let webcam;
let result;
const handleMobileNet = async () => {
  result = await mobilenet.predict();
  handleMobileNet();
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  webcam = createCapture(VIDEO);
  webcam.hide();
  mobilenet = ml5.imageClassifier("MobileNet", webcam, handleMobileNet);
}

function draw() {
  fill(0);
  textAlign(CENTER);
  image(webcam, 0, 0, width, height);
  rect(0, height / 1.1, width, height);
  fill(255);
  textSize(20);
  if (result) text(result[0].label, width / 2, height / 1.05);
}
