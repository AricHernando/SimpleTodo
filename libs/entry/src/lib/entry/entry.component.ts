import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, filter, merge, mergeAll, of, switchMap, tap, toArray } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleEntryComponent } from './singleEntry/singleEntry.component';
import { Category, Entry } from './entry.util';
import { IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'lib-entry',
  imports: [CommonModule, ReactiveFormsModule, InputBoxComponent, SingleEntryComponent, IonGrid],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})

export class EntryComponent implements OnInit {  
  @Input() category: Category = Category.all;
  entries: Entry[] = [];
  
  entryService = inject(EntryService);

  ngOnInit(): void {

    of(this.category).pipe(
      switchMap(category => {
        return this.entryService.getEntries(category);
      })).subscribe(entries => {
        this.entries = entries;
      })

    this.entryService.entries$.pipe(
      switchMap(category => {
        return this.entryService.getEntries(this.category);
      })).subscribe(entries => {
        this.entries = entries;
      })
  }
}