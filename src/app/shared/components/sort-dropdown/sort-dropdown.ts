import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  standalone: true,
  templateUrl: './sort-dropdown.html'
})
export class SortDropdown {

  sort = input('latest');

  sortChange = output<string>();

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(value);
  }

}