import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { FilterModule } from 'src/app/shared/components/filter/filter.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.component';
import { UsersPageComponents } from './components/users-page.component';
import { UsersDataEffects } from './state/users-page.effects';
import { usersDataReducer } from './state/users-page.reducer';
import { USERS_STATE_NAME } from './state/users-page.selectors';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxTemplateModule,
    SpinnerModule,
    RouterModule,
    UsersRoutingModule,
    FilterModule,
    StoreModule.forFeature(USERS_STATE_NAME, usersDataReducer),
    EffectsModule.forFeature([UsersDataEffects])
  ],
  declarations: [UsersPageComponents],
  exports: [UsersPageComponents]
})
export class UsersPageModule {}
