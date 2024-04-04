import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomePageService} from "../home-page/home-page.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {GetArticleResponseModel} from "../home-page/home-page.model";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {EditArticleDetailsComponent} from "./edit-article-details/edit-article-details.component";
import {EditArticleImageComponent} from "./edit-article-image/edit-article-image.component";
import {MatMenuModule, MatMenuPanel} from "@angular/material/menu";

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent implements OnInit{
  articleDetail!: GetArticleResponseModel;
  menu!: MatMenuPanel | null;

  constructor(private homePageService:HomePageService,private route:ActivatedRoute,public dialog:MatDialog) {
  }

  ngOnInit(): void {
      this.getArticleDetails();

  }

  private getArticleDetails() {
    this.homePageService.GetArticleDetails(this.route.snapshot.params['id']).subscribe((x)=>{
      this.articleDetail = x;
    })
  }

  openAddBookCoverDialog(articleDetail: object) {
    const dialogRef = this.dialog.open(EditArticleDetailsComponent,
      {
        data:{
          title:this.articleDetail.title,
          articleDescription:this.articleDetail.articleDescription,
          posted:this.articleDetail.posted,
          articlePreview:this.articleDetail.articlePreview,
          genreId:this.articleDetail.genreId,
          articleImage:this.articleDetail.articleImage,
          id:this.articleDetail.id
        }
      }).afterClosed().subscribe(()=>{
        this.getArticleDetails();
    })
  }

  openEditArticleImage() {
    this.dialog.open(EditArticleImageComponent,
      {
        data:{
          title:this.articleDetail.title,
          articleDescription:this.articleDetail.articleDescription,
          posted:this.articleDetail.posted,
          articlePreview:this.articleDetail.articlePreview,
          genreId:this.articleDetail.genreId,
          articleImage:this.articleDetail.articleImage,
          id:this.articleDetail.id
        }
      }).afterClosed().subscribe(()=>{
        location.reload();
    })
  }
}
