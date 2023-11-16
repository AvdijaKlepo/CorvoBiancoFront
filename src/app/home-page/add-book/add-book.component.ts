import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HomePageService} from "../home-page.service";


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions, MatButtonModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDatepickerModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{
  form!: FormGroup;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<AddBookComponent>,private homePageService:HomePageService) {
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
      genres:'',
      published:new Date()
    });
  }

  closeAddBookDialog() {
    this.dialogRef.close()
  }

  submit() {
    this.homePageService.AddBook(this.form.value).subscribe(()=>{
      this.closeAddBookDialog();
    })
  }
}
