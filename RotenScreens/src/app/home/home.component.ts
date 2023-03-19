import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMobile = false;
  trendingMovies: any;
  trendingMoviesUrl=`http://localhost:4200/assets/data/trending-movies.json`;

  constructor(private deviceDetectorservice: DeviceDetectorService, private httpClient: HttpClient) { }


  ngOnInit() {
    this.isMobile = this.deviceDetectorservice.isMobile();
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.httpClient.get(this.trendingMoviesUrl).subscribe((movies)=>{
      this.trendingMovies=movies;
      console.log(this.trendingMovies);
    });
  }

}
