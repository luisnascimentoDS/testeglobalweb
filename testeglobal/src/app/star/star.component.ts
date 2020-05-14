import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    // tslint:disable-next-line:no-inferrable-types
    nota: number = 0;

    starWidth: number;

    ngOnChanges(): void {

        // tslint:disable-next-line:whitespace
        this.starWidth = this.nota * 74/5;
    }
}
