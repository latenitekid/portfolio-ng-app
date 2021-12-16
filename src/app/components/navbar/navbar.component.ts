import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeRoute : string = this.route.outlet;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(dest: string) {
    this.router.navigate([dest]);
  }

}
