import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';

import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileService } from './services/profile.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path:'profile/:id',
    component: ProfileDetailComponent,
    resolve: {
      profiles: ProfileService
    }
  },
  {
    path: 'profile',
    component: ProfileListComponent
  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProfileRouteModule { }


export const components = [ProfileDetailComponent, ProfileListComponent];