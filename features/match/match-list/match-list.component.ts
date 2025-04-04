import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatchService } from '../../../core/services/match.service';
import { Match } from '../../../core/models/match.model';
import { MatchCardComponent } from "../match-card/match-card.component";

@Component({
  selector: 'app-match-list',
  standalone: true,
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatSelectModule, MatchCardComponent]
})
export class MatchListComponent implements OnInit {
  matchDay: number = 1;
  @Input() matches: Match[] = [];
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatchesByDay(this.matchDay).subscribe({
      next: (data: Match[]) => {
        this.matches = data.sort(
          (a, b) => new Date(b.kickOffTime).getTime() - new Date(a.kickOffTime).getTime()
        );
      },
      error: (error) => {
        console.error('Error fetching matches:', error);
        this.matches = [];
      }
    });
  }

  onMatchDayChange(event: Event): void {
    const matchDay = Number((event.target as HTMLSelectElement).value);
    if (!isNaN(matchDay)) {this.matchDay = matchDay;
      this.getMatches();} }
}
