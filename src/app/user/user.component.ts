import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../g-service/service.service';
import { Repos } from '../repos';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserInfo;
  repos: Repos;
  constructor(public http: HttpClient, private searched: ServiceService) { }

  makeSearch(name) {
    this.searched.findUsers(name).then(
      (grant) => {
        this.user = this.searched.findUser;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
    this.searched.getRepository(name).then(
      (grant) => {
        this.repos = this.searched.repos;
        console.log(this.repos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.makeSearch('Nkaka-Yves');
  }
}
