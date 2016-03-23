import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Area} from './area.interface';
import {LineService} from './lines.service';

@Component({
    selector: '[gb-area-detail]',
	template: `
		<h2 *ngIf="area">{{area.name}} area</h2>
	`
})
export class AreaDetailComponent implements OnInit {
    private area: Area;
    
    constructor(
        private _lineService: LineService,
        private _routeParams: RouteParams){}
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        
        this._lineService.getArea(id)
            .then(area => this.area = area);
    }
    
}