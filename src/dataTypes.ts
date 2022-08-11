export interface FilmPage {
  page: number;
  results: Film[];
}
interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//Interfaces for movie details page
export interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelToCol;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  orignal_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProdCompany[];
  production_countries: ProdCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLan[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface BelToCol {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface Genres {
  id: number;
  name: string;
}
interface ProdCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface ProdCountries {
  iso_3166_1: string;
  name: string;
}
interface SpokenLan {
  english_name: string;
  iso_639_1: string;
  name: string;
}
