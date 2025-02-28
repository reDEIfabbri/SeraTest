const root = "/src/pictures/honlap_kepek/DB/";
const listOfYears = document.getElementsByClassName("db-listOfYears");
const listOfPicks = document.getElementsByClassName("DB-pic")

let path = root + listOfYears[getCurrentIndex()].dataset.year;

function getCurrentIndex() {
    for (let i = 0; i < (listOfYears.length - 1); i++) {
        if (listOfYears[i].id === "active-db") {
            return i;
        }
    }
    return -1;
}

function setCurrentIndex(currentIndex, nextIndex) {
    listOfYears[currentIndex].id = "";
    listOfYears[nextIndex].id = "active-db";
}

function setPath(nextIndex) {
    path = root + listOfYears[nextIndex].dataset.year;
}

function changeYearTo(nextIndex) {
    setCurrentIndex(getCurrentIndex(), nextIndex);

}