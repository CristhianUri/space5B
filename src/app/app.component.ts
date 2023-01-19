import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Rocket } from './rocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-5b';
  
  rocket: Rocket[]=[];

  constructor(
    private http: HttpClient
  ){};

  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/rockets').subscribe((data:any) =>{
      this.rocket=data;
      this.rocket.forEach(element => {
        console.log(element.name)
      });
      
      
    })
  };
}
