import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MatCell,
  MatHeaderCell,
  MatHeaderRow,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatchService } from '../../../../core/services/match.service';
import { Match } from '../../../../core/models/match.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormField,
    MatSelect,
    MatLabel,
    MatOption,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarRow,
    MatToolbarModule,
    MatHeaderCell,
    MatCell,
    MatCard,
    MatCardContent,
    MatHeaderRow,
    MatTableModule,
  ],
  styleUrls: ['./upcoming-matches.component.css'],
})
export class UpcomingMatchesComponent implements OnChanges {
  @Input() matchDay!: Date;
  @Output() matchesLoaded = new EventEmitter<Match[]>();
  @Input() matches: Match[] = [];

  constructor(private matchService: MatchService) {}

  ngOnChanges() {
    if (this.matchDay) {
      const day = this.matchDay.getDate();
      this.matchService.getMatchesByDay(day).subscribe((matches) => {
        this.matches = matches.sort((a, b) =>
          b.kickOffTime.localeCompare(a.kickOffTime)
        );
        this.matchesLoaded.emit(this.matches);
      });
    }
  }
}
