import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-icon',
  templateUrl: './location-icon.component.html',
  styleUrls: ['./location-icon.component.css']
})
export class LocationIconComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
