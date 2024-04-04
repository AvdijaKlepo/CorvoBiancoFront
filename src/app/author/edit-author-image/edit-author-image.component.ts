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
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {GetAuthorResponseModel} from "../author.models";
import {AuthorsService} from "../authors.service";

@Component({
  selector: 'app-edit-author-image',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './edit-author-image.component.html',
  styleUrl: './edit-author-image.component.css'
})
export class EditAuthorImageComponent implements OnInit{
  constructor(private dialogRef:MatDialogRef<EditAuthorImageComponent>,
              @Inject(MAT_DIALOG_DATA) public data:GetAuthorResponseModel,private fb:FormBuilder,private service:AuthorsService) {
  }
  ngOnInit(): void {
    this.form=this.fb.group({
      firstName:this.data.firstName,
      lastName:this.data.lastName,
      born:this.data.born,
      bio:this.data.bio,
      id:this.data.id
    })
  }
  form!: FormGroup;
  value:any;
  submit() {
    this.form=this.fb.group({
      firstName:this.data.firstName,
      lastName:this.data.lastName,
      born:this.data.born,
      bio:this.data.bio,
      id:this.data.id,
      profilePicture:this.value
    })
    this.service.AddAuthor(this.form.value).subscribe(()=>{
      this.closeAddAuthorDialog()
    })
  }

  closeAddAuthorDialog() {
    this.dialogRef.close();
  }

  generate_preview() {
    // @ts-ignore
    var file = document.getElementById("authorImage-input").files[0];
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
}
