import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
name: string;
searchStr: string;
searchRes : Array<Object>;
movies: Array<Object>;

  constructor(private router: ActivatedRoute, private _moviesService: MyserviceService) { 
    
  }

  ngOnInit() {
    this.movies = [];
    this.name = this.router.snapshot.params['name'];
    this._moviesService.movie_by_filter(this.name).subscribe( res =>{
      this.movies = res.results; 
    })
  }
  searchMovies(){
    this._moviesService.searchmovie(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      console.log(this.searchRes);
    })
  }

}
