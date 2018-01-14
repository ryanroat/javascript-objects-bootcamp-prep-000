var playlist = new Object ();

playlist["Bruce Springsteen"] = "Born in the USA";

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  
  return list;
}

function removeFromPlaylist(list, artist) {
  delete list.artist;
  
  return list;
}