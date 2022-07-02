/*

  The following concepts are demonstrated in this file.

  Concepts Covered:
    Typescript's keyof operator:
      https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
    Indexed Access Type:
      https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
    Mapped Type:
      https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
    Record:
      https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
    Type Guard:
      https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
    Type Predicate (x is T):
      https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
    Template Literal Types:
      https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content

    The main thing demo'd here, is using mapped types to enforce a naming
    convention on methods, based on an existing type/interface,
    which defines all the types. It's like using computed object properties
    to programmatically define expected method signatures.
*/

export interface DataEntity {
  id: string;
}

export interface Movie extends DataEntity {
  director: string;
}

export interface Song extends DataEntity {
  singer: string;
}

export interface Comic extends DataEntity {
  issueNumber: number;
}

// This could have been an interface, rather than a type.
export type DataEntityMap = {
  movie: Movie;
  song: Song;
  // comic: Comic;
};

// This is a type, not an interface.
// Typescript's keyof operator will create a union of the
// types of an object (such as: "movie" | "song").
// The "K in keyof DataEntityMap" is referred to as a "mapped type".
// The "as `getAll...`" is referred to as "key remapping".
// DataEntityMap[K] is referred to as an "indexed access type"
type DataStoreMethods = {
  [K in keyof DataEntityMap as `getAll${Capitalize<K>}s`]: () => DataEntityMap[K][]
} & {
  [K in keyof DataEntityMap as `get${Capitalize<K>}`]: (id: string) => DataEntityMap[K] | undefined
} & {
  [K in keyof DataEntityMap as `clear${Capitalize<K>}s`]: () => void
}  & {
  [K in keyof DataEntityMap as `add${Capitalize<K>}`]: (arg: DataEntityMap[K]) => DataEntityMap[K]
}

// A "type guard"
function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined';
}

export class DataStore implements DataStoreMethods {
  #data: { [K in keyof DataEntityMap as `${K}s`]: Record<string, DataEntityMap[K]> } = {
    movies: {},
    songs: {}
  };

  addSong (newSong: Song): Song {
    this.#data.songs[newSong.id] = newSong;
    return newSong
  }

  addMovie (newMovie: Movie): Movie {
    this.#data.movies[newMovie.id] = newMovie;
    return newMovie
  }

  getSong (songID: string): Song | undefined {
    return this.#data.songs[songID]
  }

  getMovie (movieID: string): Movie | undefined {
    return this.#data.movies[movieID]
  }

  getAllSongs (): Song[] {
    return Object.values(this.#data.songs).filter(isDefined);
  }

  getAllMovies (): Movie[] {
    return Object.values(this.#data.movies).filter(isDefined);
  }

  clearSongs () {
    this.#data.songs = {};
  }

  clearMovies () {
    this.#data.movies = {};
  }
}

// =============================================

const store = new DataStore();

store.addSong({ id: "song-123", singer: "The Flaming Lips" });
store.addMovie({ id: "movie-456", director: "Stephen Spielberg" });

store.getSong("song-123"); // Song{}
store.getMovie("movie-456");  // Movie{}
store.getSong("song-12311111111") // undefined

store.getAllSongs();
store.getAllMovies();

store.clearSongs();
store.clearMovies();