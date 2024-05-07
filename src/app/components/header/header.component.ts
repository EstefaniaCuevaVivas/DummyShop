import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from 'src/app/shared/favourites.service';
import { LogInService } from 'src/app/shared/log-in.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  public showModal = false;

  constructor(private router: Router, public loginService : LogInService, private favoritesService : FavouritesService) { }
 

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmLogout() {
    this.closeModal(); 
    this.loginService.logout();
    this.router.navigate([''])
    this.favoritesService.clearFavorites(); 
  }
}
