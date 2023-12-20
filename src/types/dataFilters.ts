export type ResultFiltersMovie = {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export type Result = {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export type ResultFiltersSerie = {
  page:          number;
  results:       ResultSerie[];
  total_pages:   number;
  total_results: number;
}

export type ResultSerie = {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;
}

export type ResultErrorFilters = {
  statusCode: number,
  statusMessage: string
}

