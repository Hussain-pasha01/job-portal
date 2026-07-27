import { Component, computed, inject, signal } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { JobService } from '../../../../core/services/job.service';
import { JobCard } from '../../../../shared/components/job-card/job-card';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCard, SearchBar],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css'
})
export class Jobs {

  private jobService = inject(JobService);

  allJobs = toSignal(
    this.jobService.getJobs(),
    {
      initialValue: []
    }
  );

  //Add search signal
  search = signal('');

  //Add the computed signal
  filteredJobs = computed(() => {

    const term = this.search().toLowerCase();

    return this.allJobs().filter(job =>

      job.title.toLowerCase().includes(term) ||

      job.company.toLowerCase().includes(term) ||

      job.skills.some(skill =>
        skill.toLowerCase().includes(term)
      )

    );

  });



  //update
  updateSearch(value: string) {
    this.search.set(value);
  }

}