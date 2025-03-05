import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
import { HttpClient } from '@angular/common/http';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  
  service = inject(EntryService);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.category = (params.get('category') || 'all') as Category;
        this.queryParam$.next(this.category);     
    
        return this.queryParam$;
      }),
      switchMap(category => this.service.getEntries(category))).
      subscribe(entries => {
        this.entries = entries as Entry[];
      }
    );

    this.service.entry$.subscribe(entry => {
      if(entry === null) return;
      this.entries.push(entry);
    })
  }
}