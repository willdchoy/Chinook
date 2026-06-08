package album

import "database/sql"

type Tracks []Track
type Track struct {
	Id           int    `json:"id"`
	Title        string `json:"title"`
	Composer     string `json:"composer"`
	Duration     int    `json:"duration"`
	Bytes        int    `json:"bytes"`
}

type Artist struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Genre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type AlbumId int
type Albums []Album
type Album      struct {
	Id            AlbumId         `json:"id"`
	Title         string          `json:"title"`
	CoverImageUrl *sql.NullString `json:"coverUrl"`
	Year          int             `json:"year"`
	Artist        Artist          `json:"artist"`
	Tracks        Tracks          `json:"tracks"`
}

type PlaylistId int

type PlaylistTrack struct {
	PlaylistId PlaylistId `json:"playlistId"`
	TrackId    string     `json:"trackdId"`
}

type Playlist struct {
	Id   PlaylistId `json:"id"`
	Name string     `json:"name"`
	Year int        `json:"year"`
}
