import { Component, inject  , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'cocoa';

ngOnInit(): void {
  AOS.init({
    duration: 800, 
    easing: 'ease-in-out', 
    once: true 
  });
  AOS.refresh(); 
}

  
 





}
