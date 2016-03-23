import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {LineService} from './lines.service';
import {AreasComponent} from './areas.component';
import {AreaDetailComponent} from './area-detail.component';

@Component({
    selector: 'guidebook',
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        LineService
    ],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['AreaList']">Areas</a>
        </nav>
        <router-outlet></router-outlet>
	`
})
@RouteConfig([
    {
        path: '/areas',
        name: "AreaList",
        component: AreasComponent,
        useAsDefault: true
    },
    {
        path: '/area/:id',
        name: 'AreaDetail',
        component: AreaDetailComponent
    }
])
export class AppComponent {
    private title: string = "Guidebook";
}

