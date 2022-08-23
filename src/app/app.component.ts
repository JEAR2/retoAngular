import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  constructor(private route:Router){}

  public home(){
    this.route.navigate(['home']);
  }
  public homeIcon(){
    this.route.navigate(['']);
  }
  public about(){
    this.route.navigate(['about']);
  }
}


