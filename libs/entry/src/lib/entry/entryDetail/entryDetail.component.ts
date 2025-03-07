import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category, Entry, ShoppingListItems } from '../entry.util';
import { IonContent } from '@ionic/angular/standalone';
import { EntryService } from '../entry.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'entry-detail',
  imports: [CommonModule, IonContent, ReactiveFormsModule],
  templateUrl: './entryDetail.component.html',
  styleUrl: './entryDetail.component.css',
})

export class EntryDetailComponent {
  private readonly route = inject(ActivatedRoute)
  private entryId$ = new BehaviorSubject(-1)
  entry?: Entry;

  entryService = inject(EntryService)

  // TODO: Pass data from parent or just search it from db?
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.entryId$.next(Number(params.get('entryId')))
        return this.entryId$
      }),
      switchMap(entryId => 
        this.entryService.getEntriesById(entryId))
      ).subscribe(entry => {
        this.entry = entry;
      }
    );
  }
}