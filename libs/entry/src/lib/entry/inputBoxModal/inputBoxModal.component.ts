import { CommonModule } from "@angular/common";
import { Component, computed, inject, Input, signal } from "@angular/core";
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Category, Entry } from "../entry.util";
import { EntryService } from "../entry.service";
import { ShopListComponent } from "./shopList/shopList.component";
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonText, IonTextarea, IonTitle, IonToolbar, ModalController } from "@ionic/angular/standalone";

@Component({
  selector: 'input-box',
  imports: [CommonModule, FormsModule, IonItem, IonText, IonGrid, IonLabel, IonCol, IonTextarea, IonHeader, IonList, IonButtons, IonTitle, IonToolbar, IonContent, ReactiveFormsModule, ShopListComponent, IonButton, IonRadio, IonRadioGroup, IonInput],
  templateUrl: './inputBoxModal.component.html',
  styleUrl: './inputBoxModal.component.css',
})

export class InputBoxModalComponent {
  constructor(private modalCtrl: ModalController) {}

  entryService = inject(EntryService);

  titleForm = new FormControl('', Validators.required);
  descriptionForm = new FormControl('', Validators.required);
  categoryForm = new FormControl<Category | null>(null, Validators.required);
  
  categorySignal = signal<Category | null>(Category.all);
  
  shoppingListForm = new FormArray<FormGroup>([]);
  showShoppingListForm = computed(() => this.categorySignal() === Category.shop);

  ngOnInit() {
    this.categoryForm.valueChanges.subscribe(value => {
      this.categorySignal.set(value);
    });  
  }
  
  @Input() newEntry = new FormGroup({
    title: this.titleForm,
    description: this.descriptionForm,
    category: this.categoryForm,
    shoppingList: this.shoppingListForm
  });

  cancel() {
    this.modalCtrl.dismiss();
  }
    
  confirm() {
    if (!this.newEntry.valid && this.newEntry.value !== null) return;

    const entry: Entry = {
      id: 1,
      title: this.newEntry.value?.title || '',
      description: this.newEntry.value?.description || '',
      category: this.newEntry.value?.category || Category.all,
      shoppingList: this.newEntry.value?.shoppingList || []
    }
    this.entryService.addEntry(entry);
    this.modalCtrl.dismiss();
  }
}