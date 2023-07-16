import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-advanced-routing',
  templateUrl: './advanced-routing.component.html',
  styleUrls: ['./advanced-routing.component.scss']
})
export class AdvancedRoutingComponent {

  constructor(private route: Router, private mainService: MainService) { }

  goToRouteService() {
    alert('You are going to Route Service');
    this.route.navigate(['/advanced-routing/route-service']);
  }

}
