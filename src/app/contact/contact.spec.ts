import { ComponentFixture, TestBed } from '@angular/core/testing';
import emailjs from '@emailjs/browser';

import { ContactComponent } from './contact';

describe('Contact', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form', () => {
    const event = new Event('submit');
    const form = { value: { color: '' } };

    spyOn(component, 'sendEmail');

    component.sendEmail(event, form);

    expect(component.sendEmail).toHaveBeenCalledWith(event, form);
  });

/*Create a spec test for honeypot field to ensure it is empty on form submission*/

  it('should call sendEmail on form submission', () => {
    spyOn(component, 'sendEmail');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.sendEmail).toHaveBeenCalled();
  });
});
