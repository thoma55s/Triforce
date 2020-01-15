import { Component, OnInit } from '@angular/core';
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import { HttpClient } from '@angular/common/http';
import { ApiKey } from '../shared/api-key';


@Component({
  selector: 'ns-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent {

  test: string;
  plants: Plant[];

  constructor(private http: HttpClient) {
    http.get(ApiKey.url).subscribe(x => { this.plants = JSON.parse(JSON.stringify(x)); });
  }
}
