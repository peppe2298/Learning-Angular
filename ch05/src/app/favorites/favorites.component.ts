import { CommonModule } from '@angular/common';
import { Component, Host, Optional, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
// import { FavoritesService } from '../favorites.service';
import { favoritesFactory } from '../favorites';
import { FavouritesStaffService } from '../favourites-staff.service';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  // providers: [
  //   {provide: ProductsService, useClass: FavoritesService}
  // ]
  providers: [
    {
      provide: FavouritesStaffService, useClass: FavouritesStaffService
    },
    {
      provide: ProductsService,
      useFactory: favoritesFactory(true),
      deps: [FavouritesStaffService], //this in case the favourite factory is dependent on other classes (ProductViewService in this case)
    },
  ],
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  //host avoid the injector hierarchy check for service, optional does not broke the progam if it doesn't find it.
  constructor(@Optional() @Host() private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
