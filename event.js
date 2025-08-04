//-------JavaScript Event---------//



//Subscribe Event//
function subscribe(){
    document.getElementById('text').innerHTML='Subscribed';  // Button নিচে Subscribe দেখানোর জন্য//

    document.getElementById('btn').innerHTML='Subscribed';    // Button মধ্যে Subscribed দেখানোর জন্য//

    document.getElementById('btn').style.backgroundColor='#180501';

     document.getElementById('btn').style.color='#dbd0cdff';

}


// Subscribe button Short System //
document.getElementById('btn').onclick= function () {
    document.getElementById('btn').innerHTML='Subscribed';     //সহজ নিয়ম Modern Practices  //
}

//Add Event Listener //
document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('btn').innerHTML='Subscribed';
});


// Like Event //
function like() {
    document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';       // Buttonসহ //
}

function like1(){       
     document.getElementById('like1').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> ';         // Button ছাড়া //
}
function like2(){
    document.getElementById('like2').innerHTML = '<i class="fa-solid fa-thumbs-down"></i>';
}


//Key Pres Event//
function keypress(){
    document.getElementById("key").innerHTML ='Key presed';
}


// JavaScript load //
function onload(){
    alert('JavaScript loeaded');
    document.getElementById("load").innerHTML ='Website Loeaded Properly';
}

//Window Resize //
function windowResize(){
    document.getElementById('textarea').style.height ='100px';
    document.getElementById('form').style.fontFamily =' Black & Black Italic';                 //Font Change //
    document.getElementById('form').style.color ='red';
}

//On Scroll //
function onScroll(){
    document.getElementById('load').innerHTML ='Scrolling';                     //Scroll Korta //
}


//Event Bubbling//
document.getElementById('ul').addEventListener('click', function (e) {         // Ul Click and li Click //
    console.log('ul Clicked');
},false);

document.getElementById('li').addEventListener('click', function (e) {
    console.log('li Clicked');
},false);


//Event Capturing //
 document.getElementById('ul').addEventListener('click', function (e) {         // Ul Click and li Click //
    console.log('ul Clicked');
},true);

document.getElementById('li').addEventListener('click', function (e) {
    console.log('li Clicked');
},true);