import { Component,OnInit,OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit , OnDestroy{
    
    gitHubData:GitHubModel;
    constructor(){
        this.gitHubData=new GitHubModel();
        this.gitHubData.avatar_url='https://avatars2.githubusercontent.com/u/37985519?v=4';
        this.gitHubData.followers=1;
        this.gitHubData.following=1;
        this.gitHubData.name='Alberto Lezama';
        this.gitHubData.login='Albert7495';
    }
   
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    
}