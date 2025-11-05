import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>

      <div class="content-mobile">
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
            content management to fit your goals.
          </p>

          <button class="project-link" [routerLink]="['/projects']">My Projects</button>

          </div>
        </div>
      </div>


      <div class="content-desktop">
        <div class="desktop-text-container">
        <p>
        With a background in full-stack web development,
        I specialize in building modern, responsive websites that
        balance clean design with powerful functionality. From custom
        layouts and interactive features to secure integrations like
        e-commerce and payment systems, I focus on creating solutions
        that fit each client’s unique goals.
        </p>

        <p>I hold a bachelor’s degree in full-stack web development and
        have hands-on experience with technologies like Angular, Node.js,
        Express, and MongoDB. My services include website design,
        development, ongoing maintenance, and custom content management
        solutions, ensuring every project is built to grow and adapt
        with your needs.
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

  .upper-text {
    font-size: 1.5em;
    font-family: 'Jost', sans-serif;
    max-width: 100%;
    font-weight: bold;
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
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Jost', sans-serif;
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
    background-color: #a64253;
    border-radius: 40px;
    width: 75%;
    font-family: 'Jost', bold;
    font-weight: 500;
    font-size: 1em;
    text-transform: uppercase;
    color: #d9c3ab;
    padding: 10px;
  }

  .content-desktop {
    display: none;
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
    height: 100vh;
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
    max-width: 50%;
    padding-left: 225px;
  }

  p {
    font-size: 1.05em;
    font-family: 'Jost', sans-serif;
    color: #d9c3ab;
    font-weight: bold;
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
    font-size: 1.2em;
  }
}

@media (min-width: 1440px) {

  p {
    font-size: 1.5em;
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
