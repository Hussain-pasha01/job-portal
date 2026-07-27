import { Component, computed, inject, signal } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { JobService } from '../../../../core/services/job.service';
import { JobCard } from '../../../../shared/components/job-card/job-card';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { FilterSidebar } from '../../../../shared/components/filter-sidebar/filter-sidebar';
import { SortDropdown } from '../../../../shared/components/sort-dropdown/sort-dropdown';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCard, SearchBar, FilterSidebar, SortDropdown],
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

  location = signal('');

  jobType = signal('');

  sort = signal('latest');

  //Add the computed signal
  filteredJobs = computed(() => {

    let jobs = [...this.allJobs()];

    const search = this.search().toLowerCase();

    if (search) {

      jobs = jobs.filter(job =>

        job.title.toLowerCase().includes(search) ||

        job.company.toLowerCase().includes(search) ||

        job.skills.some(skill =>
          skill.toLowerCase().includes(search)
        )

      );

    }

    if (this.location()) {

      jobs = jobs.filter(job =>
        job.location === this.location()
      );

    }

    if (this.jobType()) {

      jobs = jobs.filter(job =>
        job.jobType === this.jobType()
      );

    }

    switch (this.sort()) {

      case 'salary':

        jobs.sort((a, b) => b.salary - a.salary);

        break;

      case 'company':

        jobs.sort((a, b) =>
          a.company.localeCompare(b.company)
        );

        break;

      default:

        jobs.sort((a, b) =>
          new Date(b.postedDate).getTime() -
          new Date(a.postedDate).getTime()
        );

    }

    return jobs;

  });


  //update
  updateSearch(value: string) {
    this.search.set(value);
  }
  
  updateLocation(value: string) {

    this.location.set(value);

  }

  updateJobType(value: string) {

    this.jobType.set(value);

  }

  updateSort(value: string) {

    this.sort.set(value);

  }

}