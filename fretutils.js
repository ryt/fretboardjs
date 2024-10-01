

function note_list_generate(start_note, total_notes) {
  // -- Generate a list of notes starting at <start_note> and ending after # of <total_notes> (similar to a guitar fretboard). -- //

  var notes_sharps = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
  var notes_flats  = [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B' ];

  var notes = notes_sharps;
  var oct_count = 4;

  var oct_notes = [];
  for ( i = 0; i < oct_count; i++ ) {
    notes.forEach(function(v, j) {
      oct_notes.push({
        'note'      : v + '' + i,
        'note_raw'  : v
      });
    });
  }


  var final_notes = [];
  var start_point = false;
  var start_num = 0;

  oct_notes.forEach(function(v, i){
    if ( v.note == start_note ) {
      start_point = true;
    }
    if ( start_point && start_num < total_notes ) {
      final_notes.push(v);
      start_num++;
    }
  });

  return final_notes;

}



function standard_guitar_strings(total_notes) {
  // -- Create a dictionary of notes for guitar with standard tuning. -- //

  var guitar = {
    's1' : note_list_generate('E0', total_notes),
    's2' : note_list_generate('B0', total_notes),
    's3' : note_list_generate('G0', total_notes),
    's4' : note_list_generate('D0', total_notes),
    's5' : note_list_generate('A0', total_notes),
    's6' : note_list_generate('E0', total_notes),
  };
  
  return guitar;

}




