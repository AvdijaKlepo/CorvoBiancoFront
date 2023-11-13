import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ArticleComponent} from "./article/article.component";
import {BooksComponent} from "./books/books.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {NewsInterviewsComponent} from "./news-interviews/news-interviews.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavBarComponent, ArticleComponent, BooksComponent, ReviewsComponent, NewsInterviewsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
