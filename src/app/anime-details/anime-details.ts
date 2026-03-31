import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './anime-details.html',
  styleUrl: './anime-details.css',
  standalone: true
})
export class AnimeDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);

  id: string | null = null;
  anime: any = {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré :', this.id);

    if (this.id) {
      this.http.get<any>(`http://localhost:5042/api/anime/${this.id}`)
        .subscribe((data) => {
          this.anime = data;
          console.log('Anime reçu :', this.anime);
        });
    }
  }
}
