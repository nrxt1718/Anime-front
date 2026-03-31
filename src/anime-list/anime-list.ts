import {Component, inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './anime-list.html',
  styleUrl: './anime-list.css',
  standalone: true
})
export class AnimeList implements OnInit {
  private http: HttpClient;
  animes: any[] = [];

  constructor(private httpParam: HttpClient) {
    this.http = httpParam;
  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5042/api/anime').subscribe((result) => {
      this.animes = result;
    });
  }
}
