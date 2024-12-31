import { Component, inject} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  router = inject(Router); 

  isOpened: boolean = false;



  

 
  openBurger() {
    this.isOpened = true; 
  }

  closeBurger() {
    this.isOpened = false; 
  }

  maintainBurger(event: Event) {
    event.stopPropagation();
    this.isOpened = true;
  }

  handleLink(event : Event ) {
    event.stopPropagation(); 
    this.isOpened = false; 
  }

  handleHome(event : Event) {
    event.stopPropagation(); 
    this.isOpened = false; 
    window.scroll(0, 0);
    this.router.navigate(['/']);
 }


}
