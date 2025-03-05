import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'shop-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shopInput.component.html',
  styleUrl: './shopInput.component.css',
  providers: [FormBuilder]
})

export class ShopInputComponent {
  @Input() shoppingListForm: FormArray<FormGroup> = new FormArray<FormGroup>([]);

  addNewInput() {
    this.shoppingListForm.push(this.createShoppingListControls());
  }

  createShoppingListControls() {
    return new FormGroup({
      item: new FormControl('', Validators.required),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)])
    })
  }
}