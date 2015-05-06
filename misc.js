function jsQuadraticCurveTo(ctx, cpx, cpy, x, y) {
    ctx.quadraticCurveTo(cpx, cpy, x, y);
}

// https://github.com/mudcube/MIDI.js/blob/master/js/midi/loader.js
function jsMidiLoadPlugin(){
    MIDI.loadPlugin({
	soundfontUrl: "http://www.caseyrule.com/projects/midi/soundfonts/FluidR3_GM/",
	instrument  : "acoustic_grand_piano",
	onsuccess   : function() { }
	});
}

// https://github.com/mudcube/MIDI.js/blob/master/js/midi/plugin.webmidi.js
function jsMidiNoteOn(channel, note, velocity, delay) {
    MIDI.noteOn(channel, note, velocity, delay);
}    
function jsMidiNoteOff(channel, note, delay) {
    MIDI.noteOff(channel, note, delay);
}    
