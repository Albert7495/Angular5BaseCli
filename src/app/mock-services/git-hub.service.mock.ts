import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //llamadas a servicio REST
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const  _getUsersUrl='https://api.github.com/users';
//const  _getUsersUrl='http://10.11.1.100:8080/users';
@Injectable ()
export class GitHubServiceMock {
    
   
    getUserInfo(userName: string){
        let gitHubObj= new GitHubModel();
            gitHubObj.avatar_url='';
            gitHubObj.login=userName;
            gitHubObj.name='Alberto';
            gitHubObj.followers=2;
            gitHubObj.following=2;

        return Observable
        .of(gitHubObj)
        .catch(this.handleError);
    }
    constructor(private _httpClient:HttpClient){

    }

    handleError(error:any){
        console.log(`Error: ${error}`)
      //  return Observable.throw(error.json() !=null ? error.json():'Server Error') // el || es igual que el if-else ::
        return Observable.throw(error.json() || 'Server Error') //si es nulo regresa server error
    }
}