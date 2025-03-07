import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, Entry, ShoppingListItems } from '../entry.util';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/angular/standalone';
import { IonNav } from '@ionic/angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCol],
  templateUrl: './singleEntry.component.html',
  styleUrl: './singleEntry.component.css',
})

export class SingleEntryComponent {
  @Input() entry?: Entry;
}