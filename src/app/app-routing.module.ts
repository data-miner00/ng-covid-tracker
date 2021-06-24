import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
