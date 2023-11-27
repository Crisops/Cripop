export type Genders = {
    genres: Genre[];
}

export type Genre = {
    id:   number;
    name: string;
}

export type MovieWithGenders = Genre[][]
