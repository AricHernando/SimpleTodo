import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, filter, merge, mergeAll, switchMap, tap, toArray } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleEntryComponent } from './singleEntry/singleEntry.component';
import { Category, Entry } from './entry.util';
import { IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'lib-entry',
  imports: [CommonModule, ReactiveFormsModule, InputBoxComponent, SingleEntryComponent, IonGrid, IonRow],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})

export class EntryComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly category$ = new BehaviorSubject(Category.all);
  
  category: Category = Category.all;
  entries: Entry[] = [];
  
  entryService = inject(EntryService);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.category = (params.get('category') || 'all') as Category;
        this.category$.next(this.category);     
        
        return this.category$;
      }),
      switchMap(category => {
        return this.entryService.getEntries(category as Category);
      })).subscribe(entries => {
        this.entries = entries;
      })

    // Should probably make the bottom half a function instead
    this.entryService.entries$.pipe(
      switchMap(() => {
        return this.category$;
      }),
      switchMap(category => {
        return this.entryService.getEntries(category as Category);
      })).subscribe(entries => {
        this.entries = entries;
      })   
  }
}