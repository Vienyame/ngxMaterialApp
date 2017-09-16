import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {

  private subject = new Subject<Alert>();
  public alert$: Observable<Alert> = this.subject.asObservable();
  private keepAfterRouteChange = false;

  public alertsSubject = new BehaviorSubject([]);
  public alertsArray$: Observable<Alert[]> = this.alertsSubject.asObservable();
  private alertsList: Alert[] = [];

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }

  warn(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    const alertObj = <Alert>{ type: type, message: message };
    console.log(alertObj);
    this.subject.next(alertObj);
    this.addAlert(alertObj);
  }

  clear() {
    // clear alerts
    this.subject.next();
  }

  addAlert(alert: Alert) {
    this.alertsList.push(alert);
    console.log(this.alertsList);
    this.alertsSubject.next(this.alertsList);
  }

  removeAlertFromList(alert: Alert) {
    this.alertsList = this.alertsList.filter(x => x !== alert);
    this.alertsSubject.next(this.alertsList);
  }

  initAlertList() {
    console.log('init list');
    this.alertsList = [<Alert>{ type: AlertType.Success, message: 'oh lalala' }];
    console.log(this.alertsList);
    this.alertsSubject.next(this.alertsList);
  }

}
