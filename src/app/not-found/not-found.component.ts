import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">

      <div class="not-found-visual">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-message">Uh oh! The page you're looking for doesn't exist.</p>
        <a routerLink="/" class="home-link">Go Back Home</a>
      </div>

    </div>
  `,
  styles: `

    .not-found-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      height: 100vh;
      text-align: center;
      color: white;
border: 4px solid red;
    }

    .not-found-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .not-found-title {
      font-size: 3rem;
      margin-bottom: 1rem;

    }
    .not-found-message {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    .home-link {
      font-size: 1.25rem;
      color: #007bff;
      text-decoration: none;
    }

    @media (min-width: 768px) {
      .not-found-container {
        margin-left: 250px;
      }
      .not-found-title {
        font-size: 5rem;
      }
      .not-found-message {
        font-size: 1.25rem;
      }
      .home-link {
        font-size: 1.5rem;
      }
    }


    `
})
export class NotFoundComponent {

}
