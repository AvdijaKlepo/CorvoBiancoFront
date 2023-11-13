import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddBookVM, GetBooksHomePageVM} from "./home-page.model";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  apiUlr = `https://localhost:7171/Book/`;

  constructor(private httpClient:HttpClient) { }


  GetBooksHomePage(){
    return this.httpClient.get<GetBooksHomePageVM[]>(
        `${this.apiUlr}GetBooksHomePage`
    );
  }
  DeleteBook(id:number){
    return this.httpClient.delete(
      `${this.apiUlr}DeleteBook/${id}`
    )
  }
  AddBook(book:AddBookVM)
  {
    return this.httpClient.post(
      `${this.apiUlr}AddBook`,
      book
    );
  }
}
