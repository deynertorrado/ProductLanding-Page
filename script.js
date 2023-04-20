const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const header = document.querySelector('#header');
const sectionContainer = document.querySelector('.section');
const sectionTitle = document.querySelector('.section__title')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const card3 = document.querySelector('.card-3')


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#ffffff';
        container.style.background = '#ffffff'
        header.style.background = '#ffffff'
        sectionContainer.style.background = '#ffffff';
        container.style.color = '#313131'
        header.style.color = '#313131'
        sectionContainer.style.color = '#313131';
        sectionTitle.style.color = '#313131'
        card1.style.background = '#fbfcfc'
        card2.style.background = '#fbfcfc'
        card3.style.background = '#fbfcfc'
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = '#414141';
        container.style.background = '#313131'
        header.style.background = '#313131'
        sectionContainer.style.background = '#313131';
        container.style.color = '#fbfcfc'
        header.style.color = '#fbfcfc'
        sectionContainer.style.color = '#fbfcfc';
        sectionTitle.style.color = '#fbfcfc'
        card1.style.background = '#313131'
        card2.style.background = '#313131'
        card3.style.background = '#313131'
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});