import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomePageComponent} from "./home-page/home-page.component";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {AuthorComponent} from "./author/author.component";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,
    HomePageComponent,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path:'home-page',
        component:HomePageComponent,

      },
      {
        path: 'book-details/:id',
        component: BookDetailsComponent
      },
      {
        path:'',
        redirectTo:'home-page',
        pathMatch:'full'
      },
      {
        path:'author',
        component:AuthorComponent
      }
    ]),
    RouterTestingModule,
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
