import { Component, OnInit } from '@angular/core';
import { faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-icon',
  templateUrl: './usericon.component.html',
  styleUrls: ['./usericon.component.css']
})
export class UserIconComponent implements OnInit {

  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
