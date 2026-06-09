package playlist

import (
	"context"
)

type PlaylistService interface {
	ListPlaylists(ctx context.Context) []Playlist
	GetById(ctx context.Context, albumId PlaylistId) Playlist
}

type PlaylistServiceImpl struct {
	repo PlaylistRepository
}

func NewPlaylistService(repo PlaylistRepository) PlaylistService {
	return &PlaylistServiceImpl{repo: repo}
}

func (s *PlaylistServiceImpl) ListPlaylists(ctx context.Context) []Playlist {
	return s.repo.ListPlaylists(ctx)
}

func (s *PlaylistServiceImpl) GetById(ctx context.Context, albumId PlaylistId) Playlist {
	return s.repo.GetById(ctx, albumId)
}
