import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'app.component.html',
  imports: [
     RouterOutlet
  ]
})
export class AppComponent {
  //nessun commit è stato fatto, è solo un test
  //altro test
  a = 1;
  b = 2;
}