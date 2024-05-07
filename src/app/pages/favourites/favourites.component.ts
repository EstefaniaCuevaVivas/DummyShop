import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/products';
import { FavouritesService } from 'src/app/shared/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent{
  @Input() favorites: Product[];

  constructor(private favouritesService: FavouritesService) {
    
  }

  ngOnInit(): void {
    this.favorites = this.favouritesService.getFavorites();    
  }

  removeFromFavorites(product: Product): void {
    this.favouritesService.removeFromFavorites(product);
    // Updates the list of favourites after deleting the product
    this.favorites = this.favouritesService.getFavorites();
  }


}
