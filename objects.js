var playlist = { 
  Slowdive: 'Alison',
  MyBloodyValentine: 'Sometimes'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { ["Phil Ochs"]: "Here's to the State of Mississippi"})
}