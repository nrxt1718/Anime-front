import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import {NgStyle} from '@angular/common';
@Component({
  selector: 'app-anime-detail',
  imports: [
    RouterLink,
   ButtonModule, CarouselModule, TagModule, NgStyle,
  ],
  templateUrl: './anime-list.html',
})
export class AnimeList implements OnInit {
  private http = inject(HttpClient);
  animes = signal<any[]>([]);
  responsiveOptions: any[] | undefined;
  ngOnInit() {
    this.http.get<any[]>('http://localhost:5042/api/anime').subscribe((result) => {
      this.animes.set(result);
    });this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
