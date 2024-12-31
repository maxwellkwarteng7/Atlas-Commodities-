import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { FooterComponent } from "../footer/footer.component"; 


const images: Array<string> = [
  '/images/certifications/cert3.jpg',
  '/images/certifications/cert1.jpg', 
  '/images/certifications/cert2.jpg', 
  '/images/certifications/cert4.jpg',
  '/images/certifications/cert5.jpg' ,
  '/images/certifications/cert6.jpg' ,
]
 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  certifications = images;
  


  ngOnInit(): void {
    AOS.refresh();
  }

}
