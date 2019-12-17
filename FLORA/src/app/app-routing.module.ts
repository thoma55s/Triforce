import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PlantPageComponent } from "./plant-page/plant-page.component";
import { MenuPageComponent } from "./menu-page/menu-page.component";
import { PlantDetailPageComponent } from "./plant-detail-page/plant-detail-page.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MenuPageComponent },
    { path: "plants", component: PlantPageComponent},
    { path: "plantdetail", component: PlantDetailPageComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
