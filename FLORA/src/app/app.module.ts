import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlantPageComponent } from './plant-page/plant-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { PlantDetailPageComponent } from './plant-detail-page/plant-detail-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        PlantPageComponent,
        MenuPageComponent,
        PlantDetailPageComponent,
        AboutPageComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
