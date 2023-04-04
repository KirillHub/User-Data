import { Component, NgModule } from '@angular/core';
import { DxLoadIndicatorModule } from 'devextreme-angular';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {}

@NgModule({
  imports: [DxLoadIndicatorModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule {}
