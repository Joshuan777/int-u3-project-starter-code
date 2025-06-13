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
let mPage = document.querySelector('.mPage')
let M1 = document.querySelector('.M1')
let M2 = document.querySelector('.M2')
let M3 = document.querySelector('.M3')
let M4 = document.querySelector('.M4')
let M5 = document.querySelector('.M5')
let M6 = document.querySelector('.M6')
let M7 = document.querySelector('.M7')
let nPage = document.querySelector('.nPage')
let choose = document.querySelector('.choose')

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
    choose.style.display='none';
    ePage.style.display='block';
});

mbutton.addEventListener('click', function(){
    starter.style.display='none';
    win.style.display='none';
    lose.style.display='none';
    ePage.style.display='none';
    choose.style.display='none';
    mPage.style.display='block';
})

P1.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='lose';
});

P2.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

P3.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    lose.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    win.style.display='block';
});

P4.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

P5.addEventListener('click', function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
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

M1.addEventListener('mouseover',function(){
    M1.style.fontSize = '45px';
    M1.style.color = 'red';
    M1.style.borderColor='red';
});

M1.addEventListener('mouseout',function(){
    M1.style.fontSize = '35px';
    M1.style.color= 'white';
    M1.style.borderColor= 'white';
});

M2.addEventListener('mouseover',function(){
    M2.style.fontSize = '45px';
    M2.style.color = 'red';
    M2.style.borderColor='red';
});

M2.addEventListener('mouseout',function(){
    M2.style.fontSize = '35px';
    M2.style.color= 'white';
    M2.style.borderColor= 'white';
});

M3.addEventListener('mouseover',function(){
    M3.style.fontSize = '45px';
    M3.style.color = 'red';
    M3.style.borderColor='red';
});

M3.addEventListener('mouseout',function(){
    M3.style.fontSize = '35px';
    M3.style.color= 'white';
    M3.style.borderColor= 'white';
});

M4.addEventListener('mouseover',function(){
    M4.style.fontSize = '45px';
    M4.style.color = 'red';
    M4.style.borderColor='red';
});

M4.addEventListener('mouseout',function(){
    M4.style.fontSize = '35px';
    M4.style.color= 'white';
    M4.style.borderColor= 'white';
});

M5.addEventListener('mouseover',function(){
    M5.style.fontSize = '45px';
    M5.style.color = 'red';
    M5.style.borderColor='red';
});

M5.addEventListener('mouseout',function(){
    M5.style.fontSize = '35px';
    M5.style.color= 'white';
    M5.style.borderColor= 'white';
});

M6.addEventListener('mouseover',function(){
    M6.style.fontSize = '45px';
    M6.style.color = 'red';
    M6.style.borderColor='red';
});

M6.addEventListener('mouseout',function(){
    M6.style.fontSize = '35px';
    M6.style.color= 'white';
    M6.style.borderColor= 'white';
});

M7.addEventListener('mouseover',function(){
    M7.style.fontSize = '45px';
    M7.style.color = 'red';
    M7.style.borderColor='red';
});

M7.addEventListener('mouseout',function(){
    M7.style.fontSize = '35px';
    M7.style.color= 'white';
    M7.style.borderColor= 'white';
});

nPage.addEventListener('mouseover',function(){
    nPage.style.fontSize = '45px';
    nPage.style.color = 'red';
    nPage.style.borderColor='red';
});

nPage.addEventListener('mouseout',function(){
    nPage.style.fontSize = '35px';
    nPage.style.color= 'white';
    nPage.style.borderColor= 'white';
});

M1.addEventListener('click', function(){
    M1.style.backgroundColor='red';
});

M2.addEventListener('click', function(){
    M2.style.backgroundColor='red';
});

M3.addEventListener('click', function(){
    M3.style.backgroundColor='red';
});

M4.addEventListener('click', function(){
    M4.style.backgroundColor='red';
});

M5.addEventListener('click', function(){
    M5.style.backgroundColor='red';
});

M6.addEventListener('click', function(){
    M6.style.backgroundColor='red';
});

M7.addEventListener('click', function(){
    M7.style.backgroundColor='red';
});

M1.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

M2.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

M3.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

M4.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

M5.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});

M6.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='block';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='none';
});

M7.addEventListener('click',function(){
    starter.style.display='none';
    ePage.style.display='none';
    win.style.display='none';
    mPage.style.display='none';
    choose.style.display='none';
    lose.style.display='block';
});