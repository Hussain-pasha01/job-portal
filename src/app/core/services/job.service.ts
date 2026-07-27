import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Job } from '../models/job';
import { API } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private http = inject(HttpClient);

  constructor() {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(API.JOBS);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${API.JOBS}/${id}`);
  }

}