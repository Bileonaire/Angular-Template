import { RouterModule, Routes } from '@angular/router';
import { TripsHistoryComponent } from './components/history/history.component';
import { PendingTripsComponent } from './components/pending/pending.component';
import { TripsItineraryComponent } from './components/itinerary/itinerary.component';

const tripsRoutes: Routes = [
  { path: 'trips/pending', pathMatch: 'full', component: PendingTripsComponent, canActivate: [] },
  { path: 'trips/history', pathMatch: 'full', component: TripsHistoryComponent, canActivate: [] },
  { path: 'trips/itinerary', pathMatch: 'full', component: TripsItineraryComponent, canActivate: [] },
];

export default RouterModule.forChild(tripsRoutes);
