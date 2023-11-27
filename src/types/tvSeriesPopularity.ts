export type TvSeriesPopularity = {
  page:          number;
  results:       Serie[];
  total_pages:   number;
  total_results: number;
}

export type Serie = {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  first_air_date:    Date;
  name:              string;
  vote_average:      number;
  vote_count:        number;
}
