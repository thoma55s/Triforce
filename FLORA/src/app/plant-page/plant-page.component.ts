import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import { PlantDetailPageComponent } from '../plant-detail-page/plant-detail-page.component';
import { HttpClient } from '@angular/common/http';
import { ApiKey } from '../shared/api-key';
import { forkJoin } from 'rxjs';
import { Observable } from 'tns-core-modules/ui/page/page';
import { PlantsService } from '../plants.service';
import {Router} from "@angular/router"


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

    constructor(private http: HttpClient, private data: PlantsService) {}
    apiKey = new ApiKey;

    ngOnInit() {
        this.http.get<Plant[]>(ApiKey.url)
            .subscribe(x => {
                this.plants = x;
                const plantBuilder = [];
                for (let i = 0; i < this.plants.length; i++) {
                    const y = this.http.get(this.apiKey.getImageQuery(this.plants[i]));
                    plantBuilder.push(y);

                }
                forkJoin(plantBuilder).subscribe(y => {
                    for (let i = 0; i < plantBuilder.length; i++) {
                        const res = JSON.parse(JSON.stringify(y[i]));
                        if (res.hits) {
                            if (this.plants[i] && res.hits[0]) {
                                this.plants[i].imageUrl = res.hits[0].largeImageURL;
                                this.goodPlants.push(this.plants[i]);
                            }
                        }
                    }
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
