let sliderControlLeft = document.getElementById('slider-control-left');
let sliderControlRight = document.getElementById('slider-control-right');

let slidesCont = document.getElementById('slides');

let slideDuration = 500;

sliderControlRight.addEventListener('click', e => {
    document.querySelector('[data-highlight="true"] + .slide').dataset.highlight = 'true';
    document.querySelector('[data-highlight="true"]').dataset.highlight = 'false';
    slidesCont.animate([
        { transform: 'translateX(-21rem)' }
    ], {
        duration: slideDuration,
        fill: 'forwards',
        easing: 'ease-in-out'
    });
    setTimeout(() => {
        slidesCont.appendChild(document.querySelectorAll('.slide')[0].cloneNode());
        slidesCont.removeChild(document.querySelectorAll('.slide')[0]);
        slidesCont.animate([
            { transform: 'translateX(0)' }
        ], {
            duration: 0,
            fill: 'forwards'
        });
    }, slideDuration);
});

sliderControlLeft.addEventListener('click', e => {
    document.querySelector('[data-highlight="true"]').previousElementSibling.dataset.highlight = 'true';
    document.querySelector('[data-highlight="true"]').nextElementSibling.dataset.highlight = 'false';
    slidesCont.animate([
        { transform: 'translateX(21rem)' }
    ], {
        duration: slideDuration,
        fill: 'forwards',
        easing: 'ease-in-out'
    });
    setTimeout(() => {
        slidesCont.prepend(document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1].cloneNode());
        slidesCont.removeChild(document.querySelectorAll('.slide')[document.querySelectorAll('.slide').length - 1]);
        slidesCont.animate([
            { transform: 'translateX(0)' }
        ], {
            duration: 0,
            fill: 'forwards'
        });
    }, slideDuration);
});

