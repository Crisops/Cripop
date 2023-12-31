
// When the request is https://api.themoviedb.org/3/movie/900667?api_key=12345&append_to_response=videos


export type MovieIDSelect = {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: BelongsToCollection;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
  videos:                Videos;
}

export type BelongsToCollection = {
  id:            number;
  name:          string;
  poster_path:   string;
  backdrop_path: string;
}

export type Genre = {
  id:   number;
  name: string;
}

export type ProductionCompany = {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export type ProductionCountry = {
  iso_3166_1: string;
  name:       string;
}

export type SpokenLanguage = {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

export type Videos = {
  results: Result[];
}

export type Result = {
  iso_639_1:    string;
  iso_3166_1:   string;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         string;
  official:     boolean;
  published_at: Date;
  id:           string;
}

// *** End Request MovieID  *

