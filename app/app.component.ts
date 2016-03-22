import {Component} from 'angular2/core';
import {LineService} from './lines.service'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'guidebook',
    styleUrls: ['./app/app.component.css'],
    providers: [LineService],
    template: `
        <h1>Guidebook</h1>
        <ul>
            <li *ngFor="#area of areas">{{area.name}}</li>
        </ul>
	`
})
export class AppComponent implements OnInit {
   private areas: any[];
 
   constructor(private _lineService: LineService){}
 
   getAreas() {
     this._lineService.getAreas()
       .then(areas => this.areas = areas);
   }
   
   ngOnInit() {
       this.getAreas();
   }
}

