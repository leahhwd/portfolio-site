import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent }
];
