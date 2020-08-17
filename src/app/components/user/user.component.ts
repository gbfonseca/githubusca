import { UserService } from '../../services/user.service';
import { RepoUser } from './user-repo.model';
import { User } from './../../views/home/user.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  user: User;
  userRepos: RepoUser[] = [];

  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const username = this.router.snapshot.paramMap.get('username');
    this.userService.getUser(username).subscribe(user => {
      this.user = user
    });
    this.getRepos();
  }

  getRepos(): void {
    const username = this.router.snapshot.paramMap.get('username');
    this.userService.getUserRepo(username).subscribe(repos => {
      this.userRepos = repos
    })
  }


}
