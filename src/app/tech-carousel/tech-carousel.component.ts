import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tech {
  name: string;
  icon: string;
  color?: string;
}

@Component({
  selector: 'app-tech-carousel',
  imports: [CommonModule],
  template: `
   <div class="carousel-container">
    <div class="carousel-track">
      <div
        class="carousel-group"
        *ngFor="let group of repeatedTech; let groupIndex = index"
        [attr.aria-hidden]="groupIndex > 0 ? 'true' : null"
      >
        <div class="carousel-item" *ngFor="let tech of group">
          <div class="icon-container">
             <img [src]="tech.icon" [alt]="tech.name" width="100%" height="100%"/>
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: `

  .carousel-container {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 1.5rem 0;
    position: relative;

  }

  .carousel-container::before, .carousel-container::after {
    content: '';
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  .carousel-container::before {
    left: 0;
    background: linear-gradient(to right, #fff, transparent);
  }

  .carousel-container::after {
    right: 0;
    background: linear-gradient(to left, #fff, transparent);
  }

  .carousel-track {
    display: flex;
    animation: scroll 20s linear infinite;
    will-change: transform;
  }

  .carousel-track:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-33.333333%); }
  }

  .carousel-group {
    display: flex;
    gap: 2rem;
    flex: 0 0 auto;
    padding-right: 2rem;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5rem;
    flex: 0 0 auto;
    user-select: none;
  }

  .icon-container {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s, background 0.2s;
  }

  .icon-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .carousel-item span {
  font-size: .8rem;
  margin-top: 0.5rem;
  font-family: 'Fira Code', sans-serif;
  color: #d45c73;
  letter-spacing: 0.02em;
}


  `,

})
export class TechCarouselComponent {
  tech: Tech[] = [
    {name: 'Angular', icon: 'images/Angular.svg'},
    {name: 'TypeScript', icon: 'images/TypeScript.svg'},
    {name: 'JavaScript', icon: 'images/JavaScript.svg'},
    {name: 'HTML5', icon: 'images/HTML5.svg'},
    {name: 'CSS3', icon: 'images/CSS3.svg'},
    {name: 'Git', icon: 'images/Git.svg'},
    {name: 'Node.js', icon: 'images/Node.js.svg'},
    {name: 'Express.js', icon: 'images/Express.svg'},
    {name: 'MongoDB', icon: 'images/MongoDB.svg'},
    {name: 'Karma', icon: 'images/Karma.svg'},
    {name: 'Jasmine', icon: 'images/Jasmine.svg'}
  ]

  get repeatedTech(): Tech[][] {
    return [this.tech, this.tech, this.tech];
  }


}
