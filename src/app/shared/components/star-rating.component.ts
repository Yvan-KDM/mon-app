import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

    public startWidth: number = 1;
    public rating: number = 2;

    ngOnChanges() {
        this.startWidth = this.rating * 125 / 5;
    }

}