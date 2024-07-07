export type CharacterOrigin = {
  name: string;
};

export type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: CharacterOrigin;
};

// Used to define the pagination information
export type PageInfo = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

// The type for the expected characters query response
export type CharactersResponse = {
  characters: {
    info: PageInfo;
    results: Character[];
  };
};
