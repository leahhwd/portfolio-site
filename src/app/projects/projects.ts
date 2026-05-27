import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../services/project'; // Alias to avoid name conflict


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="wrapper"> <!-- Wrapper div for photo grid -->

       <!-- project container -->
        <div class="slide-in" >

            <h2 class="page-title">My Projects</h2>

            <div class="active-project" *ngFor="let project of projects; let i = index">

                <div class="project-image" (mouseenter)="setActive(i)" (mouseleave)="clearActive()" (click)="setActive(i)">
                    <img [src]="project.img" [alt]="project.title" />
                </div>



                <div class="project-info-overlay" [class.show]="activeIndex === i"> <!-- Project info section -->

                  <h2>{{ project.title }}</h2>
                  <p>{{ project.description }}</p>

                  <button class="project-link">
                    Check it out
                  </button>

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
  margin: 10px auto;
}

.active-project img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin: 10px 0;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.22));
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
  background: rgba(0, 0, 0, 0.5);
  color: #a64253;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.project-info-overlay p {
  background: black;
  font-family: 'Fira Code', monospace;
  padding: 10px;
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

button.project-link {
    display: block;
    margin: 1rem auto;
    padding: 1rem 1.2rem;
    border: 2px solid #A64253;
    background: transparent;
    border-radius: 10px;
    box-shadow: 0 0 20px #A64253;
    cursor: pointer;
}

.project-link {
    font-family: 'Fira Code', monospace;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
    color: #D9c3ab;
}


@media (min-width: 768px) {
  .slide-in {
    box-sizing: border-box;
  }

  .project-info-overlay {
    justify-content: center;
  }


  h2 {
    margin-top: 5%;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    width: 100%;
  }

  .page-title {
    display: none;
  }

  .slide-in {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    box-sizing: border-box;
  }

  .active-project {
    margin-top: 10%;
  }

  .active-project img {
    width: 100%;
    height: auto;
  }
}

@media (min-width: 1440px) {
  h2 {
    font-size: 3em;
  }

  p {
    font-size: 1.5em;
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
