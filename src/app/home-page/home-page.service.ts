import {APP_ID, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  AddArticleRequest, AddBookCoverRequest,
  AddBookRequest,
  AddGenreRequest, AddSeriesRequest, GetArticleResponse, GetArticleResponseModel,
  GetBooksResponse, GetClassicBookHomePageResponse,
  GetGenreResponse, GetHFBookResponse, GetSciFiBookResponse,
  GetSeriesResponse
} from "./home-page.model";
import {GetAuthorResponse, GetAuthorResponseModel} from "../author/author.models";


@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  apiUlr = `https://localhost:7171/`;

  constructor(private httpClient:HttpClient) { }

  GetBooksHomePage()
  {
    return this.httpClient.get<GetBooksResponse>(
      `${this.apiUlr}GetBookHomePage`
    );
  }
  GetSciFiBookHomePage()
  {
    return this.httpClient.get<GetSciFiBookResponse>(
      `${this.apiUlr}GetSciFiBookHomePage`
    );
  }
  GetHFBookHomePage()
  {
    return this.httpClient.get<GetHFBookResponse>(
      `${this.apiUlr}GetHistoricalFictionBooks`
    );
  }

  GetClassicBookHomePage()
  {
    return this.httpClient.get<GetClassicBookHomePageResponse>(
      `${this.apiUlr}GetClassicBookHomePage`
    )
  }

  DeleteBook(id:number)
  {
    return this.httpClient.delete(
      `${this.apiUlr}DeleteBook?BookId=${id}`
    )
  }

  AddBook(book:AddBookRequest)
  {
    return this.httpClient.post(
      `${this.apiUlr}AddBook`,
      book
    );
  }

  GetBookCover(id:number)
  {
    return this.httpClient.get(
      `${this.apiUlr}BookCover?id=${id}`
    );
  }
  GetAuthors()
  {
    return this.httpClient.get<GetAuthorResponse>(
      `${this.apiUlr}GetAuthors`
    );
  }
  GetSeries()
  {
    return this.httpClient.get<GetSeriesResponse>(
      `${this.apiUlr}GetSeries`
    )
  }

  GetGenre()
  {
    return this.httpClient.get<GetGenreResponse>(
      `${this.apiUlr}Genre/GetGenres`
    );
  }

  AddGenre(genre:AddGenreRequest)
  {
    return this.httpClient.post(
      `${this.apiUlr}AddGenre`,
      genre
    );
  }
  AddSeries(series:AddSeriesRequest)
  {
    return this.httpClient.post(
      `${this.apiUlr}AddSeries`,
      series
    );
  }

  AddArticle(article:AddArticleRequest)
  {
    return this.httpClient.post(
      `${this.apiUlr}AddArticle`,
      article
    )
  }
  GetArtilce()
  {
    return this.httpClient.get<GetArticleResponse>(
      `${this.apiUlr}GetArticles`
    );
  }
  GetAllArticle()
  {
    return this.httpClient.get<GetArticleResponse>(
      `${this.apiUlr}GetAllArticles`
    );
  }
  GetThreeArticle()
  {
    return this.httpClient.get<GetArticleResponse>(
      `${this.apiUlr}GetThreeArticles`
    );
  }

  GetArticleDetails(id:number)
  {
    return this.httpClient.get<GetArticleResponseModel>
    (
      `${this.apiUlr}GetArticleDetail${id}`
    )
  }

  GetAuthorDetails(id:number)
  {
    return this.httpClient.get<GetAuthorResponseModel>(
      `${this.apiUlr}GetAuthorDetails${id}`
    )
  }



}
