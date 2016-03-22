import {Component, Input} from 'angular2/core';
import {Line} from './line.interface';

@Component({
    selector: '[gb-line]',
	template: `
		<span>{{line.name}}</span>
	`
})
export class LineComponent {
    @Input() line: Line;
    
}