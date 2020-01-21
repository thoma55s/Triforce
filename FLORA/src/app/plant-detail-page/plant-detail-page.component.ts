import { Component, OnInit } from '@angular/core';
import { PlantPageComponent } from '../plant-page/plant-page.component';
import { PlantsService } from '../plants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-plant-detail-page',
  templateUrl: './plant-detail-page.component.html',
  styleUrls: ['./plant-detail-page.component.css']
})
export class PlantDetailPageComponent implements OnInit{

  currentPlant : Plant
  species:string;
  genus:string = "temp";

  constructor(private route: ActivatedRoute, private data: PlantsService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.species = message)
    //this.data.changeMessage(this.message)

    // this.route.params.subscribe((params) => {this.message = params["name"];})
  }

}
