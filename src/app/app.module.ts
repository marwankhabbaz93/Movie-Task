import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, Router, Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './component/movie/movie.component';
import { CategoryComponent } from './component/category/category.component';
import { ActorComponent } from './component/actor/actor.component';
// import { NgProgressModule } from '@ngx-progressbar/core';
import { UpcomingComponent } from './component/upcoming/upcoming.component';
import { FilterComponent } from './component/filter/filter.component';
import { NgProgressModule } from '@ngx-progressbar/core';

const appRoutes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'category/:id/:name', component: CategoryComponent},
  {path: 'actor/:id', component: ActorComponent},
  {path: 'filter/:name', component: FilterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieComponent,
    CategoryComponent,
    ActorComponent,
    UpcomingComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    // HttpClient,
    // HttpClientModule,
    JsonpModule,

    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
