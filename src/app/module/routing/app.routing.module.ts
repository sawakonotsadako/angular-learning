import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from '../../component/settings/settings.component';
import {HomeComponent} from '../../component/home/home.component';
import {AboutUsComponent} from '../../component/about-us/about-us.component';
import {MaterialFeaturesComponent} from "../../component/features/material-features.component";
const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'material-features',
    component: MaterialFeaturesComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
