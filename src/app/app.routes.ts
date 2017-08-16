import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/index';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
