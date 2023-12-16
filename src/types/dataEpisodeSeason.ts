export type EpisodeData = {
  air_date:        Date;
  crew:            Crew[];
  episode_number:  number;
  guest_stars:     Crew[];
  name:            string;
  overview:        string;
  id:              number;
  production_code: string;
  runtime:         number;
  season_number:   number;
  still_path:      string;
  vote_average:    number;
  vote_count:      number;
}

export type Crew = {
  department?:          string;
  job?:                 string;
  credit_id:            string;
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  character?:           string;
  order?:               number;
}
