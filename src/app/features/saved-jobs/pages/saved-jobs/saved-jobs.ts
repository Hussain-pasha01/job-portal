import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { JobService } from '../../../../core/services/job.service';
import { SavedJobService } from '../../../../core/services/saved-job.service';
import { JobCard } from '../../../../shared/components/job-card/job-card';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [JobCard],
  templateUrl: './saved-jobs.html',
  styleUrl: './saved-jobs.css'
})
export class SavedJobs {

  private jobService = inject(JobService);

  savedJobService = inject(SavedJobService);

  jobs = toSignal(
    this.jobService.getJobs(),
    {
      initialValue: []
    }
  );

  savedJobs = computed(() => {

    return this.jobs().filter(job =>
      this.savedJobService.savedJobIds().includes(job.id)
    );

  });

}