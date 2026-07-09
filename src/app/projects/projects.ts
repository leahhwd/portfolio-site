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

            <div class="projects-header">
              <h3 class="eyebrow">My Work</h3>
              <h1>Projects</h1>

              <div class="divider"></div>

              <p>Introductory statement about the projects and what they are</p>
            </div>

            <div class="featured-project">
              <div class="featured-image">
                <img src="/images/construction.jpg" alt="Featured Project Image">
              </div>
              <div class="featured-info">
                <h2>Featured Project</h2>

                <div class="featured-divider"></div>

                <p>This is a brief description of the featured project</p>
                <button class="project-link">
                  Check it out
                </button>
              </div>
            </div>


                <div class="other-projects"> <!-- Project info section -->
                  <h4>More Projects</h4>
                  <div class="divider"></div>
                  <div *ngFor="let project of projects; let i = index" class="project-container" (click)="setActive(i)" (mouseleave)="clearActive()">
                    <img [src]="project.img" [alt]="project.title">
                    <div class="project-info-overlay" [class.show]="activeIndex === i">
                      <h2>{{ project.title }}</h2>
                      <p>{{ project.description }}</p>
                      <button class="project-link">
                      View Project →
                      </button>
                    </div>
                  </div>
                </div>

            </div>

        </div>



  `,
  styles: `

.wrapper {
    padding: 1.5rem;
    margin : 0 auto;
    overflow: hidden;
    justify-content: center;
    
  }

  .projects-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
  }

  .projects-header h3 {
    font-size: 1rem;
    font-family: 'Fira Code', sans-serif;
    color: #d45c73;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .eyebrow::before {
  content: "•";
  margin-right: .5rem;
  width: 8px;
  height: 8px;
}


  .projects-header h1 {
    font-family: 'Fira Code', sans-serif;
    font-size: 2rem;
    color: #e6d3b3;
    font-weight: 500;
    text-transform: uppercase;
  }

  

.slide-in {
  transform: translateX(40px);
  animation: slideIn 1.5s ease forwards;
  opacity: 0;
}

@keyframes slideIn {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.divider {
  width: 50px;
  height: 2px;
  background-color: #d45c73;
  margin: 1rem 0;
}


.featured-info {
  padding: 1rem 5%;
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
}

.featured-info h2 {
  font-weight: 400;
}

.featured-info p {
  font-size: .90rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.featured-info button {
  border: 1px solid #d45c73;
  background: transparent;
  color: #e6d3b3;
  border-radius: 10px;
  box-shadow: 0 0 20px #A64253;
}
button {
  padding: 0.5rem 1rem;
  font-family: 'Fira Code', sans-serif;
  font-size: .80rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
}
.projects-header p {
  font-family: 'Fira Code', sans-serif;
  font-size: .90rem;
  color: #e6d3b3;
  max-width: 600px;
}

.featured-project, .other-projects {
  display: block;
  width: 100%;
}

.featured-project {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(212 92 115 / 0.5);
  max-width: 1200px;
}

.featured-image img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  max-width: 1024px;
  filter: drop-shadow(0 0 12px rgba(166, 66, 83, 0.5));
}

.other-projects {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.5rem;
  gap: 1rem;
  max-width: 1200px;

}

h4 {
  font-family: 'Fira Code', sans-serif;
  font-size: 1rem;
  color: #e6d3b3;
  text-transform: uppercase;
  font-weight: 500;
}

.project-container {
  width: 100%;
  border: 1px solid rgba(107, 125, 58, 0.5);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-container img {
width: clamp(125px, 25%, 180px);
height: auto;
  border-radius: 8px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin-left: 0.5rem;
  filter: drop-shadow(0 0 12px rgba(84, 100, 46, 0.4));
}

.project-info-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
  padding: 1rem 1rem 0.5rem 1rem;
}

.project-info-overlay h2 {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.project-info-overlay p {
  font-size: 0.75rem;
  line-height: 1.25;
  margin: .5rem 0;
}

.project-info-overlay button {
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: #A64253;
  font: inherit;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.95rem;
}

@media (min-width: 768px) {

  .divider {
    width: 50%;
  }
 
  .other-projects {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .other-projects h4,
  .other-projects > .divider {
    grid-column: span 2;
  }

  .project-container {
    display: flex;
    flex-direction: column;
  }
  .project-container img {
    margin-top: 1rem;
  }

  .project-container button {
    margin-top: 1rem;
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
