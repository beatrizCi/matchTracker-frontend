import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatchService } from '../../../core/services/match.service';
import { Match } from '../../../core/models/match.model';
import { MatchCardComponent } from '../match-card/match-card.component';

@Component({
  selector: 'app-match-list',
  standalone: true,
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatSelectModule, MatchCardComponent]
})
export class MatchListComponent implements OnInit {
  matchDay: number = 1;
  selectedMatchDay: number | null = null;
  @Input() matches: Match[] = [];

  constructor(private matchService: MatchService) { }
  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(): void {
    this.matchService.getMatchesByDay(this.matchDay).subscribe((data: Match[]) => {
      this.matches = data.sort((a, b) => new Date(b.kickOffTime).getTime() - new Date(a.kickOffTime).getTime());
    });
  }

  onMatchDayChange(event: Event): void {
    const matchDay = (event.target as HTMLSelectElement).value;
    if (matchDay) {
      this.loadMatches(Number(matchDay));
    }
  }

  loadMatches(matchDay: number): void {
    this.matchService.getMatchesByDay(matchDay).subscribe(
      (data: Match[]) => {
        this.matches = data;
      },
      (error) => {
        console.error('Error fetching matches', error);
      }
    );
  }
}
