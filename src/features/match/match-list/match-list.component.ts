import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Match } from '../../../core/models/match.model';

@Component({
  selector: 'app-match-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent {
  @Input() matches: Match[] = [];
} 