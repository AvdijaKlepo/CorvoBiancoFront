import {Component, Inject, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {HomePageService} from "../../home-page/home-page.service";
import {AuthorsService} from "../authors.service";

@Component({
  selector: 'app-edit-author-details',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-author-details.component.html',
  styleUrl: './edit-author-details.component.css'
})
export class EditAuthorDetailsComponent implements OnInit{
  constructor(private fb:FormBuilder,public dialogRef:MatDialogRef<EditAuthorDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data:GetAuthorResponseModel,private service:AuthorsService) {
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

  submit() {
    this.service.AddAuthor(this.form.value).subscribe(()=>{
      this.closeAddAuthorDialog();
    })
  }

  closeAddAuthorDialog() {
    this.dialogRef.close();
  }
}
