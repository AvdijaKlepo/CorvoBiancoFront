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
  series: number | null;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genreId: number;
  pageCount: number;
  published: string;
  bookCover:string | undefined | null
}

export interface AddBookCoverRequest{
  bookCover:string;
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


export interface AddArticleRequest {
  id: number;
  title: string;
  preview: string;
  posted: string;
  articleImage: string;
  articleDescription: string;
  genreId: number;
}


export interface GetArticleResponseModel {
  id: number;
  title: string;
  articlePreview: string;
  posted: string;
  articleImage: string;
  articleDescription: string;
  books: Book[];
}

export interface GetArticleResponse {
  articles: GetArticleResponseModel[];
}


export interface GetSciFiBookReponseModel {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  bookCover: string;
}


export interface GetSciFiBookResponse {
  sciFiBooks: GetSciFiBookReponseModel[];
}

export interface GetClassicBookHomePageResponseModel {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  bookCover: string;
}

export interface GetClassicBookHomePageResponse {
  classicBook: GetClassicBookHomePageResponseModel[];
}

export interface AddBookCoverRequest {
  bookId: number;
  bookCover: string;
}


export interface GetHSBookReponseModel {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  bookCover: string;
}

export interface GetHFBookResponse {
  historicalFictionBook: GetHSBookReponseModel[];
}
