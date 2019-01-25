import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'routes/create', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'routes/inventory', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'cabs/pending', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'cabs/itinerary', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'settings/fellows', pathMatch: 'full', component: DashboardComponent, canActivate: [] },
  { path: 'settings/departments', pathMatch: 'full', component: DashboardComponent, canActivate: [] },

  // otherwise redirect to home
  { path: '**', redirectTo: '', canActivate: [] }
];

export default  RouterModule.forRoot(routes);
