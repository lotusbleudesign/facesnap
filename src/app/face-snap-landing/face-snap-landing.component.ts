import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap-landing',
  templateUrl: './face-snap-landing.component.html',
  styleUrls: ['./face-snap-landing.component.scss']
})
export class FaceSnapLandingComponent {

  constructor(private router: Router) { }

  goToFacesnap(): void {
    this.router.navigateByUrl("facesnaps")
  }
}
