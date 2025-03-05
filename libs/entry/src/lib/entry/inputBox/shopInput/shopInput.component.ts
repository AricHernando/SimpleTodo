import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'shop-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shopInput.component.html',
  styleUrl: './shopInput.component.css',
  providers: [FormBuilder]
})

export class ShopInputComponent {
  shoppingList: string[] = [];   
   
}