import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from "./components/settings/settings.component";
import { PlannerComponent } from "./components/planner/planner.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'planner'
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: 'planner'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
