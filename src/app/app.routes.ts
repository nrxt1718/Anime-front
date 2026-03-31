import {Routes} from '@angular/router';
import {AnimeList} from '../anime-list/anime-list';
import {AnimeDetails} from './anime-details/anime-details';

export const routes: Routes = [
  {
    path: 'list',
    component: AnimeList
  }, {
    path: 'detail/:id',
    component: AnimeDetails
  }
];
