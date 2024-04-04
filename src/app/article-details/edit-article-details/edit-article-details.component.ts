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
import {GetArticleResponse, GetArticleResponseModel, GetGenreResponseModel} from "../../home-page/home-page.model";
import {HomePageService} from "../../home-page/home-page.service";
import {GetBookDetailPageResponse} from "../../book-details/book-details.model";

@Component({
  selector: 'app-edit-article-details',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './edit-article-details.component.html',
  styleUrl: './edit-article-details.component.css'
})
export class EditArticleDetailsComponent implements OnInit{
  constructor(private fb:FormBuilder,private homePageService:HomePageService,private dialogRef:MatDialogRef<EditArticleDetailsComponent>,
  @Inject(MAT_DIALOG_DATA) public data:GetArticleResponseModel) {
  }

  ngOnInit(): void {
      this.form=this.fb.group({
        id:this.data.id,
        title:this.data.title,
        preview:this.data.articlePreview,
        posted:this.data.posted,
        articleDescription:this.data.articleDescription,
        genreId:this.data.genreId
      })
    this.homePageService.GetGenre().subscribe((x)=>{
      this.genre = x.genres;
    })
  }
  form!: FormGroup;
  genre: GetGenreResponseModel[]=[];

  submit() {

    this.homePageService.AddArticle(this.form.value).subscribe(()=>{
      this.closeAddArticleDialog();
    })
  }

  closeAddArticleDialog() {
    this.dialogRef.close()
  }


}
