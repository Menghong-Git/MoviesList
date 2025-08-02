declare namespace IMovie {
  interface Data {
  id: string;
  url: string;
  primaryTitle: string;
  originalTitle: string;
  type: string;
  description: string;
  primaryImage: string;
  thumbnails: Thumbnail[];
  trailer: null | string;
  contentRating: null | string;
  startYear: number;
  endYear: null;
  releaseDate: null | string;
  interests: string[];
  countriesOfOrigin: string[];
  externalLinks: string[];
  spokenLanguages: string[];
  filmingLocations: string[];
  productionCompanies: ProductionCompany[];
  budget: null | number;
  grossWorldwide: null | number;
  genres: string[];
  isAdult: boolean;
  runtimeMinutes: number;
  averageRating: number;
  numVotes: number;
  metascore: null | number;
}
interface Detail {
  id: string;
  url: string;
  primaryTitle: string;
  originalTitle: string;
  type: string;
  description: string;
  primaryImage: string;
  thumbnails: Thumbnail[];
  trailer: string;
  contentRating: string;
  startYear: number;
  endYear: null;
  releaseDate: string;
  interests: string[];
  countriesOfOrigin: string[];
  externalLinks: string[];
  spokenLanguages: string[];
  filmingLocations: string[];
  productionCompanies: ProductionCompany[];
  budget: number;
  grossWorldwide: number;
  genres: string[];
  isAdult: boolean;
  runtimeMinutes: number;
  averageRating: number;
  numVotes: number;
  metascore: number;
  directors: Director[];
  writers: Director[];
  cast: Cast[];
}
}






