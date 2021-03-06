import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { IncidentDashboardComponent } from './incident-dashboard/incident-dashboard.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'mission',
        component: MissionComponent,
        data: {
          breadcrumb: 'Mission'
        }
      },
      {
        path: 'incidents',
        component: IncidentDashboardComponent,
        data: {
          breadcrumb: 'Incidents'
        }
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
