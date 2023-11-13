import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-news-interviews',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './news-interviews.component.html',
  styleUrl: './news-interviews.component.css'
})
export class NewsInterviewsComponent {

}
