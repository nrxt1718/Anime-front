import {Component, inject, Injectable, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './anime-list.html',
})
export class AnimeList implements OnInit {
  private http = inject(HttpClient);
  animes = signal<any[]>([]);
  ngOnInit() {
    this.http.get<any[]>('http://localhost:5042/api/anime').subscribe((result) => {
      this.animes.set(result);
    });
  }
}
