import {Component, inject, Injectable, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-anime-detail',
  imports: [
    ButtonModule, CarouselModule, TagModule,
  ],
  templateUrl: './anime-list.html',
  standalone: true,
})
export class AnimeList implements OnInit {
  private http = inject(HttpClient);
  animes = signal<any[]>([]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.http.get<{ data: any[] }>('https://api.jikan.moe/v4/top/anime?type=tv').subscribe((result) => {
      this.animes.set(result.data);
    });
    this.responsiveOptions = [
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
