const root = "/src/pictures/szaknap/";
const listOfYears = document.getElementsByClassName("szaknap-year");
const listOfPresentations = document.getElementsByClassName("szaknap-presentation");

function getCurrentIndex() {
    for (let i = 0; i < (listOfYears.length); i++) {
        if (listOfYears[i].id === "active-szaknap") {
            return i;
        }
    }
    return -1;
}

function setCurrentIndex(currentIndex, nextIndex) {
    if (currentIndex !== -1) {
        listOfYears[currentIndex].id = "";
    }
    listOfYears[nextIndex].id = "active-szaknap";
}

function changeYearTo(nextIndex) {
    setCurrentIndex(getCurrentIndex(), nextIndex);

    let currentPresentations = document.getElementsByClassName(listOfYears[nextIndex].dataset.year);
    for (let i = 0; i < (listOfPresentations.length); i++) {
        listOfPresentations[i].style.display = "none";
    }
    for (let i = 0; i < (currentPresentations.length); i++) {
        currentPresentations[i].style.display = "";
    }

    // Update the date in the title based on the selected year
    const dateElement = document.getElementById("szaknap-date");
    if (dateElement) {
        if (listOfYears[nextIndex].dataset.year === "2425") {
            dateElement.innerText = "2025.04.06.";
        } else if (listOfYears[nextIndex].dataset.year === "2526") {
            dateElement.innerText = "2026";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (listOfYears.length > 0) {
        // Find which is active by default, or just set 0
        let activeIdx = 0;
        for (let i = 0; i < listOfYears.length; i++) {
            if (listOfYears[i].id === "active-szaknap") {
                activeIdx = i;
                break;
            }
        }
        changeYearTo(activeIdx);
    }
});