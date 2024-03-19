import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HomePageService} from "../../home-page/home-page.service";
import {GetAuthorResponseModel} from "../../author/author.models";
import {GetGenreResponseModel, GetSeriesResponseModel} from "../../home-page/home-page.model";
import {GetBookDetailPageResponse} from "../book-details.model";
import {BookDetailsService} from "../book-details.service";

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit{
  form!: FormGroup;
  bookDetails!: GetBookDetailPageResponse;
  authors: GetAuthorResponseModel[]=[];
  series: GetSeriesResponseModel[]=[];
  genres: GetGenreResponseModel[]=[];
  constructor(private fb:FormBuilder,private homePageService:HomePageService,private dialogRef:MatDialogRef<EditBookComponent>,
              @Inject(MAT_DIALOG_DATA) public data:GetBookDetailPageResponse,private bookDetailsService:BookDetailsService) {

  }
    ngOnInit(): void {
      this.form=this.fb.group({
        id:this.data.id,
        title:this.data.title,
        authorId:this.data.author,
        series:this.data.series,
        description:this.data.description,
        pageCount:this.data.pageCount,
        genreId:this.data.genres,
        published:this.data.published,
        bookCover:this.value


      });

      this.homePageService.GetAuthors().subscribe((x)=>{
        this.authors = x.authors;
      })
      this.homePageService.GetSeries().subscribe((x)=>{
        this.series = x.series;
      })
      this.homePageService.GetGenre().subscribe((x)=>{
        this.genres = x.genres;
      })

    }
  value!:any;
  submit() {
    this.form=this.fb.group({
      id:this.data.id,
      title:this.data.title,
      description:this.data.description,
      pageCount:this.data.pageCount,
      published:this.data.published,
      bookCover:this.value


    });

    this.form.value.id=this.data.id;
    this.homePageService.AddBook(this.form.value).subscribe(()=>{
      this.closeAddBookDialog();
    })
  }

  closeAddBookDialog() {
    this.dialogRef.close()
  }


  generate_preview() {
    // @ts-ignore
    var file = document.getElementById("bookCover-input").files[0];
    if (file && this.data)
    {
      var reader = new FileReader();
      reader.onload = ()=>{
        this.value=reader.result?.toString();
        // @ts-ignore
        this.data!.bookCover = this.value;
      }
      reader.readAsDataURL(file)
    }



  }
}
