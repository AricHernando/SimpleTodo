import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, ShoppingListItems } from '../entry.util';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './singleEntry.component.html',
  styleUrl: './singleEntry.component.css',
})

export class SingleEntryComponent {
  @Input() description = ''
  @Input() category: Category = Category.all;
  @Input() shoppingList?: ShoppingListItems;
}