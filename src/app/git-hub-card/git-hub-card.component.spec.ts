import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from './git-hub-card.component';
import { GitHubModel } from "../model/git-hub-model";

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData :GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponent ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData=new GitHubModel();
    gitHubData.avatar_url='http://';
    gitHubData.login='Albert7495';
    gitHubData.followers=2;
    gitHubData.following=3;
    gitHubData.name='Alberto';

    fixture = TestBed.createComponent(GitHubCardComponent); //genera una instancia del componente, para acceder a sus clases y vista
    component = fixture.componentInstance; //componentInstance ->acceso a sus metodos
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate model',()=>{
    component.gitHubData=gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate in the view',()=>{
    component.gitHubData=gitHubData;
    const compiled=fixture.nativeElement; //->acceso al HTML
    fixture.detectChanges();
    expect(compiled.querySelector('.data-conteiner #name').textContent)
                    .toContain(`Nombre: ${gitHubData.name}`);
  });
});
