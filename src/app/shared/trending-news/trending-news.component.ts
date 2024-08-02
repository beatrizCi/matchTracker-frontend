import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule,MatListModule,MatButtonModule],
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.scss']
})
export class TrendingNewsComponent implements OnInit {
  newsList: Array<{ image: string, title: string, time: string }> = []; 

  ngOnInit(): void {
    this.newsList = [
      {
        image: '/assets/image1.jpg', 
        title: 'Results And Scores From The Premier League!',
        time: '5 Hours Ago'
      },
      {
        image: '/assets/image2.jpg',
        title: 'Here Are The Top 100 Players And Managers',
        time: '11 Oct 2023, 06:00 AM'
      },
      {
        image: '/assets/image3.jpg',
        title: 'Join Or Start A Competition Now!',
        time: '10 Oct 2023, 09:00 PM'
      },
      
    ];
  }
}
