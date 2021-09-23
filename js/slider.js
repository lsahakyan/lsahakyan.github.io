/*let carouselItem = document.querySelector(".pic");
let carouselButton = document.querySelectorAll(".carousel-actions");
let numImg=document.querySelectorAll("img").length;
let indexImg=1;
let translateX=0;
carouselButton.forEach(button =>{
    button.addEventListener('click', event =>{
        if(event.target.id ==='prev'){
         if(indexImg !==1){
            indexImg--;
            translateX+=640;
         }

        }else{
            if(indexImg!==numImg){
                indexImg++;
                translateX-=640;

            }
        }
      carouselItem.style.transform=`translateX(${translateX}px)`;
    });
});*/

let slidePosition = 0;
let slides = document.getElementsByClassName("pic");
let numberSlides = slides.length;
document.getElementById("next").addEventListener("click", function(){
    moveToNextSlide();
});
document.getElementById("prev").addEventListener("click", function(){
    moveToPrevSlide();
});

 function updateSlidePosition(){
     for(let slide of slides){
         slide.classList.remove("pic--visible");
         slide.classList.add("pic--hidden");
     }
 

 slides[slidePosition].classList.add("pic--visible");
}

function  moveToNextSlide(){
    if(slidePosition === numberSlides - 1){
        slidePosition = 0;
    }else {
        slidePosition++
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if(slidePosition === 0) {
        slidePosition = numberSlides -1;
    } else {
         slidePosition --
    }
     updateSlidePosition();
}
console.log(slides)

