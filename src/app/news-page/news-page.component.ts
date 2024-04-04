import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomePageService} from "../home-page/home-page.service";
import {GetArticleResponseModel} from "../home-page/home-page.model";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, NgOptimizedImage, RouterLink],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent implements OnInit{
  article: GetArticleResponseModel[]=[];
   allArticles: GetArticleResponseModel[]=[];
  constructor(private service:HomePageService) {
  }
    ngOnInit(): void {
        this.loadArticle();
        this.loadAllArticles();
    }

  private loadAllArticles() {
    this.service.GetAllArticle().subscribe((x)=>
    this.allArticles=x.articles
    )
  }

  private loadArticle() {
    this.service.GetArtilce().subscribe((x)=>{
      this.article=x.articles;
    })
  }



}
