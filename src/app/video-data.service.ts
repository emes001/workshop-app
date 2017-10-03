import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './common/data-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const API_URL = 'http://localhost:8085/videos';

@Injectable()
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL).map(x => x.splice(0, 2));
  }

}
