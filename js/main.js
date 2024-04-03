// Set Intervals For Welcome
const holderImg = document.querySelector('.holder img');
const words = ['health','days','lives'];
const wordsHolder = document.querySelector('.welcome h2 span');
let imgIndex = 1;

setInterval(() => {
    changeWelcomeImg();
    changeWelcomeWord()
}, 2000);

function changeWelcomeImg() {
    holderImg.style.opacity = '0';
    setTimeout(() => {
        if (imgIndex <= 3) {
            if (imgIndex == 1) {
                holderImg.src = `imgs/welcome-2.jpeg`;
            } else if(imgIndex == 2) {
                holderImg.src = `imgs/welcome-3.jpeg`;
            }  else if(imgIndex == 3) {
                holderImg.src = `imgs/welcome-1.jpeg`;
            } 
            imgIndex++
        } else {
            holderImg.src = `imgs/welcome-1.jpeg`
            imgIndex = 1;
        }
        holderImg.style.opacity = '1';
    }, 400);
}

function changeWelcomeWord() {
    wordsHolder.style.transform = 'translateY(40px)';
    setTimeout(() => {
        if (words[words.indexOf(wordsHolder.textContent) + 1] != undefined) {
            wordsHolder.innerHTML = words[words.indexOf(wordsHolder.textContent) + 1]
        } else {
            wordsHolder.innerHTML = words[0];
        }
        wordsHolder.style.transform = 'translateY(0px)';
    }, 300);
}

