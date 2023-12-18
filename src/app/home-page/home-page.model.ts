import {Book, GetAuthorResponseModel} from "../author/author.models";

export interface GetBooksResponse {
  books: GetBooksResponseModel[];
}

export interface GetBooksResponseModel {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  bookCover: string;
}

export interface AddBookRequest {
  id: number;
  title: string;
  authorId: number;
  series: number;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genreId: number;
  pageCount: number;
  published: string;
}



export interface GetSeriesResponseModel {
  id: number;
  seriesName: string;
  numberOfBooks: number;
  books: Book[];
}



export interface GetSeriesResponse {
  series: GetSeriesResponseModel[];
}




export interface GetGenreResponseModel {
  id: number;
  genre: string;
  books: Book[] | null;
}



export interface GetGenreResponse {
  genres: GetGenreResponseModel[];
}


export interface AddGenreRequest {
  id: number;
  genreName: string;
}

export interface AddSeriesRequest {
  id: number;
  seriesName: string;
}
