import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-route-guards',
  templateUrl: './route-guards.component.html',
  styleUrls: ['./route-guards.component.scss']
})
export class RouteGuardsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // });

    this.router.events.pipe(
      filter((event)=>event instanceof NavigationStart)
      ).subscribe((event) => {
        console.log('NavigationStart event triggered');
    })

    this.router.events.pipe(
      filter((event)=>event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('NavigationEnd event triggered');
    })
  }
}
