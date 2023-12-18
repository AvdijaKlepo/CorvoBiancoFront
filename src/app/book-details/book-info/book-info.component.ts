import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BookDetailsService} from "../book-details.service";
import {GetBookDetailPageResponse} from "../book-details.model";
import {ActivatedRoute} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {startWith} from "rxjs";

@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit{
  bookDetails!: GetBookDetailPageResponse;
  sliceOptions  = {
    start: 0,
    end: 197,
    default: 100
  }
  constructor(private bookDetailsService:BookDetailsService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.GetBookDetails();
  }

  GetBookDetails()
  {
    this.bookDetailsService.GetBookDetails(this.route.snapshot.params['id']).subscribe((x)=>{
      this.bookDetails = x;
    })
  }

  protected readonly startWith = startWith;

  seeMore($event: any) {
    // @ts-ignore
    this.sliceOptions.end=this.sliceOptions.end?undefined:this.sliceOptions.default;
  }
}
