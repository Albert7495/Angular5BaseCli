import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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


describe('UsuarioComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        UsuarioComponent,
        MainComponent,
         RegisterComponent,        
        AboutComponent,
        ContactComponent,
        SelectOverviewExample,
        SearchUserComponent,
        GitHubCardComponent,
        ReactivoComponent,
        PasivoComponent
      ],
      imports: [FormsModule,
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
      ],
      providers: [APP_PROVIDERS,{provide: APP_BASE_HREF, useValue:'/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate usuario inputs', ()=>{
    component.usuario ='alberto';    
    console.log = jasmine.createSpy("log"); 
    component.setValidaUsuario();
    expect(console.log).toHaveBeenCalledWith(['/']);
  })

 

});
