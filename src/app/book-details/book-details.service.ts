import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetBookDetailPageResponse} from "./book-details.model";

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  apiUrl = `https://localhost:7171/`
  constructor(private httpClient:HttpClient) { }


  GetBookDetails(id:number)
  {
    return this.httpClient.get<GetBookDetailPageResponse>(
      `${this.apiUrl}GetBookDetails${id}`
    )
  }
}
