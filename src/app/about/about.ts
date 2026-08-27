import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, TechCarouselComponent],
  template: `
    <main>
      <div class="about-content" animate.enter="slide-in">

        <div class="about-text">

          <p class="eyebrow">ABOUT ME</p>
          <h1>I build websites that work for you.</h1>

            <div class="divider"></div>

            <p class="about-paragraph">
              Hey 👋 my name is Leah, and I’m a full-stack developer
              who loves turning ideas into functional applications. My journey into
              development started with an internet obsession, a questionable amount
              of screen time, and curiosity about how it all worked. Eventually,
              this grew into a passion for the infinite possibilities.
            </p>
            <p class="about-paragraph-2">
              I earned my Bachelor of Science in Full Stack Web Development in 2025 🎓
              which gave me solid foundational experience building applications using technologies
              like Angular and Node.js. Now, my days are spent evaluating new methods, combining
              unique ideas with stable code, and practicing the most important Dev skill, knowing
              exactly what to Google.
            </p>
        </div>

        <div class="image-wrapper">
            <img class="about-image" src="images/profile-img-mobile(1).png" alt="Profile Image"/>
            <img class="about-image-desk" src="images/profile-img-desktop(3).png" alt="Profile Image"/>
        </div>

        <div class="cta">
          <div class="cta-buttons">
            <a routerLink="/projects" class="projects-link">VIEW MY WORK →</a>
            <a routerLink="/contact" class="contact-link">CONTACT ME</a>
          </div>
        </div>

      </div>

      <div class="carousel">

              <h2 class="carousel-intro">Technologies I love &hearts;</h2>
              <app-tech-carousel class="tech-carousel"></app-tech-carousel>

      </div>
    </main>
  `,
  styles: `

 .slide-in {
  opacity: 0;
  transform: translateX(40px);
  animation: slideIn 1.5s ease forwards;
}

@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

main {
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}



.about-content {
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.eyebrow {
  font-size: 1rem;
  color: #d45c73;
  font-family: 'Fira Code', sans-serif;
}

.eyebrow::before {
  content: "•";
  margin-right: .5rem;
  width: 8px;
  height: 8px;
}

.about-text {
  max-width: 700px;
  align-items: start;
  padding-left: 1rem;
  padding-right: 1rem;
}

h1 {
  font-family: 'Fira Code', sans-serif;
  font-size: 1.5rem;
  color: #e6d3b3;
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 1.5rem;

}

.divider {
  width: 50px;
  height: 3px;
  background-color: #d45c73;
  margin: 30px 0;
}

.about-paragraph-2 {
  padding-top: 1.5rem;
}

p {
  font-family: 'Fira Code', sans-serif;
  color: #e6d3b3;
  line-height: 1.5;

}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.about-image{
  display: block;
  width: 100%;
  transform: scale(1.25);
  height: auto;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.about-image-desk {
  display: none;
}

.cta {
  display: flex;
  width: 100%;
  justify-content: center;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 75%;

}

.cta-buttons a {
padding: 12px 15px;
  text-decoration: none;
  font-family: 'Fira Code', sans-serif;
  transition: all 0.3s ease;
}

.projects-link {
  border: 2px solid #d45c73;
  color: #d45c73;
  border-radius: 10px;
  box-shadow: 0 0 20px #A64253;
}

.projects-link:hover {
  background-color: #d45c73;
  color: #0b0b0b;
}

.contact-link {
  border: 2px solid #6b7d3a;
  color: #6b7d3a;
  box-shadow: 0 0 20px #6b7d3a;
  border-radius: 10px;
}

.contact-link:hover {
  background-color: #6b7d3a;
  color: black;
}

.carousel-intro {
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 400;
   padding-top: 10%;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding-bottom: 0.5rem;
}

.tech-carousel {
  margin-top: 1rem;
}


@media (min-width: 768px) {

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

 .about-content {
    display: grid;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "text   image"
      "text    cta";
      align-items: start;
      gap: 0;
    padding-top: 2rem;
  }

 .about-text {
  grid-area: text;
  text-align: left;
  line-height: normal;
  padding-left: 2rem;
  align-self: center;
 }

.about-text p {
  font-size: .75rem;
}

.about-image {
  display: none;
}

 .about-image-desk {
    display: block;
    grid-area: image;
    grid-row: 1 / 2;
    width: 100%;
    max-width: 500px;
    transform: none;
    align-self: center;
    height: auto;
    justify-self: center;
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  }


 .cta-buttons {
    width: auto;
    align-self: start;
    
  }
 .carousel-intro {
    padding-bottom: 2rem;
  }
}

@media (min-width: 1024px) {

  .about-image {
    display: none;
  }

  .about-image-desk {
    display: block;
    width: 100%;
    max-width: 500px;
    height: auto;
      -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  }
}

@media(min-width: 1440px) {
  .about-text p {
    font-size: 1rem;
  }
}


  `
})
export class AboutComponent {

}
