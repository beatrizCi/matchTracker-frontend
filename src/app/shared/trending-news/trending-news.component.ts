import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { trigger, transition, style, animate } from '@angular/animations';

interface News {
  title: string;
  description: string;
  image: string;
  category: string;
  timeAgo: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule
  ],
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TrendingNewsComponent implements OnInit {
  newsList: { title: string, description: string, category: string, time: string, image: string }[] = [];
  
  constructor() { }
  
 ngOnInit(): void {
    this.newsList = [
      {
        title: 'Results and scores from the Premier League',
        description: 'Sally Jenkins wins the prestigious award for her contributions to sports journalism.',
        category: 'Club',
        time: '37 mins ago',
        image: '/assets/Vencedores.jpg'
      },
      {
        title: 'The Best 50 players and managers',
        description: 'The young talents aim for top achievements this season.',
        category: 'Club',
        time: '16 hrs ago',
        image: '/assets/pega.jpg'
      },
      {
        title: 'Tour enters final stretch',
        description: 'Barcelona\'s pre-season tour is nearing its end with exciting matches.',
        category: 'First Team',
        time: '17 hrs ago',
        image: '/assets/IPTV.jpg'

      },
      {
        title: 'Classic play-off goals',
        description: 'Mauro Icardi, Trent Alexander-Arnold and Memphis Depay all feature in this collection of classic strikes from the Champions League play-off round.',
        category: 'Club',
        time: '22 hrs ago',
        image: '/assets/Soccer.jpg'

      }
    ];
  }

  getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'Club': 'sports_soccer',
      'First Team': 'group',
      'Transfer': 'swap_horiz',
      'Match': 'sports',
      'News': 'article'
    };
    return iconMap[category] || 'article';
  }
}
