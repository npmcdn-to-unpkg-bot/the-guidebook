import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {LineService} from './lines.service';
import {Area} from './area.interface';

@Component({
    selector: 'gb-area-list',
	template: `
		<ul>
            <li *ngFor="#area of areas" (click)="gotoArea(area)">{{area.name}}</li>
        </ul>
	`
})
export class AreaListComponent implements OnInit {
   private areas: Area[];
 
   constructor (
       private _lineService: LineService,
       private _router: Router) {}
 
   getAreas() {
       this._lineService.getAreas()
        .then(areas => this.areas = areas);
   }
   
   ngOnInit() {
       this.getAreas();
   }
   
   gotoArea(area: Area) {
       this._router.navigate(['AreaDetail', { id: area.id }]);
   }
}