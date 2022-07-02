const headerLogo = document.querySelector('.header-logo');
const contentLogo = document.querySelector('.content-logo');



headerLogo.addEventListener('mousemove', (e)=>{
    let axisY = (((window.innerHeight / 2) - e.pageY) / 20) * -1;
    let axisX = (((window.innerWidth / 2) - e.pageX) / 20) * -1 ;
   // contentLogo.style.transform = `rotateY(${axisY}deg) rotateX(${axisX}deg)`;
});

headerLogo.addEventListener('mouseenter', (e) =>{
    contentLogo.style.transition = 'none';

});

headerLogo.addEventListener('mouseleave', (e) =>{
    contentLogo.style.transition = 'all 0.5s ease';
    contentLogo.style.transform = `rotateY(0deg) rotateX(0deg)`;

});