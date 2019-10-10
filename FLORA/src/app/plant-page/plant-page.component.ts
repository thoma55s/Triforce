import { Component, OnInit } from '@angular/core';
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";


@Component({
  selector: 'ns-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {

    plants : Array<Plant>
  constructor() { }

  ngOnInit() {
    this.plants = JSON.parse('[{"Name" : "rose","ImageUrl" : "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-RHTc0HJizio%2FUZ4b_u08BQI%2FAAAAAAAAPQk%2Fg21ku1sURIk%2Fs1600%2Fred-rose154388.jpg&f=1&nofb=1"}, {"Name" : "tulip","ImageUrl" : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.luOE41r0HjCOmcqobg6mxwHaHa%26pid%3DApi&f=1"}]');
    }


}
