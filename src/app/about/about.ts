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
          I'm a full-stack developer focused on creating modern, responsive websites
          that balance clean design with powerful functionality. I turn ideas into fast, secure
          and user-friendly web solutions that help businesses and professionals thrive online.
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

        <div class="carousel">

        <h2 class="carousel-intro">Technologies I love &hearts;</h2>

        <app-tech-carousel class="tech-carousel"></app-tech-carousel>

</div>



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
  width: 100%;

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
  line-height: 1.7;
}

h1 {
  font-family: 'Fira Code', sans-serif;
  font-size: 1.5rem;
  color: #e6d3b3;
  font-weight: 500;
  text-transform: uppercase;

}

.divider {
  width: 50px;
  height: 3px;
  background-color: #d45c73;
  margin: 30px 0;
}

p {
  font-family: 'Fira Code', sans-serif;
  color: #e6d3b3;
  padding-bottom: 8%;
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
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

}

.tech-carousel {
  margin-top: 1rem;
}
@media (min-width: 768px) {
 main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 }

 .about-content {
  flex: 1;
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "text   image"
    "text    cta"
    "carousel carousel";
    align-items: start;
    gap: 0;
    padding-top: 10%;
 }

 .about-text {

  grid-area: text;
  text-align: left;
  line-height: normal;
  padding-left: 3rem;
 }

 .about-image {
  grid-area: image;
  width: 85%;
  transform: scale(1.3);


 }

 .cta-buttons {
  width: auto;
  flex-direction: column;
 }

 .carousel-intro {
    margin-top: 5%;
  }

 .carousel {
  grid-area: carousel;
  align-self: end;
  margin-top: 0;
  padding-bottom: 1.5rem;
 }

}

@media (min-width: 1024px) {
  .about-content {
    padding-top: 5%;
  }

  .about-text {

    margin-top: 5%;

  }



  .about-paragraph {
    line-height: 2rem;
  }


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

  .about-text {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
  `
})
export class AboutComponent {

}
