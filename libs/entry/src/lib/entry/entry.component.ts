import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, switchMap } from 'rxjs';
import { EntryService } from './entry.service';
import { InputBoxModalComponent } from './inputBoxModal/inputBoxModal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleEntryComponent } from './singleEntry/singleEntry.component';
import { Category, Entry } from './entry.util';
import { IonFab, IonFabButton, ModalController, IonGrid, IonIcon, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'lib-entry',
  imports: [CommonModule, ReactiveFormsModule, IonFab, IonRow, IonCol, IonText, IonIcon, IonFabButton, SingleEntryComponent, IonGrid],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})

export class EntryComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {
    addIcons({
      add
    });
  }

  @Input() category: Category = Category.all;
  entries: Entry[] = [];
  
  entryService = inject(EntryService);
  
  ngOnInit(): void {
    of(this.category).pipe(
      switchMap(category => 
        this.entryService.getEntriesByCategory(category)
      )).subscribe(entries => {
        this.entries = entries;
      })
      
      this.entryService.entries$.pipe(
        switchMap(category => 
          this.entryService.getEntriesByCategory(this.category)
        )).subscribe(entries => {
          this.entries = entries;
        })
      }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InputBoxModalComponent,
    });
    modal.present();

    await modal.onWillDismiss();
  }
}