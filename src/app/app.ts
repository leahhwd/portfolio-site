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
    <div class="cursor-glow"></div>
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
            <li class='mobile-nav__item'><a class='mobile-nav__link' [routerLink]="['/about']" (click)="closeMobileNav()">01. About me</a></li>
            <li class='mobile-nav__item'><a class='mobile-nav__link' [routerLink]="['/projects']" (click)="closeMobileNav()">02. my Projects</a></li>
            <li class='mobile-nav__item'><a class='mobile-nav__link mobile-nav__link--contact' [routerLink]="['/contact']" (click)="closeMobileNav()">Contact</a></li>
          </ul>
        </div>

        <!--Regular Nav for Desktop-->


        <ul class='nav__list'>
          <li class='nav__item'><a class='nav__link' [routerLink]="['/about']" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">01. About me</a></li>
          <li class='nav__item'><a class='nav__link' [routerLink]="['/projects']" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">02. my Projects</a></li>
          <li class='nav__item'><a class='nav__link nav__link--contact' [routerLink]="['/contact']">Contact</a></li>
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
  styles: [`



  `],
})
export class App implements OnInit {
  protected readonly title = signal('my-portfolio');

  mobileNavOpen = false;

  ngOnInit(): void {
    const glow = document.querySelector('.cursor-glow') as HTMLElement;

    if (!glow) {
      return;
    }

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    });
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }



}
