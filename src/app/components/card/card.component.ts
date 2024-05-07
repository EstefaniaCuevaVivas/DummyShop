import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interface/products';
import { FavouritesService } from 'src/app/shared/favourites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: Product;
  public like:boolean= false;
  @Output() likesCard = new EventEmitter<Product>()


  constructor(private favoritesService: FavouritesService){}

  likeButton(): void {
    if (!this.card.like) { //Check if the card is not yet marked as "Like".
      this.card.like = true;
      this.likesCard.emit(this.card);

    } else { // If the card is already marked as "Like".
      this.card.like = false; 
      this.likesCard.emit(this.card);
      this.favoritesService.removeFromFavorites(this.card);
    }
 
}
}
