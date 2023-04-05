import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
// import { UsersPageComponents } from './pages/users/components/users-page.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users-page.module').then(module => module.UsersPageModule)
    //   component: UsersPageComponents
    //  canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile-page.module').then(module => module.ProfilePageModule)
    //  canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home-page.module').then(module => module.HomePageModule)
    //  canActivate: [AuthGuardService]
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  //   providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
