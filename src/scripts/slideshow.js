let slideIndexCalendar = 0; /* Alapból az első képről indulunk */
const listOfSlidesCalendar = document.getElementsByClassName("mySlides fade calendar"); /* Because of this part the script must be tagged in the html !!AFTER!! ALL!! the ELEMENTS!! of this class are DEFINED!!*/

let nIntervalIDCalendar;

function showSlideCal(newIndex) {
    for (let i = 0; i < listOfSlidesCalendar.length; i++) {
        listOfSlidesCalendar[i].style.display = "none";
    }

    if (newIndex >= listOfSlidesCalendar.length) {
        newIndex = 0
    }
    if (newIndex < 0) {
        newIndex = listOfSlidesCalendar.length - 1
    }

    listOfSlidesCalendar[newIndex].style.display = "block";

    slideIndexCalendar = newIndex;

}

function plusSlidesCal(deltaIndex) {
    showSlideCal(slideIndexCalendar + deltaIndex);
    clearInterval(nIntervalIDCalendar);
    nIntervalIDCalendar = null;
}

function slideShowCal() {
    showSlideCal(slideIndexCalendar + 1);
}

function startSlideShowCal() {
    if (!nIntervalIDCalendar) {
        nIntervalIDCalendar = setInterval(slideShowCal, 3000);
    }
}

startSlideShowCal();

/* Gallery Slideshow (used in Tamogatok.html) */
let slideIndexTm = 1;

// Only auto-run if the elements exist
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementsByClassName("tm-demo").length > 0) {
        showSlidesTm(slideIndexTm);
    }
});

function plusSlidesTm(n) {
    showSlidesTm(slideIndexTm += n);
}

function currentSlideTm(n) {
    showSlidesTm(slideIndexTm = n);
}

function showSlidesTm(n) {
    let i;
    let slides = document.getElementsByClassName("tm-mySlides");
    let dots = document.getElementsByClassName("tm-demo");
    let captionText = document.getElementById("tm-caption");
    if (!slides.length) return;
    if (n > slides.length) {
        slideIndexTm = 1
    }
    if (n < 1) {
        slideIndexTm = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" tm-active", "");
    }
    slides[slideIndexTm - 1].style.display = "block";
    dots[slideIndexTm - 1].className += " tm-active";
    if (captionText) {
        captionText.innerHTML = dots[slideIndexTm - 1].alt;
    }
}