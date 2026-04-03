import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  imports: [
    ButtonModule, CarouselModule, TagModule, RouterLink,
  ],
  templateUrl: './anime-list.html',
  standalone: true,
})
export class AnimeList implements OnInit {
  private http = inject(HttpClient);
  animes = signal<any[]>([]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.http.get<{ data: any[] }>('').subscribe((result) => {
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
