import {LINES} from './mock-lines';
import {AREAS} from './mock-lines';

import {Injectable} from 'angular2/core';
 
@Injectable()
export class LineService {
    getAreas() {
        return Promise.resolve(AREAS);
    }
    
    getArea(id: number) {
        return Promise.resolve(AREAS.filter(a => a.id === id)[0]);
    }
    
    getLines(areaId: number) {
        return Promise.resolve(LINES.filter(l => l.areaId === areaId));
    }
}