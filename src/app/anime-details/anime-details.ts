import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-details.html',
  styleUrl: './anime-details.css',
  standalone: true
})
export class AnimeDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  id: string | null = null;
  anime = signal<any>({ });
  trailerUrl = computed<SafeResourceUrl | null>(() => {     const id = this.anime()?.urlVideo; return id ? this.sanitizer.bypassSecurityTrustResourceUrl(id) : null;});
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré :', this.id);

    if (this.id) {
      this.http.get<any>(`http://localhost:5042/api/anime/${this.id}`)
        .subscribe((data) => {
          this.anime.set(data);
        });
    }
  }

  protected getVideoUrl(urlVideo: any) {

  }}
