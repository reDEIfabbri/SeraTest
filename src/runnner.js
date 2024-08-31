const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
    }
});

alert("Felkészültél a mókára?");

rock.classList.add('speed1');
setInterval(() => {
    score.innerText++;

    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    console.log(dinoTop);
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    console.log(rockLeft);
    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
        alert("A pontszámod: " + score.innerText + "\n\nSzeretnél még jácccani kérdőjel");
        location.reload();
    }

    if (score.innerText == 200) {
        alert("Ez látszólag megy neked... \n Fokozzuk hát a sebességet!");
        rock.classList.remove('speed1');
        rock.style.left = "550px";
        rock.classList.add('speed2');
    }
    if (score.innerText == 500) {
        alert("Úgy látom, hogy bírod a tempót... \n Adok neki egy kis kakaót!");
        rock.classList.remove('speed2');
        rock.style.left = "550px";
        rock.classList.add('speed3');
    }

}, 50);