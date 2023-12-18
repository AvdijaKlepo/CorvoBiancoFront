import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HomePageService} from "../home-page.service";

@Component({
  selector: 'app-add-series',
  standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-series.component.html',
  styleUrl: './add-series.component.css'
})
export class AddSeriesComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb:FormBuilder,private dialog:MatDialogRef<AddSeriesComponent>,private homePageService:HomePageService) {
  }

  ngOnInit(): void {
        this.form=this.fb.group({
          seriesName:''
        });
    }
  submit() {
    this.homePageService.AddSeries(this.form.value).subscribe(()=>{
      this.closeAddSeriesDialog();
    })
  }

  closeAddSeriesDialog() {
    this.dialog.close();
  }
}
