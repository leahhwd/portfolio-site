import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">

      <div class="error-bg">
        <div class="error-num">4</div>
        <div class="error-num">0</div>
        <div class="error-num">4</div>
      </div>

      <div class="overlay"></div>

      <div class="not-found-visual">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-message">Uh oh! The page you're looking for doesn't exist.</p>
        <a routerLink="/" class="home-link">Go Back Home</a>
      </div>

    </div>
  `,
  styles: `

    .not-found-container {
      position: relative;
      width: 100%;
      height: 100dvh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .error-bg {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      
    }

    .error-num {
      font-size: 100vw;
      color: #d45c73;
      font-family: 'fira code', monospace;
      font-weight: 800;
      line-height: .85;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    .not-found-visual {
      position: absolute;
      z-index: 2;
      text-align: center;
      color: #e6d3b3;
      padding: 1rem;
      font-family: 'Fira Code', monospace;
    }

    p {
      padding-bottom: 1rem;
    }

    a {
      color: #e6d3b3;
      text-decoration: none;
      border-bottom: 1px solid #e6d3b3;
      transition: border-color 0.3s;
      

      &:hover {
        border-color: transparent;
      }
    }

    @media (min-width: 768px) {
      .error-num {
        font-size: 20rem;
      }
    }

    @media (min-width: 1024px) {

      .error-bg {
        flex-direction: row;
      }
      .error-num {
        font-size: 30rem;
      }
    }
    `
})
export class NotFoundComponent {

}
