var playlist = { 
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist(playlist, artistname, songTitle) {
  return Object.assign({}, playlist, { ['Phil Ochs']: "Here's to the State of Mississippi"})
}