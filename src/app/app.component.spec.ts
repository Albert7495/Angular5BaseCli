import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsuarioComponent} from './usuario/usuario.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component'; 
import { GitHubCardComponent } from "./git-hub-card/git-hub-card.component";
import { SearchUserComponent } from './search-user/search-user.component';
import {SelectOverviewExample} from './simple-selector/select-overview-example';
import { LoginComponent } from '../app/login/login.component';
import { ContactComponent } from '../app/contact/contact.component';
import { AboutComponent } from '../app/about/about.component';
import { MainComponent } from '../app/main/main.component';
import { AppComponent, routes } from './app.component';
import { MATERIAL_COMPONENTS } from "./app.module";
import { RegisterComponent } from './register/register.component';
import { FormFieldErrorExample } from "./form-field-error/field-error";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        RegisterComponent,
        SelectOverviewExample,
        SearchUserComponent,
        GitHubCardComponent,
        FormFieldErrorExample,
        PasivoComponent,
        ReactivoComponent,
        UsuarioComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
      ],
         providers: [{provide: APP_BASE_HREF, useValue:'/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('prueba',()=>{
  //   let texto='Alberto';
  //   expect(texto).toEqual('Alberto')
  // })
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});
 