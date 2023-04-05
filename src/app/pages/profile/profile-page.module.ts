import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxFormModule } from 'devextreme-angular';

import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.component';
import { ProfilePageComponent } from './components/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [CommonModule, SpinnerModule, RouterModule, ProfileRoutingModule, DxFormModule],
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {}
