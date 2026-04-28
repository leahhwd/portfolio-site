import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main animate.enter="slide-in">

      <section class="hero">
        <!-- Left side content -->
        <div class="hero-content">

          <p class="header-intro">HI, I'M</p>

          <h1 class="header-name-bold">LEAH</h1>
          <h2 class="header-name-light">Marie Kathleen</h2>

          <p class="title">Full-Stack Developer</p>

          <div class="divider"></div>
          <!--reduce? -->
          <p class="description">I create dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I am passionate about crafting efficient and scalable solutions.</p>

          <div class="cta-buttons">
            <a routerLink="/projects" class="projects-link">VIEW MY WORK</a>
            <a routerLink="/about" class="about-link">ABOUT ME</a>
          </div>
        </div>
        <!-- Left side content end -->

        <!-- Right side visual content -->
         <div class="hero-visual">
          <!-- Placeholder for visual content, e.g., an image or animation -->
           <div class="code-card">
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="code-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <!--Right side visual content end-->
      </section>

      <!--Featured Information section-->
      <section class="featured-info">
        <!--Add html icon codes here for each feature, and add text descriptions-->
        <div class="feature">
          <h4>&lt;/&gt; CLEAN CODE</h4>
          <p>Clean and efficient code for scalable applications.</p>
        </div>

        <div class="feature">
          <h4>&lt;div&gt; RESPONSIVE DESIGN</h4>
          <p>Responsive design that works on all devices.</p>
        </div>

        <div class="feature">
          <h4>&lt;script&gt; PERFORMANCE OPTIMIZATION</h4>
          <p>Optimized performance for fast-loading applications.</p>
        </div>

        <div class="feature">
          <h4>&lt;style&gt; MODERN UI/UX</h4>
          <p>Contemporary user interface and experience design.</p>
        </div>

      </section>
    </main>
  `,
  styles: `



/*Slide in Animation*/
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
/*end slide in animation*/

main {

}


/*Hero section styles*/
.hero {
  display: flex;
justify-content: flex-start;
  align-items: center;
  padding: 0px 45px;
  min-height: 100vh;
  background: radial-gradient(
    circle at 75% 25%,
    rgba(212, 92, 115, 0.15),
    transparent 40%
  ),
  #0b0b0b;
  color: #e6d3b3;

}

.header-intro {
  font-family: 'Fira Code', sans-serif;
  padding-top: 100px;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
  color: #d45c73;

}

.header-name-bold {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 7rem;
  letter-spacing: 6px;
  border: 1px red solid;

}

.header-name-light {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  margin-top: -25px;
  letter-spacing: 2px;
  color: #d45c73;
}

.title {
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 2px;

}

@media (max-width: 768px) {
  main {
    padding: 0;
  }
}

  `
})
export class HomeComponent {

}
