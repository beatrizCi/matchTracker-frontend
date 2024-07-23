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
}
