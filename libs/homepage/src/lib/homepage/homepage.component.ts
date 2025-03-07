import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonNav, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline} from 'ionicons/icons'
import { EntryComponent } from '@todo/entry'
import { Category } from 'libs/entry/src/lib/entry/entry.util';
import { InputBoxModalComponent } from 'libs/entry/src/lib/entry/inputBoxModal/inputBoxModal.component';

@Component({
  selector: 'lib-homepage',
  imports: [CommonModule, IonTab, IonFab, IonFabButton, IonNav, EntryComponent, IonTabs, IonTabBar, IonIcon, IonTabButton, IonIcon, IonHeader, IonTitle, IonToolbar, IonContent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  constructor(private modalCtrl: ModalController) {
    addIcons({
      logoIonic, homeOutline, businessOutline, compassOutline, bagHandleOutline
    })
  }
  
  public CategoryEnum = Category;
}
