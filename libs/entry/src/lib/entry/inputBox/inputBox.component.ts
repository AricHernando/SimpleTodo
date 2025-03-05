import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Inject, inject, Input, input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { EntryService } from "../entry.service";
import { ShopInputComponent } from "./shopInput/shopInput.component";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopInputComponent],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
})

export class InputBoxComponent {
  entryService = inject(EntryService);

  descriptionForm = new FormControl('');
  categoryForm = new FormControl<Category | null>(null);

  @Input() newEntry = new FormGroup({
    description: this.descriptionForm,
    category: this.categoryForm
  });
  
  showShopInput = false;

  ngOnInit() {
    this.categoryForm.valueChanges.subscribe(() => {
      this.showShopInput = this.categoryForm.value === Category.shop;
    })
  }

  addEntry() {
    if (!this.newEntry.valid && this.newEntry.value !== null) return;
    const entry: Entry = {
      id: 1,
      ...this.newEntry.value as {description: string, category: Category}
    }
    this.entryService.addEntry(entry);
  }
}