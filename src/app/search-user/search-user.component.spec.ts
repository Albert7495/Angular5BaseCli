import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_PROVIDERS } from '../app.providers';
import { SearchUserComponent } from './search-user.component';
import { FormsModule } from '@angular/forms';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers: [APP_PROVIDERS],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent); //genera una instancia del componente, para acceder a sus clases y vista
    component = fixture.componentInstance; //componentInstance ->acceso a sus metodos
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should call onSearchClick', ()=>{
    component.userName ='Albert7495';
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('Albert7495');
    });
    component.onSearchClick();
  })

  it('should call onSearchClick in view', ()=>{
    component.userName ='Albert7495';
   // const compiled=fixture.nativeElement; 
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('Albert7495');
    });
    let compiled=fixture.nativeElement;
    compiled.querySelector('button').click();
    
  })
});
