import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html'
})
export class SearchBar {

  search = input('');

  searchChange = output<string>();

  onSearch(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.searchChange.emit(value);

  }

}