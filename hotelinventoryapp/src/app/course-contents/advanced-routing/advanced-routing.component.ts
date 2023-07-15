import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-routing',
  templateUrl: './advanced-routing.component.html',
  styleUrls: ['./advanced-routing.component.scss']
})
export class AdvancedRoutingComponent {

  constructor(private route: Router) { }

  goToRouteService() {
    alert('You are going to Route Service');
    this.route.navigate(['/advanced-routing/route-service']);
  }

}
