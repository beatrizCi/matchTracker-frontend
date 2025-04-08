import { Component, OnInit } from '@angular/core';
import { ClubStat } from '../../../../core/models/club-stat.model';
import { MatchService } from '../../../../core/services/match.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlighted-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlighted-match.component.html',
  styleUrl: './highlighted-match.component.scss'
})
export class HighlightedMatchComponent implements OnInit {

  stats: ClubStat[] = [];

  

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getClubStats().subscribe(data => {
      this.stats = data;
    });
}


}