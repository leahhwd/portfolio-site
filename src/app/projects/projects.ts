import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../services/project'; // Import Project service
import { Project as ProjectService } from '../services/project'; // Alias to avoid name conflict


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="wrapper" (mouseenter)="pauseAutoplay()" (mouseleave)="resumeAutoplay()"> <!-- Wrapper div for carousel with mouse events to pause and resume autoplay -->

    <div class="project-container" [ngStyle]="getCarouselStyle()"> <!-- project container for 3D carousel effect with dynamic styles-->

            <div class="active-project" *ngFor="let project of projects; let i = index" [ngStyle]="getItemStyle(i)"> <!-- Loop through projects and apply dynamic styles for 3D effect -->
                <div class="project-image">
                    <img [src]="project.img" [alt]="project.title" />
                </div>
                <div class="reflection"></div> <!--edit reflection styles-->
            </div>
    </div>


    <div class="project-info"> <!-- Project info section -->

        <h2>{{ projects[currentIndex]?.title }}</h2>
        <p>{{ projects[currentIndex]?.description }}</p>



    </div>

      <!-- Navigation buttons -->
    <div class="nav-buttons">
      <button class="nav-button prev" (click)="navigate(-1)">&#10094;</button>
        <button class="project-link">View {{ projects[currentIndex]?.title }}</button>
        <button class="nav-button next" (click)="navigate(1)">&#10095;</button>
  </div>




</div>

  `,
  styles: `

.wrapper {
    position: relative;
    height: auto;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 1000px; /*Add perspective for 3D effect*/
    overflow: hidden;
    padding-bottom: 2rem;
    background: transparent;
}

.project-container {
    width: 100%;
    max-width: 700px;
    height: 300px; /*change height to stop overlap into info?*/
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out;
    /*margin-bottom: 200px;*/
}

.active-project {
    position: absolute;
    top: 50%;
    padding: 0 30px;
    height: 320px; /*Adjust image height?*/
    transform: translate(-50%, 50%);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transition: transform 0.5s, cubic-bezier (.2, .8, .2 .1) opacity 0.5s;
    will-change: transform, opacity;
}

/* make active card pop a bit (we also set this in TS via scale if desired) TAKEOUT*/
.active-project[data-active="true"] {
  transform: translate(-50%, -50%) scale(1.06);
  z-index: 6;
  box-shadow: 0 18px 36px rgba(166,66,83,0.25);
}

.project-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 14px;
}

.project-info {
  position: relative;
   margin-top: 225px;

        width: 90%; /*change width?*/
        height: 200px; /*change height?*/
        outline: 2px solid #D9c3ab;
        font-family: 'Jost', sans-serif;
        text-align: center;
        color: #d9c3ab;
}

.project-info p {
  padding: 0 1rem;
  font-size: 1.5rem;
}

.nav-buttons {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 3rem;
    padding: 1rem;
}

.nav-button {
    position: relative;
    top: 92%;
    transform: translateY(-50%);
    background: none;
    color: #D9c3ab;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    padding: 0.5rem;
    transition: background 0.3s;
}

.nav-button.prev {
    left: 10%;
}

.nav-button.next {
    right: 10%;
}

button.project-link {
    background-color: #a64253;
    border-radius: 40px;
    width: 50%;
    font-family: 'Jost', bold;
    font-weight: 500;
    font-size: 1em;
    text-transform: uppercase;
    color: #d9c3ab;
    padding: 10px;
  }

  @media (min-width: 768px) {
    .wrapper {
      margin-left: 225px;
      width: calc(100% - 225px); /* Adjust width to account for sidebar */
      perspective: 1500px; /* Increase perspective for larger screens */
      height: auto;
    }

  }

  @media (min-width: 1200px) {
    .wrapper {
      margin-left: 400px;
      width: calc(100% - 400px); /* Adjust width to account for sidebar */
    }

  }
`
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(private projectService: ProjectService) {}

  projects: any[] = []; // Initialize projects array

    /*@Input() projects: any[] = []; // Array of project objects with input decorator*/
  @Output() projectSelected = new EventEmitter<any>(); // Output event emitter for project selection (takeout??)

  /** Autoplay controls */
  @Input() autoplay = true; // Parent component can enable/disable autoplay
  @Input() interval = 3000; // Loops through items every 3000ms

  currentIndex = 0; //Current index of project carousel
  private _autoplayTimer: any = null; // Timer reference for autoplay


  // Lifestyle hooks enable autoplay on init and clean up on destroy
  ngOnInit(): void {
    this.projects = this.projectService.getProjects(); // Fetch projects from service

    if (this.autoplay) {
      this.startAutoplay();
    }
  }


  ngOnDestroy(): void {
    this.stopAutoplay();
  }


  rotationAngle = 0; // Rotation angle for 3D effect (added)

 // Method to handle project selection and navigation
 navigate(direction: number) {

  const step = 360 / this.projects.length; //added
  this.rotationAngle -= direction * step; //added switch direction and step?
    this.currentIndex = (this.currentIndex + direction + this.projects.length) % this.projects.length;

    this.projectSelected.emit(this.projects[this.currentIndex]); // Emit selected project
 }

 //Method to select project directly (not working Fix or remove)
  selectProject(index: number) {
    this.currentIndex = index;
    this.projectSelected.emit(this.projects[this.currentIndex]);
  }

  //Autoplay start method
  startAutoplay() {
    this.stopAutoplay();
    this._autoplayTimer = setInterval(() => this.navigate(1), this.interval);
  }

  //Autoplay stop method
  stopAutoplay() {
    if (this._autoplayTimer) {
      clearInterval(this._autoplayTimer);
      this._autoplayTimer = null;
    }
  }

  //Pause and resume methods for autoplay on hover
  pauseAutoplay() {
    this.stopAutoplay();
  }

  resumeAutoplay() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  //Method for 3D carousel effect
  getCarouselStyle() {
    const depth = Math.min(Math.max(window.innerWidth / 5, 400), 500);
    const normalizedAngle = (this.rotationAngle % 360 + 360) % 360; // Normalize angle to [0, 360);

    //console.log('Depth:', depth);
    //console.log('Rotation Angle:', this.rotationAngle % 360);

    return {
      transform : `translateZ(-${depth}px) rotateY(${normalizedAngle}deg)` //Need to change?
    };
  }

  //Method for individual item styling in 3d carousel
  getItemStyle(index: number) {
    const depth = Math.min(Math.max(window.innerWidth / 5, 400), 800); // Adjust depth based on screen size
    const angle = (360 / this.projects.length) * index;

    //console.log(`Item ${index}`, 'Angle:', angle);
    //console.log(`Item: ${index}`, 'depth:', depth);

    return {
      transform: `rotateY(${angle}deg) translateZ(${depth}px)` //Need to change?
    };
  }

}
