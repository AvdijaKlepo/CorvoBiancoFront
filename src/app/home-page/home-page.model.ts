export interface Book {
  id: number;
  title: string;
  series: string | null;
  author: string;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  pageCount: number;
  published: string;
}

export interface AddBookVM {
  id: number;
  title: string;
  author: string;
  rating: number | null;
  ratingCount: number | null;
  series: string;
  description: string;
  pageCount: number;
  genres: string;
  published: string;
}

export interface GetBooksHomePageVM {
  id: number;
  title: string;
  author: string;
  rating: number | null;
  ratingCount: number | null;
}

export interface UpdateBookVM {
  id: number;
  title: string;
  series: string | null;
  author: string;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  pageCount: number;
  published: string;
}
