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
            <label class="form-label"for="name">Name:</label>
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
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
    margin-top: 5%;
    font-size: 1.5rem;
    padding: 10px;
    color: #d9c3ab;
}


.contact-form-container {
    display: flex;
    flex-direction: column; 
    max-width: 800px;
    margin:auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
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
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    width: 100%;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

textarea.form-control {
    min-height: 200px;
    resize: vertical;
}

button {
    display: block;
    margin: 1rem auto;
    padding: 0.6rem 1.2rem;
    border: none;
    background: #222;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 768px) {


.page-container {
margin-top: 30%;
}
   
    .contact-form-container {
    display: flex;
    flex-direction: column; 
    margin-top: 5%;
    margin-bottom: 10%
    
       padding: 12px;
        max-width: 95%;
        
        background-color: #D9c3ab;
    } 
        
    .form-columns {
        flex-direction: column;
        gap: 1rem;
    }

    /* Make inputs expand to available width on small screens */
    .form-control {
        width: 100%;
        max-width: 100%;
        
    }
        .form-label {
        font-size: 1rem;
        font-family: 'Jost', sans-serif;
        }

    textarea.form-control {
        min-height: 140px;
    }
    button {
        width: 100%;
        padding: 0.8rem 1rem;
    }
}

/* Small global reset to ensure predictable sizing */
*, *::before, *::after {
    box-sizing: border-box;
}
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
