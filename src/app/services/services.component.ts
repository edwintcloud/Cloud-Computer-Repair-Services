import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  constructor(private _analytics: AnalyticsService) { }

  ngOnInit() {
    this._analytics.pageView('/services');
  }

}
