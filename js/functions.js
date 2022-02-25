
// HIDE LOADER
const hideLoader = () => {
    const loaderElem = document.getElementById('loader');
    let fadeEffect = setInterval(function () {
        if (!loaderElem.style.opacity) {
            loaderElem.style.opacity = 1;
        }
        if (loaderElem.style.opacity > 0) {
            loaderElem.style.opacity -= 0.1;
        } else {
            loaderElem.style.display = 'none';
            clearInterval(fadeEffect);
        }
    }, 50);
}

const elementSize = (id) => {
    const elemNode = document.getElementById(id);
    return {
        width: elemNode.offsetWidth,
        height: elemNode.offsetHeight 
    }
}

const lebijouContentSlide = () => {
    const lebijouSlides = document.getElementsByClassName('lebijou-content-slide');
    let i = 0;
    for( const slide of lebijouSlides ){
        slide.setAttribute('data-slide', i);
        i++;
    }

    setInterval(() => {
        let currentSlide = 0;
        for( const slide of lebijouSlides ){
            if(slide.style.opacity == 1){
                currentSlide = parseInt(slide.getAttribute('data-slide'));
                slide.style.opacity = 0;
                break;
            }
        }
        if(currentSlide + 1 === lebijouSlides.length) currentSlide = -1;
        const slideToShow = document.querySelector(`[data-slide="${currentSlide + 1}"]`);
        slideToShow.style.opacity = 1;
    }, 10000)
}

export default{
    hideLoader,
    elementSize,
    lebijouContentSlide
}