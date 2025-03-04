console.log("Mit leskelődöl? Margithíd kepű!");

const root = "/src/pictures/honlap_kepek/DB/";
const listOfYears = document.getElementsByClassName("db-year");
const listOfPicks = document.getElementsByClassName("DB-pic");
const listOfTexts = document.getElementsByClassName("DB-description");
const listOfDB = document.getElementsByClassName("DB");
const listOfTextTest = [];
for (let i = 0; i < listOfDB.length; i++) {
    listOfTextTest[i] = listOfDB[i].getElementsByClassName("DB-description")
}


function getCurrentIndex() {
    for (let i = 0; i < (listOfYears.length - 1); i++) {
        if (listOfYears[i].id === "active-db") {
            return i;
        }
    }
    return -1;
}

let path = root + listOfYears[getCurrentIndex()].dataset.year + "/";

console.log("Your test data is: " + listOfTextTest.length);
alert("Your test data is: " + listOfTextTest.length);

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
    console.log(path);
    for (let i = 0; i < (listOfPicks.length - 1); i++) {
        listOfPicks[i].src = path + listOfPicks[i].dataset.name;
        console.log(listOfPicks[i].src);
    }

    console.log("You've clicked: " + nextIndex);
    console.log(listOfPicks[2].src);

}

function rolfcopter() {
    alert("Oarr noarr!");
    alert("You've just clicked the wrong button! Now the ROLF Copter is coming to catch you!");
    setPath(listOfYears.length - 1)
    listOfPicks[0].src = path + "Roflcopter.gif";
    console.log(listOfPicks[0].src);
    document.getElementsByClassName("DB").display = "none";

}