import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonRadio, IonRadioGroup, IonRippleEffect, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'lib-homepage',
  imports: [CommonModule, IonMenu, IonHeader, IonTitle, IonNav, IonToolbar, IonContent, IonButtons, IonMenuButton, IonButton, IonItem, IonList],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
