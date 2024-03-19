import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BookDetailsService} from "../book-details.service";
import {GetBookDetailPageResponse} from "../book-details.model";
import {ActivatedRoute} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {startWith} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HomePageService} from "../../home-page/home-page.service";
import {AddBookCoverRequest} from "../../home-page/home-page.model";
import {EditBookComponent} from "../edit-book/edit-book.component";


@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit{
  bookDetails!: GetBookDetailPageResponse;

  addCover:AddBookCoverRequest | null = null;
  sliceOptions  = {
    start: 0,
    end: 800,
    default: 800
  }
  constructor(private bookDetailsService:BookDetailsService
              ,private route:ActivatedRoute,
              public dialog:MatDialog)
  {
  }
  ngOnInit(): void {
    this.GetBookDetails();
  }

  GetBookDetails()
  {
    this.bookDetailsService.GetBookDetails(this.route.snapshot.params['id']).subscribe((x)=>{
      this.bookDetails = x;
    })
  }

  protected readonly startWith = startWith;

  seeMore($event: any) {
    // @ts-ignore
    this.sliceOptions.end=this.sliceOptions.end?undefined:this.sliceOptions.default;
  }


  openAddBookCoverDialog(bookDetails:object) {
    const dialogRef = this.dialog.open(EditBookComponent,
      {
        data:{
          title:this.bookDetails.title,
          author:this.bookDetails.author,
          description:this.bookDetails.description,
          pageCount:this.bookDetails.pageCount,
          published:this.bookDetails.published,
          series:this.bookDetails.series,
          genres:this.bookDetails.genres,
          id:this.bookDetails.id,
          bookCover:this.bookDetails.bookCover
        }
      }).afterClosed().subscribe(()=>{
        this.GetBookDetails();
    })
  }


}
