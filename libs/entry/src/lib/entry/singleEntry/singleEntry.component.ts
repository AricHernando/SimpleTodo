import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopItem } from '../entry.util';

@Component({
  selector: 'single-entry',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './singleEntry.component.html',
  styleUrl: './singleEntry.component.css',
})

export class SingleEntryComponent {
  @Input() description = ''
  @Input() category = ''
  @Input() shoppingList: ShopItem[] = []
}