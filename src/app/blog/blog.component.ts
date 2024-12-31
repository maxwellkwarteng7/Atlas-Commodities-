import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

const blogDetails = [
  {
    title: 'How to make a blog',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante malesuada tincidunt. Nullam nec nunc nec purus vulputate ultricies. Sed nec',
    image: '/images/abuse.jpg',
    Date : '15th February, 2025'
  } , 
  {
    title: 'How to make a blog',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante malesuada tincidunt. Nullam nec nunc nec purus vulputate ultricies. Sed nec',
    image: '/images/coca.jpg',
    Date : '29th December , 2024'
  } , 
  {
    title: 'How to make a blog',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante malesuada tincidunt. Nullam nec nunc nec purus vulputate ultricies. Sed nec',
    image: '/images/photo.jpg',
    Date : '2nd January , 2023'
  } , 
    
]

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogItems = blogDetails;
  blogTitle!: string; 
  blogContent!: string;
  blogDate!: string;

  isModalOpened: boolean = false;
  
  openModal(title: string, content: string, date: string) {
    this.blogTitle = title;
    this.blogContent = content;
    this.blogDate = date;
    this.isModalOpened = true;
  }

  closeModal(event: Event) {
    event.stopPropagation(); 
    this.isModalOpened = false;
  }

  maintainModal(event: Event) {
    event.stopPropagation();
    this.isModalOpened = true;
  }
}
