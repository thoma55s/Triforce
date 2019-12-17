import { Component, OnInit } from '@angular/core';
import { PlantPageComponent } from '../plant-page/plant-page.component';

@Component({
  selector: 'ns-plant-detail-page',
  templateUrl: './plant-detail-page.component.html',
  styleUrls: ['./plant-detail-page.component.css']
})
export class PlantDetailPageComponent implements OnInit{

  currentPlant : Plant
  constructor() { }

  ngOnInit() {
    
  }

  message:string = "Fail";

  receiveMessage($event) {
    this.message = $event
  }

}
