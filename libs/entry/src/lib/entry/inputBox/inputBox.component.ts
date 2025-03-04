import { CommonModule } from "@angular/common";
import { Component, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './inputBox.component.html',
  styleUrl: './inputBox.component.css',
})

export class InputBoxComponent {
    @Output() 
    newTodo = '';

    addEntry() {
        console.log(this.newTodo);
        this.newTodo = '';
    }
}
