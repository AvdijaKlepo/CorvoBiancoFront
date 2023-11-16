import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddBookRequest, BookGetBookHomePageResponse, GetBookHomePageResponse} from "./home-page.model";


@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  apiUlr = `https://localhost:7171/`;

  constructor(private httpClient:HttpClient) { }

  GetBooksHomePage()
  {
    return this.httpClient.get<GetBookHomePageResponse>(
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


}
