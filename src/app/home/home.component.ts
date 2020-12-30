import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    public breedlist: any;
    private isLoading: boolean = false;

    public constructor(private http: HttpClient, private router: Router) {
        // Use the component constructor to inject providers.
    }

    public ngOnInit(): void {
        this.getBreedList();
    }

    public getBreedList(){
        this.isLoading = true;
        this.http.get("https://dog.ceo/api/breeds/list")
        .pipe(map(result => (<any>result)))
        .subscribe(result => {
            this.breedlist = result.message;
            this.isLoading = false;
        }, error => {
            // console.error(error);
            alert("Sorry for the inconvenience! contact us for more info...");
        });
    }

    onBreedTap(args) {
        this.router.navigate(["home/breedview", args])
    }
}