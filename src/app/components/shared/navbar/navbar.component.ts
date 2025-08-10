import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styles: [`
    nav {
      background: #eee;
      padding: .5rem;
      li {
        display: inline-block;
      }
    }
    nav a {
      margin-right: .5rem;
    }
    nav a.active {
      font-weight: bold;
      text-decoration: none;
    }
  `]
})
export class NavbarComponent {

}
