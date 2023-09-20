export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdPlaylists: Playlist[];
  followedPlaylists: Playlist[];
  favoritedSongs: Song[];
  followedArtsits: Artist[];
};

export type UserLogin = {
  email: string;
  password: string;
};

export type Playlist = {
  name: string;
  description: string;
  picture: string;
  createdBy: User;
  createdAt: Date;
  lastModified: Date;
  isPrivate: boolean;
  songs: Song[];
};

export type Song = {
  name: string;
  artist: Artist;
  album: Album;
  duration: number;
  genres: string[];
  releaseDate: Date;
  totalPlays: number;
};

export type Artist = {
  name: string;
  artistName: string;
  picture: string;
  albums: Album[];
  songs: Song[];
  genres: string[];
  followers: User[];
  biography: string;
  isVerified: boolean;
  totalPlays: number;
};

export type Album = {
  name: string;
  artist: Artist;
  picture: string;
  songs: Song[];
  genres: string[];
  releaseDate: Date;
  publisher: string;
  totalPlays: number;
};
