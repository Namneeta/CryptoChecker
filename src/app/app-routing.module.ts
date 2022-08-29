import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'coinlist' , component:CoinListComponent},
  {path:'coin-detail/:id' ,component:CoinDetailComponent},
  {path:'home' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
