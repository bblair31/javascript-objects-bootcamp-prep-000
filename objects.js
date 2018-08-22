var playlist = { [Slowdive] = 'Alison'
      playlist[My Bloody Valentine] = 'Sometimes'
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle})
  return playlist
}