import {Component, OnInit, Input} from 'angular2/core';

import {LineService} from './lines.service';
import {Line} from './line.interface';

@Component({
    selector: 'gb-line-list',
	template: `
		<ul>
            <li *ngFor="#line of lines">{{line.name}}</li>
        </ul>
	`
})
export class LineListComponent implements OnInit {
   @Input() areaId: number;
   
   private lines: Line[];
 
   constructor (
       private _lineService: LineService) {}
 
   getLines() {
       this._lineService.getLines(this.areaId)
        .then(lines => this.lines = lines);
   }
   
   ngOnInit() {
       this.getLines();
   }
}