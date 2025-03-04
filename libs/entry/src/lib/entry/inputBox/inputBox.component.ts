import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Inject, inject, Input, input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { EntryService } from "../entry.service";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
  providers: [EntryService]
})

export class InputBoxComponent {
  @Input() newEntry = new FormGroup({
    description: new FormControl(''),
    category: new FormControl<Category | null>(null)
  });
  
  entryService = inject(EntryService);

  addEntry() {
    if (!this.newEntry.valid && this.newEntry.value !== null) return;
    const entry: Entry = {
      id: 1,
      ...this.newEntry.value as {description: string, category: Category}
    }
    this.entryService.addEntry(entry);
  }
}