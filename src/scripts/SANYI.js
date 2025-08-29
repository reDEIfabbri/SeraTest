const SANDOR = document.getElementById("SANYI");

let sanyiPoz = 0;

let nIntervalIDsanyi;

function SANYIlepes() {
    sanyiPoz += 0.125;
    if (sanyiPoz == 100) {
        sanyiPoz = -15;
    }
    SANDOR.style.right = sanyiPoz + "%";
}

function startSANYIvagta() {
    if (!nIntervalIDsanyi) {
        nIntervalIDsanyi = setInterval(SANYIlepes, 5);
    }
}

startSANYIvagta();