import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthorsService} from "../authors.service";

@Component({
  selector: 'app-add-authors',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-authors.component.html',
  styleUrl: './add-authors.component.css'
})
export class AddAuthorsComponent implements OnInit{
  form!: FormGroup;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<AddAuthorsComponent>,private authorService:AuthorsService) {
  }

  ngOnInit(): void {
        this.form=this.fb.group({
          firstName:'',
          lastName:'',
          born:'',
          bio:''
        });
    }

  closeAddAuthorDialog() {
    this.dialogRef.close();
  }

  submit() {
    this.authorService.AddAuthor(this.form.value).subscribe(()=>{
      this.closeAddAuthorDialog();
    })
  }
}
