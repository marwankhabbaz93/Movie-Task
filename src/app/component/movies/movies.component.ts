import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  topRatedList: Array<Object>;
  searchRes : Array<Object>;
  searchStr: string;
  popularList: Array<Object>;
  movie_slider : Array<Object>;
  first_slider: string;
  first_id: string;

  constructor(private _moviesService: MyserviceService) {
    this._moviesService.getrated_movies().subscribe(res => {
      this.topRatedList = res.results;
     });
     this._moviesService.get_popularmovie().subscribe( res => {
       this.popularList = res.results
     })
  }
  get_search_movie(){
    this._moviesService.searchmovie(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      console.log(this.searchRes);
    })
  }
  ngOnInit() {
    this._moviesService.now_playing().subscribe( res => {
      this.movie_slider = res.results.slice(1,4);
      this.first_slider = res.results[0].backdrop_path;
      this.first_id = res.results[0].id;
    }

    )
  }

}
