import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Job } from '../../../core/models/job';
import { SavedJobService } from '../../../core/services/saved-job.service';

@Component({
  selector: 'app-job-card',
  imports: [RouterLink],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css'
})
export class JobCard {
  job = input.required<Job>();

  savedJobService = inject(SavedJobService);

  toggleSaved() {
    this.savedJobService.toggle(this.job().id);
  }
}