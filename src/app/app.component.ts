import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./app.component.css',"../../node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css"]
})
export class AppComponent {
  title = 'CorvoBiancoFront';
}
