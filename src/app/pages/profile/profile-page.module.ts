import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';

import { ProfilePageComponent } from './components/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { USER_STATE_NAME } from './state/profile-page.selectors';
import { userProfileDataReducer } from './state/profile-page.reducer';
import { UserProfileDataEffects } from './state/profile-page.effects';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DxFormModule,
    StoreModule.forFeature(USER_STATE_NAME, userProfileDataReducer),
    EffectsModule.forFeature([UserProfileDataEffects])
  ],
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {}
