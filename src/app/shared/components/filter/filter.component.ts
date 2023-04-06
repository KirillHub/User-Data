import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Filter from '../../models/Filter.model';
import { UsersDataState } from 'src/app/pages/users/state/users-page.state';
import { customUrl, filteredOptions } from 'src/app/pages/users/state/users-page.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  protected filters: Filter = {
    gender: true,
    city: true,
    street: true,
    email: true,
    phone: true
  };
  currentUserSettings!: string[];
  API_URL =
    'https://randomuser.me/api/?inc=name,gender,email,phone,picture,location&noinfo&nat=us&results=100&seed=123';
  restUserSettings!: string[]; // сюда войдут те параметры, которые внутри данных locations.

  constructor(private store: Store<UsersDataState>) {}

  @Output() filterChanged = new EventEmitter<Filter>();

  onFilterChange(): void {
    this.filterChanged.emit(this.filters);

    this.currentUserSettings = [];
    for (const key of Object.keys(this.filters) as (keyof Filter)[]) {
      if (this.filters[key] === false) {
        this.currentUserSettings.push(key);
      }
    }

    this.restUserSettings = this.currentUserSettings.filter(
      params => params === 'street' || params === 'city'
    );

    this.store.dispatch(
      customUrl({ initialUrl: this.API_URL, filterProperties: this.currentUserSettings })
    );

    this.store.dispatch(filteredOptions({ filterOpt: this.restUserSettings })); // прокидываю параметры и отфильтрую полученный object уже в effects
  }

  saveFilters(): void {
    localStorage.setItem('filters', JSON.stringify(this.filters));
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule {}
