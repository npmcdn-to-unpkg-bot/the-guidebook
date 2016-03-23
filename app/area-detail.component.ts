import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {LineListComponent} from './line-list.component';
import {Area} from './area.interface';
import {LineService} from './lines.service';

@Component({
    selector: '[gb-area-detail]',
    directives: [LineListComponent],
	template: `
        <div *ngIf="area">
		    <h2>{{area.name}} area</h2>
            <gb-line-list [areaId]="area.id"></gb-line-list>
        </div>
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