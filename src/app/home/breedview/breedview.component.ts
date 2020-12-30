import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "breedview",
    templateUrl: "./breedview.component.html",
})
export class BreedViewComponent implements OnInit {

    public breedname : string;
    public breedimgUrl: any;
    public subBreed: any;
    public subBreedHead: any;
    private isLoading: boolean = false;

    public constructor(private http: HttpClient, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
        this.route.params.subscribe((params) => {
            this.breedname = params["breedname"];
        });
    }

    public ngOnInit(): void {
        this.getBreedDetails();
    }

    public getBreedDetails(){
        this.isLoading = true;
        this.http.get("https://dog.ceo/api/breed/"+ this.breedname +"/images/random")
        .pipe(map(result => (<any>result)))
        .subscribe(result => {
            this.breedimgUrl = result.message;
        }, error => {
            // console.error(error);
            alert("Sorry for the inconvenience! contact us for more info...");
        });
        this.http.get("https://dog.ceo/api/breed/"+ this.breedname +"/list")
        .pipe(map(result => (<any>result)))
        .subscribe(result => {
            this.subBreed = result.message;
        }, error => {
            alert("Sorry for the inconvenience! contact us for more info...");
        });

        // this.subBreedHead = "There are no sub breeds for "
        this.subBreedHead = "Sub breeds of "
        this.isLoading = false;
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
