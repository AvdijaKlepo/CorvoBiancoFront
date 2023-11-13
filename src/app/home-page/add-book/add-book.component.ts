import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {AddBookVM} from "../home-page.model";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{

  book!: AddBookVM;
  form!: FormGroup;
  @Output() result = new EventEmitter<AddBookVM>();

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      title:'',
      author:'',
      rating:'',
      ratingCount:'',
      series:'',
      description:'',
      pageCount:'',
      genres:''
    });
  }
}
