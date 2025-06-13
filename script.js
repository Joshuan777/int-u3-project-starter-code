let ePage = document.querySelector('.ePage')
let medium = document.querySelector(".medium")
let ebutton = document.querySelector('.ebutton')
let mbutton = document.querySelector('.mbutton')
let starter = document.querySelector('.starter')
let P1 = document.querySelector('.P1')
let P2 = document.querySelector('.P2')
let P3 = document.querySelector('.P3')
let P4 = document.querySelector('.P4')
let P5 = document.querySelector('.P5')
let win = document.querySelector('.win')
let lose = document.querySelector('.lose')
let duke = document.querySelector ('.duke')
let contessa = document.querySelector('contessa')
let mPage = document.querySelector('.mPage')

ebutton.addEventListener('mouseover', function(){
    ebutton.style.fontSize = '80px';
    ebutton.style.color = "rgb(43, 244, 43)";
    ebutton.style.borderColor = 'rgb(43, 244, 43)';
});
ebutton.addEventListener('mouseout', function(){
    ebutton.style.fontSize = '70px';
    ebutton.style.color = 'white';
    ebutton.style.borderColor = 'white';
});

mbutton.addEventListener('mouseover', function(){
    mbutton.style.fontSize = '80px';
    mbutton.style.color ='orange';
    mbutton.style.borderColor = 'orange';
});
mbutton.addEventListener('mouseout', function(){
    mbutton.style.fontSize = '70px';
    mbutton.style.color = 'white';
    mbutton.style.borderColor = 'white';
});

ebutton.addEventListener('click',function(){
    starter.style.display='none';
    win.style.display='none';
    lose.style.display='none';
    mPage.style.display='none';
    ePage.style.display='block';
});

mbutton.addEventListener('click', function(){
    starter.style.display='none';
    win.style.display='none';
    lose.style.display='none';
    ePage.style.display='none';
    mPage.style.display='block';
})

P1.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    lose.style.display='block';
});

P2.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    lose.style.display='block';
});

P3.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    lose.style.display='none';
    mPage.style.display='none';
    win.style.display='block';
});

P4.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    lose.style.display='block';
});

P5.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    lose.style.display='block';
});

P1.addEventListener('mouseover',function(){
    P1.style.fontSize = '45px';
    P1.style.color = 'red';
    P1.style.borderColor='red';
});

P1.addEventListener('mouseout',function(){
    P1.style.fontSize = '35px';
    P1.style.color= 'white';
    P1.style.borderColor= 'white';
});

P2.addEventListener('mouseover',function(){
    P2.style.fontSize = '45px';
    P2.style.color = 'red';
    P2.style.borderColor='red';
});

P2.addEventListener('mouseout',function(){
    P2.style.fontSize = '35px';
    P2.style.color= 'white';
    P2.style.borderColor= 'white';
});

P3.addEventListener('mouseover',function(){
    P3.style.fontSize = '45px';
    P3.style.color = 'red';
    P3.style.borderColor='red';
});

P3.addEventListener('mouseout',function(){
    P3.style.fontSize = '35px';
    P3.style.color= 'white';
    P3.style.borderColor= 'white';
});

P4.addEventListener('mouseover',function(){
    P4.style.fontSize = '45px';
    P4.style.color = 'red';
    P4.style.borderColor='red';
});

P4.addEventListener('mouseout',function(){
    P4.style.fontSize = '35px';
    P4.style.color= 'white';
    P4.style.borderColor= 'white';
});

P5.addEventListener('mouseover',function(){
    P5.style.fontSize = '45px';
    P5.style.color = 'red';
    P5.style.borderColor='red';
});

P5.addEventListener('mouseout',function(){
    P5.style.fontSize = '35px';
    P5.style.color= 'white';
    P5.style.borderColor= 'white';
});

duke.addEventListener('mouseover',function(){
    duke.style.height = '310';
    duke.style.width = '235';
});