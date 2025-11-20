import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main animate.enter="slide-in">
      <header>
        <h1>Leah</h1>
        <h2>Marie Kathleen</h2>
        <p>Full - Stack Web
          <span aria-hidden="true" class="glitch">Developer</span>
        </p>
      </header>

      <button class="about-link" [routerLink]="['/about']">About Me</button>
    </main>
  `,
  styles: `
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
  }

  .glitch {
    display: inline-block;
    font-weight: bold;
    position: relative;
    color: #D9c3ab;
  animation: glitch-flicker 1.25s infinite steps( 1, end);
  }

@keyframes glitch-flicker {
  0% { opacity: 1; filter: none; }
  5% { opacity: 0.2;  }
  7% { opacity: 1; }
  12% { opacity: 0;  }
  13% { opacity: 1; }
  20% { opacity: 0.1;  }
  22% { opacity: 1; }
  35% { opacity: 0.3; }
  36% { opacity: 1; }
  52% { opacity: 1; }
  53% { opacity: 1; }
  70% { opacity: 0; }
  71% { opacity: 1; }
  100% { opacity: 1; }
}

  .slide-in {
    transform: translateX(40px);
    animation: slideIn 1.5s ease forwards;
    opacity: 0;
  }

/*Slide in Animation*/
@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


  header {
    margin-bottom: 5px;
  }
  h1 {
    font-family: 'Fira Code', monospace;
    text-transform: uppercase;
    font-size: 6em;
    margin-bottom: 5px;
    padding-top: 5rem;
    font-weight: 700;
    color: #d9c3ab;
    -webkit-text-stroke: 2px black;
    text-shadow: 2.5px 2px 2px #a64253;
  }
  h2 {
    font-family: 'Fira Code', monospace;
    font-size: 2.2em;
    color: black;
    margin-top: 0;
    -webkit-text-stroke: 1px #a64253;
  }
  p {
    font-size: 2em;
    color: #d9c3ab;
    font-family: 'Inter Tight', sans-serif;
    font-weight: 600;
    line-height: 1.5;
    font-size: 2.75em;
    text-transform: uppercase;
    margin: 40px 10px 30px 10px;
    padding-top: 1rem;
    text-shadow: 2.5px 2px 2px #a64253;
  }

  button {
    margin: 1rem auto;
    padding: 0.6rem 1.2rem;
    border: 2px solid #A64253;
    box-shadow: 0 0 20px #A64253;
    background: transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .about-link {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    font-size: 1em;
    color: #d9c3ab;
    margin: 20px;
    padding: 5px;
    text-transform: uppercase;
  }

@media (min-width: 768px) {

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    min-height: 100vh;
    width: 100vw;
    padding-left: 200px;


  }

  header { /*addpadding*/
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    font-size: 1.5em;
    margin-bottom: 0;
    padding-right: 10px;
  }

  h1 {
    font-weight: 600;
    padding-top: 0;
  }

  h2 {
    color: #a64253;
    -webkit-text-stroke: none;
  }

  p {
  font-size: 1.5em;
  }

  button {
    display: none;
  }
}

  @media (min-width: 1024px) {

  header {
    font-size: 2em;

  }

  h1 {
    -webkit-text-stroke: 3px black;
    text-shadow: 3.5px 3px 3px #a64253;
  }

  p {
    font-size: 1.5em;
  }
}

@media (min-width: 1440px) {

  header {
    padding-right: 50px;
  }

  p {
    font-size: 2em;
    }

}

@media (min-width: 2560px) {

  header {
    font-size: 3em;
  }

  h1 {
    font-size: 10em;
    -webkit-text-stroke: 5px black;
    text-shadow: 5px 5px 5px #a64253;
  }
}

  `
})
export class HomeComponent {

}
