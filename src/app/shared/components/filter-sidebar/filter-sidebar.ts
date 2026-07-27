import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  templateUrl: './filter-sidebar.html'
})
export class FilterSidebar {

  location = input('');
  jobType = input('');

  locationChange = output<string>();
  jobTypeChange = output<string>();

  onLocationChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.locationChange.emit(value);
  }

  onJobTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.jobTypeChange.emit(value);
  }
}