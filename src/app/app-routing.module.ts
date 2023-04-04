import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
    component: ProfileComponent
    //  canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent
    //  canActivate: [AuthGuardService]
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

/*

*/
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  //   providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent]
})
export class AppRoutingModule {}
