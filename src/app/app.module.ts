import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';
import { PhotosComponent } from './photos/photos.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HomeComponent,
    WeatherComponent,
    PhotosComponent,
    BooksComponent,
    MusicComponent,
    RecipesComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, GalleriaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
