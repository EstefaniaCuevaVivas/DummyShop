import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent, canActivate: [AuthGuard] },
  {path:"Favourites",component:FavouritesComponent, canActivate: [AuthGuard] },
  {path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
