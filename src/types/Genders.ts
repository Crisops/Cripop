export type Genders = {
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieWithGenders = Genre[][];

// Tipo más específico para los resultados filtrados
export type MovieWithValidGenders = Omit<Genre, "name"> & Genders;
