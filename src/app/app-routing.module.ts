import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';

const routes: Routes = [{ path: '', component: HomeComponent }, {path: 'algorithm/:name', component: AlgorithmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
