import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, images, videocam, document } from 'ionicons/icons';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.page.html',
  styleUrls: [ './assets.page.scss' ],
  imports: [
    CommonModule, FormsModule, IonIcon, IonLabel, IonTabBar,
    IonTabButton, IonTabs
  ]
})
export class AssetsPage implements OnInit {

  constructor() {
    addIcons({ document, videocam, camera, images });
  }

  ngOnInit() {
  }

}
