import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BookDetailsService} from "../book-details.service";
import {GetBookDetailPageResponse} from "../book-details.model";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {startWith} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HomePageService} from "../../home-page/home-page.service";
import {AddBookCoverRequest} from "../../home-page/home-page.model";
import {EditBookComponent} from "../edit-book/edit-book.component";
import {EditBookCoverComponent} from "../edit-book-cover/edit-book-cover.component";
import {MatListModule} from "@angular/material/list";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, RouterLink, MatListModule, CarouselModule, MatCardModule, MatIconModule],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit{
  bookDetails!: GetBookDetailPageResponse;
  bookCover:any;
  public Hidden=true;


  sliceOptions  = {
    start: 0,
    end: 544,
    default: 800
  }
  value:any;
  customOptions:OwlOptions={
    items:4,
    autoWidth:true,
    nav:true,
    slideBy:5,
    smartSpeed:300,
    dots:false,
    loop:false,
    lazyLoad:true
  }

  constructor(private bookDetailsService:BookDetailsService
              , protected route:ActivatedRoute,
              public dialog:MatDialog,
              private homePageSerice:HomePageService,
              private fb:FormBuilder)
  {
  }
  ngOnInit(): void {

    this.GetBookDetails();
    this.GetBookCover();


  }
  GetBookCover()
  {
    this.bookDetailsService.GetBookCover(this.route.snapshot.params['id']).subscribe((x)=>{
    this.bookCover=x;
    })
  }

  GetBookDetails()
  {
    this.bookDetailsService.GetBookDetails(this.route.snapshot.params['id']).subscribe((x)=>{
      this.bookDetails = x;
    })
  }

  protected readonly startWith = startWith;
  form!: FormGroup;

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
          authorId:this.bookDetails.authorId,
          description:this.bookDetails.description,
          pageCount:this.bookDetails.pageCount,
          published:this.bookDetails.published,
          seriesId:this.bookDetails.seriesId,
          series:this.bookDetails.series,
          genres:this.bookDetails.genres,
          id:this.bookDetails.id,
        }
      }).afterClosed().subscribe(()=>{
        this.GetBookDetails();
    })
  }






  openEditBookCoverDialog() {
    this.dialog.open(EditBookCoverComponent,
      {
        data:{
          bookCover:this.bookDetails.bookCover,
          title:this.bookDetails.title,
          author:this.bookDetails.author,
          authorId:this.bookDetails.authorId,
          description:this.bookDetails.description,
          pageCount:this.bookDetails.pageCount,
          published:this.bookDetails.published,
          seriesId:this.bookDetails.seriesId,
          series:this.bookDetails.series,
          genres:this.bookDetails.genres,
          genresId:this.bookDetails.genresId,
          id:this.bookDetails.id,
        }
      }).afterClosed().subscribe(()=>{
      this.GetBookCover();
      location.reload()
    })
  }


   // @ts-ignore
  setLocation(){
    // @ts-ignore
     document.getElementById('seeMore').style.display='none';

   }

  protected readonly onclick = onclick;


  protected readonly document = document;
  protected readonly onpagehide = onpagehide;

}
