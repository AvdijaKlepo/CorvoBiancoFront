import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorCardsComponent} from "./author-cards/author-cards.component";

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, AuthorCardsComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

}
