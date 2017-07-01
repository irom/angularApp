
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent},
   { path: 'schedule', component: ScheduleComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
