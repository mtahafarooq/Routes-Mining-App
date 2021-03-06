import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Waypoints } from '../data.model';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

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

  listRoutes:any[] = [];


  constructor(
    private dataService: DataServiceService,
    private router: Router) { }

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
  process(){
      let route ={
      source: this.sourceELement.nativeElement.value,
      dest1:  this.dest1ELement.nativeElement.value,
      dest2:  this.dest2ELement.nativeElement.value,
      dest3:  this.dest3ELement.nativeElement.value
    }
    let routes = this.dataService.getAllroutes();
    routes.push(route);
    this.dataService.storeRoute(routes);
    this.router.navigate([
      "/results"
    ]);    
  }
  reports(){
    this.router.navigate([
      "/reports"
    ]); 
  }
}


