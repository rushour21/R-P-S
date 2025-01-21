let con = document.querySelectorAll('.con');
let comp = document.querySelectorAll('.comp');
let random = Math.floor(Math.random()*3);
let triangle = document.querySelector('.triangle');
let info = document.querySelector('.info');
let user = document.querySelector('.user');
let pc = document.querySelector('.pc');
let win = document.querySelector('.window1');
let lose = document.querySelector('.window2');
let tie = document.querySelector('.window3');
let play = document.querySelectorAll('.play');
let score = JSON.parse(localStorage.getItem('sco')) || 0;
let score1 = JSON.parse(localStorage.getItem('sco1')) || 0;
let userscore = document.getElementById('user-score');
let pcscore = document.getElementById('pc-score');
let next = document.querySelector('.next');

userscore.innerText = score;
pcscore.innerText = score1;

con.forEach((element, index) => {
    element.addEventListener('click', () => {
        triangle.style.display = 'none';
        con.forEach(element => {
            element.style.display = 'none';
        })
        element.style.display = 'block';
        element.classList.add('show');
        info.classList.add('info1');
        setTimeout(() => {
            user.style.opacity = '1'
            comp[random].style.display = 'block';
            comp[random].classList.add('right');
        },1000);
        setTimeout(() =>{
            if (random === index) {
                tie.style.display = 'block';
            } else if (
                (index === 2 && random === 0) || // Rock beats Scissors
                (index === 0 && random === 1) || // Paper beats Rock
                (index === 1 && random === 2)    // Scissors beats Paper
            ) {
                win.style.display = 'block';
                score++;
                userscore.innerText=score;
                localStorage.setItem('sco',JSON.stringify(score));
                next.style.display = 'block';
            } 
            else {
                lose.style.display = 'block';
                score1++;
                pcscore.innerText=score1;
                localStorage.setItem('sco1',JSON.stringify(score1));
            }
        },1500)
    });
})
    
play.forEach(button => {
        button.addEventListener('click', () => {
            window.location.reload();
        });
});

document.querySelector('.btn-r').addEventListener('click', () =>{
    document.querySelectorAll('.rule').forEach(rule => {rule.style.display = 'block'});
})
document.querySelector('.close-icon').addEventListener('click', () =>{
    document.querySelectorAll('.rule').forEach(rule => {rule.style.display = 'none'})
})
next.addEventListener('click', () => {
    document.querySelector('.all').style.display = 'none';
    document.querySelector('.hurray').style.display = 'block';
    document.querySelector('.next').style.display = 'none';
})
