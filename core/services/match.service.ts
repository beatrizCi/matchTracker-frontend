import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match.model';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = `${environment.apiUrl}/Matches`;

  constructor(private http: HttpClient) { }

  getMatchesByDay(matchDay: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/${matchDay}`);
  }

  importMatches(matches: Match[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/import`, matches);
  }
}
