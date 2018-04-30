import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { LoginComponent } from '../login/login.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { MATERIAL_COMPONENTS } from "../app.module";
import { RouterModule } from '@angular/router';
import { AppComponent, routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import {SelectOverviewExample} from '../simple-selector/select-overview-example';
import { SearchUserComponent } from '../search-user/search-user.component';
import { GitHubCardComponent } from "../git-hub-card/git-hub-card.component";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component'; 
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '../register/register.component';
import { FormFieldErrorExample } from "../form-field-error/field-error";


describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        UsuarioComponent,
        MainComponent,
        FormFieldErrorExample,
        RegisterComponent,
        AboutComponent,
        ContactComponent,
        SelectOverviewExample,
        SearchUserComponent,
        GitHubCardComponent,
        ReactivoComponent,
        PasivoComponent
      ],
      imports: [FormsModule,ReactiveFormsModule,
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
      ],
      providers: [APP_PROVIDERS,{provide: APP_BASE_HREF, useValue:'/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate inputs', ()=>{
    component.usuario ='alberto';
    component.password='alr';
    let navigateSpy = spyOn((<any>component).router, 'navigate');  
    component.validarUsuario();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  })

  it('should validate inputs in view', ()=>{
    component.usuario ='alberto';
    component.password='alr';
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    const compiled=fixture.nativeElement; 
    compiled.querySelector('button').click();
    expect(navigateSpy).toHaveBeenCalledWith(['/'])
     
  })

  it('should validate inputs Invalid', ()=>{
    component.usuario ='albert';
    component.password='alr';
    let snackRef= spyOn(component.snackBar,'open');
  
    component.validarUsuario();
    expect(snackRef).toHaveBeenCalledWith('Usuario Invalido', 'Error', { duration: 2000,});
  })

});
