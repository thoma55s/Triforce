import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import { PlantDetailPageComponent } from '../plant-detail-page/plant-detail-page.component';
import { HttpClient } from '@angular/common/http';
import { ApiKey } from '../shared/api-key';
import { forkJoin } from 'rxjs';
import { Observable } from 'tns-core-modules/ui/page/page';
import { PlantsService } from '../plants.service';
import {Router, ActivatedRoute} from "@angular/router"


@Component({
    selector: 'ns-plant-page',
    templateUrl: './plant-page.component.html',
    styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit{

    test: string;
    plants: Plant[];
    goodPlants: Plant[] = [];
    message: string;
    page = 0;
    endReached = false;
    rpp = 50;

    constructor(private http: HttpClient, private data: PlantsService, private route: ActivatedRoute) {}
    apiKey = new ApiKey;

    ngOnInit() {

        // this.page = this.route.snapshot.paramMap.get("page");
           this.http.get<Plant[]>(/*ApiKey.url*/this.apiKey.pagedUrl(this.page))
               .subscribe(x => {
                   this.plants = x;
                   const plantBuilder = [];
                   if (this.plants.length < this.rpp){
                       this.endReached = true;
                   }
                   console.log("Plants length " + this.plants.length);
                   for (let i = 0; i < this.plants.length; i++) {
                       //console.log(this.plants[i]);
                       const y = this.http.get(this.apiKey.getImageQuery(this.plants[i]));
                       plantBuilder.push(y);
                    }
                   forkJoin(plantBuilder).subscribe(y => {
                       //console.log(plantBuilder.length);
                       for (let i = 0; i < plantBuilder.length; i++) {
                           //console.log(plantBuilder[i]);
                           const res = JSON.parse(JSON.stringify(y[i]));
                           if (res.hits) {
                               //console.log("res hits = " + res.hits);
                               if (this.plants[i] && res.hits[0]) {
                                   this.plants[i].imageUrl = res.hits[0].largeImageURL;
                                   this.goodPlants.push(this.plants[i]);
                                   console.log(i);
                               }
                           }
                       }
                       //console.log("Plants length " + this.plants.length);
                       //console.log("Good plants length " + this.goodPlants.length);
                   })
            });
    }
}


export class Images {
    largeImageURL: string
}
export class Response {
    hits: Images[]
}
