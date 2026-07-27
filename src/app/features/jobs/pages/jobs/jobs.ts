import { Component, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.html',
  styleUrl: './jobs.css'
})
export class Jobs {

  private jobService = inject(JobService);

  jobs = toSignal(
    this.jobService.getJobs(),
    {
      initialValue: []
    }
  );

}