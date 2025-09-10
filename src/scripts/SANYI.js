const deviceName = navigator?.userAgentData?.platform || navigator?.platform;
console.log(deviceName);
alert(deviceName);

function isItMobile(OSandPlatform) {
    const OSandPlatformArray = OSandPlatform.split(" ");
    const OS = OSandPlatformArray[0];
    const Platform = OSandPlatformArray[1];

    if (OS == "Linux" && Platform.startsWith("arm")) {
        alert("It is an android phone");
        window.location = "https://seraphicum.hu/mobile_version.html";
    } else if (navigator.platform === "iPhone") {
        alert("It is an Iphone")
        window.location = "https://seraphicum.hu/mobile_version.html";
    }
}

isItMobile(deviceName);

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