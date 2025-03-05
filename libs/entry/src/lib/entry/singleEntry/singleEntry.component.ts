import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, ShoppingListItems } from '../entry.util';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, ReactiveFormsModule, IonCard, IonCardTitle, IonCardContent, IonCardHeader],
  templateUrl: './singleEntry.component.html',
  styleUrl: './singleEntry.component.css',
})

export class SingleEntryComponent {
  @Input() description = ''
  @Input() category: Category = Category.all;
  @Input() shoppingList?: ShoppingListItems[];
}