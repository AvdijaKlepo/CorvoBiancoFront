import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  AddBookRequest,
  AddGenreRequest, AddSeriesRequest,
  GetBooksResponse,
  GetGenreResponse,
  GetSeriesResponse
} from "./home-page.model";
import {GetAuthorResponse} from "../author/author.models";


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



}
