import { User } from './user.model';
import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
	error: string = "";
	userLogin: string = "";
	user: User; 
	
	constructor(private userService: UserService,) {
	}

	findUser(): void {
		this.userService.getUser(this.userLogin).subscribe({
			next: user => {
				this.user = user,
				this.userService.setRecentUsers(user)
			},
			error: err => console.log(err)
		});
	}

	ngOnInit(): void {
	}
}
