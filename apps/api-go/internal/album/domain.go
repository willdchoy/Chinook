package album

import "database/sql"

type AlbumId int

type Album struct {
  Title    string          `json:"title"`
  Id  int                  `json:"id"`
  ArtistId int             `json:"artistId"`
  CoverUrl *sql.NullString `json:"coverUrl"`
  Year     int             `json:"year"`
}

type Track struct {   
  Id           int    `json:"id"`
  Name         string `json:"name"`
  Year         int    `json:"year"`
  AlbumId      int    `json:"albumId"`
  MediaTypeId  int    `json:"mediatypeId"`
  GenreId      int    `json:"genreId"`
  Composer     string `json:"composer"`
  Milliseconds int    `json:"milliseconds"`
  Bytes        int    `json:"bytes"`
}

type Artist struct {
  Id       int    `json:"id"`
  Name     string `json:"name"`
}

type Genre struct {
  Id      int    `json:"id"`
  Name    string `json:"name"`
}

type PlaylistTrack struct {
  PlaylistId int    `json:"playlistId"`
  TrackId    string `json:"trackdId"`
}

type Playlist struct {
  Id int    `json:"id"`
  Name       string `json:"name"`
}
