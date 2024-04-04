import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HomePageService} from "../home-page.service";
import {GetArticleResponse, GetArticleResponseModel} from "../home-page.model";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-news-interviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, CarouselModule, RouterLink, NgOptimizedImage],
  templateUrl: './news-interviews.component.html',
  styleUrl: './news-interviews.component.css'
})
export class NewsInterviewsComponent implements OnInit{
  articles: GetArticleResponseModel[]=[];
  customOptions:OwlOptions={
    items:3,
    autoWidth:true,
    nav:true,
    mouseDrag:false,
    touchDrag:false,
    pullDrag:false,
    slideBy:3,
    smartSpeed:300,
    dots:false,
    loop:false,
    lazyLoad:true
  }
  constructor(private homePageService:HomePageService) {
  }

  ngOnInit(): void {
        this.loadArticles();
    }

    private loadArticles()
    {
      this.homePageService.GetAllArticle().subscribe((x:GetArticleResponse)=>{
        this.articles = x.articles;
      })
    }

}
