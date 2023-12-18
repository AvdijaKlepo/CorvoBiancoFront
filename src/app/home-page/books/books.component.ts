import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HomePageService} from "../home-page.service";
import {MatDialog} from "@angular/material/dialog";
import {AddBookComponent} from "../add-book/add-book.component";
import {GetBooksResponseModel, GetBooksResponse} from "../home-page.model";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {RouterLink} from "@angular/router";
import {AddAuthorsComponent} from "../../author/add-authors/add-authors.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, AddBookComponent, CarouselModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

   books: GetBooksResponseModel[]=[];
   customOptions:OwlOptions={
     loop:false,
     autoplay:true,
     center:true,
     dots:false,
     autoHeight: true,
     autoWidth: true
   }
  constructor(private homePageService:HomePageService, public dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.loadBooks()
  }

  private loadBooks() {
    this.homePageService.GetBooksHomePage().subscribe((x:GetBooksResponse)=>{
      this.books=x.books;
    })
  }


  DeleteBook(id: number) {
    this.homePageService.DeleteBook(id).subscribe(() => {
      this.loadBooks();

    })
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent)
    dialogRef.afterClosed().subscribe(x=>{
      this.loadBooks();
    })
  }
}
