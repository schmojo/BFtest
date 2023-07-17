//Usage

//load your JSON (you could jQuery if you prefer)
function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './wheel_data.json', true); 
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      //Call the anonymous function (callback) passing in the response
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

//your own function to capture the spin results
function myResult(e) {
  //e is the result object
    console.log('Spin Count: ' + e.spinCount + ' - ' + 'Win: ' + e.win + ' - ' + 'Message: ' +  e.msg);

    // if you have defined a userData object...
    if(e.userData){
      
      console.log('User defined score: ' + e.userData.score)

    }

  //if(e.spinCount == 3){
    //show the game progress when the spinCount is 3
    //console.log(e.target.getGameProgress());
    //restart it if you like
    //e.target.restart();
  //}  

}

//your own function to capture any errors
function myError(e) {
  //e is error object
  console.log('Spin Count: ' + e.spinCount + ' - ' + 'Message: ' +  e.msg);

}

function myGameEnd(e) {
  
  //e is gameResultsArray
  console.log(e);
  TweenMax.delayedCall(5, function(){
    
    Spin2WinWheel.reset();

  })


}

function init() {
    var myWheel = new Spin2WinWheel();
    var myBtn = document.querySelector('.spinBtn');
    //trigger with button
    myWheel.init({data:wheelDataObject, spinTrigger: myBtn});

    //triggered with a gesture
    //myWheel.init({data:wheelDataObject});

}


var wheelDataObject = {
colorArray:[ "#9b89a7", "#4b2e6e", "#FFFFFF", "#4b2e6e"],

segmentValuesArray : [
  {type: "image", value : "media/B.svg", win : true, resultText : "Check you out, you get nothing!"},
  {type: "image", value : "media/x2.svg", win : true, resultText : "Congratulations. You'll get double Amazon vouchers when you next Introduce a Friend!"},
  {type: "image", value : "media/gift.svg", win : false, resultText : "A man has been despatched to your house."},
  {type: "image", value : "media/B.svg", win : true, resultText : "Why aren't you buying glasses?"},
  {type: "image", value : "media/x2.svg", win : true, resultText : "Probably more Amazon vouchers"},
  {type: "image", value : "media/gift.svg", win : false, resultText : "Um... Vouchers?"},
  {type: "image", value : "media/x2.svg", win : true, resultText : "I'm hope you're Introducing a Friend right now."},
  
],

  svgWidth: 1024,
  svgHeight: 768,
  wheelStrokeColor: "#FFFFFF",
  wheelStrokeWidth: 4,
  wheelSize: 700,
  wheelTextOffsetY: 80,
  wheelTextColor: "#EDEDED",  
  wheelTextSize: "2.3em",
  wheelImageOffsetY: 40,
  wheelImageSize: 100,
  centerCircleSize: 360,
  centerCircleStrokeColor: "#FFFFFF",
  centerCircleStrokeWidth: 12,
  centerCircleFillColor: "#4b2e6e",
  segmentStrokeColor: "#FFFFFF",
  segmentStrokeWidth: 4,
  centerX: 512,
  centerY: 384,  
  hasShadows: true,
  numSpins: 999999 ,
  spinDestinationArray:[],
  minSpinDuration:6,
  gameOverText:"Thanks for playing. You'll still get £50 Amazon vouchers everytime you Introduce a Friend for a free eye exam.",
  invalidSpinText:"INVALID SPIN. PLEASE SPIN AGAIN.",
  introText:"Introduce a Friend for a free eye exam. Spin the wheel for a chance to win double vouchers.",
  hasSound:true,
  gameId:"9a0232ec06bc431114e2a7f3aea03bbe2164f1aa",
  clickToSpin:true,
  spinDirection:"ccw"
}

//And finally call it
init();