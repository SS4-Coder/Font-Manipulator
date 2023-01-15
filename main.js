left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500);
    canvas.position(800,100);
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on("pose",got_poses);
    }
    function draw(){
    document.getElementById("font_size").innerHTML="Font size of the text will be "+difference+"px";
    background("skyblue");
    fill("pink");
    textSize(difference);
    text('Saima',50,400);
    }
    function model_loaded(){
    console.log("poseNet is initialized");
    }
    function got_poses(results){
    if(results.length>0){
    console.log(results);
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x-right_wrist_x);
    }
    }