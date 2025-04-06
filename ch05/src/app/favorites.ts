import { FavoritesService } from './favorites.service';
import { FavouritesStaffService } from './favourites-staff.service';
import { ProductsService } from './products.service';

export function favoritesFactory(isFavorite: boolean) {
  //Added FavouritesStaffService just to show the dependency injection in this case
  return (favouritesStaffService: FavouritesStaffService) => {
    if (isFavorite) {
      return new FavoritesService();
    }
    return new ProductsService();
  };
}
