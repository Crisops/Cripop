
// When the request is https://api.themoviedb.org/3/discover/movie?api_key=12345&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

export interface Movies {
  dates?: Movie_Cartelera
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Result {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

interface Movie_Cartelera {
  maximum: Date,
  minimum: Date 
}

//****** End Request DISCOVER */



// When the request is https://api.themoviedb.org/3/search/movie?query=One+Piece&api_key=123456


export type MovieSearch = {
  page:          number;
  results:       ResultSearch[];
  total_pages:   number;
  total_results: number;
}

export type ResultSearch = {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

// ****** End Request Search **



