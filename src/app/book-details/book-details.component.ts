import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookInfoComponent} from "./book-info/book-info.component";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, BookInfoComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  ngOnInit(): void {

  }

}
