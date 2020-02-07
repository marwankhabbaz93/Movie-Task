import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgProgress } from '@ngx-progressbar/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
   id: number;
   movie : Object;
   reviews: Array<Object>;
   cast: Array<Object>;
   similarMovies : Array<Object>;
   video : Object;
   video_url ; string;
  constructor(
    private _moviesServices: MyserviceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public progress: NgProgress
  ) {
    this.progress.start();
    setTimeout(() => {
      this.progress.done();
    }, 4000);
  
   }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
      this._moviesServices.get_movie_details(this.id).subscribe( res => {
          this.movie = res;
      })
      this._moviesServices.get_reviews(this.id).subscribe( res => {
        this.reviews = res.results;
      })
      this._moviesServices.get_cast(this.id).subscribe( res => {
        this.cast = res.cast;
      })
      this._moviesServices.get_similar_movie(this.id).subscribe( res => {
        this.similarMovies = res.results;
      })
      this._moviesServices.get_trailler(this.id).subscribe( res => {
        this.video = res.results[0];
        this.video_url['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ this.video['key']);
      })

  }

}
