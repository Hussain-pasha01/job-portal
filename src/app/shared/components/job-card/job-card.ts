import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Job } from '../../../core/models/job';

@Component({
  selector: 'app-job-card',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css'
})
export class JobCard {
  job = input.required<Job>();
}