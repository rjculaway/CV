import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { ProfileRouteModule, components } from './profile-route.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    
    ProfileRouteModule
  ],
  declarations: [components]
})
export class ProfileModule { }
