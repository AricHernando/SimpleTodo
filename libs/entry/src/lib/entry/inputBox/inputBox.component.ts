import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Inject, inject, Input, input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { Subject } from "rxjs";
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
    description: new FormControl('', [Validators.required]),
    category: new FormControl(Category.all, [Validators.required])
  });
  
  service = inject(EntryService);

  addEntry() {
    if (!this.newEntry.valid) return;
    const entry: Entry = {
      id: 1,
      ...this.newEntry.value as {description: string, category: Category}
    }
    this.service.addEntry(entry);
  }
}