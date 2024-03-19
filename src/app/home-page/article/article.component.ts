import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {HomePageService} from "../home-page.service";
import {GetArticleResponseModel} from "../home-page.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgOptimizedImage, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
   article: GetArticleResponseModel[]=[];
  constructor(private homePageService:HomePageService) {
  }

  ngOnInit(): void {
        this.loadArticles();
    }

    private loadArticles(){
      this.homePageService.GetArtilce().subscribe((x)=>{
        this.article = x.articles;
      })
    }
}
