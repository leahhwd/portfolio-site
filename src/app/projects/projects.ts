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
        <button class="nav-button prev" (click)="navigate(-1)">&#10094;</button>
        <!--<button class="project-link">View {{ projects[currentIndex]?.title }}</button> Add Later-->
        <button class="nav-button next" (click)="navigate(1)">&#10095;</button>

</div>
   
  `,
  styles: `

.wrapper {
    position: relative;
    height: 60vh;
    width: calc(100vw - 200px);
    margin-left: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1800px; /*Add perspective for 3D effect*/
    overflow: hidden;
    max-width: 1000px;
    background: transparent;
}

.project-container {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out; 
    margin-bottom: 200px;
}

.active-project {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 300px;

    /*
    Using VH and VW caused issues with centering and responsiveness
    text-align: center;
    margin: -10.5vh 0 0 -14.5vw;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: white;*/

    margin: -90px 0 0 -125px; 
    transform-origin: center center;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
     box-shadow: 0 3px 8px rgba(166, 66, 83, 1);
}

.project-image img {
    width: 100%;
    height: auto;
    border-radius: inherit;
}

.project-info {
   position: absolute;
        bottom: 15%; /* bring into view inside the wrapper */
        width: 100%; /*change width?*/
        background: #D9c3ab;
        font-family: 'Jost', sans-serif;
        text-align: center;
}

.nav-button {
    position: absolute;
    top: 92%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    font-size: 2rem;
    /*font-size: clamp(1.5rem, 4vw, 2rem);*/
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    padding: 0.5rem;
    transition: background 0.3s;
}



.nav-button:hover {
    background: blue;
}

.nav-button.prev {
    left: 10%;
    
}

.nav-button.next {
    right: 10%;
}


@media (max-width: 768px) {
    .wrapper {
        position: relative;
        margin-left: 200px;
        width: calc(100vw - 200px);
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1000px; /* Adjust perspective for smaller screens */
        overflow: hidden;
        background: transparent;
    }

    .project-container {
        position: relative;
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        transition: transform 1s ease-in-out;
        margin-bottom: 200px;
      
    }

    .active-project {
      position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 250px;
        margin: -70px 0 0 -100px; 
        transform-origin: center center;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(166, 66, 83, 1);
    }
       .project-image img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: inherit;
    }
        .project-info {
        position: absolute;
        bottom: 15%; /* bring into view inside the wrapper */
        width: 100%; /*change width?*/
        background: #D9c3ab;
        font-family: 'Jost', sans-serif;
        }

    .nav-button {
        position: absolute;
        top: 92%;
        font-size: 1.5rem;
        padding: 0.3rem;
    }

    .nav-button.prev {
        left: 5%;
    }

    .nav-button.next {
        right: 5%;
    }
}

@media (max-width: 480px) {
    .wrapper {
        height: 30vh;
        perspective: 500px;
    }

    

    .active-project {
        width: 150px;
        height: 100px;
        margin: -50px 0 0 -75px; 
    }

  

    .project-image img {
        display: block;
        width: 100%;
        height: auto;
    }

   /* .nav-button {
        display: none; /* Hide navigation buttons on small screens 

        Try 
        .scroll-container {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS
        
        }

        .scroll-item {
        scroll-snap-align: center;
        }
    }*/

    .nav-button {
        top: 85%;
        font-size: 1.2rem;
        padding: 0.2rem;
    }

    .nav-button.prev {
        left: 3%;
    }

    .nav-button.next {
        right: 3%;
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

    return {
      transform : `translateZ(-288px) rotateY(${this.rotationAngle}deg)` //Need to change?
    }
  }

  //Method for individual item styling in 3d carousel 
  getItemStyle(index: number) {
    const angle = (360 / this.projects.length) * index;
    return {
      transform: `rotateY(${angle}deg) translateZ(288px)` //Need to change?
    };
  }

}
