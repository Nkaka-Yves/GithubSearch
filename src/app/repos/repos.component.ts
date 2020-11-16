import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../g-service/service.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  rep: Repos;
  reposearch(engineSearch) {
    this.searchRepo.getRepository(engineSearch).then(
      (grant) => {
        this.rep = this.searchRepo.repos;
        console.log(this.rep);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  constructor(public searchRepo: ServiceService) {}
  ngOnInit(): void {
    this.reposearch('Nkaka-Yves');
  }

}
