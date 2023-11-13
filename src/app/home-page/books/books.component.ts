import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HomePageService} from "../home-page.service";
import {AddBookVM, GetBooksHomePageVM} from "../home-page.model";
import {MatDialog} from "@angular/material/dialog";
import {AddBookComponent} from "../add-book/add-book.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
   books: GetBooksHomePageVM[]=[];
   newBook:AddBookVM | undefined
  constructor(private homePageService:HomePageService, public dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks() {
    this.homePageService.GetBooksHomePage().subscribe((x:GetBooksHomePageVM[])=>{
      this.books=x;
    })
  }


  deleteBook(id: number) {
    this.homePageService.DeleteBook(id).subscribe(()=>{
      this.loadBooks();
    });
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent);
    dialogRef.afterClosed().subscribe();
  }
}
