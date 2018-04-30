import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { PasivoComponent } from './pasivo.component';
import { RegisterComponent } from '../register/register.component';
import { FormFieldErrorExample } from "../form-field-error/field-error";
import { MATERIAL_COMPONENTS } from "../app.module";



describe('PasivoComponent', () => {
  let component: PasivoComponent;
  let fixture: ComponentFixture<PasivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PasivoComponent,
        RegisterComponent,
        FormFieldErrorExample 
      ],
      imports: [MATERIAL_COMPONENTS,FormsModule,ReactiveFormsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
