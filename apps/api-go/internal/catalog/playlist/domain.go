package playlist

type Title string
type Year int

type TrackId int
type Tracks []Track
type Track struct {
	Id           TrackId `json:"id"`
	Title        Title  `json:"title"`
	Composer     string  `json:"composer"`
	Duration     int     `json:"duration"`
	Bytes        int     `json:"bytes"`
}

type Artist struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Genre struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type PlaylistTrack struct {
	PlaylistId PlaylistId `json:"playlistId"`
	TrackId    TrackId    `json:"trackdId"`
}

type PlaylistId int
type Playlists = []Playlist
type Playlist struct {
	Title         Title      `json:"title"`
	Id            PlaylistId `json:"id"`
	CoverImageUrl string     `json:"coverUrl"`
	Year          Year       `json:"year"`
	Artist        Artist     `json:"artist"`
	IsPublic      bool       `jston:"isPublic"`
	IsAlbum       bool       `jston:"isAlbum"`
	Tracks        Tracks     `json:"tracks"`
}
