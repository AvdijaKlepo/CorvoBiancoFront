import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HomePageService} from "../home-page.service";

@Component({
  selector: 'app-add-genre',
  standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatDatepickerModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-genre.component.html',
  styleUrl: './add-genre.component.css'
})
export class AddGenreComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb:FormBuilder,private dialog:MatDialogRef<AddGenreComponent>,private homePageService:HomePageService) {
  }

  ngOnInit(): void {
        this.form=this.fb.group({
          genreName:''
        });
    }
  submit() {
    this.homePageService.AddGenre(this.form.value).subscribe(()=>{
      this.closeAddGenreDialog()
    })
  }

  closeAddGenreDialog() {
    this.dialog.close();
  }
}
