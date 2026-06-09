-- +goose Up
CREATE TABLE playlist (
  id INT NOT NULL,
  title TEXT NOT NULL,
  artist_id INT NOT NULL,
  year INT,
  is_public BOOLEAN DEFAULT TRUE NOT NULL,
  is_album BOOLEAN DEFAULT FALSE NOT NULL,
  cover_image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE country (
  id INT NOT NULL,
  iso TEXT NOT NULL,
  iso3 TEXT NOT NULL,
  name TEXT NOT NULL,
  nice_name TEXT NOT NULL,
  num_code INT,
  phone_code INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE account (
  id INT NOT NULL,
  country_id INT NOT NULL,
  postal_code INT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  account_level INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

create table artist (
  id INT NOT NULL,
  name TEXT NOT NULL,
  username TEXT NOT NULL,
  bio TEXT,
  country_id INT NOT NULL,
  postal_code INT NOT NULL,
  email TEXT NOT NULL,
  account_id INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

create table track (
  id INT NOT NULL,
  title TEXT NOT NULL,
  duration INT NOT NULL,
  composer TEXT,
  track_number INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

create table promo (
  id INT NOT NULL,
  name TEXT
);

create table genre (
  id INT NOT NULL,
  name TEXT
);

create table track_artist (
  track_id INT NOT NULL,
  artist_id INT NOT NULL,
  promo_id INT
);

create table track_genre (
  track_id INT NOT NULL,
  genre_id INT NOT NULL
);

create table track_playlist (
  playlist_id INT NOT NULL,
  track_id INT NOT NULL,
  promo_id INT
);

-- primary keys
ALTER TABLE playlist ADD CONSTRAINT pk_playlist_id PRIMARY KEY (id);
ALTER TABLE country ADD CONSTRAINT pk_country_id PRIMARY KEY (id);
ALTER TABLE account ADD CONSTRAINT pk_account_id PRIMARY KEY (id);
ALTER TABLE artist ADD CONSTRAINT pk_artist_id PRIMARY KEY (id);
ALTER TABLE track ADD CONSTRAINT pk_track_id PRIMARY KEY (id);
ALTER TABLE genre ADD CONSTRAINT pk_genre_id PRIMARY KEY (id);
ALTER TABLE promo ADD CONSTRAINT pk_promo_id PRIMARY KEY (id);

-- foreign keys
ALTER TABLE playlist ADD CONSTRAINT fk_playlist_artist_id FOREIGN KEY (artist_id) REFERENCES artist (id);

ALTER TABLE account ADD CONSTRAINT fk_account_country_id FOREIGN KEY (country_id) REFERENCES country (id);
ALTER TABLE artist ADD CONSTRAINT fk_artist_country_id FOREIGN KEY (country_id) REFERENCES country (id);
ALTER TABLE artist ADD CONSTRAINT fk_artist_account_id FOREIGN KEY (account_id) REFERENCES account (id);

ALTER TABLE track_artist ADD CONSTRAINT fk_track_artist_track_id FOREIGN KEY (track_id) REFERENCES track (id);
ALTER TABLE track_artist ADD CONSTRAINT fk_track_artist_artist_id FOREIGN KEY (artist_id) REFERENCES artist (id);

ALTER TABLE track_playlist ADD CONSTRAINT fk_track_playlist_track_id FOREIGN KEY (track_id) REFERENCES track (id);
ALTER TABLE track_playlist ADD CONSTRAINT fk_track_playlist_playlist_id FOREIGN KEY (playlist_id) REFERENCES playlist (id);
ALTER TABLE track_genre ADD CONSTRAINT fk_track_genre_track_id FOREIGN KEY (track_id) REFERENCES track (id);
ALTER TABLE track_genre ADD CONSTRAINT fk_track_genre_genre_id FOREIGN KEY (genre_id) REFERENCES genre (id);