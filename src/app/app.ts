import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class='wrapper'>
    <main class='main-content'>

      <nav class='nav-bar'>


        <a class='nav__logo' [routerLink]="['/']"><img src="images/L-3.png" width="100" alt="Logo" (click)="closeMobileNav()"></a> <!-- Fix logo width -->

        <!--Hamburger Menu for Mobile-->
        <button class='hamburger' id='hamburger' (click)="toggleMobileNav()">
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </button>

        <div class="mobile-nav" id="mobile-nav" [class.open]="mobileNavOpen">
          <ul class='mobile-nav__list'>
            <li class='mobile-nav__item'><a class='mobile-nav__link' [routerLink]="['/about']" (click)="closeMobileNav()">About me</a></li>
            <li class='mobile-nav__item'><a class='mobile-nav__link' [routerLink]="['/projects']" (click)="closeMobileNav()">my Projects</a></li>
            <li class='mobile-nav__item'><a class='mobile-nav__link' [routerLink]="['/contact']" (click)="closeMobileNav()">Contact</a></li>
          </ul>
        </div>

        <!--Regular Nav for Desktop-->


        <ul class='nav__list'>
          <li class='nav__item'><a class='nav__link' [routerLink]="['/about']">About me</a></li>
          <li class='nav__item'><a class='nav__link' [routerLink]="['/projects']">my Projects</a></li>
          <li class='nav__item'><a class='nav__link' [routerLink]="['/contact']">Contact</a></li>
        </ul>

        <div class='social-icons'>
          <a class='social-icon' href='https://github.com/leahhwd' target='_blank'> <!--Replace URl -->
            <img src="images/github-mark.png" width="50" alt="GitHub">
          </a>
          <a class='social-icon' href='https://linkedin.com/in/lmkdev' target='_blank'> <!--Replace URl -->
            <img src="images/InBug-Black.png" width="50" alt="LinkedIn">
          </a>
        </div>

      </nav>

      <section class='content'>
        <router-outlet></router-outlet>
      </section>

    </main>
  </div>`,
  styles: [``],
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
