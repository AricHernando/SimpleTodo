import { CommonModule } from "@angular/common";
import { Component, computed, inject, Input, signal } from "@angular/core";
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { EntryService } from "../entry.service";
import { ShopListComponent } from "./shopList/shopList.component";
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopListComponent, IonButton],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
})

export class InputBoxComponent {
  entryService = inject(EntryService);

  descriptionForm = new FormControl('', Validators.required);
  categoryForm = new FormControl<Category | null>(null, Validators.required);
  
  shoppingListForm = new FormArray<FormGroup>([]);
  
  categorySignal = signal<Category | null>(Category.all);
  showShoppingListForm = computed(() => this.categorySignal() === Category.shop);

  ngOnInit() {
    this.categoryForm.valueChanges.subscribe(value => {
      console.log(this.categoryForm.value)
      this.categorySignal.set(this.categoryForm.value)
    });  
  }
  
  @Input() newEntry = new FormGroup({
    description: this.descriptionForm,
    category: this.categoryForm,
    shoppingList: this.shoppingListForm
  });
    
  onSubmit() {
    if (!this.newEntry.valid && this.newEntry.value !== null) return;
    const entry: Entry = {
      id: 1,
      description: this.newEntry.value?.description || '',
      category: this.newEntry.value?.category || Category.all,
      shoppingList: this.newEntry.value?.shoppingList || []
    }
    this.entryService.addEntry(entry);
  }
}