import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Waypoints } from '../data.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @ViewChild('map') map: ElementRef;
  route: any;
  data: Waypoints;
  constructor(private dataService: DataServiceService) {
    this.data = dataService.getData();
  }

  ngOnInit() {
    if (this.dataService.getData().source === '') {
      return;
    }
    const directionService = new google.maps.DirectionsService();
    const directionDisplay = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(this.map.nativeElement, { zoom: 14 });
    directionDisplay.setMap(map);
    const wayPoints = [
      {
        location: this.data.dest1,
        stopover: true
      },
      {
        location: this.data.dest2,
        stopover: true
      }
    ];

    directionService.route({
      origin: this.data.source,
      destination: this.data.dest3,
      waypoints: wayPoints,
      travelMode: google.maps.TravelMode.DRIVING
    }, (res, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionDisplay.setDirections(res);
        this.route = res.routes[0];
        console.log(this.route);
      } else {
        window.alert('Direction request failed: ' + status);
      }
    });

  }

}
