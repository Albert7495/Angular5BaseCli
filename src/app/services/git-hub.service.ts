import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //llamadas a servicio REST
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const  _getUsersUrl='https://api.github.com/users';
//const  _getUsersUrl='http://10.11.1.100:8080/users';
@Injectable ()
export class GitHubServices {
    
   
    constructor(private _httpClient:HttpClient){

    }
  
      getUserInfo(userName: string){
        return this._httpClient
        .get(`${_getUsersUrl}/${userName}`,{responseType:'json'}) //un get puede regresar imagen,json.. Responsetype y lo que va llegar es un json
        .map((x:any)=>{
            let gitHubObj= new GitHubModel();
            gitHubObj.avatar_url=x.avatar_url;
            gitHubObj.login=x.login;
            gitHubObj.name=x.name;
            gitHubObj.followers=x.followers;
            gitHubObj.following=x.following;
            return gitHubObj;
        })
        .catch(this.handleError);
    }
    handleError(error:any){
        console.log(`Error: ${error}`)
      //  return Observable.throw(error.json() !=null ? error.json():'Server Error') // el || es igual que el if-else ::
        return Observable.throw(error.json() || 'Server Error') //si es nulo regresa server error
    }
}