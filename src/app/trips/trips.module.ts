import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsHistoryComponent } from './components/history/history.component';
import tripsRoutes from './trips-routes';
import { PendingTripsComponent } from './components/pending/pending.component';
import { TripsItineraryComponent } from './components/itinerary/itinerary.component';

@NgModule({
  imports: [CommonModule, tripsRoutes],
  declarations: [PendingTripsComponent, TripsItineraryComponent, TripsHistoryComponent],
})
export class TripsModule {}
