import { Component, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'shop-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shopList.component.html',
  styleUrl: './shopList.component.css',
  providers: [FormBuilder, IonCard]
})

export class ShopListComponent {
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