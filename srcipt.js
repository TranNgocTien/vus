const slides=document.querySelectorAll('.slide');
let currentSlide=0;


const dotContainer = document.querySelector('.dots');

const createDots=function(){
    slides.forEach(function(_,i){
        dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`);

    })
}
createDots();

const goToSlide=function(slide){
    slides.forEach((s,i)=>s.style.transform=`translateX(${100*(i-slide)}%)`);
}

dotContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('dots__dot')){
        const {slide}=e.target.dataset;
        goToSlide(slide);
    }
})