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
- [ ] Update /albums to json format
- [ ] create multistage prod build
- [ ] setup obsvr for sys, log, err, and gin logs
- [x] add live reload via air (https://github.com/air-verse/air)
- [x] seed db
- [x] serve from docker container
- [x] add api design patterns (https://gin-gonic.com/en/docs/routing/api-design/)

<!--
  Routes

	/albums
	/album                                                           (301) -> /albums
	/album/{playlistId}                                              (301) -> /album/{playlistId}/{artistName}/{playlistTitle}
	/album/{playlistId}/{artistName}                                 (301) -> /album/{playlistId}/{artistName}/{playlistTitle}
	/album/{playlistId}/{artistName}/{playlistTitle}
	/album/{playlistId}/{artistName}/{playlistTitle}/{trackTitle}	

	/playlists
	/playlist                                                        (301) -> /playlists
	/playlist/{playlistId}
	/playlist/{playlistId}/{trackTitle}
-->