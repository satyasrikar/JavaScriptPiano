// document.getElementById('btn-sine').addEventListener('click', sine() {
//     $(this).css("color","green");
// })


var synth = new Tone.PolySynth().toDestination();
        var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        var html = "";
        for (var octave = 0; octave < 2; octave++) {
            for (var i = 0; i < notes.length; i++) {
                var sharp = true;
                var note = notes[i];

                if (note == 'E' || note == 'B') {
                    sharp = false;
                }

                html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this, false)' onmouseleave='noteUp(this, false)' data-note='${note + (octave + 4)}'>`;

                if (sharp) {
                    html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this, true)' data-note='${note + '#' + (octave + 4)}'></div>`;
                }
                html += '</div>';
            }

        }
        document.getElementById('container').innerHTML = html;

        function noteUp(elem, isSharp) {
            if (isSharp) {
                elem.style.background = '#777';
            }
            else {
                elem.style.background = 'white';

            }
        }
        function noteDown(elem, isSharp) {
            var note = elem.dataset.note;
            if (isSharp) {
                elem.style.background = 'black';
            }
            else {
                elem.style.background = '#ccc';

            }
            synth.triggerAttackRelease(note, "16n");
            event.stopPropagation();
        }