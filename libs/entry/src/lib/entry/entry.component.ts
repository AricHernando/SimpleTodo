import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './entry.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { InputBoxComponent } from './inputBox/inputBox.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { Category, Entry } from './entry.util';
@Component({
  selector: 'lib-entry',
  imports: [CommonModule, ReactiveFormsModule, InputBoxComponent, SingleEntryComponent],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
  providers: [EntryService, HttpClient]
})

export class EntryComponent implements OnInit {
  @ViewChild(InputBoxComponent) inputBoxComponent!: InputBoxComponent;

  private readonly route = inject(ActivatedRoute);
  private readonly queryParam$ = new BehaviorSubject(Category.all);
  
  category: Category = Category.all;
  entries: Entry[] = [];
  
  service = inject(EntryService);

  newEntry = new FormGroup({
    description: new FormControl(''),
    category: new FormControl(Category.all)
  });

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
  }
  
  ngAfterViewInit() {
    this.inputBoxComponent.entry$.subscribe(entry => {
      this.entries.push(entry);
      console.log('New entry:', entry);
    });
  }
}