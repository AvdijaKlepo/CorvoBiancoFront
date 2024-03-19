import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HomePageService} from "../home-page.service";
import {GetGenreResponse, GetGenreResponseModel} from "../home-page.model";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatOptionModule, MatSelectModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit{
  genre: GetGenreResponseModel[]=[];
  ngOnInit(): void {
      this.form=this.fb.group({
        title: '',
        preview: '',
        posted: new Date(),
        articleImage: '',
        articleDescription: '',
        genreId:''
      });
      this.homePageService.GetGenre().subscribe((x=>{
        this.genre = x.genres;
      }))
  }
  form!: FormGroup;

  constructor(private fb:FormBuilder,private dialog:MatDialogRef<AddArticleComponent>,private homePageService:HomePageService) {
  }

  submit() {
    this.homePageService.AddArticle(this.form.value).subscribe(()=>{
      this.closeAddArticleDialog();
    })
  }

  closeAddArticleDialog() {
    this.dialog.close();
  }
}
