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
    for (let i = 0; i < (listOfYears.length); i++) {
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
    console.log("Setting the index to: " + nextIndex);
}

function setPath(nextIndex) {
    path = root + listOfYears[nextIndex].dataset.year + "/";
    console.log("Setting the year to: " + listOfYears[nextIndex].dataset.year);
}

function changeYearTo(nextIndex) {
    setCurrentIndex(getCurrentIndex(), nextIndex);
    setPath(nextIndex);
    console.log(path);
    console.log("Number of changing pictures: " + listOfPicks.length);
    for (let i = 0; i < (listOfPicks.length); i++) {
        listOfPicks[i].src = path + listOfPicks[i].dataset.name;
        console.log(listOfPicks[i].src);
    }
    console.log("Number of available descriptions: " + listOfTextTest.length);
    listOfTextTest.forEach(member => {
        member.getElementsByClassName(listOfYears[nextIndex].dataset.year);
    });
}

function rolfcopter() {
    alert("Oarr noarr!");
    alert("You've just clicked the wrong button! Now the ROLF Copter is coming to catch you!");
    setPath(listOfYears.length - 1);
    listOfPicks[0].src = path + "Roflcopter.gif";
    console.log(listOfPicks[0].src);
    document.getElementsByClassName("DB").display = "none";

}