import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersPageComponents } from './components/users-page.component';
import { UserDataEffects } from './state/users-page.effects';
import { userDataReducer } from './state/users-page.reducer';
import { USERS_STATE_NAME } from './state/users-page.selectors';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    StoreModule.forFeature(USERS_STATE_NAME, userDataReducer),
    EffectsModule.forFeature([UserDataEffects])
  ],
  declarations: [UsersPageComponents],
  exports: []
})
export class UsersPageModule {}
