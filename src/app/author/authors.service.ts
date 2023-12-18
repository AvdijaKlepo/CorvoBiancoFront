import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddAuthorRequest, GetAuthorResponse} from "./author.models";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  apiUrl = `https://localhost:7171/`
  constructor(private httpClient:HttpClient) { }


  GetAuthors()
  {
    return this.httpClient.get<GetAuthorResponse>(
      `${this.apiUrl}GetAuthors`
    );
  }

  DeleteAuthor(id:number)
  {
    return this.httpClient.delete(
      `${this.apiUrl}Author/DeleteAuthor?AuthorId=${id}`
    );
  }

  AddAuthor(author:AddAuthorRequest)
  {
    return this.httpClient.post(
      `${this.apiUrl}AddAuthor`,
      author
    );
  }
}
