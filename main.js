noseX=0;
noseY=0;
difference=0;
rightWristX=0;
LeftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#00008B');
    fill('#F73718');
    textSize(difference);
    text("Raiden",noseX,noseY);
    document.getElementById("square_sides").innerHTML="Font Size Will Be ="+difference+"px";

}
function modelLoaded()
{
    console.log("PoseNet Loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+" noseY="+noseY);
        rightWristX=results[0].pose.rightWrist.x;
        LeftWristX=results[0].pose.leftWrist.x;
        console.log("LeftWristX="+LeftWristX+"RightWristX="+rightWristX);
        difference=floor(LeftWristX-rightWristX);

    }
}