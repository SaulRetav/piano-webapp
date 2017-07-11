var pianoNotes = {
    Tab: 'C',
    Digit1: 'C#',
    KeyQ: 'D',
    Digit2: 'D#',
    KeyW: 'E',
    KeyE: 'F',
    Digit4: 'F#',
    KeyR: 'G',
    Digit5: 'G#',
    KeyT: 'A',
    Digit6: 'A#',
    KeyY: 'B',
    KeyU: 'C1',
    Digit8: 'C#1',
    KeyI: 'D1',
    Digit9: 'D#1',
    KeyO: 'E1',
    KeyP: 'F1',
    Minus: 'F#1',
    BracketLeft: 'G1',
    Equal: 'G#1',
    BracketRight: 'A1',
    Backspace: 'A#1',
    Backslash: 'B1',
    ShiftLeft: 'C2',
    KeyA: 'C#2',
    KeyZ: 'D2',
    KeyS: 'D#2',
    KeyX: 'E2',
    KeyC: 'F2',
    KeyF: 'F#2',
    KeyV: 'G2',
    KeyG: 'G#2',
    KeyB: 'A2',
    KeyH: 'A#2',
    KeyN: 'B2',
    KeyM: 'C3',
    KeyK: 'C#3',
    Comma: 'D3',
    KeyL: 'D#3',
    Period: 'E3',
    Slash: 'F3',
    Quote: 'F#3',
    ShiftRight: 'G3',
    Enter: 'G#3',
    ArrowLeft: 'A3',
    ArrowUp: 'A#3',
    ArrowDown: 'B3',
    ArrowRight: 'C4'
};

var handlers = {
    playNote: function(key){
        if(key.repeat === false){
            for(var i in pianoNotes){
                if(key.code === i){
                    key.preventDefault();
                    document.getElementById(pianoNotes[i]).cloneNode(true).play();
                }
            }
        }
    }
};

var view = {
    displayNote: function(key){
        for(var i in pianoNotes){
            if(key.code === i){
                key.preventDefault();
                var divClasses = document.getElementById(i).getAttribute("class");
                var mainDivClass = divClasses.slice(0, 5);
                document.getElementById(i).style.color = 'red';
                if(mainDivClass === 'whKey'){
                    document.getElementById(i).style.backgroundColor = 'lightGray';
                } else{
                    document.getElementById(i).style.backgroundColor = 'darkGray';
                }
            }
        }
    },
    displayDefault: function(key){
        for(var i in pianoNotes){
            if(key.code === i){
                key.preventDefault();
                var divClasses = document.getElementById(i).getAttribute("class");
                var mainDivClass = divClasses.slice(0, 5);
                if(mainDivClass === 'whKey'){
                    document.getElementById(i).style.color = 'black';
                    document.getElementById(i).style.backgroundColor = 'white';
                } else{
                    document.getElementById(i).style.color = 'white';
                    document.getElementById(i).style.backgroundColor = 'black'
                }
            }
        }
    }
};

document.addEventListener("keydown", handlers.playNote);
document.addEventListener("keydown", view.displayNote);
document.addEventListener("keyup", view.displayDefault);