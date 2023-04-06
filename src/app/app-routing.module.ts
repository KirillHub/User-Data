import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users-page.module').then(module => module.UsersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile-page.module').then(module => module.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home-page.module').then(module => module.HomePageModule)
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
