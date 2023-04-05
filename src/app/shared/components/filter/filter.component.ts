import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, SimpleChanges, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
  protected filters = {
    gender: false,
    city: false,
    street: false,
    email: false,
    phone: false
  };

  constructor() {}

  ngOnInit(): void {
    // Проверяем наличие сохраненных значений в localStorage
    //  const filters = JSON.parse(localStorage.getItem('filters'));
    //  if (filters) {
    //    this.filters = filters;
    //  }
  }

  saveFilters(): void {
    localStorage.setItem('filters', JSON.stringify(this.filters));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // Сохраняем изменения значений фильтров в localStorage
    localStorage.setItem('filters', JSON.stringify(this.filters));
  }
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule {}
