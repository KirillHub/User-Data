import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ScreenService, AppInfoService } from './shared/services';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes)
      .filter(cl => this.screen.sizes[cl])
      .join(' ');
  }

  showLoadingSpinner$!: Observable<boolean>;
  errorMessage$!: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private screen: ScreenService,
    public appInfo: AppInfoService
  ) {}

  ngOnInit() {
    this.showLoadingSpinner$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
  }
}
