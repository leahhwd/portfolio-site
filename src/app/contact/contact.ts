import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactFormModel } from '../models/contact-form.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="page-container">
       <h1>Let's Build Something Great!</h1>


    <div class="contact-form-container">

        <form #contactForm="ngForm" (ngSubmit)="onSubmit()" *ngIf="!submitted">
        
        <div class="form-columns">
            <div class="form-left">
                <div class="form-group">
                    <label class="form-label" for="name">Name:</label>
                    <input class="form-control" type="text" id="name" name="name" [(ngModel)]="contact.name" required />
                </div>

                <div class="form-group">
                    <label class="form-label" for="email">Email:</label>
                    <input class="form-control" type="email" id="email" name="email" [(ngModel)]="contact.email" required />
                </div>

                <div class="form-group">
                    <label class="form-label" for="interest">Area of Interest:</label>
                    <select class="form-control" id="interest" name="interest" [(ngModel)]="contact.interest" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
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
                    <textarea class="form-control" id="message" name="message" [(ngModel)]="contact.message" required></textarea>
                </div> 
            </div>
        </div>

        <button type="submit" [disabled]="!contactForm.form.valid">Submit</button>

        </form>
    </div>
</div>
  `,
  styles: `
  .page-container {
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 0 5px;
}
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
    margin-top: 20%;
    font-size: 1.5rem;
    padding: 10px;
    color: #d9c3ab;
}


.contact-form-container {
    display: flex;
    flex-direction: column; 
    max-width: 800px;
    /* center horizontally regardless of parent offsets */
    width: 100%;
    margin: 2% auto;
    padding: 20px;
    border: 2px solid #A64253;
    box-shadow: 0 0 15px #A64253;
    border-radius: 8px;
    background-color: transparent;
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
    border-radius: 4px;
    font-size: 1rem;
    color: #D9c3ab;
    box-sizing: border-box;
    width: 100%;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #D9c3ab;
}

textarea.form-control {
    min-height: 200px;
    resize: vertical;
}

button {
    display: block;
    margin: 1rem auto;
    padding: 0.6rem 1.2rem;
    border: 2px solid #A64253;
    

    background: transparent;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    box-shadow: 0 0 25px #A64253;
}


/* Small global reset to ensure predictable sizing */
*, *::before, *::after {
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .page-container {
        margin-top: -10%;
        margin-left: 215px;
    }

    h1 {
        font-size: 2rem;
        padding: 0 5%;
        }
    .contact-form-container {
        padding: 15px;
        /* keep centered and respect max-width */
        width: 100%;
        max-width: 800px;
        margin: 2% auto;
    }
}

@media (min-width: 1024px) {
    .page-container {
        margin-left: 300px;
    }
    
    h1 {
        font-size: 2.5rem;
        padding: 0 15%;
       
    }

    .contact-form-container {
        margin-top: 5%;
    }

    .form-right .form-group textarea.form-control{
        min-height: 270px;
    }
         button {
            width: 70%;
            padding: 0.8rem 1rem;
    }
}

@media (min-width: 1400px) {
    .page-container {
        margin-left: 500px;
        margin-top: -5%;
    }
}

@media (min-width: 1600px) {
    .page-container {
        margin-left: 600px;
        margin-top: -5%;
    }
}

@media (min-width: 1800px) {
    .page-container {
        margin-left: 700px;
        margin-top: -5%;
    }
}

@media (min-width: 2000px) {
    .page-container {
        margin-left: 800px;
        margin-top: -5%;
    }
}

@media (min-width: 2200px) {
    .page-container {
        margin-left: 900px;
        margin-top: -5%;
    }
}

@media (min-width: 2400px) {
    .page-container {
        margin-left: 1000px;
        margin-top: -5%;
    }

   
}

 /*ADD MEDIA QUERIES FOR Extra LARGE SCREENS AS NEEDED*/
`
})
export class ContactComponent {
    contact = new ContactFormModel();
  submitted = false;

  onSubmit() {
    console.log('form submitted', this.contact);

    //add email service here

    this.submitted = true;
  }

}
