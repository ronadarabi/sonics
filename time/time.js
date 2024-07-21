/* Time Display */
// create a function to update the date and time
function time() {
    // Create date object
    const time = new Date();
    // Convert to string 
    const currentDateTime = time.toDateString() + ' ' + time.toLocaleTimeString('en-GB');
    // Update the HTML to reflect time 
    document.querySelector('#time').textContent = currentDateTime;
}
// Update time every second
setInterval(time, 1000);


/* Set the scale */
function convertDayOfWeek(date){
    let dict = {};
    Object.assign(dict,{'Sun':'C', 'Mon':'D', 'Tue':'E', 'Wed':'F', 'Thu':'G', 'Fri':'A', 'Sat':'B'});
    const dayOfWeek = date.toDateString().slice(0,3);
    return dict[dayOfWeek];

}

/* Returns dictionary of digit->note conversions based on scale */
function map(scale) { 
    let C = {0:'C',1:'D',2:'E',3:'F',4:'G',5:'A',6:'B',7:'C',8:'D',9:'E'};
    let D = {0:'D',1:'E',2:'F#',3:'G',4:'A',5:'B',6:'C',7:'D',8:'E',9:'F#'};
    let E = {0:'E',1:'F#',2:'G#',3:'A',4:'B',5:'C#',6:'D',7:'E',8:'F#',9:'G#'};
    let F = {0:'F',1:'G',2:'A',3:'Bb',4:'C',5:'D',6:'E',7:'F',8:'G',9:'A'};
    let G = {0:'G',1:'A',2:'B',3:'C',4:'D',5:'E',6:'F#',7:'G',8:'A',9:'B'};
    let A = {0:'A',1:'B',2:'C#',3:'D',4:'E',5:'F#',6:'G#',7:'A',8:'B',9:'C#'};
    let B = {0:'B',1:'C#',2:'D#',3:'E',4:'F#',5:'G#',6:'A#',7:'B',8:'C#',9:'D#'};
    let dict = {};
    Object.assign(dict, {'A':A,'B':B,'C':C,'D':D,'E':E,'F':F,'G':G});
    return dict[scale];
}

/* Convert date string to notes: date for bass, time for melody */
function getBassNotes() { 
    
    return notes; 
}



function playBass() { 
    const dateStr = new Date(); 
    let dict = map(convertDayOfWeek(dateStr));
    let bassNotes = []; 
    let num = dateStr.toLocaleString('en-GB').slice(0,10).replaceAll('/','');
    for (let i = 0; i < num.length; i++) { 
        bassNotes.push(dict[num[i]] + '2');
    }
    var synth = new Tone.Synth().toDestination();
    var pattern = new Tone.Pattern(function(time,note){ 
        synth.triggerAttackRelease(note,'4n',time);
        //console.log(note, '(bass)');
        console.log(bassNotes);
    }, bassNotes).start(0);
    Tone.Transport.bpm.value = 240; 
    synth.volume.value = 0;
    Tone.Transport.start('+0.1');
}

function convertASCII() { 
    let date = new Date().toString();
    let dict = {};
    Object.assign(dict, {'M':'77', 'T':'84', 'W':'87','F':'70','S':'83'});
    return dict[date[0]];
}

function playMelody(dateStr) { 
    //const dateStr = new Date(); 
    let dict = map(convertDayOfWeek(dateStr));
    let melodyNotes = []; 
    let num = convertASCII() + dateStr.toLocaleString('en-GB').slice(12,24).replaceAll(':','');
    for (let i = 0; i < num.length; i++) { 
        melodyNotes.push(dict[num[i]] + '4');
    }
    var synth = new Tone.Synth().toDestination();
    var pattern = new Tone.Pattern(function(time,note){ 
        synth.triggerAttackRelease(note,'8n',time);
        console.log(melodyNotes);
    }, melodyNotes).start(0);
    Tone.Transport.bpm.value = 240; 
    synth.volume.value = -15;
    Tone.Transport.start('+0.1');
}

function stop() { 
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
}

/* Play/Stop Button */
var interval;
document.getElementById('stop-play').addEventListener('click', function() { 
    var timer = null;
    if (this.textContent=='▶'){ 
        this.textContent = '◼';
        interval = setInterval(function() { 
            stop();
            playBass(); 
            playMelody(new Date());
            console.log(new Date());
            
        }, 2000);
        console.log('playing');
    } 
    else if (this.textContent=='◼'){ 
        this.textContent = '▶'; 
        stop();
        clearInterval(interval);
        interval = null;
        console.log('stopped');
    }

})

