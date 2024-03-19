import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomePageService} from "../home-page/home-page.service";
import {ActivatedRoute} from "@angular/router";
import {GetArticleResponseModel} from "../home-page/home-page.model";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent implements OnInit{
  articleDetail!: GetArticleResponseModel;

  constructor(private homePageService:HomePageService,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
      this.getArticleDetails();
      console.log(this.articleDetail)
  }

  private getArticleDetails() {
    this.homePageService.GetArticleDetails(this.route.snapshot.params['id']).subscribe((x)=>{
      this.articleDetail = x;
      console.log(this.articleDetail)
    })
  }

}
