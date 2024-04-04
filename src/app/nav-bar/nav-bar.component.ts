import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AddBookComponent} from "../home-page/add-book/add-book.component";
import {HomePageService} from "../home-page/home-page.service";
import {AddAuthorsComponent} from "../author/add-authors/add-authors.component";
import {AddGenreComponent} from "../home-page/add-genre/add-genre.component";
import {AddSeriesComponent} from "../home-page/add-series/add-series.component";
import {MatMenuModule} from "@angular/material/menu";
import {AddArticleComponent} from "../home-page/add-article/add-article.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatInputModule, MatButtonModule, RouterLink, MatSelectModule, FormsModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(public homePageService:HomePageService,public dialog:MatDialog) {
  }
  openAddAuthorDialog() {
    const dialogRef = this.dialog.open(AddAuthorsComponent)
    dialogRef.afterClosed().subscribe(()=>{

    })
  }

  openAddGenreDialog() {
    const dialogRef = this.dialog.open(AddGenreComponent)
  }

  openAddSeriesDialog() {
    const dialogRef = this.dialog.open(AddSeriesComponent)
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent).afterClosed().subscribe(()=>{
      this.homePageService.GetBooksHomePage()
    })
  }

  openAddArticleDialog() {
    const dialogRef = this.dialog.open(AddArticleComponent).afterClosed().subscribe(()=>{
      this.homePageService.GetAllArticle();
    });
  }
}
