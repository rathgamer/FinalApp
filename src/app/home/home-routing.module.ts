import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BreedViewComponent } from "./breedview/breedview.component";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "breedview/:breedname", component: BreedViewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }

export const appComponents: any = [
    HomeComponent,
    BreedViewComponent
];