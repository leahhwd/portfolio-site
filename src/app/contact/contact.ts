import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactFormModel } from '../models/contact-form.model';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="page-container">
    <h1 class="headline"> Let's Build Something
      <span class="glitch-container">
        <span class="glitch">
          <span aria-hidden="true">{{currentWord}}</span>
            {{currentWord}}
          <span aria-hidden="true">{{currentWord}}</span>
        </span>
      </span>
    </h1>


    <div class="contact-form-container" animate.enter="slide-in">

        <form #contactForm="ngForm" (ngSubmit)="sendEmail($event, contactForm)" *ngIf="!submitted">

        <div class="form-columns">
            <div class="form-left">
                <div class="form-group">
                    <label class="form-label" for="name">Name:</label>
                    <input class="form-control" type="text" id="name" name="name" [(ngModel)]="contact.name" required placeholder="Required"/>
                </div>

                <div class="form-group">
                    <label class="form-label" for="email">Email:</label>
                    <input class="form-control" type="email" id="email" name="email" [(ngModel)]="contact.email" required email #email='ngModel' placeholder="Required"/>
                    <div class="error-message" *ngIf="email.invalid && email.touched">
                        Please enter a valid email address.
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label" for="interest">Area of Interest:</label>
                    <select class="form-control" id="interest" name="interest" [(ngModel)]="contact.interest">
                    <option value="" disabled selected>Select an option</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label" for="budget">Budget (optional):</label>
                    <input class="form-control" type="text" id="budget" name="budget" [(ngModel)]="contact.budget" />
                </div>
            </div>

            <div class="form-right">
                <div class="form-group">
                    <label class="form-label" for="message">Message:</label>
                    <textarea class="form-control" id="message" name="message" [(ngModel)]="contact.message" required placeholder="Required"></textarea>
                </div>
            </div>
        </div>

    <button type="submit" [disabled]="!contactForm.form.valid || isSending">{{ isSending ? 'Sending...' : 'SUBMIT' }}</button>

        </form>

        <div class="response-message" *ngIf="submitted">
          {{message}}
          <button (click)="submitted = false; message = '';">Send Another Message</button>
        </div>

    </div>
</div>
  `,
  styles: `

  .page-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Inter Tight', sans-serif;
    font-size: 1.5rem;
    padding-top: 2rem;
  }

.headline {
  margin-top: 1rem;
  line-height: 1.2;
  display: inline-block;
  color: #D9c3ab;
}

/*CONTACT FORM GLITCH EFFECT*/
.glitch-container {
  display: block;
  margin-top: 8px;
  height: 1.2em;
  position: relative;
  overflow: hidden;
}

.glitch {
  display: inline-block;
  font-weight: bold;
  position: relative;
  color: #D9c3ab;
  text-shadow:
  0 0 2px #a64253,
  0 0 2px #54642e;
  animation: glitch-flicker 1s infinite steps( 1, end);
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  clip-path: inset(0 0 65% 0);
  opacity: 0.6:
  animation: glitchSliceTop 700ms infinite steps(1, end);
  mix-blend-mode: lighten;
}

.glitch span:last-child {
  clip-path: inset(50% 0 0 0);
  animation: glitchSliceBottom 750ms infinite steps(1, end);
  opacity: 0.6;
  mix-blend-mode: lighten;
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
  52% { opacity: 0.2; }
  53% { opacity: 1; }
  70% { opacity: 0; }
  71% { opacity: 1; }
  100% { opacity: 1; }
}

/* TOP SLICE POPPING */
@keyframes glitchSliceTop {
  0% { opacity: 0.6; }
  8% { opacity: 0; }
  10% { opacity: 0.7; }
  25% { opacity: 0.3; }
  27% { opacity: 0.8; }
  60% { opacity: 0.25; }
  61% { opacity: 0.7; }
  100% { opacity: 0.6; }
}

/* BOTTOM SLICE POPPING */
@keyframes glitchSliceBottom {
  0% { opacity: 0.6; }
  6% { opacity: 0.2; }
  9% { opacity: 0.7; }
  28% { opacity: 0.3; }
  29% { opacity: 0.8; }
  65% { opacity: 0.2; }
  67% { opacity: 0.75; }
  100% { opacity: 0.6; }
}
/*END CONTACT FORM GLITCH EFFECT*/



.contact-form-container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: calc(100% - 1rem);
    margin: 15% auto 0;
    padding: 10px 10px 10px;
    border: 2px solid #A64253;
    box-shadow: 0 0 15px #A64253;
    border-radius: 10px;
    background-color: transparent;
}

.slide-in {
  opacity: 0;
  transform: translateX(40px);
  animation: slideIn 1.5s ease forwards;

}

@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-form-container:hover {
    box-shadow: 0 0 25px #A64253;
}

.form-columns {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.form-left, .form-right {
    flex: 1;
    min-width: 250px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.form-control {
    padding: 8px 8px;
    border: 1px solid #A64253;
    background: transparent;
    border-radius: 10px;
    font-size: 1rem;
    color: #D9c3ab;
    box-sizing: border-box;
    width: 100%;
}

.form-group label {
    font-family: 'Fira Code', monospace;
    margin-bottom: 0.5rem;
    color: #D9c3ab;
}

textarea.form-control {
    min-height: 200px;
    resize: vertical;
}

button {
    display: block;
    width:70%;
    margin: 1rem auto 0;
    padding: 0.6rem 1rem;
    border: 2px solid #A64253;
    background: transparent;
    color: #A64253;
    border-radius: 10px;
    font-family: 'Fira Code', monospace;
    cursor: pointer;
    box-shadow: 0 0 20px #A64253;
}

button:hover {
    box-shadow: 0 0 25px #A64253;
}

.response-message
 {
  margin-top: 15px;
  padding: 12px 20px;
  border-radius: 5px;
  font-family: 'Fira Code', monospace;
  animation: fadeIn 0.3s ease forwards;
  text-align: center;
}

.response-message {
  background: rgba(0, 200, 150, 0.15);
  border: 1px solid #00c896;
  color: #d9c3ab;
}


@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}


/* Small global reset to ensure predictable sizing */
*, *::before, *::after {
    box-sizing: border-box;
}

@media (min-width: 768px) {


  .headline {
    margin-top: 10%;
  }
    h1 {
        font-size: 2rem;

        }
    .contact-form-container {
        padding: 30px 15px;
        /* keep centered and respect max-width */
        margin-bottom: 5%;
        margin-top: 5%;

    }

    button {
        margin: 1rem auto;
    }
}

@media (min-width: 1024px) {

    .page-container {
        align-items: center;
        width: 100%;

        margin: 0 auto;
    }

    h1 {
        font-size: 2.5rem;
        width: 100%;
        text-align: center;
    }

    .contact-form-container {
        width: min(100%, 800px);
        margin: 5% auto 0;
    }

    .form-right .form-group textarea.form-control{
        min-height: 270px;
    }
         button {
            width: 70%;
            padding: 0.8rem 1rem;
    }
}




 /*ADD MEDIA QUERIES FOR Extra LARGE SCREENS AS NEEDED*/
`
})
export class ContactComponent {
    contact = new ContactFormModel();
    submitted = false;
    isSending = false;
    message = '';
    words = ['great', 'cool', 'fun', 'awesome', 'useful']
    currentWord = this.words[0];
    private intervalId: any;

    ngOnInit(): void {
      let index = 0;
      this.intervalId = setInterval(() => {
        index = (index + 1) % this.words.length;
        this.currentWord = this.words[index];
      }, 2000); // Change word every 2 seconds
    }

    onDestroy(): void {
      clearInterval(this.intervalId);
    }
    sendEmail(e: Event, form: any) {

        e.preventDefault();

        if (form.invalid) {
            form.control.markAllAsTouched(); // Mark all fields as touched to show validation errors
            return;
        }

        this.isSending = true;

        const htmlForm = e.target as HTMLFormElement;

        emailjs.sendForm(
                'service_z8s3vke',
                'template_2gc7qfg',
                htmlForm,
                'wky16DxMZoLPlayR_'
            ).then((response: EmailJSResponseStatus) => {

            console.log('Email sent successfully:', response);
            this.submitted = true;
            this.message = "Message delivered! I'll get back to you soon :)";
            // Optionally reset the form model
            this.contact = new ContactFormModel();

        }, (error) => {
            console.error('Error sending email:', error);
            this.message = 'An error occurred while sending your message. Please try again later.';
            this.isSending = false;
            // keep submitted = false so user can retry
        });

    }

}
