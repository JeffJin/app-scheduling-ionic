import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import Echo from './services/echo.plugin';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() {
  }

  async ngOnInit(): Promise<void> {
    const { value } = await Echo.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
  }
}
