import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../services/project'; // Alias to avoid name conflict


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="wrapper"> <!-- Wrapper div for photo grid -->
<h2>My Projects</h2>
       <!-- project container -->
        <div class="slide-in" >


            <div class="active-project" *ngFor="let project of projects; let i = index">

                <div class="project-image" (mouseenter)="setActive(i)" (mouseleave)="clearActive()" (click)="setActive(i)">
                    <img [src]="project.img" [alt]="project.title" />
                </div>



              <div class="project-info-overlay" [class.show]="activeIndex === i"> <!-- Project info section -->

                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>

              </div>

            </div>
</div>
</div>

  `,
  styles: `

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

}

h2 {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 20px;
  font-family: 'Fira Code', monospace;
  text-transform: uppercase;
  color: #d9c3ab;
}

.slide-in {
  transform: translateX(40px);
    animation: slideIn 1.5s ease forwards;
    opacity: 0;
}

.active-project {
  position: relative;
  width: 90%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.active-project img {
  width: 100%;
  height: auto;
  display: block;
 object-fit: cover;
 margin: 10px 0;
  transition: transform 0.3s ease;

}

.active-project:hover img {
  transform: scale(1.05);

}

.project-info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

}

/*desktop hover*/
.active-project:hover .project-info-overlay {
  opacity: 1;
  pointer-events: all;
}

/*mobile click*/
.project-info-overlay.show {
  opacity: 1;
  pointer-events: all;
}

/*Slide in Animation*/
@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


@media (min-width: 768px) {

  .slide-in {
    margin-left: 220px;

  }

  h2 {
    margin-top: 5%;
    margin-left: 220px;
  }
}

@media (min-width: 1024px) {
  .wrapper {

  /*display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;*/

}

.slide-in {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, .75fr);

}

.active-project {
    width: 100%;
    max-width: 500px;
    margin-left: 100px;
  }


.active-project img {
    width: 100%;
    max-width: 300px;

  }

}



`
})
export class ProjectsComponent implements OnInit {

  activeIndex: number | null = null; // Track the active project index
  projects: Project[] = [];


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

setActive(index: number) {
  this.activeIndex = index;
}

clearActive() {
  this.activeIndex = null;
}

}
