export interface GetBookHomePageResponse {
  books: BookGetBookHomePageResponse[];
}

export interface BookGetBookHomePageResponse {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
}

export interface AddBookRequest {
  id: number;
  title: string;
  author: string;
  series: string | null;
  rating: number | null;
  ratingCount: number | null;
  description: string;
  genres: string;
  pageCount: number;
  published: string;
}
