let testimonials;

function resize(){
    if(window.innerWidth <= 425){
        console.log('mobile!')
        console.log(testimonials)
        testimonials.params.slidesPerView = 1;
        testimonials.params.centeredSlides = false;
        testimonials.update();
    } else {
        testimonials.params.slidesPerView = 3;
        testimonials.params.centeredSlides = true;
    }
}

window.onload = function(){
    testimonials = new Swiper ('.swiper-testimonials', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        clickable: true,
    });
    resize();
}

window.addEventListener('resize', function () {
    resize();
})
