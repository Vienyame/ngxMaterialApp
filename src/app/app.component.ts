import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <div class="container">
        <div class="col-sm-8 col-sm-offset-2">
            <alert></alert>
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
