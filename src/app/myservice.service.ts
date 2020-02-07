import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Jsonp, URLSearchParams} from '@angular/http';
// import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apikey:string;
  
  constructor(private httpc: HttpClient, private _jsonp: Jsonp) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
   }
  public getmovies_cat(){

    return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=__ng_jsonp__.__req0.finished&language=en-US&api_key=fed69657ba4cc6e1078d2a6a95f51c8c')
    .pipe(map(data => {
        return data.json();
    }));
  }
  public getrated_movies(){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
        return data.json();
      }))
  }
  public searchmovie(searchStr){
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public movie_by_filter(name :string){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + name + '?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_popularmovie(){
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_movie_details(id : number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_reviews(id: number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_cast(id: number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_similar_movie(id : number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/similar?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_trailler(id: number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_movie_by_category(id: number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_actor_details(id: number) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public get_actor_movies(id: number){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
      return data.json();
    }))
  }
  public now_playing(){
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/now_playing?callback=JSONP_CALLBACK', {search})
    .pipe(map(data => {
        return data.json();
      }))
  }
}
