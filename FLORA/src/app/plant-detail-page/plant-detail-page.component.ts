import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiKey } from '../shared/api-key';

@Component({
  selector: 'ns-plant-detail-page',
  templateUrl: './plant-detail-page.component.html',
  styleUrls: ['./plant-detail-page.component.css']
})
export class PlantDetailPageComponent implements OnInit {

  res: Plant[]
  currentPlant: Plant
  id: string;
  goodPlant: Plant;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  apiKey = new ApiKey;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    this.http.get<Plant[]>(this.apiKey.getPlantbyID(this.id))
      .subscribe(x => {
        this.res = JSON.parse(JSON.stringify(x))
        this.currentPlant = this.res[0]
        this.http.get(this.apiKey.getImageQuery(this.currentPlant)).subscribe(y => {
          const res2 = JSON.parse(JSON.stringify(y));
          this.currentPlant.imageUrl = res2.hits[0].largeImageURL;
          console.log(this.currentPlant);
          this.goodPlant = this.currentPlant;
        })
      });
  }
}
