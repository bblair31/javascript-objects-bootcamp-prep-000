var playlist = { 
      artistName: "songTitle",
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [ "My Bloody Valentine", "Phil Ochs", "Slowdive" ]: "Here's to the State of Mississippi"})
}