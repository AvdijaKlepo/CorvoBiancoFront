import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {AuthorsService} from "../authors.service";
import {GetAuthorResponse, GetAuthorResponseModel} from "../author.models";
import {AddBookComponent} from "../../home-page/add-book/add-book.component";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {AddAuthorsComponent} from "../add-authors/add-authors.component";
import {MatListModule} from "@angular/material/list";
import {GetBooksResponseModel} from "../../home-page/home-page.model";
import {HomePageService} from "../../home-page/home-page.service";
import {GetBookDetailPageResponse} from "../../book-details/book-details.model";
import {count} from "rxjs";

@Component({
  selector: 'app-author-cards',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterLink, NgOptimizedImage, MatListModule],
  templateUrl: './author-cards.component.html',
  styleUrl: './author-cards.component.css'
})
export class AuthorCardsComponent implements OnInit{
  authors: GetAuthorResponseModel[]=[];

  constructor(private authorService:AuthorsService,public dialog:MatDialog,private service:HomePageService) {
  }
    ngOnInit(): void {
        this.getAuthors();
    }

  private getAuthors() {
    this.authorService.GetAuthors().subscribe((x:GetAuthorResponse)=>{
      this.authors=x.authors;
    })
  }

  deleteAuthor(id:number) {
    this.authorService.DeleteAuthor(id).subscribe(()=>{
      this.getAuthors();
    })
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddAuthorsComponent)
    dialogRef.afterClosed().subscribe(x=>{
      this.getAuthors();
    })
  }

  protected readonly onclick = onclick;
    protected readonly count = count;
}
