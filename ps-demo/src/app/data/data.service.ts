import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any>{

    // you can get the url from https://putsreq.com/ to simulate web service response
    return this.http.post('https://putsreq.com/E3sCj8QNREyPoLFSH04r', userSettings);
    //return of(userSettings);
  }
}
