import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { transition, trigger, style, animate, query } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  template: `
  <div class='wrapper'>

      <nav class='nav-bar' aria-label='Main'>


        <a class='nav__logo' [routerLink]="['/']" (click)="closeMobileNav()">LMK</a> <!-- Fix logo width -->

        <!--Hamburger Menu for Mobile-->
        <button class='hamburger' type="button" aria-label="Toggle navigation" (click)="toggleMobileNav()">
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </button>

        <div class="nav__menu" id="nav-menu" [class.open]="mobileNavOpen">
              <ul class="nav__list">
                <li>
                  <a class="nav__link" routerLink="/about" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">01</span>About
                  </a>
                </li>
                <li>
                  <a class="nav__link" routerLink="/projects" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">02</span>Projects
                  </a>
                </li>
                <li>
                  <a class="nav__link" routerLink="/contact" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">03</span>Contact
                  </a>
                </li>
              </ul>

            <div class='nav__social'>
                    <a href="https://github.com/leahmkdev" target="_blank" rel="noopener">GitHub ↗</a>
                    <a href="https://linkedin.com/in/lmkdev" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
      </nav>

    <main class='main-content'>
          <section class='content'>
            <router-outlet></router-outlet>
          </section>
    </main>
  </div>
  `,
  styles: [`



  `],
})
export class App {
  protected readonly title = signal('my-portfolio');

  mobileNavOpen = false;


  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }



}
