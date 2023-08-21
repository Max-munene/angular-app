import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  showFiller = true;

  employee:any

  toggleElement() {
    this.showFiller = false;
  }

  constructor(private myService:DataServiceService){
  
  }

  ngOnInit(): void {
  this.myService.getEmployee().subscribe(data =>
    this.employee = data )
  }
}
