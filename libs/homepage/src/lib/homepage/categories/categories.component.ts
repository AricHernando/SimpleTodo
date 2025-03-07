import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonRadio, IonRadioGroup, IonRippleEffect, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline} from 'ionicons/icons'

@Component({
  selector: 'categories',
  imports: [CommonModule, IonContent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor() {
    addIcons({
      logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline
    })
  }
}
