package album

import "database/sql"

type AlbumId int

type Album struct {
  Title    string         `json:"title"`
  AlbumId  int            `json:"albumid"`
  ArtistId int            `json:"artistid"`
  CoverUrl sql.NullString `json:"coverurl"`
}