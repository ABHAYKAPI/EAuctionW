import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardModeratorComponent } from './BidDetails/BidDetails.component';
import { BoardAdminComponent } from './ProductADD/ProductADD.component';
import { PlaceBidComponent } from './place-bid/place-bid.component';

const routes: Routes = [
  { path: 'home', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mod', component:  BoardAdminComponent},
  { path: 'admin', component: BoardModeratorComponent },
  { path: 'placebid', component: PlaceBidComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }