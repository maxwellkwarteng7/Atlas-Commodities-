import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home'
    }, 
    {
        path: 'home', 
        component: HomeComponent
    } , 
    {
        path: 'blog', 
        component : BlogComponent
    }
]
