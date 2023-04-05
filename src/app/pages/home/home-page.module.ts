import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.component';
import { HomePageComponent } from './components/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, SpinnerModule, HomeRoutingModule],
  declarations: [HomePageComponent],
  exports: []
})
export class HomePageModule {}
