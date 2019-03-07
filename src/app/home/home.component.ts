import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sourceInput') sourceELement: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.sourceELement);
    const srcAutoComplete = new google.maps.places.Autocomplete(this.sourceELement.nativeElement);
    google.maps.event.addListener(srcAutoComplete, 'place_changed', () => {
      console.log(srcAutoComplete.getPlace());
    });
  }

}
