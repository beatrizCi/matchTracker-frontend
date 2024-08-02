import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatchListComponent } from '../../features/match/match-list/match-list.component';
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
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'matchTracker-frontend';
  matches: Match[] = [];
  selectedDate: Date = new Date();

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.getMatchesByDay(1);
  }

  onMatchDayChange(date: Date): void {
    const matchDay = this.getMatchDayFromDate(date);
    this.getMatchesByDay(matchDay);
  }

  getMatchDayFromDate(date: Date): number {
    const startDate = new Date('2024-08-01');
    const diffTime = Math.abs(date.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }

  getMatchesByDay(matchDay: number): void {
    this.matchService.getMatchesByDay(matchDay).subscribe(
      (data: Match[]) => {
        this.matches = data;
      },
      (error: any) => {
        console.error('Error fetching matches', error);
      }
    );
  }
}
