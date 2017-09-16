import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from './alert';
import { AlertService } from './alert.service';

@Component({
  moduleId: module.id,
  selector: 'alert',
  template: `
    <div *ngIf="alertsArray | async as alerts">
      <div *ngFor="let alert of alerts" class="{{ cssClass(alert) }} alert-dismissable">
        {{alert.message}}
        <a class="close" (click)="removeAlert(alert)">&times;</a>
      </div>
    </div>
  `,
  providers: [AlertService],
})
export class AlertComponent implements OnInit {
  // alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert()
      .subscribe((alert: Alert) => {
        if (!alert) {
          // clear alerts when an empty alert is received
          // this.alerts = [];
            this.alertService.initAlertList();
          return;
        }

        // add alert to array
        // console.log('alerts', this.alerts);
        // this.alerts.push(alert);
        this.alertService.addAlert(alert);
      });
  }

  removeAlert(alert: Alert) {
    console.log('removing...', alert);
    // console.log('alerts', this.alerts);
    // this.alerts = this.alerts.filter(x => x !== alert);
    this.alertService.removeAlertFromList(alert);
  }

  get alertsArray() {
    return this.alertService.alertsArray$;
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
