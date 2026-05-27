import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>

      <div class="content-mobile" animate.enter="slide-in">
        <p class="upper-text">
          Full-stack web developer creating modern,
          responsive websites with custom features, secure
          integrations, and tailored design.
        </p>

        <div class="lower-content">

          <img src="images/portfolio-img-mobile.png" alt="About Image" class="about-image">

          <div class="lower-text-container">
            <p class="lower-text">
              I handle development, maintenance, and
              content management systems formulated to fit your goals.
            </p>

            <button class="project-link" [routerLink]="['/projects']">My Projects</button>

          </div>
        </div>
      </div>


      <div class="content-desktop" animate.enter="slide-in">
        <div class="desktop-text-container">
          <p>
            With a background in full-stack web development,
            I specialize in building modern, responsive websites that
            balance clean design with powerful functionality. From custom
            layouts and interactive features to secure integrations like
            e-commerce and payment systems, I focus on creating solutions
            that fit each client’s unique goals.
          </p>
        </div>

        <img src="images/portfolio-img-desktop.png" alt="About Image" class="about-image">

      </div>
    </main>
  `,
  styles: `
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    padding-top: 30%;
    }

  .content-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .slide-in {
    transform: translateX(40px);
    animation: slideIn 1.5s ease forwards;
    opacity: 0;
  }

  @keyframes slideIn {

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .upper-text {
    font-size: 1.25em;
    font-family: 'Fira Code', monospace;
    max-width: 100%;
    font-weight: thin;
    color: #d9c3ab;
    padding: 10px;
  }

  .lower-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }

  .lower-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: right;
  }

  .lower-text {
    font-size: 1.25em;
    font-weight: thin;
    font-family: 'Fira Code', monospace;
    color: #d9c3ab;
    margin-right: 20px;
  }

  img.about-image {
    width: auto;
    max-width: 60%;
    height: 60vh;
    object-fit: cover;
  }

  button.project-link {
    display: block;
    margin-bottom: 10px;
    padding: .5rem 1.2rem;
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
    color: #A64253;
  }

  .project-link:hover {
    background: #A64253;
    color: white;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .content-desktop {
    display: none;
  }

  @media (min-width: 425px) {
    .upper-text {
      padding: 0 15px;
    }

    .lower-content p {
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .content-mobile {
    display: none;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
  }

  .content-desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .desktop-text-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 60%;
    padding-left: 250px;
  }

  p {
    font-size: 1.05em;
    font-family: 'Fira Code', monospace;
    color: #d9c3ab;
    line-height: 1.5;
    text-transform: uppercase;
    text-align: left;
  }

  img.about-image {
    width: auto;
    max-width: 40%;
    height: 100vh;
    object-fit: cover;
  }
}

@media (min-width: 1024px) {
  p {
    font-size: 1.25em;
  }
}

@media (min-width: 1440px) {
  p {
    font-size: 2em;
    padding-left: 50px;
  }
}

@media (min-width: 2560px) {
  .desktop-text-container {
    margin-left: 250px;
    max-width: 40%;
  }

  p {
    font-size: 2.5em;
  }

  img.about-image {
    padding-right: 80px;
  }
}

  `
})
export class AboutComponent {

}
