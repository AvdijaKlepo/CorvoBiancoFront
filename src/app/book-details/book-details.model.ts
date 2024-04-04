export interface Book {
  id: number;
  title: string;
  author: Author
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  pageCount: number;
  published: string;
  bookCover: string | null;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  born: string;
  bio: string;
  profilePicture: string | null;
  books: Book[] | null;
  bookId: number;
}


export interface GetBookDetailPageResponse {
  id: number;
  title: string;
  author: string;
  authorId: number;
  series: string;
  seriesId: number | null;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  genresId: number;
  pageCount: number;
  published: string;
  bookCover: string;
  authorDetails: Author;
  authorBooks: Book[];
  authorBio: string;
}

export interface UpdateBookRequest {
  id: number;
  title: string;
  author: number;
  seriesId: number;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genreId: number;
  pageCount: number;
  published: string;
}
