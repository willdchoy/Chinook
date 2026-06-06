package album

import "database/sql"

type AlbumId int
type Albums []Album
type Album struct {
  Title      string          `json:"title"`
  Id         AlbumId         `json:"id"`
  CoverUrl   *sql.NullString `json:"coverUrl"`
  Year       int             `json:"year"`
  Artist     Artist          `json:"artist"`
  Tracks     Tracks          `json:"tracks"`
}

type Tracks []Track
type Track struct {   
  Id           int    `json:"id"`
  Name         string `json:"name"`
  Year         int    `json:"year"`
  Composer     string `json:"composer"`
  Milliseconds int    `json:"milliseconds"`
  Bytes        int    `json:"bytes"`
  Album        Album  `json:"album"`
  Artist       Artist `json:"artist"`
  Genre        Genre  `json:"genre"`
}

type Artist struct {
  Id       int    `json:"id"`
  Name     string `json:"name"`
}

type Genre struct {
  Id      int    `json:"id"`
  Name    string `json:"name"`
}


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

