import { Injectable } from '@angular/core';
import { Product } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  public favoritesKey = 'favorites';

  constructor() {}

 // Adds a product to the favorites list.
addToFavorites(product: Product): void {
  const favorites = this.getFavorites(); // Retrieves the current favorites list from local storage.
  favorites.push(product); // Adds the product to the favorites list.
  this.saveFavorites(favorites); // Saves the updated favorites list to local storage.
}

// Removes a product from the favorites list.
removeFromFavorites(product: Product): void {
  let favorites = this.getFavorites(); // Retrieves the current favorites list from local storage.
  favorites = favorites.filter(fav => fav.id !== product.id); // Deletes the product from the favorites list based on its id.
  this.saveFavorites(favorites); // Saves the updated favorites list to local storage.
}

// Retrieves the favorites list stored in local storage.
getFavorites(): Product[] {
  const favoritesString = localStorage.getItem(this.favoritesKey); // Retrieves the favorites list as a string from local storage.
  return favoritesString ? JSON.parse(favoritesString) : []; // If the favorites list exists, parses it back into an array of Product objects; otherwise, returns an empty array.
}

// Clears the entire favorites list from local storage.
clearFavorites(): void {
  localStorage.removeItem(this.favoritesKey); // Removes the key storing the favorites list from local storage.
}

// Saves the favorites list to local storage.
private saveFavorites(favorites: Product[]): void {
  localStorage.setItem(this.favoritesKey, JSON.stringify(favorites)); // Converts the favorites list into JSON format and saves it to local storage.
}



}
