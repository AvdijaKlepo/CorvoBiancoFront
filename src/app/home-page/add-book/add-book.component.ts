import {Component, EventEmitter, numberAttribute, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HomePageService} from "../home-page.service";
import {MatSelectModule} from "@angular/material/select";
import {GetAuthorResponse, GetAuthorResponseModel} from "../../author/author.models";
import {GetGenreResponseModel, GetSeriesResponseModel} from "../home-page.model";



@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions, MatButtonModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{


  form!: FormGroup;
  @Output() closeModal = new EventEmitter<void>();
   authors: GetAuthorResponseModel[]=[];
   series: GetSeriesResponseModel[]=[];
   genres: GetGenreResponseModel[]=[];

  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<AddBookComponent>,private homePageService:HomePageService) {
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      title:'',
      authorId:'',
      series:'',
      description:'',
      pageCount:'',
      genreId:1,
      published:new Date(),

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

  closeAddBookDialog() {
    this.dialogRef.close()
  }

  submit() {
    this.homePageService.AddBook(this.form.value).subscribe(()=>{
      this.closeAddBookDialog();
    })
    console.log(this.form.value)
  }



}
