import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleEntryComponent } from './singleEntry/singleEntry.component';
import { Category, Entry } from './entry.util';

@Component({
  selector: 'lib-entry',
  imports: [CommonModule, ReactiveFormsModule, InputBoxComponent, SingleEntryComponent],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})

export class EntryComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly queryParam$ = new BehaviorSubject(Category.all);
  
  category: Category = Category.all;
  entries: Entry[] = [];
  
  entryService = inject(EntryService);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.category = (params.get('category') || 'all') as Category;
        this.queryParam$.next(this.category);     
    
        return this.queryParam$;
      }),
      switchMap(category => this.entryService.getEntries(category)))
      .subscribe(entries => {
        this.entries = entries as Entry[];
      }
    );

    this.entryService.entry$.subscribe(entry => {
      if(entry === null) return;

      // POST, and then trigger change for entries
      // Probably need to change Entry observable into Entry[], but can't do much without a backend
    

      this.entries.push(entry);
    })
  }

  
}