Webcam.set({
    width:300,
    height:300,
    image_format: "png",
    png_quality: 91605018547,

    constraints:{
        facingMode: "environment"
    }
});

    camera= document.getElementById("camera");
    Webcam.attach("#camera");

    function Click() {
       //console.log("test");
        Webcam.snap(function(data_uri){
            document.getElementById("Result").innerHTML= "<img id='snap' src= '"+ data_uri + "'>" ;
        });
    }


    classifier= ml5.imageClassifier("MobileNet", modelLoaded);

    function modelLoaded(){
        console.log("ModelLoaded");
    }

    function Final() {
        img= document.getElementById("snap");
        classifier.classify(img, gotResult);
    }
    
    function gotResult(error,results) {
        console.log(results);
        if (error) {
            console.log(error);
        } 

        else {
            document.getElementById("output").innerHTML=results[0].label;
        }
        
    }