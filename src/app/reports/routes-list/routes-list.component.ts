import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { Waypoints } from 'src/app/data.model';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

  private routesList:any[] = [];
  cols: any[];
  
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.routesList = this.dataService.getAllroutes();
    
    this.cols = [
      { field: 'source',header: 'Source' },
      { field: 'dest1', header: 'Destination 1' },
      { field: 'dest2', header: 'Destination 2' },
      { field: 'dest2', header: 'Destination 2' }
  ];
  }

}
