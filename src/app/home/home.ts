import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <main>
      <header>
        <h1>Leah</h1>
        <h2>Marie Kathleen</h2>
        <p>Full - Stack Web Developer</p>
      </header>

      <button class="about-link">About Me</button>
    </main>
  `,
  styles: `
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    text-align: center;
  }
  header {
    margin-bottom: 20px;
  }
  h1 {
  font-family: 'Bungee';
    font-size: 5em;
    margin-bottom: 5px;
    padding-top: 6rem;
    font-weight: 800;
    color: #d9c3ab;
    -webkit-text-stroke: .2px black;
    text-shadow: 2.5px 2px 2px #a64253;
  }
  h2 {
    font-family: 'Bungee';
    font-size: 1.75em;
    color: black;
    margin-top: 0;
    -webkit-text-stroke: 1px #d9c3ab;
  }
  p {
    font-size: 2em;
    color: #d9c3ab;
    font-family: 'Jost', bold;
    font-weight: 700;
    font-size: 2.5em;
    text-transform: uppercase;
    margin-top: 6rem;
    text-shadow: 2.5px 2px 2px #a64253;
  }

  button {
    background-color: #a64253;
    border-radius: 40px;
  
    }

  .about-link {
    font-family: 'Jost', bold;
    font-weight: 500;
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
    min-width: 100vw;
    padding: 5%;
    padding-left: 200px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    font-size: 1.5em;
  }

  p {
  font-size: 1.25em;
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
}

@media (min-width: 1440px) {

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
