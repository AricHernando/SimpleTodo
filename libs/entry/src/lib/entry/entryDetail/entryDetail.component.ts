import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, ShoppingListItems } from '../entry.util';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'entry-detail',
  imports: [CommonModule, IonContent, ReactiveFormsModule],
  templateUrl: './entryDetail.component.html',
  styleUrl: './entryDetail.component.css',
})

export class EntryDetailComponent {

}