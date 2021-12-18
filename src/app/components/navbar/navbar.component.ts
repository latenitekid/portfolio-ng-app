import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeRoute : string = this.route.outlet;
  routeSubscription : Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute) {
      this.routeSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.url;
        }
      });
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  navigate(dest: string) {
    this.router.navigate([dest]);
  }

}
