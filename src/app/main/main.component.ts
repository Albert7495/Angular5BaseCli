import { Component, OnInit } from '@angular/core';
import { GitHubServices } from '../services/git-hub.service';
import { Button } from 'protractor';
import { Observable, Observer } from "rxjs"; //
import { GitHubModel } from '../model/git-hub-model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {

 // gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;

  constructor(private _gitHubService:GitHubServices) {
      this.gitHubDataList= new Array<GitHubModel>();
   }

  ngOnInit() {

  }
  onSearchUser(userName: string){

    this._gitHubService
    .getUserInfo(userName)
    .subscribe(x=>{
    // this.gitHubData= new GitHubModel();
    // this.gitHubData=x;
    this.gitHubDataList.push(x);
        });
      }

      click(valor:GitHubModel){
          this.gitHubDataList=this.gitHubDataList.filter(x=>x!=valor);
      }
  }


