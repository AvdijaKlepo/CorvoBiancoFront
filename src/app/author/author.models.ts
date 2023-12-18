export interface GetAuthorResponse {
  authors: GetAuthorResponseModel[];
}
export interface GetAuthorResponseModel {
  id: number;
  firstName: string;
  lastName: string;
  born: string;
  bio: string;
  profilePicture: string | null;
  bookId: number;
  books: Book[] | null;
}

export interface Book {
  id: number;
  title: string;
  author: any // TODO
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  pageCount: number;
  published: string;
  bookCover: string | null;
}

export interface AddAuthorRequest {
  id: number;
  firstName: string;
  lastName: string;
  born: string;
  bio: string;
  profilePicture: string | null;
}
