import {Component, Input, OnInit} from 'angular2/core';
import {LineService} from './lines.service';

@Component({
    selector: '[gb-areas]',
	template: `
		<ul>
            <li *ngFor="#area of areas">{{area.name}}</li>
        </ul>
	`
})
export class AreasComponent implements OnInit {
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