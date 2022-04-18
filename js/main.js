
//var x = document.getElementById("demo");
//var inp=document.getElementById("myInput")
//x.addEventListener("click",welcome)
//x.addEventListener("dbclick",welcome)
//x.addEventListener("mouseenter",welcome)
//x.addEventListener("mouseleave",welcome)
//x.addEventListener("mousemove",welcome)


//inp.addEventListener("keyup",welcome)
//inp.addEventListener("keydown",welcome)
//inp.addEventListener("keypress",welcome)
//inp.addEventListener("focus",welcome)
//inp.addEventListener("blur",welcome)


//window.addEventListener("load",welcome)
//window.addEventListener("ready",welcome)
//window.addEventListener("scroll",welcome)
//window.addEventListener("resize",welcome)


/* 

inp.addEventListener("blur",function(){
    
}) */

/* var y=document.querySelectorAll(".h");
console.log(y)

for(var i =0;i<y.length;i++){
    y[i].addEventListener("click",welcome)
}
 */

/* function welcome(){
    window.alert("hello ")
} */




/* x.addEventListener("click",fun)

function fun(){
    x.style.backgroundColor ="red";
    x.style.fontWeight ="bold";
    x.style.color ="yellow";
} */



/* var f=document.getElementById("fire")

window.addEventListener("mousemove",function(kkk){
    fun(kkk)
});

function fun(kkk){
    f.style.left=kkk.clientX + "px"
    f.style.top=kkk.clientY + "px"
    kkk.target.src="imgs/RiA9Ao9iL.png";
    console.log(kkk.target)
}
 */


/*
var imgs = Array.from(document.querySelectorAll(".container .box img"));
var imgBox=document.querySelector("#box .box-img");
var box=document.querySelector("#box");

var close=document.getElementById("fa-times-circle");
var left=document.getElementById("fa-arrow-left");
var right=document.getElementById("fa-arrow-right");
var expand=document.getElementById("expand")
var mainIndex ;


for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){

        mainIndex=imgs.indexOf(e.target);

        var srcImg = e.target.src;
        imgBox.style.backgroundImage="url("+srcImg+")";
        box.style.display="flex";
        expand.setAttribute("href",srcImg)
    })
}
close.addEventListener("click",function(e){
    box.style.display="none";
})

left.addEventListener("click",slideLeft)
right.addEventListener("click",slideRight)

function slideLeft(){
    mainIndex--;
    if(mainIndex < 0){
        mainIndex = imgs.length-1;
    }
    newSrc =imgs[(mainIndex)].src;
    imgBox.style.backgroundImage="url("+newSrc+")";
    expand.setAttribute("href",newSrc)

} 


function slideRight(){
    mainIndex++;
    if(mainIndex >= imgs.length){
        mainIndex = 0;
    }
    newSrc =imgs[(mainIndex)].getAttribute("src");
    imgBox.style.backgroundImage="url("+newSrc+")";
    expand.setAttribute("href",newSrc)
}

document.addEventListener("keydown",function(e){
    if(e.code == "ArrowRight"){
        slideRight()
    }
    else if(e.code == "ArrowLeft"){
        slideLeft()
    }
    else if(e.code == 'Escape'){
        box.style.display="none";
    }
})
*/

/*document.addEventListener("click",function(e){
    //console.log(e.target.src);
    //e.target.style.padding=100+ "px"
    //e.target.setAttribute("style","background:#000;")
})*/

//var x=["AHMED","HALA","MOH"].indexOf("MOH");
//console.log(x);


var imgs=Array.from(document.querySelectorAll(".container .box img"));
var imgbox=document.querySelector("#box .box-img");
var box=document.getElementById("box");
var close=document.getElementById("fa-times-circle");
var left=document.getElementById("fa-arrow-left");
var right=document.getElementById("fa-arrow-right");
var expand=document.getElementById("expand");
var currentImg;

for(var i=0;i<imgs.length;i++){
  
    imgs[i].addEventListener("click",function(e){
        currentImg=imgs.indexOf(e.target);
        console.log(currentImg)
       var imgSrc=e.target.src;
        imgbox.style.backgroundImage="url("+imgSrc+")";
        box.style.display="flex";
    })
}

close.addEventListener("click",function(){
    box.style.display="none";
})
//Event Left
left.addEventListener("click",function(e){
    slideLeft();
})

//Event Right
right.addEventListener("click",function(){
    slideRight();
})

//Expand Lind
expand.addEventListener("click",function(){
    expand.setAttribute("href",imgs[currentImg].src);
})

//Right Function
function slideRight(){
    currentImg++;
    if(currentImg>imgs.length-1){
        currentImg=0;
    }
    console.log(currentImg);
    imgbox.style.backgroundImage="url("+imgs[currentImg].src+")";
}

//left Function 
function slideLeft(){
    currentImg--;
    if(currentImg<0){
        currentImg=imgs.length-1;
    }
    console.log(currentImg);
    imgbox.style.backgroundImage="url("+imgs[currentImg].src+")";
}


document.addEventListener("keydown",function(e){
    console.log(e.key);

    if(e.key =="ArrowRight"){
        slideRight()
    }
    else if(e.key=="ArrowLeft"){
        slideLeft()
    }
    else if(e.key == "Escape"){
        box.style.display="none";
    }
})