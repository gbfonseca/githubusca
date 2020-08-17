import { User } from './../../views/home/user.model';
import {
  UserService
} from '../../services/user.service';
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-recent-user',
  templateUrl: './recent-user.component.html',
  styleUrls: ['./recent-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecentUserComponent implements OnInit {
	recentUsers: User[] = [];

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.recentUsers = this.userService.getRecentUsers()
	}

}