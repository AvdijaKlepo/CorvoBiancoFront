import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HomePageService} from "../home-page.service";
import {MatDialog} from "@angular/material/dialog";
import {AddBookComponent} from "../add-book/add-book.component";
import {
  GetBooksResponseModel,
  GetBooksResponse,
  GetSciFiBookResponse,
  GetSciFiBookReponseModel,
  GetClassicBookHomePageResponse,
  GetClassicBookHomePageResponseModel,
  GetHFBookResponse,
  GetHSBookReponseModel
} from "../home-page.model";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, AddBookComponent, CarouselModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit{

   fantasyBooks: GetBooksResponseModel[]=[];
   sciFiBooks: GetSciFiBookReponseModel[] = [];
   classicBook: GetClassicBookHomePageResponseModel[] =[];
   historicalFictionBook:GetHSBookReponseModel[]=[];
   bookCover:any;
   customOptions:OwlOptions={
     items:5,
     autoWidth:true,
     nav:true,
     slideBy:5,
     smartSpeed:300,
     dots:false,
     loop:false,
     lazyLoad:true
   }


  constructor(protected homePageService:HomePageService, public dialog:MatDialog) {
  }
  ngOnInit(): void {
    this.loadFantasyBook()
    this.loadSciFiBook();
    this.loadClassicBook();
    this.loadHistoricalFictionBook();

  }


  private loadFantasyBook() {
    this.homePageService.GetBooksHomePage().subscribe((x:GetBooksResponse)=>{
      this.fantasyBooks=x.books;
    })
  }
  private loadSciFiBook(){
    this.homePageService.GetSciFiBookHomePage().subscribe((x:GetSciFiBookResponse)=>{
      this.sciFiBooks = x.sciFiBooks;
    })
  }
  private loadClassicBook(){
     this.homePageService.GetClassicBookHomePage().subscribe((x:GetClassicBookHomePageResponse)=>{
       this.classicBook = x.classicBook;
     })
  }
  private loadHistoricalFictionBook(){
     this.homePageService.GetHFBookHomePage().subscribe((x)=>{
       this.historicalFictionBook=x.historicalFictionBook;
     })
  }


  DeleteBook(id: number) {
    this.homePageService.DeleteBook(id).subscribe(() => {
      this.loadFantasyBook();
      this.loadClassicBook();
      this.loadSciFiBook();

    })
  }


}
