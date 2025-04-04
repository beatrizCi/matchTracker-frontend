import { Component, Input } from '@angular/core';
import { Match } from '../../../core/models/match.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-match-card',
  standalone: true,
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
  imports: [CommonModule, MatCardModule]
})
export class MatchCardComponent {
  @Input() match!: Match;

  teamLogoMap: { [key: string]: string } = {
    'Bayern Munich': 'assets/logos/bayern.jpg',
    'Liverpool': 'assets/logos/liverpool.jpg',
    'Real Madrid': 'assets/logos/realmadrid.jpg',
    'Manchester City': 'assets/logos/mancity.jpg',
    'Barcelona': 'assets/logos/barcelona.jpg',
    'Juventus': 'assets/logos/juventus.jpg',
    'PSG': 'assets/logos/psg.jpg',
    'Chelsea': 'assets/logos/chelsea.jpg'
    
  };
  
  get teamALogo(): string {
    return this.teamLogoMap[this.match.teamA] || 'assets/logos/default.jpg';
  }
  
  get teamBLogo(): string {
    return this.teamLogoMap[this.match.teamB] || 'assets/logos/default.jpg';
  }
  
  
}
