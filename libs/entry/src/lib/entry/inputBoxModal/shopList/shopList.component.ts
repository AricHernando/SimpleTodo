import { Component, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/angular/standalone';
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'shop-list',
  imports: [CommonModule, ReactiveFormsModule, IonText, IonIcon, IonHeader, IonContent, IonButton, IonLabel, IonList, IonItem],
  templateUrl: './shopList.component.html',
  styleUrl: './shopList.component.css',
  providers: [FormBuilder]
})

export class ShopListComponent {
  constructor(){
    addIcons({add});
  }
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