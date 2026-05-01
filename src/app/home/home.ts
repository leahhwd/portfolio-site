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
            <a routerLink="/projects" class="projects-link">VIEW MY WORK →</a>
            <a routerLink="/about" class="about-link">ABOUT ME</a>
          </div>

          <div class="laptop-image-wrap">
            <img class="laptop-image" src="images/laptop-vector.png" alt="Laptop illustration" />


          </div>
        </div>
        <!-- Left side content end -->

        <!-- Right side visual content -->
         <div class="hero-visual">
          <!-- Placeholder for future visual content -->
        </div>
        <!--Right side visual content end-->
      </section>

      <!--Featured Information section-->
      <section class="featured-info">
        <!--Add html icon codes here for each feature, and add text descriptions-->
        <div class="feature">
          <img src="images/code.svg" alt="Code Icon" width="40" height="40">
          <div class="feature-content">
            <h4>CLEAN CODE</h4>
            <p>Clean and efficient code for scalable applications.</p>
          </div>
        </div>

        <div class="feature-divider"></div>

        <div class="feature">
          <img src="images/storage.svg" class="featured-icon" alt="Stack Icon" width="40" height="40">
          <div class="feature-content">
            <h4>Full-Stack</h4>
            <p>Responsive design that works on all devices.</p>
          </div>
        </div>

        <div class="feature-divider"></div>

        <div class="feature">
          <img src="images/rocket.svg" alt="rocket icon" class="featered-icon" width="40" height="40">
          <div class="feature-content">
            <h4>PERFORMANCE OPTIMIZATION</h4>
            <p>Optimized performance for fast-loading applications.</p>
          </div>
        </div>

        <div class="feature-divider"></div>

        <div class="feature">
          <img src="images/person.svg" alt="person icon" class="featered-icon" width="40" height="40">
          <div class="feature-content">
            <h4>User Focused</h4>
            <p>Contemporary user interface and experience design.</p>
          </div>
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
  
  
  

}

.header-intro {
  font-family: 'Fira Code', sans-serif;
  padding-top: 120px;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
  color: #d45c73;

}

.header-name-bold {
  font-family: 'Bebas Neue', sans-serif;
  color: #e6d3b3;
  font-size: 7rem;
  letter-spacing: 15px;
}

.header-name-light {
  font-family: 'Allura', cursive;
  font-size: 2.25rem;
  margin-top: -50px;
  letter-spacing: 2px;
  color: #d45c73;
}

.title {
  margin-top: 20px;
  font-family: 'Fira Code', sans-serif;
  font-size: .90rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #e6d3b3;

}

.description {
  margin-top: 30px;
  max-width: 500px;
  font-family: 'Fira Code', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #e6d3b3;
}

.divider {
  width: 50px;
  height: 3px;
  background-color: #d45c73;
  margin: 30px 0;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  width: 75%;
  padding-top: 25px;
  margin-right: 10px;
  text-decoration: none;
  font-family: 'Fira Code', sans-serif;
  transition: all 0.3s ease;

}

.cta-buttons a {

  padding: 12px 15px;
  margin-bottom: 15px;
  text-decoration: none;
  font-family: 'Fira Code', sans-serif;
  transition: all 0.3s ease;

}

.projects-link {
  border: 2px solid #d45c73;
  color: #d45c73;
  border-radius: 10px;


}

.projects-link:hover {
  background-color: #d45c73;
  color: #0b0b0b;
}

.about-link {
  border: 2px solid #6b7d3a;

  color: #6b7d3a;
  border-radius: 10px;
}

.laptop-image-wrap {
  max-width: 460px;
  width: 100%;
  margin-left: 0;
  margin-right: auto;
}

.laptop-image {
  display: block;
  width: 100%;
  max-width: 420px;
  height: auto;
  filter: drop-shadow(0 0 5px #d45c73);

}

.featured-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  
padding: 0px 20px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 15px;
  text-align: left;
  width: min(100%, 440px);
}

.feature-content {
  flex: 1;
}

.feature img {
  flex-shrink: 0;
}

.feature h4 {
  color: #e6d3b3;
  font-size: 1rem;
  font-family: 'Fira Code', sans-serif;
  margin: 0;
}

.feature p {
  color: #e6d3b3;
  font-size: .85rem;
  font-family: 'Fira Code', sans-serif;
  padding-top: 10px;
  margin: 0;
}

.feature-divider {
  width: 95%;
  height: 1px;
  background-color: #6b7d3a;
  opacity: 0.8;
  margin: 10px 0;
}


@media(min-width: 768px) {
.hero {
  padding-left: 250px;
 
}

.header-intro {
  padding-top: 50px;
}

.header-name-bold {
  font-size: 11em;
}

.header-name-light {
  font-size: 4em;
  margin-top: -80px;
  padding-left: 30px;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
}

.cta-buttons {
  width: 50%;
}

.featured-info {
  padding-left: 200px;
}
}

@media(min-width: 1024px) {
 
}

  `
})
export class HomeComponent {

}
