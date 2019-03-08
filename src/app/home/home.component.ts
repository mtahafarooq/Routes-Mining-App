import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Waypoints } from '../data.model';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sourceInput') sourceELement: ElementRef;
  @ViewChild('dest1') dest1ELement: ElementRef;
  @ViewChild('dest2') dest2ELement: ElementRef;
  @ViewChild('dest3') dest3ELement: ElementRef;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    const srcAutoComplete = new google.maps.places.Autocomplete(this.sourceELement.nativeElement);
    google.maps.event.addListener(srcAutoComplete, 'place_changed', () => {
      this.dataService.setSource(srcAutoComplete.getPlace().formatted_address);
    });

    const dest1AutoComplete = new google.maps.places.Autocomplete(this.dest1ELement.nativeElement);
    google.maps.event.addListener(dest1AutoComplete, 'place_changed', () => {
      this.dataService.setdest1(dest1AutoComplete.getPlace().formatted_address);
    });
    const dest2AutoComplete = new google.maps.places.Autocomplete(this.dest2ELement.nativeElement);
    google.maps.event.addListener(dest2AutoComplete, 'place_changed', () => {
      this.dataService.setdest2(dest2AutoComplete.getPlace().formatted_address);
    });
    const dest3AutoComplete = new google.maps.places.Autocomplete(this.dest3ELement.nativeElement);
    google.maps.event.addListener(dest3AutoComplete, 'place_changed', () => {
      this.dataService.setdest3(dest3AutoComplete.getPlace().formatted_address);
    });
  }

}
