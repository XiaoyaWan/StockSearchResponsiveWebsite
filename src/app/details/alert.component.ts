import {Component, Input, ViewChild} from '@angular/core';

@Component({ selector: 'app-alert', templateUrl: 'alert.component.html' })
export class AlertComponent {
    @Input() collect: boolean;
    @Input() buy: boolean;
    @Input() ticker: string;
}
