import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { Subject } from "rxjs";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
})

export class InputBoxComponent {
  @Input() newEntry = new FormGroup({
    description: new FormControl('', [Validators.required]),
    category: new FormControl(Category.all, [Validators.required])
  });
  
  private entrySubject = new Subject<Entry>();
  entry$ = this.entrySubject.asObservable();

  addEntry() {
    if (!this.newEntry.valid) return;
    const entry: Entry = {
      id: 1,
      ...this.newEntry.value as {description: string, category: Category}
    }
    this.entrySubject.next(entry);
  }
}
