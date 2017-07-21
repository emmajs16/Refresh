// function nextScene2() {
//     document.getElementById('scene2').setAttribute('visible', 'false')
//     document.getElementById('scene3').setAttribute('visible', 'true')
//     console.log("hi")
//   }

function home(){
    window.location.reload()
}
document.getElementById("clickme").addEventListener('click',function(){
    document.getElementById('scene2').setAttribute('visible', 'false')
    document.getElementById('scene3').setAttribute('visible', 'true')
    console.log("hi")
 })
 document.getElementById("clickme2").addEventListener('click',function(){
    document.getElementById('scene2').setAttribute('visible', 'false')
    document.getElementById('scene4').setAttribute('visible', 'true')
    console.log("hi")
 })
 
// API for Quotes
 var categories=["inspire", "life", "love", "art"]
function quote(){
   
    var rand= Math.floor(Math.random()*categories.length);
    var randCategory = categories[rand];
    console.log(randCategory)
    var quoteEndpoint = `https://quotes.rest/qod.json?category=${randCategory}`;
 console.log(quoteEndpoint)
    var h;
    var quote;
    var quotePath;
    var quoteNumber;
    fetch(quoteEndpoint)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            //  quoteNumber = Math.floor((Math.random() * 800) + 0);
            console.log(json)
                //pull out just the image link that wew want
            quotePath = json.contents.quotes["0"].quote
            console.log(quotePath)
                // make a new image in our html
            // h = document.createElement("h2")
            // quote = document.createTextNode(quotePath)
            console.log(quotePath)
                // set the image's path
            var text = document.getElementById("quoteText");
            console.log(text)
            text.setAttribute("value",quotePath)
            // document.appendChild(text)
            // quoteText.setAttribute("value","quote")
        })
}

function test(){
    console.log("it works!")
    var quote = "marley rox"
}
//sky change
function beachSky(){
     var skyHome = document.getElementById("#home");
            skyHome.setAttribute("src","#sky-beach")
                 var skyBreathe = document.getElementById("#breathe");
            skyBreathe.setAttribute("src","#sky-beach")
            var skyMotivation = document.getElementById("#beach");
            skyBreathe.setAttribute("src","#sky-mountain")
}
function mountainSky(){
        var skyHome = document.getElementById("#home");
            skyHome.setAttribute("src","#sky-mountain")
                 var skyBreathe = document.getElementById("#breathe");
            skyBreathe.setAttribute("src","#sky-mountain")
            var skyMotivation = document.getElementById("#motivation");
            skyBreathe.setAttribute("src","#sky-mountain")
}
function starSky(){
     var skyHome = document.getElementById("#home");
            skyHome.setAttribute("src","#sky-stars")
                 var skyBreathe = document.getElementById("#breathe");
            skyBreathe.setAttribute("src","#sky-stars")
            var skyMotivation = document.getElementById("#motivation");
            skyBreathe.setAttribute("src","#sky-stars")
}
function solidSky(){
     var sky = document.getElementsByTagName("a-sky");
            sky.setAttribute("color","black")
}

// Move Player Functions
 function movePlayer1(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 1.716")
}


   function movePlayer2(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 3.712")
}

 function movePlayer3(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 7.253")
}

 function movePlayer4(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 11.977")
}

 function movePlayer5(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","0.103 1 16.408")
}

 function movePlayer6(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 19.689")
}

function movePlayer7(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 24.659")
}


function movePlayer8(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 29.403")
}


function movePlayer9(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","0.103 1 33.911")
}

function movePlayer10(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","0.103 1 37.891")
}
function movePlayer11(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 41.698")
}
function movePlayer12(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 45.584")
}
function movePlayer13(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 49.409")
}
function movePlayer14(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 53.076")
}
function movePlayer15(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 56.527")
}
function movePlayer16(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","1.841 1 58.358")
}
function movePlayer17(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","5.179 1 58.396")
}
function movePlayer18(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","9.338 1 58.432")
}
function movePlayer19(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","13.393 1 58.36")
}
function movePlayer20(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","17.359 1 58.442")
}
function movePlayer21(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","21.065 1 58.454")
}
function movePlayer22(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","24.638 1 58.379")
}
function movePlayer23(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","28.728 1 58.39")
}
function movePlayer24(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","32.712 1 58.386")
}
function movePlayer25(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","36.473 1 58.425")
}
function movePlayer26(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.128 1 58.392")
}
function movePlayer27(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.098 1 55.164")
}
function movePlayer28(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.178 1 52.152")
}
function movePlayer29(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","36.32 1 52.175")
}
function movePlayer30(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","32.748 1 52.113")
}
function movePlayer31(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","29.153 1 52.245")
}
function movePlayer32(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 16.408")
}
function movePlayer33(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 19.689")
}
function movePlayer34(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 11.977")
}
function movePlayer35(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 3.712")
}
function movePlayer36(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 7.253")
}
function movePlayer37(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 1.716")
}
function movePlayer38(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 24.659")
}
function movePlayer39(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 29.403")
}
function movePlayer40(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 33.911")
}
function movePlayer41(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 37.891")
}
function movePlayer42(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 41.698")
}
function movePlayer43(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 45.584")
}
function movePlayer44(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 49.409")
}
function movePlayer45(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 53.076")
}
function movePlayer46(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","-0.103 1 56.527")
}
function movePlayer47(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","1.841 1 58.358")
}
function movePlayer48(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","5.179 1 58.396")
}
function movePlayer49(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","9.338 1 58.432")
}
function movePlayer50(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","13.393 1 58.36")
}
function movePlayer51(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","17.359 1 58.442")
}
function movePlayer52(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","21.065 1 58.454")
}
function movePlayer53(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","24.638 1 58.379")
}
function movePlayer54(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","28.728 1 58.39")
}
function movePlayer55(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","32.712 1 58.386")
}
function movePlayer56(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","36.473 1 58.425")
}
function movePlayer57(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.128 1 58.392")
}
function movePlayer58(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.098 1 55.164")
}
function movePlayer59(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.178 1 52.152")
}
function movePlayer60(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","36.32 1 52.175")
}
function movePlayer61(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","32.748 1 52.113")
}
function movePlayer62(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","29.153 1 52.245")
}
function movePlayer63(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","25.499 1 52.218")
}
function movePlayer64(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","22.289 1 52.197")
}
function movePlayer65(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","18.339 1 52.139")
}
function movePlayer66(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","14.662 1 52.191")
}
function movePlayer67(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","10.597 1 52.311")
}
function movePlayer68(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","6.186 1 52.455")
}
function movePlayer69(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","6.115 1 48.768")
}
function movePlayer70(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","9.028 1 46.686")
}
function movePlayer71(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","12.675 1 46.581")
}
function movePlayer72(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","15.845 1 46.637")
}
function movePlayer73(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","18.956 1 46.436")
}
function movePlayer74(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","22.099 1 46.255")
}
function movePlayer75(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","25.098 1 46.153")
}
function movePlayer76(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","28.728 1 58.39")
}
function movePlayer77(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","27.735 5 46.56")
}
function movePlayer78(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","27.735 5 46.56")
}
function movePlayer79(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","35.648 1 46.463")
}
function movePlayer80(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","39.703 1 46.488")
}
function movePlayer81(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","40.178 1 42.553")
}
function movePlayer82(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","37.383 1 40.318")
}
function movePlayer83(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","33.244 1 40.299")
}
function movePlayer84(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","29.153 1 40.236")
}
function movePlayer85(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","25.121 1 40.328")
}
function movePlayer86(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","21.25 1 40.289")
}
function movePlayer87(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","17.406 1 40.231")
}
function movePlayer88(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","13.557 1 40.126")
}
function movePlayer89(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","10.099 1 39.994")
}
function movePlayer90(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","6.495 1 39.888")
}
function movePlayer91(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","3.878 1 33.916")
}
function movePlayer92(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","7.782 1 33.831")
}
function movePlayer93(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","12.208 1 33.911")
}
function movePlayer94(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","12.247 1 30.122")
}
function movePlayer95(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","12.205 1 26.347")
}
function movePlayer96(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","8.403 1 26.262")
}
function movePlayer97(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","4.794 1 26.251")
}
function movePlayer98(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","4.87 1 22.489")
}
function movePlayer99(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","7.568 1 20.215")
}
function movePlayer100(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","11.685 1 20.166")
}
function movePlayer101(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","13.495 1 17.537")
}
function movePlayer102(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","10.061 1 14.906")
}
function movePlayer103(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","5.827 1 14.257")
}
function movePlayer104(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","6.41 1 10.573")
}
function movePlayer105(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","8.918 1 9.754")
}
function movePlayer106(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","13.333 1 8.117")
}
function movePlayer107(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","16.164 1 8.497")
}
function movePlayer108(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","19.479 1 10.079")
}
function movePlayer109(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","19.697 1 16.015")
}
function movePlayer110(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","19.383 1 21.593")
}
function movePlayer111(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","19.39 1 27.216")
}
function movePlayer112(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","20.024 1 32.689")
}
function movePlayer113(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","24.463 1 33.814")
}
function movePlayer114(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","29.453 1 33.852")
}
function movePlayer115(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","34.532 1 34.113")
}
function movePlayer116(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","38.559 1 34.103")
}
function movePlayer117(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","41.777 1 33.87")
}
function movePlayer118(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","23.492 1 27.648")
}
function movePlayer119(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","45.22 1 33.79")
}
function movePlayer120(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","51.277 1 34.015")
}
function movePlayer121(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","27.381 1 25.639")
}
function movePlayer122(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","8.282 1 34.108")
}
function movePlayer123(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","26.025 1 21.354")
}
function movePlayer124(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","25.943 1 16.033")
}
function movePlayer125(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","25.5 1 10.823")
}
function movePlayer126(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","26.741 1 6.036")
}
function movePlayer127(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","31.511 1 4.874")
}
function movePlayer128(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","34.408 1 6.582")
}
function movePlayer129(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","34.532 1 11.104")
}
function movePlayer130(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","34.965 1 21.132")
}
function movePlayer131(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","35.181 1 25.904")
}
function movePlayer132(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","39.81 1 25.914")
}
function movePlayer133(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.45 1 20.985")
}
function movePlayer134(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","40.911 1 15.699")
}
function movePlayer135(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","41.024 1 10.079")
}
function movePlayer136(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","44.347 1 5.928")
}
function movePlayer137(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","46.592 1 9.033")
}
function movePlayer138(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","45.821 1 13.63")
}
function movePlayer139(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","45.985 1 18.237")
}
// Sphere 140
function movePlayer140(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","46.571 1 22.561")
}
function movePlayer141(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","46.181 1 27.369")
}

function movePlayer142(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","50.393 1 27.301")
}
function movePlayer143(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","51.143 1 22.616")
}
function movePlayer144(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","51.092 1 18.509")
}
function movePlayer145(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","50.899 1 14.379")
}
function movePlayer146(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","51.383 1 9.633")
}
function movePlayer147(){
  
    var camera=document.getElementById("camera")
                camera.setAttribute("position","53.76 1 5.569")
}
function movePlayer148(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","56.678 1 7.869")
}
function movePlayer149(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","57.426 1 13.234")
}
function movePlayer150(){
  
    var camera=document.getElementById("camera")
                 camera.setAttribute("position","56.852 1 13.446")
}
function movePlayer151(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","57.255 1 18.48")
}
function movePlayer152(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","56.904 1 23.743")
}
function movePlayer153(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","56.702 1 29.298")
}
function movePlayer154(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","56.944 1 34.113")
}
function movePlayer155(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","56.625 1 39.397")
}
function movePlayer156(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","53.588 1 42.73")
}
function movePlayer157(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","49.681 1 46.038")
}
function movePlayer158(){
  
    var camera=document.getElementById("camera")
    camera.setAttribute("position","46.171 1 48.833")
}




// Breathe Text Functions

//     var timer = setInterval(changeText,6000);
    // 
 function changeText(){
    var breathIn = document.getElementById("in")
    if(breathIn.getAttribute("value")==="Breathe in."){
        breathIn.setAttribute("value","Breathe out.")
    }
    //  if(breathIn.getAttribute("value")=="Breathe out."){
    //     breathIn.setAttribute("value","Breathe in.")
    // }
    console.log(breathIn.getAttribute("value"))
    console.log("Breathe In")
}
function breatheText(){
    var timer = setInterval(changeText,6000);
    
}