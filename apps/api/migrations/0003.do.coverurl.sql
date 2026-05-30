ALTER TABLE album ADD COLUMN coverurl VARCHAR(250);

UPDATE album SET coverurl = 'https://upload.wikimedia.org/wikipedia/en/5/5c/ForThoseAboutToRock_ACDCalbum.jpg' where albumid = 1;