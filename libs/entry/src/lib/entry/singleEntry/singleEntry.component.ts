import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, ShoppingListItems } from '../entry.util';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, ReactiveFormsModule, IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCol],
  templateUrl: './singleEntry.component.html',
  styleUrl: './singleEntry.component.css',
})

export class SingleEntryComponent {
  @Input() description = ''
  @Input() category: Category = Category.all;
  @Input() shoppingList?: ShoppingListItems[];
}