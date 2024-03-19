export interface GetBookDetailPageResponse {
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
  bookCover: string | null;
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
