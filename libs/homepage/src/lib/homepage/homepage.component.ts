import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonRadio, IonRadioGroup, IonRippleEffect, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline} from 'ionicons/icons'
import { CategoriesComponent } from './categories/categories.component';
import { EntryComponent } from '@todo/entry'
import { Category } from 'libs/entry/src/lib/entry/entry.util';

@Component({
  selector: 'lib-homepage',
  imports: [CommonModule, IonTab, IonNav, EntryComponent, IonTabs, IonTabBar, IonIcon, IonTabButton, IonIcon, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonMenuButton, IonButton, IonItem, IonList, CategoriesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  constructor() {
    addIcons({
      logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline
    })
  }

  public CategoryEnum = Category;
}
