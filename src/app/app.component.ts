import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import{ MatchListComponent } from '../../features/match/match-list/match-list.component';
import { MatchService } from '../../core/services/match.service';
import { Match } from '../../core/models/match.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightedMatchComponent } from './shared/highlighted-match/highlighted-match.component';
import { UpcomingMatchesComponent } from './shared/upcoming-matches/upcoming-matches.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { MatTableModule } from '@angular/material/table';
import { TrendingNewsComponent } from './shared/trending-news/trending-news.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatchCardComponent } from '../../features/match/match-card/match-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    MatchListComponent,
    MatToolbarModule,
    HighlightedMatchComponent,
    UpcomingMatchesComponent,
    MainBannerComponent,
    SharedModule,
    AboutUsComponent,
    TrendingNewsComponent,
    FooterComponent,
    FlexLayoutModule,
    MatNativeDateModule,
    MatchCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'matchTracker-frontend';
  selectedDay: number = 1;
  matches: Match[] = [];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.getMatchesByDay(this.selectedDay);
  }

  onMatchDayChange(event: Event) {
    const value = Number((event.target as HTMLSelectElement).value);
    if (!isNaN(value)) {
      this.getMatchesByDay(value);
    }
  }

  getMatchesByDay(day: number) {
    this.matchService.getMatchesByDay(day).subscribe({
      next: (data: Match[]) => (this.matches = data),
      error: () => (this.matches = []),
    });
  }
}
