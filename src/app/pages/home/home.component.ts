import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Response } from 'src/app/interface/response';
import { FavouritesService } from 'src/app/shared/favourites.service';
import { Product } from 'src/app/interface/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: Product[];


  constructor(private productService: ProductsService, private favouritesService: FavouritesService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((response: Response) => {

      this.products = response.products

    }

    )

  }

  addToFavorites(product: Product): void {
    this.favouritesService.addToFavorites(product);
    this.products = this.products.filter(p => p.id !== product.id); // Remove the product from the list of available products in Home
  }

}