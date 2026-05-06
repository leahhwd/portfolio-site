import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    spyOn(component, 'sendEmail');
    component.sendEmail(event);
    expect(component.sendEmail).toHaveBeenCalledWith(event);
  });

  it('should call sendEmail on form submission', () => {
    spyOn(component, 'sendEmail');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.sendEmail).toHaveBeenCalled();
  });
});
