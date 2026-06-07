#### DB
- [ ] add indexes
- [ ] research transactions for content
- [x] reseach db schemas
- [x] install postgres and alloy

#### INFR

- [x] Add health checks to containers

#### UI

- [ ] handle auth
- [ ] color scheme, fonts, images, etc.

#### OBSVR

- [x] setup alloy on each new server
- [x] create distint name/service

#### CLI

- [ ] update pathing for chinook command

#### API

- [ ] add live reload via air (https://github.com/air-verse/air)
- [ ] create multistage prod build
- [ ] setup obsvr for sys, log, err, and gin logs
- [x] seed db
- [x] serve from docker container
- [x] add api design patterns (https://gin-gonic.com/en/docs/routing/api-design/)

/playist ------- GET playlists
/playlist/:id -- GET playlist by id

```
select * from playlist as pl
join playlisttrack as plt
on plt.playlistid = pl.playlistid
join track
on track.trackid = plt.trackid
join album
on album.albumid = track.albumid
join artist
on artist.artistid = album.artistid
join genre
on track.genreid = genre.genreid
where pl.playlistid = 1
```

/albums -------- GET albums
/albums/:id ---- GET album by id

```
select * from album
join track
on track.albumid = album.albumid
join artist
on artist.artistid = album.artistid
join genre
on track.genreid = genre.genreid
where album.albumid = 1
```

/track/:id ----- GET track by id

```
select * from track
join album
on album.albumid = track.albumid
join artist
on artist.artistid = album.artistid
join genre
on track.genreid = genre.genreid
where track.trackid = 1
```
