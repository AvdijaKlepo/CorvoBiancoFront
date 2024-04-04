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
import {GetArticleResponseModel, GetGenreResponseModel} from "../../home-page/home-page.model";
import {HomePageService} from "../../home-page/home-page.service";

@Component({
  selector: 'app-edit-article-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './edit-article-image.component.html',
  styleUrl: './edit-article-image.component.css'
})
export class EditArticleImageComponent implements OnInit{

   value: any;
   genre: GetGenreResponseModel[]=[];
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<EditArticleImageComponent>,
              @Inject(MAT_DIALOG_DATA) public data:GetArticleResponseModel,private service:HomePageService) {
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:this.data.id,
      title:this.data.title,
      preview:this.data.articlePreview,
      posted:this.data.posted,
      articleDescription:this.data.articleDescription,
      genreId:this.data.genreId,
      articleImage:this.value
    })
    this.service.GetGenre().subscribe((x)=>{
      this.genre = x.genres;
    })
    }
  form!: FormGroup;

  submit() {
    this.form=this.fb.group({
      id:this.data.id,
      title:this.data.title,
      preview:this.data.articlePreview,
      posted:this.data.posted,
      articleDescription:this.data.articleDescription,
      articleImage:this.value,
      genreId:this.data.genreId
    })
    console.log(this.data.articleImage)
    this.form.value.id=this.data.id;
    this.service.AddArticle(this.form.value).subscribe(()=>{
      this.closeAddArticleDialog();
    })

  }
  generate_preview() {
    // @ts-ignore
    var file = document.getElementById("articleImage-input").files[0];
    if (file && this.data) {
      var reader = new FileReader();
      reader.onload = () => {
        this.value = reader.result?.toString();
        // @ts-ignore
        this.data!.articleImage = this.value;
      }
      reader.readAsDataURL(file)
    }
  }

  closeAddArticleDialog() {
    this.dialogRef.close()
  }
}
