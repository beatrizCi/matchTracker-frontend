import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match.model';
import { environment } from '../../src/environments/environment';
import { ClubStat } from '../models/club-stat.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = `${environment.apiUrl}/Matches`;

  constructor(private http: HttpClient) { 
    console.log('API URL:', this.apiUrl); 
  }

  getMatchesByDay(matchDay: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/${matchDay}`);
  }

  importMatches(matches: Match[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/import`, matches);
  }

  getClubStats(): Observable<ClubStat[]> {
    return this.http.get<ClubStat[]>(`${environment.apiUrl}/ClubStats`);
  }
}
