const a = document.querySelector('.key-a');
const d = document.querySelector('.key-d');
const g = document.querySelector('.key-g');
const j = document.querySelector('.key-j');
const l = document.querySelector('.key-l');

    // button A 
function playSoundA(){
    document.querySelector('.soundA').play();

    const sound = document.querySelector(".soundA");
    const sound2 = sound.cloneNode();
    sound.play();
    sound2.play();
    
    a.style.opacity = '0.9';
}
document.addEventListener('keydown', (event)=> {    
    if(event.key === 'a'){
        playSoundA();
    }
});
document.addEventListener('keyup', (event)=> {    
    if(event.key === 'a'){
        a.style.opacity = '1';
        
    }
});
    // button D
function playSoundD(){
    document.querySelector('.soundD').play();

    const sound = document.querySelector(".soundD");
    const sound2 = sound.cloneNode();
    sound.play();
    sound2.play();
    
    d.style.opacity = '0.9';
}
document.addEventListener('keydown', (event)=> {    
    if(event.key === 'd'){
        playSoundD();
    }
});
document.addEventListener('keyup', (event)=> {    
    if(event.key === 'd'){
        d.style.opacity = '1';
        
    }
});
    // button G
function playSoundG(){
    document.querySelector('.soundG').play();

    const sound = document.querySelector(".soundG");
    const sound2 = sound.cloneNode();
    sound.play();
    sound2.play();
    
    g.style.opacity = '0.9';
}
document.addEventListener('keydown', (event)=> {    
    if(event.key === 'g'){
        playSoundG();
    }
});
document.addEventListener('keyup', (event)=> {    
    if(event.key === 'g'){
        g.style.opacity = '1';
        
    }
});
    // button J
function playSoundJ(){
    document.querySelector('.soundJ').play();

    const sound = document.querySelector(".soundJ");
    const sound2 = sound.cloneNode();
    sound.play();
    sound2.play();
    
    j.style.opacity = '0.9';
}
document.addEventListener('keydown', (event)=> {    
    if(event.key === 'j'){
        playSoundJ();
    }
});
document.addEventListener('keyup', (event)=> {    
    if(event.key === 'j'){
        j.style.opacity = '1';
        
    }
});
    // button L
function playSoundL(){
    document.querySelector('.soundL').play();

    const sound = document.querySelector(".soundL");
    const sound2 = sound.cloneNode();
    sound.play();
    sound2.play();
    
    l.style.opacity = '0.9';
}
document.addEventListener('keydown', (event)=> {    
    if(event.key === 'l'){
        playSoundL();
    }
});
document.addEventListener('keyup', (event)=> {    
    if(event.key === 'l'){
        l.style.opacity = '1';
        
    }
});
    
    