import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { DecimalPipe } from '@angular/common';


import { JobService } from '../../../../core/services/job.service';
import { SavedJobService } from '../../../../core/services/saved-job.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails {

  private route = inject(ActivatedRoute);
  private jobService = inject(JobService);

  job = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.jobService.getJob(id))
    ),
    {
      initialValue: null
    }
  );

  //saved job
  savedJobService = inject(SavedJobService);

  toggleSaved() {
    if (this.job()) {
      this.savedJobService.toggle(this.job()!.id);
    }
  }

}