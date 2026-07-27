import { Routes } from '@angular/router';

import { Home } from './features/home/pages/home/home';
import { Jobs } from './features/jobs/pages/jobs/jobs';
import { JobDetails } from './features/job-details/pages/job-details/job-details';
import { SavedJobs } from './features/saved-jobs/pages/saved-jobs/saved-jobs';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'jobs',
    component: Jobs
  },
  {
    path: 'jobs/:id',
    component: JobDetails
  },
  {
    path: 'saved',
    component: SavedJobs
  },
  {
    path: '**',
    redirectTo: ''
  }
];