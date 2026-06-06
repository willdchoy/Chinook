package playlist

type PlaylistId int

type PlaylistTrack struct {
  PlaylistId PlaylistId `json:"playlistId"`
  TrackId    string     `json:"trackdId"`
  Year       int        `json:"year"`
}

type Playlist struct {
  Id   PlaylistId `json:"id"`
  Name   string     `json:"name"`
  Year   int        `json:"year"`
}
