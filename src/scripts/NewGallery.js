let years = document.getElementsByClassName('year');
console.log(years.length);
let galeries = document.getElementsByClassName('thumbnail');
console.log(galeries.length);
let currentPath;
let currentGallery;
let currentMax;

let index;
let imgIndex;

function indexFinder(id) {
    for (let i = 0; i < galeries.length; i++) {
        if (currentPath === galeries[i].dataset.path) {
            index = i;
            console.log(i);
        }
    }
}

const isSamePath = (element) => element.dataset.path === currentPath;

function changeGallery(id) {
    currentGallery = id.id;
    currentPath = id.dataset.path;
    currentMax = id.dataset.max;
    imgIndex = 1;

    indexFinder(id);

    console.log(currentGallery);
    console.log(currentMax);
    console.log(currentPath);
    console.log(index);

    //Here I could just add an if to check whether this is the first run of the function/is there any element to actually remove, but to run that if every time is kind of wasteful... So instead I will just add an empty paragraph to the HTML with the "viewer" id XD
    document.getElementById("viewer").remove();

    document.getElementById("active-year").id = "";
    years[index].id = "active-year";
    let html = `<section class="viewer" id="viewer">
            <div class="prev butt" onclick="goPicBack()">
                <a>❮</a>
            </div>

            <img ID="viewerpicture" alt="Ez egy szép kép..." class="viewed-picture"
                 onclick="this.scrollIntoView()"
                 src="` + currentPath + imgIndex + `.webp">

            <div class="next butt" onclick="goPicForth()">
                <a>❯</a>
            </div>
        </section>`;
    id.parentElement.insertAdjacentHTML('afterend', html);

    currentGallery = document.getElementById("viewerpicture");
    currentGallery.scrollIntoView({behavior: "smooth"});
}

function goPicBack() {
    imgIndex--;
    console.log(imgIndex);

    if (imgIndex < 1) {
        imgIndex = currentMax;
    }
    console.log(imgIndex);

    currentGallery.src = currentPath + imgIndex + ".webp";
}

function goPicForth() {
    imgIndex++;
    console.log(imgIndex);

    if (imgIndex > currentMax) {
        imgIndex = 1;
    }
    console.log(imgIndex);

    currentGallery.src = currentPath + imgIndex + ".webp";
}