import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repos } from './repos';
import { UserInfo } from './user-info';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GserviceService {
 searchUser: UserInfo;
 repository: Repos;

  constructor(private http: HttpClient) {
     this.searchUser = new UserInfo('','','',0,0,0,'',new Date(),'');
     this.repository = new Repos('','','','',new Date());

   }

   findUser(searchUser: string){
     interface apiResponse {
        name:string;
        login:string;
        location:string;
        public_repos: number;
        followers:number;
        following:number;
        avatar_url:string;
         created_at:Date;
         html_url:string;
        
    }
    return new Promise((resolve, reject) => {
      this.http
        .get<apiResponse>(
          'https://api.github.com/users/' +
            searchUser +
            '?access_token=' +
            environment.Key
        )
        .toPromise()
        .then(
          (response) => {
            this.searchUser = response;
            console.log(this.findUser);
            resolve();
          },
          (err) => {
            console.log(err);
            reject();
          }
        );
    });
  }

  getRepository(findRepo: string) {
    interface apiResponse {
      name: string;
      description: string;
      language: string;
      html_url: string;
      updated_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<apiResponse>(
          'https://api.github.com/users/' +
            findRepo +
            '/repos?order=created&sort=asc?access_token=' +
            environment.Key
        )
        .toPromise()
        .then(
          (response) => {
            this.repository = response;
            console.log(this.repository);
            resolve();
          },
          (err) => {
            console.log(err);
            reject();
          }
        );
    });
  }
}
