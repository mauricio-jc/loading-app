import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loading = false;

  // constructor(public router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationStart) {
  //       this.loading = true;
  //     }

  //     if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
  //       this.loading = false;
  //       console.log(event);
  //     }
  //   });
  // }

  ngOnInit(): void {
  }
}
