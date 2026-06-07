package album

import (
	"context"
)

type AlbumService interface {
	ListAlbums(ctx context.Context) []Album
	GetById(ctx context.Context, albumId AlbumId) Album
}

type AlbumServiceImpl struct {
	repo AlbumRepository
}

func NewAlbumService(repo AlbumRepository) AlbumService {
	return &AlbumServiceImpl{repo: repo}
}

func (s *AlbumServiceImpl) ListAlbums(ctx context.Context) []Album {
	return s.repo.ListAlbums(ctx)
}

func (s *AlbumServiceImpl) GetById(ctx context.Context, albumId AlbumId) Album {
	return s.repo.GetById(ctx, albumId)
}
