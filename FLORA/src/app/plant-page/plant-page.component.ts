import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
<<<<<<< HEAD
import { PlantDetailPageComponent } from '../plant-detail-page/plant-detail-page.component';
=======
import { HttpClient } from '@angular/common/http';
import { ApiKey } from '../shared/api-key';
import { forkJoin } from 'rxjs';
import { Observable } from 'tns-core-modules/ui/page/page';
>>>>>>> master


@Component({
    selector: 'ns-plant-page',
    templateUrl: './plant-page.component.html',
    styleUrls: ['./plant-page.component.css']
})
<<<<<<< HEAD
export class PlantPageComponent implements OnInit{
=======
export class PlantPageComponent {
>>>>>>> master

    test: string;
    plants: Plant[];
    goodPlants: Plant[] = [];

<<<<<<< HEAD
  ngOnInit() {
    this.plants = JSON.parse('[{"Name" : "rose","ImageUrl" : "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-RHTc0HJizio%2FUZ4b_u08BQI%2FAAAAAAAAPQk%2Fg21ku1sURIk%2Fs1600%2Fred-rose154388.jpg&f=1&nofb=1"}, {"Name" : "tulip","ImageUrl" : "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.luOE41r0HjCOmcqobg6mxwHaHa%26pid%3DApi&f=1"}]');  
    this.sendMessage()
  }
=======
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        this.http.get<Plant[]>(ApiKey.url)
            .subscribe(x => {
                this.plants = x;
                const poop = [];
                for (let i = 0; i < this.plants.length; i++) {
                    const y = this.http.get(`https://pixabay.com/api/?key=14917522-60e456a3a9d6cd4eeb3285001&q=${this.plants[i].SPECIES}+${this.plants[i].GENUS}&per_page=3`);
                    poop.push(y);
>>>>>>> master

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

<<<<<<< HEAD
message : string = "Test"
@Output() messageEvent = new EventEmitter<string>();

sendMessage() {
    this.messageEvent.emit(this.message)
  }

=======
            });

    }
}


export class Images {
    largeImageURL: string
}
export class Response {
    hits: Images[]
>>>>>>> master
}
