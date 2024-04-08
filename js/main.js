// Set Intervals For Welcome
const holderImg = document.querySelector('.holder img');
const wordsHolder = document.querySelector('.welcome h2 span');
let imgIndex = 1;
const lang = document.body.lang

let words = ['health','days','lives'];
if (lang == 'ar') {
    words = ['صحة','أيام','حياة']
} 

setInterval(() => {
    changeWelcomeImg();
    changeWelcomeWord()
}, 2000);

// Loop On Sections
window.onscroll = function () {
    document.querySelectorAll('section').forEach(e => {
            if (scrollY >= e.offsetTop - 900) {
                e.classList.add('fade-up')
            } else {
                e.classList.remove('fade-up')
            }
    });
}



document.addEventListener('mousemove',(e) => {
    document.querySelector('.mouse .small').style.transform  = `translate(${e.clientX}px,${e.clientY}px)`
    document.querySelector('.mouse .big').style.transform  = `translate(${e.clientX - 20}px,${e.clientY - 20}px)`
    // console.log(document.querySelector('.mouse .small'));
})

function changeWelcomeImg() {
    holderImg.style.opacity = '0';
    setTimeout(() => {
        if (imgIndex <= 3) {
            if (lang == 'en') {
                if (imgIndex == 1) {
                    holderImg.src = `imgs/welcome-2.jpeg`;
                } else if(imgIndex == 2) {
                    holderImg.src = `imgs/welcome-3.jpeg`;
                }  else if(imgIndex == 3) {
                    holderImg.src = `imgs/welcome-1.jpeg`;
                } 
            } else {
                if (imgIndex == 1) {
                    holderImg.src = `../imgs/welcome-2.jpeg`;
                } else if(imgIndex == 2) {
                    holderImg.src = `../imgs/welcome-3.jpeg`;
                }  else if(imgIndex == 3) {
                    holderImg.src = `../imgs/welcome-1.jpeg`;
                } 
            }
            imgIndex++
        } else {
            if (lang == 'en') {
                holderImg.src = `imgs/welcome-1.jpeg`
            } else {
                holderImg.src = `../imgs/welcome-1.jpeg`
            }
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

