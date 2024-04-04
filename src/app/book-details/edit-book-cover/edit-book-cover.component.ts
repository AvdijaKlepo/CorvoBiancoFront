import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {GetBookDetailPageResponse} from "../book-details.model";
import {HomePageService} from "../../home-page/home-page.service";
import {GetAuthorResponseModel} from "../../author/author.models";
import {GetGenreResponseModel, GetSeriesResponseModel} from "../../home-page/home-page.model";
import {BookDetailsService} from "../book-details.service";

@Component({
  selector: 'app-edit-book-cover',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './edit-book-cover.component.html',
  styleUrl: './edit-book-cover.component.css'
})
export class EditBookCoverComponent implements OnInit{
  constructor(private fb:FormBuilder,public dialogRef:MatDialogRef<EditBookCoverComponent>,@Inject(MAT_DIALOG_DATA) public data:GetBookDetailPageResponse,
              private service:HomePageService,private serviceEdit:BookDetailsService) {
  }
  ngOnInit(): void {
      this.form=this.fb.group({
        bookCover:this.value,
        id:this.data.id,
        title:this.data.title,
        authorId:this.data.author,
        series:this.data.series,
        genreId:this.data.genres,
        description:this.data.description,
        pageCount:this.data.pageCount,
        published:this.data.published,
      })
    this.service.GetAuthors().subscribe((x)=>{
      this.authors = x.authors;
    })
    this.service.GetSeries().subscribe((x)=>{
      this.series = x.series;
    })
    this.service.GetGenre().subscribe((x)=>{
      this.genres = x.genres;
    })
  }
  form!: FormGroup;
  authors: GetAuthorResponseModel[]=[];
  series: GetSeriesResponseModel[]=[];
  genres: GetGenreResponseModel[]=[];
  value:any;
  bookCoverImage: any;

  GetBookCover(id:number)
  {
    this.serviceEdit.GetBookCover(id).subscribe((x)=>{
      this.bookCoverImage=x;
    })
  }
  submit() {
    this.form=this.fb.group({
      bookCover:this.value,
      id:this.data.id,
      title:this.data.title,
      authorId:this.data.authorId,
      series:this.data.seriesId,
      genreId:this.data.genresId,


      description:this.data.description,
      pageCount:this.data.pageCount,
      published:this.data.published,
    })
    this.form.value.id=this.data.id;
    this.service.AddBook(this.form.value).subscribe(()=>{
      this.closeAddBookDialog();
    })

  }

  closeAddBookDialog() {
    this.dialogRef.close();
  }


  generate_preview() {
    // @ts-ignore
    var file = document.getElementById("bookCover-input").files[0];
    if (file && this.data) {
      var reader = new FileReader();
      reader.onload = () => {
        this.value = reader.result?.toString();
        // @ts-ignore
        this.data!.bookCover = this.value;
      }
      reader.readAsDataURL(file)
    }
  }
}
