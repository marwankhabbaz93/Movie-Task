import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgProgress } from '@ngx-progressbar/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymovie';
  movie_category: Array<Object>;
  searchRes : Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MyserviceService, public progress: NgProgress) {
    this.progress.start();
    this._moviesService.getmovies_cat().subscribe(res => {
     this.movie_category =  res.genres;
    //  console.log(this.movie_category);
    });

    setTimeout(() => {
      this.progress.done();
    }, 4000);
  
 
  }
  get_search_movie(){
    this.progress.start();
    this._moviesService.searchmovie(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      console.log(this.searchRes);
      if(this.searchRes){
        this.progress.done();
      }
    })
  }
 
}
