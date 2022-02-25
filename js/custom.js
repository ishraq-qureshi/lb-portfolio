import functions from './functions.js';

window.addEventListener('load', () => {
    
    // HIDER LOADER AFTER 5-SECONDS
    setTimeout(functions.hideLoader, 5000);

    functions.lebijouContentSlide();

});

let lastScrollPosition = 0;
document.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > 100) header.classList.add("header-scroll");
    else header.classList.remove("header-scroll");
    if (st > lastScrollPosition){
        header.style.top = '-200px';
    } else {
        header.style.top = '0px';
    }
    lastScrollPosition = st <= 0 ? 0 : st; // For Mobile or negative scrolling
})



