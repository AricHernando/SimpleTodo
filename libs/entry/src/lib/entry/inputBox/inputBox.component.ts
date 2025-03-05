import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Inject, inject, Input, input, OnInit, Output } from "@angular/core";
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry, ShoppingListItems } from "../entry.util";
import { EntryService } from "../entry.service";
import { ShopInputComponent } from "./shopList/shopInput.component";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopInputComponent],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
})

export class InputBoxComponent {
  entryService = inject(EntryService);

  descriptionForm = new FormControl('', Validators.required);
  categoryForm = new FormControl<Category | null>(null, Validators.required);
  shoppingListForm = new FormArray<FormGroup>([]);

  @Input() newEntry = new FormGroup({
    description: this.descriptionForm,
    category: this.categoryForm,
    shoppingList: this.shoppingListForm
  });
  
  showShopInput = false;

  ngOnInit() {
    this.categoryForm.valueChanges.subscribe(() => {
      this.showShopInput = this.categoryForm.value === Category.shop;
    })
  }
  
  onSubmit() {
    if (!this.newEntry.valid && this.newEntry.value !== null) return;
    console.log(this.newEntry.value);
    // const entry: Entry = {
    //   id: 1,
    //   ...this.newEntry.value as {description: string, category: Category, shoppingList: ShoppingListItems}
    // }
    // this.entryService.addEntry(entry);
  }
}