import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { NgProgress } from '@ngx-progressbar/core';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
id: number;
person: Object;
movies: Array<Object>;
  constructor(private movieserive: MyserviceService, private router: ActivatedRoute,  public progress: NgProgress) {
    this.progress.start();
    setTimeout(() => {
      this.progress.done();
    }, 4000);
  
   }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.movieserive.get_actor_details(this.id).subscribe( res => {
      this.person = res;
    })
    this.movieserive.get_actor_movies(this.id).subscribe(res => {
      this.movies = res.cast;
    })
  }

}
