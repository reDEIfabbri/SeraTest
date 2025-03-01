const root = "/src/pictures/honlap_kepek/DB/";
const listOfYears = document.getElementsByClassName("db-year");
const listOfPicks = document.getElementsByClassName("DB-pic")
const listOfTexts = document.getElementsByClassName("DB-description")

function getCurrentIndex() {
    for (let i = 0; i < (listOfYears.length - 1); i++) {
        if (listOfYears[i].id === "active-db") {
            return i;
        }
    }
    return -1;
}

let path = root + listOfYears[getCurrentIndex()].dataset.year + "/";

alert("Your path is: " + path);
function setCurrentIndex(currentIndex, nextIndex) {
    listOfYears[currentIndex].id = "";
    listOfYears[nextIndex].id = "active-db";
}

function setPath(nextIndex) {
    path = root + listOfYears[nextIndex].dataset.year + "/";
}

function changeYearTo(nextIndex) {
    setCurrentIndex(getCurrentIndex(), nextIndex);
    setPath(nextIndex);
    listOfPicks[0].src = path + listOfPicks[0].dataset.name;
    alert("You've clicked: " + nextIndex);
    alert(listOfPicks[0].src);

}

function rolfcopter() {
    alert("Oarr noarr!");
    alert("You've just clicked the wrong button! Now the ROLF Copter is coming to catch you!");
    setPath(listOfYears.length - 1)
    listOfPicks[0].src = path + "Roflcopter.gif";
    alert(listOfPicks[0].src);
    document.getElementsByClassName("DB").display = "none";

}