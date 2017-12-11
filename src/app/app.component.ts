import { Component, HostBinding } from '@angular/core';
import { fade } from './animations';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fade()]
})
export class AppComponent {
  @HostBinding('@routerTransition') routerTransition;
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
