let noseX = 0;
let noseY = 0;
function preload() {
    // nose = loadImage("clown_nose.png")
    nose = loadImage("https://i.postimg.cc/v8LLQFy0/clown-nose.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, noseX - 35, noseY - 15, 70, 35);
    // fill(200, 0, 0);
    // stroke(0, 0, 0);
    // circle(noseX, noseY, 25);
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot() {
    save('myFilterImage.jpg');
}