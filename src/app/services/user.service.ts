import { User } from '../views/home/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RepoUser } from 'src/app/components/user/user-repo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  recentUsers: User[] = [];

  private _baseUrl: string = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient) { }

  getUser(user: string): Observable<User> {
    const url = `${this._baseUrl}/${user}`;
    return this.httpClient.get<User>(url);
  }

  setRecentUsers(user: User): void {
		this.recentUsers.unshift(user);
  }

  getRecentUsers(): User[] {
    return this.recentUsers
  }

  getUserRepo(user: string): Observable<RepoUser []> {
    const url = `${this._baseUrl}/${user}/repos`;
    return this.httpClient.get<RepoUser []>(url);
  }
  
}
