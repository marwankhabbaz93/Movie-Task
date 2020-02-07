import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { ActivatedRoute } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  id: number;
  name: string;
  movies: Object;
  constructor(private _movieservice: MyserviceService, private router: ActivatedRoute, public progress: NgProgress) { 
    this.progress.start();
    setTimeout(() => {
      this.progress.done();
    }, 4000);
  
    this.id = this.router.snapshot.params['id'];
    this.name = this.router.snapshot.params['name'];
    this._movieservice.get_movie_by_category(this.id).subscribe(res => {
      this.movies = res.results;
      console.log(this.movies);
    })
  }

  ngOnInit() {
  
  }

}
