const soundPlay = (e)=>{
    let box = document.querySelector(`div[data-value='${e.keyCode}']`);
    let audio = document.querySelector(`audio[data-value='${e.keyCode}']`);

    if(audio){
        box.classList.add('active');
        audio.play();
        audio.currentTime = 0;
    }
}
const rmv = (e)=>{
    if(e.propertyName === 'background-color'){
        e.target.classList.remove('active');
    }
}

let divBox = Array.from(document.getElementsByClassName('box'));

divBox.forEach(key=>{
    key.addEventListener('transitionend',rmv);
})
window.addEventListener('keydown',soundPlay);

let audio = Array.from(document.getElementsByTagName('audio'));
divBox.forEach((key,i)=>{
    key.addEventListener('click',()=>{
        key.classList.add('active');
        audio[i].play();
        audio[i].currentTime = 0;
    })
})
