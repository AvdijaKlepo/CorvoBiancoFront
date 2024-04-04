import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {HomePageService} from "../../home-page/home-page.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GetAuthorResponseModel} from "../author.models";
import {MatListModule} from "@angular/material/list";
import {EditAuthorDetailsComponent} from "../edit-author-details/edit-author-details.component";
import {EditAuthorImageComponent} from "../edit-author-image/edit-author-image.component";

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgOptimizedImage, MatListModule],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent implements OnInit{
  authorDetails!: GetAuthorResponseModel;

  sliceOptions  = {
    start: 0,
    end: 800,
    default: 800
  }
  constructor(private service:HomePageService,
              private route:ActivatedRoute,
              public dialog:MatDialog) {
  }
    ngOnInit(): void {
        this.GetAuthorDetails();
    }

  seeMore($event: any) {
    // @ts-ignore
    this.sliceOptions.end=this.sliceOptions.end?undefined:this.sliceOptions.default;
  }

    GetAuthorDetails()
    {
      this.service.GetAuthorDetails(this.route.snapshot.params['id']).subscribe((x)=>{
        this.authorDetails = x;
      })
    }

  openEditAuthorDialog(authorDetails: GetAuthorResponseModel) {
    this.dialog.open(EditAuthorDetailsComponent,
      {
        data:{
          firstName:authorDetails.firstName,
          lastName:authorDetails.lastName,
          bio:authorDetails.bio,
          born:authorDetails.born,
          id:authorDetails.id,
          books:authorDetails.books,
          profileImage:authorDetails.profilePicture
        }
      }).afterClosed().subscribe(()=>{
        this.GetAuthorDetails();
    })
  }

  openEditAuthorImage() {
    this.dialog.open(EditAuthorImageComponent,
      {
        data:{
          firstName: this.authorDetails.firstName,
          lastName: this.authorDetails.lastName,
          bio: this.authorDetails.bio,
          born: this.authorDetails.born,
          id: this.authorDetails.id,
          books: this.authorDetails.books,
          profileImage: this.authorDetails.profilePicture
        }
      }).afterClosed().subscribe(()=>{
        location.reload()
    })
  }
}
