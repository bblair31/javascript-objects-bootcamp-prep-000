var playlist = { 
      artistName: "songTitle",
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { ["Phil Ochs" ]: "Here's to the State of Mississippi"})
  return playlist
}