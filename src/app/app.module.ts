import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataService, EntityDefinitionService, EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { DxLoadIndicatorComponent, DxLoadIndicatorModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './shared/components/error-data/error-data.component';
import { UsersDataService } from './shared/services/users-data.service';
import { entityConfig } from './entity-metadata';
import { appReducer } from './store/app.state';
import { SpinnerModule } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    SpinnerModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'LocalNgRxStore'
    } as StoreDevtoolsOptions),
    EntityDataModule.forRoot(entityConfig),
    DxLoadIndicatorModule
  ],
  exports: [],
  providers: [
    ScreenService,
    UsersDataService,
    AppInfoService,
    EntityDataService,
    EntityDefinitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(entityDateService: EntityDataService, usersDataService: UsersDataService) {
    entityDateService.registerService('UsersData', usersDataService);
  }
}
