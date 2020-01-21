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

    constructor(private http: HttpClient, /*private router: Router */private data: PlantsService) {}

    ngOnInit() {
        this.http.get<Plant[]>(ApiKey.url)
            .subscribe(x => {
                this.plants = x;
                const poop = [];
                for (let i = 0; i < this.plants.length; i++) {
                    const y = this.http.get(`https://pixabay.com/api/?key=14917522-60e456a3a9d6cd4eeb3285001&q=${this.plants[i].SPECIES}+${this.plants[i].GENUS}&per_page=3`);
                    poop.push(y);
                    this.data.changeMessage(this.plants[i].SPECIES)
                }
                forkJoin(poop).subscribe(y => {
                    for (let i = 0; i < poop.length; i++) {
                        const res = JSON.parse(JSON.stringify(y[i]));
                        console.log(res);
                        console.log('test')
                        if (res.hits) {
                            if (this.plants[i] && res.hits[0]) {
                                this.plants[i].imageUrl = res.hits[0].largeImageURL;
                                this.goodPlants.push(this.plants[i]);
                            }
                        }
                    }
                })
              //this.data.changeMessage(this.plants[0].SPECIES)  
            });

            
    }

}


export class Images {
    largeImageURL: string
}
export class Response {
    hits: Images[]
}
