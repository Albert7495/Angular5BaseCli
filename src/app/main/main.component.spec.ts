import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MainComponent } from './main.component';
import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from "../git-hub-card/git-hub-card.component";
import {SelectOverviewExample} from '../simple-selector/select-overview-example';
import { SearchUserComponent } from '../search-user/search-user.component';
import { MATERIAL_COMPONENTS } from "../app.module";
import { GitHubServices } from '../services/git-hub.service';
import { GitHubServiceMock } from '../mock-services/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,   
        GitHubCardComponent,
        SelectOverviewExample,
        SearchUserComponent  ],
       
        imports: [
          FormsModule,
          MATERIAL_COMPONENTS,
          HttpClientModule,
          BrowserAnimationsModule],
          providers: [{
            provide:GitHubServices,
            useClass: GitHubServiceMock
          }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add thre elements to card array', ()=>{
    expect(component.gitHubDataList.length).toEqual(0);
    component.onSearchUser('Albert7495');
    component.onSearchUser('Albert7495');
    component.onSearchUser('Albert7495');
    expect(component.gitHubDataList.length).toEqual(3);
  })
});
